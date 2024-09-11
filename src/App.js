import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import NuevoAuto from "./components/NuevoAutos";
import IndexAutos from "./components/IndexAutos";
import EditAuto from "./components/EditAuto";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route path="nuevo" element={<NuevoAuto />} />
          <Route path="/edit/:id" element={<EditAuto />} />
          <Route path="/" element={<IndexAutos />} />
          <Route path="*" element={<IndexAutos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
