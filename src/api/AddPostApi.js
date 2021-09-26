export async function addPost(data) {
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  };

  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  response = await response.json();
  return response;
}
