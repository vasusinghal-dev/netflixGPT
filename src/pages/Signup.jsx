import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg')]">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">
        <div className="mt-4 flex justify-around items-center px-8">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
            className="w-45"
          />
          <Link
            to="login"
            className="py-2 px-4 text-sm font-bold rounded text-white bg-red-600 hover:bg-red-700 transition duration-200"
          >
            Sign In
          </Link>
        </div>

        <div className="text-center text-white mt-80 px-4 md:px-0">
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

          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-2 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 p-3 text-lg bg-black/80 rounded text-white border border-[#ffffff63] placeholder:text-[#ffffffb0]"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-6 py-3 rounded transition duration-200 w-full sm:w-auto">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
