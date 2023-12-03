import React, { useState, useRef } from "react";
import VirtualKeyboard from "../Keyboard/Keyboard";
const GameForm = () => {
  const emptyValue = "";
  const [formData, setFormData] = useState({
    firstLetter: emptyValue,
    secondLetter: emptyValue,
    thirdLetter: emptyValue,
    fourthLetter: emptyValue,
    fifthLetter: emptyValue,
  });

  const [activeField, setActiveField] = useState("firstLetter");

  const inputRefs = {
    firstLetter: useRef(null),
    secondLetter: useRef(null),
    thirdLetter: useRef(null),
    fourthLetter: useRef(null),
    fifthLetter: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVirtualKeyPress = (key) => {
    console.log("Key pressed: " + key);
    // check that last field is field and if yes make sure it wont be change
    if (activeField === "fifthLetter" && formData['fifthLetter'] !== emptyValue) {
        return;
      }
    // Pass the key to handleChange with the appropriate nextField
    handleChange({ target: { name: activeField, value: key } });

    const nextField = getNextField(activeField);
    if (nextField && inputRefs[nextField]) {
      inputRefs[nextField].current.focus();
      setActiveField(nextField);
  };
};

const getNextField = (currentField) => {
    switch (currentField) {
      case "firstLetter":
        return "secondLetter";
      case "secondLetter":
        return "thirdLetter";
      case "thirdLetter":
        return "fourthLetter";
      case "fourthLetter":
        return "fifthLetter";
      case "fifthLetter":
        return null; // No next field for the last one
      default:
        return null;
    }
  };

  const handleKeyDown = (e) => {
    // Check if the pressed key is Enter (keycode 13 or key identifier "Enter")
    if (e.key === "Enter" || e.keyCode === 13) {
      // Perform the action you want when Enter is pressed
      console.log("Enter key pressed");
      handleSubmit(e);
    }
  };
  
  const handleSubmit = (e) => {
    const concatenatedString = Object.values(formData).join('');
    console.log("your word is : " + concatenatedString);
    e.preventDefault();
  };

  return (
    <div>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstLetter"
        maxLength={"1"}
        value={formData.firstLetter}
        onChange={handleChange}
        autoFocus
        disabled
        />
      <input
        type="text"
        name="secondLetter"
        maxLength={"1"}
        value={formData.secondLetter}
        onChange={handleChange}
        ref={inputRefs.secondLetter}
        disabled
        />
      <input
        type="email"
        name="thirdLetter"
        maxLength={"1"}
        value={formData.thirdLetter}
        onChange={handleChange}
        ref={inputRefs.thirdLetter}
        disabled
      />
      <input
        type="text"
        name="fourthLetter"
        maxLength={"1"}
        value={formData.fourthLetter}
        onChange={handleChange}
        ref={inputRefs.fourthLetter}
        disabled
      />
      <input
        type="text"
        name="fifthLetter"
        maxLength={"1"}
        value={formData.fifthLetter}
        onChange={handleChange}
        ref={inputRefs.fifthLetter}
        disabled
      />

      <button type="submit">Submit</button>
    </form>
    <VirtualKeyboard onKeyPress={handleVirtualKeyPress}/>
        </div>
  );
};

export default GameForm;
