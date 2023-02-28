import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import OrganizationDetailsCard from "../OrganizationDetailsCard";
import { store } from "../../../../../state/store";
import { Provider } from "react-redux";
import "../../../../../utils/matchMedia";

describe("AddressCard component", () => {
  const OrganizationDetailsCardComponent = (
    <React.StrictMode>
      <Provider store={store}>
        <OrganizationDetailsCard />
      </Provider>
    </React.StrictMode>
  );

  afterEach(() => {
    cleanup();
  });

  it("OrganizationDetailsCardComponent Match Snapshot", () => {
    const tree = renderer.create(OrganizationDetailsCardComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render OrganizationDetailsCardComponent component", () => {
    render(OrganizationDetailsCardComponent);
    const mainElem = screen.getByTestId("organization-details-form");
    expect(mainElem).toBeInTheDocument();
  });
});
