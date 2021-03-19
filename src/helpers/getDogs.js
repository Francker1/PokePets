import { auth } from "../config/firebase";

export const getDogs = async () => {

   const dogs = auth
      .database()
      .ref()
      .child("dogs")
      .get()
      .then( (snapshot) => {
        
          return snapshot.val();
      })
      .catch( (error) => {
        console.error(error); //get error and show in UI...
      });

      return dogs;

}