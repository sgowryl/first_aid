import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });
});
it("initializes state correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.state("isModalVisible")).toBe(false);
  expect(wrapper.state("isFontTab")).toBe(false);
});
it("opens font size modal when font button is pressed", () => {
  const wrapper = shallow(<Header />);
  wrapper.find("TouchableOpacity").first().simulate("press");
  expect(wrapper.state("isFontTab")).toBe(true);
});

it("opens call modal when menu icon is pressed", () => {
  const wrapper = shallow(<Header />);
  wrapper.find("TouchableOpacity").at(1).simulate("press");
  expect(wrapper.state("isModalVisible")).toBe(true);
});
it("calls changeFontSize with correct font size", () => {
  const setFontSizeMock = jest.fn();
  const useFontSizeMock = { setFontSize: setFontSizeMock };
  jest.mock("../Context/FontSizeContext", () => ({
    useFontSize: () => useFontSizeMock,
  }));

  const wrapper = shallow(<Header />);
  wrapper.setState({ isFontTab: true });
  wrapper.find("TextInput").simulate("changeText", "20");
  wrapper.find("Button").last().simulate("press");
  expect(setFontSizeMock).toHaveBeenCalledWith(20);
});

it("calls Linking.openURL with correct phone number", () => {
  const openURLMock = jest.fn();
  jest
    .spyOn(global, "Linking", "get")
    .mockReturnValue({ openURL: openURLMock });

  const wrapper = shallow(<Header />);
  wrapper.setState({ isModalVisible: true });
  wrapper.find("TouchableOpacity").first().simulate("press");
  expect(openURLMock).toHaveBeenCalledWith("tel:111");
});
