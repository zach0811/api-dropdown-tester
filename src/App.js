import "./styles.css";
import { useState } from "react";

export default function App() {
  const [selectedApi, setSelectedApi] = useState("");

  const handleSelectChange = (event) => {
    setSelectedApi(event.target.value);
  };

  const handleTestApi = () => {
    if (selectedApi) {
      console.log("API", selectedApi);
      const apiMappings = new Map([
        ["testApi1", TestApi1],
        ["testApi2", TestApi2]
      ]);

      const selectedFunction = apiMappings.get(selectedApi);
      if (selectedFunction) {
        selectedFunction();
        console.log("Testing API...", selectedApi);
      }
    } else {
      console.log("Please select an API.");
    }
  };
  return (
    <div className="App">
      <div>
        <label htmlFor="api-select">Select an API:</label>
        <select
          id="api-select"
          value={selectedApi}
          onChange={handleSelectChange}
        >
          <option value="">Select an API</option>
          <option value="CreateBarCode">CreateBarCode-GC</option>
          <option value="ActivateAndLoadGc">ActivateAndLoadGc</option>
        </select>
      </div>
      <button onClick={handleTestApi}>Generate Data </button>
    </div>
  );
}
