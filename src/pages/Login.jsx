import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "@/utils/firebase";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "@/utils/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginBg from "../assets/images/LoginBg.jpg"; 
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (loginData) => {
    const { email, password } = loginData;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      dispatch(
        loginSuccess({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
      navigate("/");

      console.log("Logged in successfully:", user);
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.error("Login failed", error.message);
    }
  };

  return (
    <div
      className="flex justify-start items-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md mb-36 ml-96">
        <h2 className="text-2xl font-bold text-center">
          Login to Your Account
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Enter your email and password below
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black"
              placeholder="m@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                  message:
                    "Password must be at least 8 characters, include an uppercase letter, a number, and a special character.",
                },
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black"
              placeholder="Your password"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md font-medium hover:bg-gray-800 transition"
          >
            Login
          </button>
          <div className="flex">
            <span className="pr-2">Don't have an account yet? </span>
            <Link
              to="/signup"
              className="text-black hover:text-blue-600 underline"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
