import "./App.css";
import ControlledField from "./components/ControlledField/ControlledField";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import ProductManageMent from "./components/ProductManagement/ProductManageMent";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlled from "./components/UnControlledField/UnControlled";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlled></UnControlled> */}
      {/* <HookForm></HookForm> */}
      {/* <ProductManageMent></ProductManageMent> */}
      <FamilyTree></FamilyTree>
    </>
  );
}

export default App;
