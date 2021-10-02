import React from "react";
import { render, screen } from "@testing-library/react";
import FormComponent from "../components/FormComponent";

import user from "@testing-library/user-event";

it("should successfully submit form", () => {
  const { getByLabelText } = render(<FormComponent />);
  const formResult = screen.getByTestId("form-result");

  // method to get user by the html text with the param of regex format
  const input = getByLabelText(/your name/i);
  const submitButton = screen.getByTestId("form-submit-button");
  expect(formResult).toBeInTheDocument();
  expect(formResult).toHaveTextContent("hello my name is");

  // simulates user behaviour
  user.type(input, "chen");
  user.click(submitButton);
  expect(formResult).toHaveTextContent("hello my name is chen");
});

it("horizontal line shows the right color styling", async () => {
  const { getByLabelText } = render(<FormComponent />);
  const input = getByLabelText(/your name/i);
  const submitButton = screen.getByTestId("form-submit-button");
  const horizontalLine = screen.getByTestId("form-line");

  expect(horizontalLine).toHaveStyle("borderColor: red");

  // ----------------------
  // exist form result case
  // ----------------------
  user.type(input, "chen");
  user.click(submitButton);
  expect(horizontalLine).toHaveStyle("borderColor: lightgreen");
});

it("form result section is hidden while there is no any result or will have 'form-result--hidden' className", async () => {
  const { getByLabelText } = render(<FormComponent />);
  const input = getByLabelText(/your name/i);
  const submitButton = screen.getByTestId("form-submit-button");
  const formResult = screen.getByTestId("form-result");

  expect(formResult.classList).toContain("form-result--hidden");

  // ----------------------
  // exist form result case
  // ----------------------
  user.type(input, "chen");
  user.click(submitButton);
  expect(formResult.classList).not.toContain("form-result--hidden");
});
