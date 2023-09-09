import { Routes, Route } from "react-router-dom";
import ProductDataGrid from "./components/datagrid/ProductDataGrid";
import AddAsset from "./components/add asset/AddAsset";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductDataGrid />} />
        <Route path="add-asset" element={<AddAsset />} />
        <Route path="/update-asset/:id" element={<AddAsset />} />
      </Routes>
      ;
    </>
  );
}

export default App;
