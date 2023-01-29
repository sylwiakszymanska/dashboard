import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders Dashboard homepage", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const dashboardText = screen.getByText("Dashboard");
  const userListText = screen.getByText("User list");

  expect(dashboardText).toBeInTheDocument();
  expect(userListText).toBeInTheDocument();
});
