import './App.css';
import React, { useState } from "react";
import Photobooth from "./components/Photobooth";
import "./styles/global.css"
const logoSrc = "/assets/logo/mylogo.png";

function App() {
  const [selectedFrame, setSelectedFrame] =useState(null);
  return (
    <div className="App" style={{
       backgroundColor:
      selectedFrame === "/assets/frames/miframe1.png" ?"#f7cbad" 
      :selectedFrame === "/assets/frames/miframe4.png"
      ?"#9680b5"
      :"#f3fff3",
      backgroundImage:
      selectedFrame === "/assets/frames/miframe1.png"
        ? "linear-gradient(90deg,  rgba(190, 0, 0, 0.22) 50%, transparent 50%), linear-gradient(rgba(190, 0, 0, 0.22),50%, transparent 50%)"
       : selectedFrame === "/assets/frames/miframe2.png"
        ? "radial-gradient(circle, #ef4747 0 4px,transparent 4.5px), radial-gradient(circle, #a3ed98 0 4px,transparent 4.5px), radial-gradient(circle, #32b24c 0 4px, transparent 4.5px) "
        : selectedFrame === "/assets/frames/miframe4.png"
        ? "repeating-conic-gradient(from 0deg, #a039ad 0deg 15deg, #d0c152 15deg 30deg)"
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

      <Photobooth 
      selectedFrame={selectedFrame}
      setSelectedFrame={setSelectedFrame}
      
      />
      
      </div>
    </div>
  );
}

export default App;
