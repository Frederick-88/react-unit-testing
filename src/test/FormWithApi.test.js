import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import SampleFormWithApi from "../components/SampleFormWithApi";
import user from "@testing-library/user-event";
import { addPost as mockAddPost } from "../api/AddPostApi";

const mockData = {
  title: "my-post-title",
  body: "test",
};

jest.mock("../api/AddPostApi");

it("should successfully submit form with API", async () => {
  mockAddPost.mockResolvedValueOnce({ title: "my-post-title", body: "test" });

  const { getByText, getByLabelText } = render(<SampleFormWithApi />);
  const input = getByLabelText(/your post title/i);
  const submitButton = getByText(/submit/i);
  user.type(input, "my-post-title");
  user.click(submitButton);

  expect(mockAddPost).toHaveBeenCalledWith(mockData);
  expect(mockAddPost).toHaveBeenCalledTimes(1);

  expect(screen.getByTestId("loader")).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
  expect(
    getByText(/here is your post title: my-post-title/)
  ).toBeInTheDocument();
});
