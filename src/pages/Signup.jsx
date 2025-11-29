import { useState } from "react";
import { Link } from "react-router-dom";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validation.js";
import { signupUser } from "../utils/auth.js";
import { heroSectionBg, netflixLogo } from "../utils/constants.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setNameError(nameErr);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (nameErr || emailErr || passwordErr) return;

    const { user, error } = await signupUser(name, email, password);

    if (error) {
      setEmailError(error); // or nameError/passwordError based on type
      return;
    }

    console.log("Signup successful:", user);
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroSectionBg})` }}
    >
      {/* black overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">
        {/* header */}
        <div className="mt-4 flex justify-around items-center px-8">
          <img src={netflixLogo} className="w-45" />
          <Link
            to="login"
            className="py-2 px-4 text-sm font-bold rounded text-white bg-red-600 hover:bg-red-700 transition duration-200"
          >
            Sign In
          </Link>
        </div>

        {/* center content */}
        <div className="text-center text-white mt-36 px-4 md:px-0">
          <h1 className="mx-auto w-160 text-4xl md:text-7xl font-bold mb-8">
            Unlimited movies, shows, and more
          </h1>
          <p className="text-lg font-bold md:text-xl mb-8">
            Starts at ₹149. Cancel at any time.
          </p>
          <p className="mb-6 text-base md:text-[16px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          {/* signup form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-stretch gap-2 max-w-xl mx-auto"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setNameError(validateName(name))}
              placeholder="Name"
              className="flex-1 p-3 text-lg bg-black/80 rounded text-white border border-[#ffffff63] placeholder:text-[#ffffffb0]"
            />
            {nameError && (
              <div className="text-red-500 text-sm font-bold text-outline-black">
                {nameError}
              </div>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailError(validateEmail(email))}
              placeholder="Email address"
              className="flex-1 p-3 text-lg bg-black/80 rounded text-white border border-[#ffffff63] placeholder:text-[#ffffffb0]"
            />
            {emailError && (
              <div className="text-red-500 text-sm font-bold text-outline-black">
                {emailError}
              </div>
            )}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordError(validatePassword(password))}
              placeholder="password"
              className="flex-1 p-3 text-lg bg-black/80 rounded text-white border border-[#ffffff63] placeholder:text-[#ffffffb0]"
            />
            {passwordError && (
              <div className="text-red-500 text-sm font-bold text-outline-black">
                {passwordError}
              </div>
            )}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-6 py-3 rounded transition duration-200 w-full sm:w-auto"
            >
              Get Started &gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
