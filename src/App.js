import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Raiden } from 'raiden-ts';
import {ethers} from 'ethers';
const {parseEther} = ethers.utils;

let raiden;

const defaultConfig = {
    matrixServer: "https://transport.demo001.env.raiden.network",
    additionalServices: ["https://pfs.demo001.env.raiden.network"],
    pfsMode: "onlyAdditional"
};
const token = "0x59105441977ecD9d805A4f5b060E34676F50F806";

async function askAddress(name, def) {
    let addr = window.prompt(name + " Address or ENS name", def);
    if (!addr.startsWith("0x")) addr = await raiden.resolveName(addr);
    return addr;
}

async function transferValue() {
    const targetAddr = await askAddress("Target", "hub.raiden.eth");
    const transferAmount = parseEther(window.prompt("Amount", "0.01"));
    const xferId = await raiden.transfer(token, targetAddr, transferAmount);
    console.info("transfering", xferId);
    await raiden.waitTransfer(xferId);
    window.alert("Transferred");
}

async function main() {
   // document.getElementById("run").setAttribute("disabled", true);
    if (window.raiden) await window.raiden.stop();

    // connect Metamask
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = window.ethereum;

    // instantiate Raiden
    raiden = await Raiden.create(
        provider,
        0,
        undefined,
        undefined,
        defaultConfig,
        true
    );
    window.raiden = raiden;

    // subscribe to channels updates
    let channels;
    raiden.channels$.subscribe((c) => (channels = c));
    console.info("Before start channel");

    // start Raiden
    await raiden.start();
    console.info("Started", raiden.address);

    console.info("PASA POR AQUI");

    // ensure UDC is funded
    const svtToken = await raiden.userDepositTokenAddress();
    const udcDeposit = await raiden.getUDCTotalDeposit();
    if (udcDeposit.isZero()) {
        const depositAmount = parseEther(
            window.prompt("Amount to deposit to UDC", "10")
        );
        await raiden.mint(svtToken, depositAmount);
        const depositTx = await raiden.depositToUDC(depositAmount);
        console.info("Minted and deposited to UDC", depositTx);
    }

    // ensure there's a channel
    if (Object.keys(channels[token] || {}).length === 0) {
        const hubAddr = await askAddress("Hub", "hub.raiden.eth");
        const depositAmount = parseEther(
            window.prompt("Amount to deposit to channel", "20")
        );
        await raiden.mint(token, depositAmount);
        await raiden.openChannel(token, hubAddr, { deposit: depositAmount });
    }

  //  document.getElementById("transfer").removeAttribute("disabled");
}


class App extends React.Component {


    startTransaction() {
        main();
    }

    doTransaction() {
        transferValue();
    }


  render() {

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Morazan Project dAPP <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>

              <button onClick={this.startTransaction}>
                  Start Raiden
              </button>
              <button onClick={this.doTransaction}>
                  Transfer money quickly
              </button>

          </header>



        </div>
    );
  }
}
export default App;