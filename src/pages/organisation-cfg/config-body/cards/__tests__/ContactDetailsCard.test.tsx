import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import ContactDetailsCard from "../ContactDetailsCard";
import { store } from "../../../../../state/store";
import { Provider } from "react-redux";
import "../../../../../utils/matchMedia";

describe("ContactDetailsCard component", () => {
  const ContactDetailsCardComponent = (
    <React.StrictMode>
      <Provider store={store}>
        <ContactDetailsCard />
      </Provider>
    </React.StrictMode>
  );

  afterEach(() => {
    cleanup();
  });

  it("ContactDetailsCardComponent Match Snapshot", () => {
    const tree = renderer.create(ContactDetailsCardComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render ContactDetailsCardComponent component", () => {
    render(ContactDetailsCardComponent);
    const mainElem = screen.getByTestId("contact-details-form");
    expect(mainElem).toBeInTheDocument();
  });
});
