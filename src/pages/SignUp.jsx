import React from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "@/utils/userSlice";
import LoginBg from "../assets/LoginBg.jpg"; 
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (signupData) => {
    const { name, email, password } = signupData;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name, 
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      });

      dispatch(
        loginSuccess({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName, 
          photoURL: user.photoURL,
        })
      );
      navigate("/");

      console.log("User created and profile updated:", user);
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.error("Sign up failed:", error.message);
    }
  };

  const password = watch("password");

  return (
    <div
      className="flex justify-start items-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md ml-96 mb-32">
        {" "}
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <p className="text-center text-gray-600 mb-4">
          Enter your details below to sign up
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Full Name is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md font-medium hover:bg-gray-800 transition"
          >
            Create Account
          </button>
          <div className="flex">
            <span className="pr-2">Already have an account?</span>
            <Link to="/login" className="text-black hover:text-blue-600 underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
