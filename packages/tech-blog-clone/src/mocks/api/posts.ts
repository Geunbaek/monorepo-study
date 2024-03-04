import { http, HttpResponse } from "msw";

import DUMMY from "./dummy";

const getPosts = http.get("/posts", () => {
  return HttpResponse.json(DUMMY);
});

const getPostById = http.get("/posts/:id", ({ params }) => {
  const filteredPosts = DUMMY.filter(
    (post) => post.id.toString() === params.id
  );
  return HttpResponse.json(filteredPosts);
});

const apis = [getPosts, getPostById];

export default apis;
