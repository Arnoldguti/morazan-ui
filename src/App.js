import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Raiden } from 'raiden-ts';
import {ethers} from 'ethers';
import Lottie from 'react-lottie';
import animationData from './animations/eth.json';

const {parseEther} = ethers.utils;

let raiden;

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultConfig = {
    matrixServer: process.env.REACT_APP_MATRIX_SERVER,
    additionalServices: [process.env.REACT_APP_PFS_SERVER],
    pfsMode: "onlyAdditional"
};
const token = process.env.REACT_APP_TOKEN;

async function askAddress(name, def) {
    let addr = window.prompt(name + " Address/ENS", def);
    if (!addr.startsWith("0x")) addr = await raiden.resolveName(addr);
    return addr;
}

async function transferValue() {
    const targetAddr = await askAddress("Dirección de destino", "");
    const transferAmount = parseEther(window.prompt("Cantidad", "0.02"));
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
    // raiden = Raiden.create();

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

    // start Raiden
    await raiden.start();
    console.info("Raiden Already Started", raiden.address);

    // ensure UDC is funded
    const svtToken = await raiden.userDepositTokenAddress();
    const udcDeposit = await raiden.getUDCTotalDeposit();
    if (udcDeposit.isZero()) {
        const depositAmount = parseEther(
            window.prompt("Cantidad a depositar en UDC", "10")
        );
        await raiden.mint(svtToken, depositAmount);
        const depositTx = await raiden.depositToUDC(depositAmount);
        console.info("Minted and deposited to UDC", depositTx);
    }

    // ensure there's a channel
    if (Object.keys(channels[token] || {}).length === 0) {
        const hubAddr = await askAddress("Hub", "hub.raiden.eth");
        const depositAmount = parseEther(
            window.prompt("Cantidad a depositar en el canal", "20")
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
              <div>
                  <Lottie
                      options={defaultOptions}
                      height={400}
                      width={400}
                  />
              </div>
            <h2>
              Beta Morazan Project DApp
            </h2>
              <h6>
                  Crea transacciones entre dos nodos sobre la capa 2 de Ethereum, Raiden, con pagos rápidos y escalables
              </h6>

            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>

              <button
                  variant="default"
                  style={{ color: "black", background: "white" }}
                  onClick={this.startTransaction}>
                  Iniciar Raiden y Micropagos
              </button>
              <button
                  variant="default"
                  style={{ color: "black", background: "white" }}
                  onClick={this.doTransaction}>
                  Transferir dinero rápido
              </button>

          </header>



        </div>
    );
  }
}
export default App;