import React from "react";
import ComponentWithProps from "../components/ComponentWithProps";
import { render, screen } from "@testing-library/react";

it("should render component based on props value, if no value return not found sign", () => {
  const { rerender } = render(<ComponentWithProps title="hello world" />);

  const titleContainer = screen.getByTestId("title");

  expect(titleContainer).toHaveTextContent("hello world");
  rerender(<ComponentWithProps title="new title here" />);
  expect(titleContainer).toHaveTextContent("new title here");

  rerender(<ComponentWithProps />);
  expect(titleContainer).toHaveTextContent("no title found");
});

it("should return not found sign if the props is not a string", () => {
  render(<ComponentWithProps title={0} />);
  const titleContainer = screen.getByTestId("title");

  expect(titleContainer).toHaveTextContent("no title found");
});
