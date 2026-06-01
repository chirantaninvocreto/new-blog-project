// to use firabase we have to first register our project on the firebase authentication console after creating project the firebaseconfig we get from that website
// then after adding the project we have to add the authentication provider like email, github ,linkdein
import { initializeApp } from "firebase/app";
//this code is taken for sign in with google
import {
  getAuth, //to take authorisaton
  GoogleAuthProvider, //auth provider
  signInWithPopup, //popup shown after the button click
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth, //
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbz35haraJn6Q0qhjDASxc2zk14lwjwVI",
  authDomain: "blog-project-650b2.firebaseapp.com",
  projectId: "blog-project-650b2",
  storageBucket: "blog-project-650b2.firebasestorage.app",
  messagingSenderId: "5440383572",
  appId: "1:5440383572:web:ba0981dccff348cd491bc1",
  measurementId: "G-7BD768NT0Q",
};

const firebaseapp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseapp); //get auth from the firebase config

const provider = new GoogleAuthProvider();

const signWithgoogle = async (): Promise<string | undefined> => {
  try {
    const result = await signInWithPopup(auth, provider); //in this result is taken from popup by providing auth and provider which declared
    const user = result.user;
    const token = await user.getIdToken(); // from user by using getidtoken we can genrate the firbase jwt token which is return to the backend route in the header
    return token; //retutned token
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(errorCode);
    console.log(errorMessage);
    console.log(email);
    console.log(credential);
  }
};

export { auth, provider, signWithgoogle };

// to add the user with user email id and password in this password is not stored ot get stored to firebase auth
let signwithEmail = async (email: string, password: string) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth, // asking which auth provider is used or using the auth form firebase config
      email, // given by user
      password, //given by user
    );
    let user = userCredential.user; // usercredential gives big object form that object takes only user part
    let token = await user.getIdToken();
    console.log("token:", token);
    return token;
  } catch (error: any) {
    console.log("Firebase error code:", error.code);
    console.log("Firebase error message:", error.message);
  }
};
//this signwithuser is used to sign in the user which had made account by using the create eamil using email and passowrd
let signwithuser = async (auth: Auth, email: string, password: string) => {
  let userCredential = await signInWithEmailAndPassword(auth, email, password);
  let user = userCredential.user;
  let token = await user.getIdToken();
  return token;
};

export { signwithEmail, signwithuser };
