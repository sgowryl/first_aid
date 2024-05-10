import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "./App";

describe("User Interaction", () => {
  test("calls handleFindHospitalsPress on Hospitals button press", () => {
    const { getByText } = render(<App />);
    const hospitalsButton = getByText("Hospitals");
    fireEvent.press(hospitalsButton);
    // Expect appropriate action to be triggered
  });

  test("calls handleFindEmergencyPress on A & E button press", () => {
    const { getByText } = render(<App />);
    const emergencyButton = getByText("A & E");
    fireEvent.press(emergencyButton);
    // Expect appropriate action to be triggered
  });
});
