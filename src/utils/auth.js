import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { auth } from "./Firebase.js";

const errorMessages = {
  "auth/email-already-in-use": "This email is already registered.",
  "auth/invalid-email": "Invalid email format.",
  "auth/weak-password": "Password is too weak.",
  "auth/user-not-found": "User not found.",
  "auth/wrong-password": "Incorrect password.",
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/too-many-requests": "Too many attempts. Try again later.",
};

export const signupUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Save name in profile
    await updateProfile(userCredential.user, { displayName: name });

    return { user: userCredential.user, error: null };
  } catch (err) {
    return {
      user: null,
      error: errorMessages[err.code] || "Something went wrong.",
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return { user: userCredential.user, error: null };
  } catch (err) {
    return {
      user: null,
      error: errorMessages[err.code] || "Something went wrong.",
    };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { success: true, error: null };
  } catch (err) {
    return {
      success: false,
      error: errorMessages[err.code] || "Something went wrong.",
    };
  }
};
