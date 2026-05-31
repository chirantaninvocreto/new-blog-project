import { auth, signWithgoogle } from "./firebase.js";
import { signwithEmail, signwithuser } from "./firebase.js";

const userInfo = document.getElementById("loginBtn");

userInfo?.addEventListener("click", async () => {
  const token = await signWithgoogle();

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
    console.log('user logged in')
  }
});

