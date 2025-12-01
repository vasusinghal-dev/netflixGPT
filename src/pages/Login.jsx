import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validation.js";
import { loginUser } from "../utils/auth.js";
import { heroSectionBg } from "../utils/constants.js";
import Logo from "../assets/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validate on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) return;

    const { user, error } = await loginUser(email, password);

    if (error) {
      setEmailError(error);
      return;
    }

    console.log("Login successful:", user);
  };

  return (
    <div
      className={`relative h-screen w-full bg-no-repeat bg-cover overflow-hidden`}
      style={{ backgroundImage: `url(${heroSectionBg})` }}
    >
      {/* black overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* header */}
      <div className="relative z-10">
        <div className="ml-93 mt-2">
          <img src={Logo} alt="Netflix_Logo_PMS" className="w-45" />
        </div>

        {/* login form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-120 mx-auto mt-28 p-15 bg-black/60 text-white rounded"
        >
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>

          {/* Email input */}
          <div className="flex flex-col">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailError(validateEmail(email))}
              className="p-3 bg-transparent rounded border border-[#ffffff63] placeholder:text-[#ffffffb0]"
              placeholder="Email or mobile number"
            />
            {emailError && (
              <div className="text-red-400 text-sm">{emailError}</div>
            )}
          </div>

          {/* Password input */}
          <div className="flex flex-col">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordError(validatePassword(password))}
              className="p-3 bg-transparent rounded border border-[#ffffff63] placeholder:text-[#ffffffb0]"
              placeholder="Password"
            />
            {passwordError && (
              <div className="text-red-400 text-sm">{passwordError}</div>
            )}
          </div>

          <button
            type="submit"
            className="p-2 font-bold bg-red-600 rounded text-[16px] cursor-pointer hover:opacity-85"
          >
            Sign In
          </button>

          <div className="text-center text-gray-400">OR</div>
          <button className="p-2 font-bold bg-neutral-700 rounded text-[16px] cursor-pointer hover:opacity-85">
            Use a sign-in code
          </button>

          <div className="text-sm text-red-300 cursor-pointer hover:opacity-70">
            Forgot password?
          </div>
          <div className="text-sm">
            New to Netflix?
            <Link className="text-white ml-2 underline" to="/">
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
