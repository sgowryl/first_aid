import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import App from "../App";

// Test suite for integration testing
describe("Integration Tests", () => {
  test("renders the main application with header and dropdown component", async () => {
    const { getByTestId } = render(<App />);

    // Check if header component is rendered
    const header = getByTestId("header");
    expect(header).toBeTruthy();

    // Check if dropdown component is rendered
    const dropdown = getByTestId("dropdown");
    expect(dropdown).toBeTruthy();
  });

  // Test case for selecting an option from the dropdown
  test("selects an option from the dropdown and fetches data accordingly", async () => {
    const { getByTestId, getByText } = render(<App />);

    // Select an option from the dropdown
    const dropdown = getByTestId("dropdown");
    fireEvent.changeText(dropdown, "Burns and Scalds"); // Assuming 'Burns and Scalds' is an option in the dropdown

    // Wait for data to be fetched
    await waitFor(() => {
      // Check if the fetched data is rendered
      const data = getByText("Information about burns and scalds");
      expect(data).toBeTruthy();
    });
  });

  // Test case for calling emergency services
  test("calls emergency services when emergency button is pressed", async () => {
    const { getByTestId, getByText } = render(<App />);

    // Click on the emergency button
    const emergencyButton = getByTestId("emergency-button");
    fireEvent.press(emergencyButton);

    // Check if the modal for emergency services is rendered
    const modal = getByTestId("emergency-modal");
    expect(modal).toBeTruthy();

    // Check if the 'Call NHS' button is rendered
    const callNHSButton = getByText("Call NHS - 111");
    expect(callNHSButton).toBeTruthy();

    // Simulate clicking on the 'Call NHS' button
    fireEvent.press(callNHSButton);
  });
});
