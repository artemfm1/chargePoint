import api from "./api-config";

export const getAllPosts = async () => {
  const resp = await api.get("/posts");
  return resp.data;
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/post/${id}`);
  return resp.data;
};

export const postPost = async (postData) => {
  const resp = await api.post("/posts", { post: postData });
  return resp.data;
};

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data;
};

export const deletePost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
};

export const addComment = async ({ userId, postId, content }) => {
  const createCommentResp = await api.post("/comments", {
    used_id: userId,
    post_id: postId,
    content,
  });
  // console.log("createCommentResp", createCommentResp);
  // const resp = await api.put(`/comments/:comment_id/posts/:id`, {
  //   comment: commentData,
  // });
  // return resp.data;
  return 0;
};
