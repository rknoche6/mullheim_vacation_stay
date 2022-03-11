import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import LogInPage from "./components/LogInPage/loginPage";

describe("App", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  // it("should render the LogInPage Component", () => {
  //   expect(wrapper.containsMatchingElement(<LogInPage />)).toEqual(true);
  // });
});
