import React, { useState } from "react";

const VirtualKeyboard = ({ onKeyPress }) => {
  const [keys] = useState([
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M",
  ]);

  const handleKeyPress = (key) => {
    console.log("i am  "  + key);
    onKeyPress(key);
  };

  return (
    <div className="virtual-keyboard">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => handleKeyPress(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default VirtualKeyboard;