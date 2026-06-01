import {
  auth,
  signWithgoogle,
  signwithEmail,
  signwithuser, //exititng user
} from "./firebase.js";

const userInfo = document.getElementById("loginBtn");

userInfo?.addEventListener("click", async () => {
  const token = await signWithgoogle(); //in this returned token in the signwithgoogle function is retuns as token to the url route given below in fetch
  // the generated token is sended to the requests header so the token can get decoded without adding in the body
  if (token) {
    const response = await fetch("http://localhost:3000/posts/login", {//url link added in which route is of backend
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // default format od sending the token in the header
      },
    });
  }
});

let signupBtn = document.getElementById("signbtn");

signupBtn?.addEventListener("click", async () => {
  const email = (document.getElementById("email") as HTMLInputElement).value;

  const password = (document.getElementById("password") as HTMLInputElement)
    .value;

  let token = await signwithEmail(email, password);
  if (token) {
    const response = await fetch("http://localhost:3000/posts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
});

let loginuser = document.getElementById("existuser");

loginuser?.addEventListener("click", async () => {
  const email = (document.getElementById("email") as HTMLInputElement).value;

  const password = (document.getElementById("password") as HTMLInputElement)
    .value;

  let token = await signwithuser(auth, email, password);
  if (token) {
    const response = await fetch("http://localhost:3000/posts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("user logged in");
  }
});
