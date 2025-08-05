
const unitOptions = {
  length: {
    units: ["meter", "kilometer", "mile", "inch", "foot", "centimeter"],
    factor: {
      meter: 1,
      kilometer: 0.001,
      mile: 0.000621371,
      inch: 39.3701,
      foot: 3.28084,
      centimeter: 100,
    },
  },
  weight: {
    units: ["kilogram", "gram", "pound", "ounce", "ton"],
    factor: {
      kilogram: 1,
      gram: 1000,
      pound: 2.20462,
      ounce: 35.274,
      ton: 0.001,
    },
  },
  temperature: {
    units: ["celsius", "fahrenheit", "kelvin"]
  },
  time: {
    units: ["second", "minute", "hour", "day"],
    factor: {
      second: 1,
      minute: 1 / 60,
      hour: 1 / 3600,
      day: 1 / 86400,
    },
  },
  speed: {
    units: ["m/s", "km/h", "mph"],
    factor: {
      "m/s": 1,
      "km/h": 3.6,
      "mph": 2.23694,
    },
  }
};

function populateUnits() {
  const category = document.getElementById("unitCategory").value;
  const fromUnit = document.getElementById("fromUnit");
  const toUnit = document.getElementById("toUnit");

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  unitOptions[category].units.forEach(unit => {
    fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
    toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
  });
}

function convertUnits() {
  const category = document.getElementById("unitCategory").value;
  const input = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const output = document.getElementById("convertedValue");

  if (isNaN(input)) {
    output.value = "Enter a valid number";
    return;
  }

  if (category === "temperature") {
    let result;
    if (from === "celsius") {
      if (to === "fahrenheit") result = (input * 9) / 5 + 32;
      else if (to === "kelvin") result = input + 273.15;
      else result = input;
    } else if (from === "fahrenheit") {
      if (to === "celsius") result = ((input - 32) * 5) / 9;
      else if (to === "kelvin") result = ((input - 32) * 5) / 9 + 273.15;
      else result = input;
    } else if (from === "kelvin") {
      if (to === "celsius") result = input - 273.15;
      else if (to === "fahrenheit") result = ((input - 273.15) * 9) / 5 + 32;
      else result = input;
    }
    output.value = result.toFixed(2);
  } else {
    const factor = unitOptions[category].factor;
    const base = input / factor[from]; // convert to base
    const converted = base * factor[to]; // convert to target
    output.value = converted.toFixed(4);
  }
}

// Initialize default unit list
window.onload = populateUnits;

