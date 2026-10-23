import './App.css';
import React, { usestate } from "react";
import Photobooth from "./components/Photobooth";
import "./styles/global.css"
const logoSrc = "/assets/logo/mylogo.png";

function App() {
  const [selectedFrame, setSelectedFrame] =useState(null);
  return (
    <div className="App" style={{
      backgroundColor: "#f7cbad",
      backgrondImage:
      selectedFrame === "/assets/frames/miframe1.png"
      ? "linear-gradient(90deg, rgba(190,0,0,0.25) 50%, rgba(190,0,0,0.25) 50%)"
      : "none",
      backgroundSize: "40px 40px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style = {{
        width: "100%",
        maxWidth: 1200,
        display: "flex",
        alignItems: "center",
        gap: 1,
        padding: "20px 32px"
      }}>
        <img src={logoSrc} alt="mylogo" style={{ width: 102 }} />
        <h1 style={{
          fontFamily: "Press Start 2P",
          color: "#8c5b4a",
          margin: 0
        }}>
          MyPotoboothterraproject
        </h1>
      </div>

      <div style={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "40px"
      }}
      >

      <Photobooth />

      </div>
    </div>
  );
}

export default App;
