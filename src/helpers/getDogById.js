

import { auth } from "../config/firebase";


export const getDogById = ( dogId ) => {

   const dog = auth
     .database()
     .ref("dogs")
     .child(dogId)
     .get()
     .then((snapshot) => {

       return snapshot.val();
     })
     .catch((error) => {
       console.error(error); //get error and show in UI...
     });

   return dog;
}
