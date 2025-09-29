import React, { createContext, useState } from "react";
import GrandPa from "./GrandPa";
import "./FamilyTree.css";

//step 1
export const AssetContext = createContext("");
export const MoneyContext = createContext(0);
//step 2

const FamilyTree = () => {
  const [money, setMoney] = useState(0);

  const asset = "diamond";
  const newAsset = "Gold";
  return (
    <div className="family-tree">
      <h3>Family Tree</h3>
      <h4>Total Family Money :{money} </h4>
      {/* <AssetContext.Provider value={newAsset}>
        <GrandPa asset={asset}></GrandPa>
      </AssetContext.Provider> */}

      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <GrandPa asset={asset}></GrandPa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;

/**
 * 1.create a context using createContext with a default value
 * 2.make sure you export the context to be used in other files
 */
