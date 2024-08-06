import { FC, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useNetworkConfiguration } from "contexts/NetworkConfigurationProvider";
import NetworkSwitcherSVG from "./SVG/NetworkSwitcherSVG";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setnetworkConfiguration } =
    useNetworkConfiguration();
  const [selectedOption, setSelectedOption] = useState(networkConfiguration);

  useEffect(() => {
    setSelectedOption(networkConfiguration);
  }, [networkConfiguration]);

  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label className="switch">
        <select
          value={networkConfiguration}
          onChange={(e) => {
            setnetworkConfiguration(e.target.value || "devnet");
            setSelectedOption(e.target.value || "devnet");
          }}
          className="select max-w-xs border-none bg-transparent text-gray-900 outline-none  appearance-none px-2 py-1"
          style={{
            color: selectedOption === networkConfiguration ? "white" : "black",
          }}
        >
          <option
            value="mainnet-beta"
            style={{
              color: selectedOption === "mainnet-beta" ? "white" : "black",
            }}
          >
            main
          </option>
          <option
            value="devnet"
            style={{ color: selectedOption === "devnet" ? "white" : "black" }}
          >
            devnet
          </option>
          <option
            value="testnet"
            style={{ color: selectedOption === "testnet" ? "white" : "black" }}
          >
            testnet
          </option>
        </select>
        <NetworkSwitcherSVG />
      </label>
    </>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});
