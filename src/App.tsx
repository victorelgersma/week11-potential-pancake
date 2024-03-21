import { useState } from "react";
import "./App.css";

function App() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const items = ["Apple", "Banana", "Orange", "Pear"];

  const handleCheckboxChange = (i: string) => {
    if (selectedItems.includes(i)) {
      setSelectedItems(selectedItems.filter((j) => j !== i));
    } else {
      setSelectedItems([...selectedItems, i]);
    }
  };
  const divStyles = {
    textAlign: "left",
    //minWidth: "50%",
  };

  return (
    <>
      <p>Selected items: {selectedItems.join(", ")}</p>
      <div style={divStyles}>
        {items.map((i) => (
          <div key={i}>
            <input
              type="checkbox"
              checked={selectedItems.includes(i)}
              onChange={() => handleCheckboxChange(i)}
            />
            <label>{i}</label>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
