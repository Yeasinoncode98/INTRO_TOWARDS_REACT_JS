import React, { use } from "react";
import Cousins from "./Cousins";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext);

  const handleAddMoney = () => {
    setMoney(money + 10000);
  };

  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousins asset={asset} name="Baby"></Cousins>
        <Cousins name="Kakoli"></Cousins>
        <button onClick={handleAddMoney}>Add 10000 Tk</button>
      </section>
    </div>
  );
};

export default Aunt;
