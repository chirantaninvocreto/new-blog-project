import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
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

const auth = getAuth(firebaseapp);

const provider = new GoogleAuthProvider();

const signWithgoogle = async (): Promise<string | undefined> => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const token = await user.getIdToken();
    // console.log(token);
    return token;
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

let signwithEmail = async (email: string, password: string) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    let user = userCredential.user;
    let token = await user.getIdToken();
    console.log("token:", token);
    return token;
  } catch (error: any) {
    console.log("Firebase error code:", error.code);
    console.log("Firebase error message:", error.message);
  }
};

let signwithuser = async (auth: Auth, email: string, password: string) => {
  let userCredential = await signInWithEmailAndPassword(auth, email, password);
  let user = userCredential.user;
  let token = await user.getIdToken();
  return token
};

export { signwithEmail, signwithuser, Auth };
