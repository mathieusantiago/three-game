import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
function Overlay() {
  const [ready, set] = useState(false);
  return (
    <>
      {ready && <App />}
      {!ready && (
        <>
          <div
            className={`fullscreen bg ${ready ? "ready" : "notready"} ${
              ready && "clicked"
            }`}
          >
            <div className="stack">
              <button onClick={() => set(true)}>▶️</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
createRoot(document.getElementById("root")).render(<Overlay />);
