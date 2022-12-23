import apiServices from "../../services/ApiServices";
import { SET_DATA, SET_LOADER } from "../types";

export const setLoader = (value) => {
  return {
    type: SET_LOADER,
    payload: value,
  };
};

export const setMergedData = (value) => async (dispatch) => {
  if(value === undefined){
  console.log('data', value)

    dispatch(setLoader(true));
    let post = await apiServices.getPosts();
    let comment = await apiServices.getComments();
    let user = await apiServices.getAuthor();
    let albums = await apiServices.getAlbums();
  
    let photos = await apiServices.getPhotos();
  
    let data = [];
    if (post?.length > 0) {
      // for (let i = 0; i < 20; i++) {
      //   let userItem = user.find((user) => user.id === post[i].userId);
      //   let commentItem = comment.find(
      //     (comment) => comment.postId === post[i].id
      //   );
      //   data.push({
      //     ...post[i],
      //     user: userItem,
      //     comment: commentItem,
      //   });
      // }
      dispatch(setLoader(false));
      post.map((item, index) => {
        if (index < 20) {
          let userItem = user.find((user) => user.id === item.userId);
          let commentItem = comment.filter((comment) => comment.postId === item.id);
          let albumItem = albums.find((album) => album.userId === item.userId);
          let photoItem = photos.find((photo) => photo.albumId === albumItem.id);
  // console.log('c', commentItem)
          data.push({
            ...item,
            user: userItem,
            comment:[...commentItem],
            // albums: albumItem,
            photos: photoItem,
          });
        }
      });
      dispatch({
        type: SET_DATA,
        payload: data,
      });
    }
  }
  else dispatch({
    type: SET_DATA,
    payload: value,
  });
 
};
