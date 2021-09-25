import React from "react";
import Increment from "../components/Increment";
import { render, fireEvent, screen } from "@testing-library/react";

it("should increment and decrement when button clicked", () => {
  render(<Increment />);
  //   screen.debug(container); -- for debugging purpose

  const text = screen.getByTestId("number-text");
  expect(text).toHaveTextContent("Number: 0");

  const incrementButton = screen.getByTestId("increment-btn");
  fireEvent.click(incrementButton);
  expect(text).toHaveTextContent("Number: 1");
  fireEvent.click(incrementButton);
  expect(text).toHaveTextContent("Number: 2");

  const decrementButton = screen.getByTestId("decrement-btn");
  fireEvent.click(decrementButton);
  expect(text).toHaveTextContent("Number: 1");
  fireEvent.click(decrementButton);
  expect(text).toHaveTextContent("Number: 0");
});

it("will not decrement if the number is 0", () => {
  render(<Increment />);

  const text = screen.getByTestId("number-text");

  const incrementButton = screen.getByTestId("increment-btn");
  fireEvent.click(incrementButton);
  expect(text).toHaveTextContent("Number: 1");

  const decrementButton = screen.getByTestId("decrement-btn");
  fireEvent.click(decrementButton);
  expect(text).toHaveTextContent("Number: 0");
  fireEvent.click(decrementButton);
  expect(text).toHaveTextContent("Number: 0");
  fireEvent.click(decrementButton);
  expect(text).toHaveTextContent("Number: 0");
});
