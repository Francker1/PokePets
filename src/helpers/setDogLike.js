import { auth } from "../config/firebase";

export const setDogLike = (id) => {

    const idLike = id - 1;
    const postData = {
        likes: 454554,
    }

    auth.database().ref("dogs/").child(5).update(postData);

  //console.log(newPostKey);
};
