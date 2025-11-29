import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validation.js";
import { loginUser } from "../utils/auth.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

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

    if (user) navigate("/browse", { replace: true });
    console.log("Login successful:", user);
  };

  return (
    <div className="relative h-screen w-full bg-no-repeat bg-cover bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg')] overflow-hidden">
      {/* black overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* header */}
      <div className="relative z-10">
        <div className="ml-93 mt-2">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix_Logo_PMS"
            className="w-45"
          />
        </div>

        {/* login form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-120 mx-auto mt-20 p-15 bg-black/60 text-white rounded"
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
