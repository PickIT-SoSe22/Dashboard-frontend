import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Button } from "@mui/material";

export default function ColorUpdater({ publish }) {
  const [color, setColor] = useState({ r: 51, g: 51, b: 51 });
  const [option, setOption] = useState("");

  const handleChangeComplete = (color) => {
    setColor(color.rgb);
  };

  const settingOption = (e) => {
    e.preventDefault();
    setOption("is being updated: " + e.target.innerText);

    if (e.target.innerText === "update Color".toUpperCase()) {
      publish("ColorChanger", JSON.stringify(color));
    } else {
      publish("ColorChanger", JSON.stringify({ option: e.target.innerText }));
    }
  };

  return (
    <>
      <div className="settings">
        <div>
          <SketchPicker color={color} onChange={handleChangeComplete} />
          {option && <p className="option">{option}</p>}
        </div>

        <div className="settings_Button">
          <Button onClick={settingOption} style={{ backgroundColor: "black" }}>
            update Color
          </Button>
          <Button onClick={settingOption}>theaterChase</Button>
          <Button onClick={settingOption}>rainbow</Button>
          <Button onClick={settingOption}>rainbowCycle</Button>
          <Button onClick={settingOption}>theaterChaseRainbow</Button>
        </div>
      </div>

      <style jsx>{`
        .settings {
          display: flex;
          gap: 20px;
          box-sizing: border-box;
        }
        .settings_Button {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .option {
          font-size: 11px;
        }
      `}</style>
    </>
  );
}
