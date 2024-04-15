import React, { useState } from "react";
import { Button } from "antd";

function Web3Wrapper() {
  const [isConnected, setIsConnected] = useState(false);

  const checkConnection = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        setIsConnected(false);
      }
    } else {
      console.warn("MetaMask not detected.");
      setIsConnected(false);
    }
  };
  return (
    <>
      {isConnected ? (
        "Connected To MetaMask"
      ) : (
        <Button onClick={checkConnection}>Connect To MetaMask Wallet</Button>
      )}
    </>
  );
}

export default Web3Wrapper;
