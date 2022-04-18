import "./App.css";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {
        <>
           <ToastContainer
            position="bottom-center"
            autoClose={1500}
          />
          <Routes />
        </>
      }
    </div>
  );
}

export default App;
