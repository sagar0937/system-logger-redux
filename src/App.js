import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

//import
import Navbar from "./components/layout/Navbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModalModal from "./components/Techs/AddTechModal";
import TechListModal from "./components/Techs/TechListModal";

///redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Navbar />
      <div className='container'>
        <AddBtn />
        <Logs />
        <AddLogModal />
        <EditLogModal />
        <AddTechModalModal />
        <TechListModal />
      </div>
    </Provider>
  );
};

export default App;
