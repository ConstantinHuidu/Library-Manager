import { AppRoutes } from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";

import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <SWRConfig>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </SWRConfig>
    </>
  );
}

export default App;
