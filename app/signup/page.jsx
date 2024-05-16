"use client";
import React from "react";
import signUp from "../firebase/auth/signUp";
import { useRouter } from "next/navigation";
import { dotWave } from "ldrs";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  dotWave.register();

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading animation

    const { result, error } = await signUp(email, password);

    if (error) {
      console.log(error);
      setLoginFailed(true);
      setLoading(false); // Stop loading animation
      return;
    }

    // Else successful
    console.log(result);
    setTimeout(() => {
      setLoading(false); // Stop loading animation after 2 seconds
      router.push("/home");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-rose-pine-moon">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleForm}
          className="bg-indigo-900 py-8 px-5 rounded-lg shadow-lg max-w-md mt-8"
        >
          <h1 className="mb-6 text-2xl text-center font-bold text-gray-200">
            Sign up
          </h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              value={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
          </div>
          <div className="flex items-center justify-center">
            {loading ? ( // Render the loading animation if loading is true
              <l-dot-wave size="47" speed="1" color="white"></l-dot-wave>
            ) : (
              <button
                type="submit"
                className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
