import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAppContext();
  const navigate = useNavigate(); // <-- initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userData = userCredential.user;

      login({
        uid: userData.uid,
        displayName: userData.displayName || "User",
        email: userData.email,
        photoURL: userData.photoURL || null,
      });

      navigate("/"); // <-- redirect to home after login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userData = result.user;

      const docRef = doc(db, "users", userData.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          uid: userData.uid,
          name: userData.displayName,
          email: userData.email,
          createdAt: new Date(),
        });
      }

      login({
        uid: userData.uid,
        displayName: userData.displayName || "User",
        email: userData.email,
        photoURL: userData.photoURL || null,
      });

      navigate("/"); // <-- redirect after Google login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 p-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-6 p-3 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-black border-2 text-white py-3 rounded-full hover:bg-white hover:text-black duration-200 transition-all"
        >
          Login
        </button>

        <div className="flex items-center my-4">
          <span className="flex-grow h-[1px] bg-gray-300"></span>
          <span className="mx-3 text-gray-500 font-medium">or</span>
          <span className="flex-grow h-[1px] bg-gray-300"></span>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black border-2 py-3 rounded-full hover:bg-black hover:text-white duration-200 transition-all"
        >
          Login with Google
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
