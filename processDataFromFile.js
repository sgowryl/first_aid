const fs = require("fs");
const path = require("path");

function processDataFromString(disease) {
  try {
    const diseaseNames = disease
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name !== "");
    const transformedData = diseaseNames.map((name, index) => {
      const cleanName = name.replace(/\([^)]*\)/, "").trim();
      return {
        label: `Item ${index + 1}`,
        value: cleanName,
      };
    });

    return transformedData;
  } catch (err) {
    console.error("Error processing data:", err);
    return [];
  }
}

function saveDataToFile(data, filename) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    const folderPath = path.join(__dirname, "..", "output");
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    const filePath = path.join(folderPath, filename);
    fs.writeFileSync(filePath, jsonData);
    console.log(`Data saved to ${filePath}`);
  } catch (err) {
    console.error("Error saving data to file:", err);
  }
}

const disease = `Adenomyosis
Age-related cataracts
Age-related macular degeneration (AMD)
Agoraphobia
Albinism
Alcohol misuse`;
const data = processDataFromString(disease);

// Save the data to a file named 'output.json' in the 'output' folder
saveDataToFile(data, "output.json");
