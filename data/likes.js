import { post } from "../src/api/post.js";

const endpoints = {
  like: "/classes/Likes"
}

export async function createLike() {
  let result = {
    post: {
      __type: Pointer,
      className: Likes,
      objectId,
    },
    user: {
      __type: Pointer,
      className: Likes,
      objectId
    }
  }
  return await post(endpoints.like, result);

}