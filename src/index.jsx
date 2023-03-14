import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from "./Cover/Cover";
function Overlay() {
  const [ready, setReady] = useState(false);
  return (
    <>
      {ready && <App />}
      {!ready && (
        <>
          <Cover setReady={setReady}/>
        </>
      )}
    </>
  );
}
createRoot(document.getElementById("root")).render(<Overlay />);
