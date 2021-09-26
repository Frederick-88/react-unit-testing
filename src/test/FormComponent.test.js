import React from "react";
import { render, screen } from "@testing-library/react";
import FormComponent from "../components/FormComponent";

import user from "@testing-library/user-event";

it("should successfully submit form", () => {
  const { getByLabelText, getByText } = render(<FormComponent />);
  const title = screen.getByTestId("form-result");

  // method to get user by the html text with the param of regex format
  const input = getByLabelText(/your name/i);
  const submitButton = getByText(/submit/i);
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent("hello my name is");

  // simulates user behaviour
  user.type(input, "chen");
  user.click(submitButton);
  expect(title).toHaveTextContent("hello my name is chen");
});
