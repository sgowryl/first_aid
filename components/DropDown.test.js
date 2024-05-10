import React from "react";
import { shallow } from "enzyme";

// This function performs shallow rendering of a React component for testing
const testComponent = (Component) => {
  describe(`${Component.name} Component`, () => {
    it("renders without crashing", () => {
      shallow(<Component />);
    });

    it("initializes state correctly", () => {
      const wrapper = shallow(<Component />);
      expect(wrapper.state("value")).toBeNull();
      expect(wrapper.state("postList")).toEqual([]);
      expect(wrapper.state("name")).toEqual("");
    });

    it("updates value state when an option is selected", () => {
      const wrapper = shallow(<Component />);
      const dropdown = wrapper.find("Dropdown");

      dropdown.simulate("change", "AAA screening");
      expect(wrapper.state("value")).toEqual("AAA screening");
    });

    it("calls fetchData when Send button is clicked", () => {
      const wrapper = shallow(<Component />);
      const fetchDataMock = jest.spyOn(wrapper.instance(), "fetchData");

      wrapper.find("TouchableOpacity").simulate("press");
      expect(fetchDataMock).toHaveBeenCalled();
    });

    jest.mock("node-fetch", () => require("fetch-mock").sandbox());
    const fetchMock = require("node-fetch");

    it("fetches data when an option is selected", async () => {
      fetchMock.mock("https://api.nhs.uk/conditions/AAA-screening", {
        status: 200,
        body: {
        },
      });

      const wrapper = shallow(<Component />);
      const dropdown = wrapper.find("Dropdown");

      await dropdown.prop("onChange")({ value: "AAA screening" });
      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.nhs.uk/conditions/AAA-screening",
        expect.any(Object)
      );
    });
  });
};

import DropDownComponent from "./DropDownComponent";

testComponent(DropDownComponent);
