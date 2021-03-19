import { auth } from "../config/firebase";

export const setDogLike = (id, likes) => {

    
    try{

        const postData = {
          likes: likes + 1,
        };

        auth.database().ref("dogs").child(id).update(postData);

        //todo return value, and update de component with like from database.

    }catch(e){
        console.log("ops, not possible set a like. sorry.")
    }
};
