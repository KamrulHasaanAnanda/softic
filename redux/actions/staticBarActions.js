import apiServices from "../../services/ApiServices";
import { SET_DATA } from "../types";

export const setData = (value) => {
  return {
    type: SET_DATA,
    payload: value,
  };
};
export const setMergedData = async (dispatch) => {
  let post = await apiServices.getPosts();
  let comment = await apiServices.getComments();
  let user = await apiServices.getAuthor();
  let data = [];
  if (post?.length > 0) {
    for (let i = 0; i < 20; i++) {
      let userItem = user.find((user) => user.id === post[i].userId);
      let commentItem = comment.find(
        (comment) => comment.postId === post[i].id
      );
      data.push({
        ...post[i],
        user: userItem,
        comment: commentItem,
      });
    }
    dispatch(setData(data));
  }
};
