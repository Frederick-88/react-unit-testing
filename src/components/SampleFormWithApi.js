import React, { useState } from "react";
import { addPost } from "../api/AddPostApi";

export default function SampleFormWithApi() {
  const [postTitle, setPostTitle] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const data = {
      title: input,
      body: "test",
    };

    setLoading(true);
    const res = await addPost(data);

    setPostTitle(res.title);
    setLoading(false);
    setInput("");
  };

  return (
    <>
      <label htmlFor="post_title">Your Post Title</label>
      <input
        type="text"
        id="post_title"
        name="post_title"
        placeholder="Enter your post title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      {loading && <p data-testid="loader">loading ...</p>}

      {postTitle ? <p>here is your post title: {postTitle} </p> : null}
    </>
  );
}
