import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import {auth} from './firebase-congfig';
import "./App.css";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPwd, setRegisterPwd] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  const [user,setUser] = useState({})

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  })
  const register = async() => {
    try {
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPwd);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async() => {
    try {
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPwd);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const guest = async()=>{
    await signInAnonymously(auth);
  };
  const logout = async() => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3>Register user</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPwd(event.target.value);
          }}
        />
        <button onClick={register}>Create User</button>
      </div>
      <div>
        <h3>Login</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPwd(event.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </div>
      <div>
        <button onClick={guest}>Login as a guest</button>
      </div>
      <h4>User Logged In: {user?.email}</h4>
      <button onClick={logout}>Sign out</button>
    </div>
  );
}

export default App;

