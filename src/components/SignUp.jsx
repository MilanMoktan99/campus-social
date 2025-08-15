import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAppContext();
  const navigate = useNavigate(); // <-- initialize navigate

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: new Date(),
      });

      login({
        uid: user.uid,
        displayName: name,
        email: user.email,
        photoURL: user.photoURL || null,
      });

      navigate("/"); // <-- redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          createdAt: new Date(),
        });
      }

      login({
        uid: user.uid,
        displayName: user.displayName || "User",
        email: user.email,
        photoURL: user.photoURL || null,
      });

      navigate("/"); // <-- redirect after Google signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full mb-4 p-3 border rounded"
        />
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
          Sign Up
        </button>

        <div className="flex items-center my-4">
          <span className="flex-grow h-[1px] bg-gray-300"></span>
          <span className="mx-3 text-gray-500 font-medium">or</span>
          <span className="flex-grow h-[1px] bg-gray-300"></span>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full bg-white text-black border-2 py-3 rounded-full hover:bg-black hover:text-white duration-200 transition-all"
        >
          Sign Up with Google
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
