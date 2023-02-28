import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import AddressCard from "../AddressCard";
import { store } from "../../../../../state/store";
import { Provider } from "react-redux";
import "../../../../../utils/matchMedia";

describe("AddressCard component", () => {
  const AddressCardComponent = (
    <React.StrictMode>
      <Provider store={store}>
        <AddressCard />
      </Provider>
    </React.StrictMode>
  );

  afterEach(() => {
    cleanup();
  });

  it("AddressCardComponent Match Snapshot", () => {
    const tree = renderer.create(AddressCardComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render AddressCardComponent component", () => {
    render(AddressCardComponent);
    const mainElem = screen.getByTestId("address-form");
    expect(mainElem).toBeInTheDocument();
  });
});
