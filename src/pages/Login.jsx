import { useForm } from "react-hook-form";
import { Apple, Forem, Github, Twitter } from "../icons/";
import { useState } from "react";
import { loginRequest } from "../api";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (userData) => {
    const response = await loginRequest(userData);
    console.log(response);
    localStorage.setItem("token", response.data);
    navigate("/");
  });

  return (
    <>
      <div className="flex items-center justify-items-center flex-col w-full">
        <div className="flex items-center justify-items-center flex-col">
          <a>
            <div className="object-contain w-16 h-12 mt-8">
              <img
                className=""
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
                alt="logo"
                class="logInLogo"
              />
            </div>
          </a>

          <h2 className="mb-2 mt-8 text-3xl font-semibold">
            Join the DEV Community
          </h2>
          <p className="text-gray25 font-light mt-0 mb-2 ">
            DEV Community is a community of 1,237,804 amazing developers
          </p>
        </div>
        <div className="flex items-center justify-items-center flex-col w-4/5 mt-4">
          <button className="flex items-center w-7/12 h-12 bg-transparent border border-neutral-300 rounded-md gap-1 mb-2 hover:bg-gray-200 ">
            <div className="ml-2">
              <Apple />
            </div>

            <span className="text-sm text-center w-full">
              Continue with Apple
            </span>
          </button>
          <button className="flex items-center w-7/12 h-12 bg-transparent border border-neutral-300 rounded-md m-1 gap-1 mb-2 hover:bg-gray-200">
            <div className="ml-2">
              <Forem />
            </div>
            <span className="text-sm text-center w-full">
              Continue with Forem
            </span>
          </button>
          <button className="flex items-center w-7/12 h-12 bg-transparent border border-neutral-300 rounded-md m-1 gap-1 mb-2 hover:bg-gray-200">
            <div className="ml-2">
              <Github />
            </div>
            <span className="text-sm text-center w-full">
              Continue with Github
            </span>
          </button>
          <button className="flex items-center w-7/12 h-12 bg-transparent border border-neutral-300 rounded-md m-1 gap-1 hover:bg-gray-200">
            <div className="ml-2">
              <Twitter />
            </div>
            <span className="text-sm text-center w-full">
              Continue with Twitter
            </span>
          </button>
          <div className="mt-4 mb-4 text-sm">OR</div>

          <div id="div formLogIn" className="w-7/12">
            <form
              className="flex items-left justify-items-left flex-col"
              onSubmit={onSubmit}
            >
              <label>Email</label>
              <input
                className="bg-transparent border border-neutral-300 gap-1 rounded-md  h-9 mt-4"
                type="email"
                placeholder="email"
                name="email"
                {...register("email")}
              />

              <label>Password</label>
              <input
                className="bg-transparent border border-neutral-300 gap-1 rounded-md  h-9 mt-4"
                type="password"
                placeholder="password"
                name="password"
                {...register("password")}
              />
              <div className="flex justify-between mx-2 my-3">
                <div>
                  <input type="checkbox" id="checkbox" />
                  <label className="ml-2" htmlFor="checkbox">
                    Remember Me
                  </label>
                </div>
                <label className="text-blueButton font-light">
                  <a href="">Forgot password?</a>
                </label>
              </div>
              <button className="flex items-center justify-center w-full h-12 bg-blueButton hover:bg-blue-800 border border-neutral-300 mx-auto mt-4 rounded-md">
                <span className="text-white">Log In</span>
              </button>
              <div className="w-full gap-1 flex justify-center my-8">
                <span className="text-gray-600 w-9/12 text-sm italic antialiased font-light text-center">
                  By signing in, you are agreeing to our
                  <a className="text-blueButton" href="https://dev.to/privacy">
                    privacy policy
                  </a>
                  ,
                  <a className="text-blueButton" href="https://dev.to/terms">
                    terms of use
                  </a>
                  and
                  <a
                    className="text-blueButton"
                    href="https://dev.to/code-of-conduct"
                  >
                    code of conduct.
                  </a>
                </span>
              </div>
              <div className="w-full gap-1 flex justify-center mt-6 mb-20">
                <span className="font-light">
                  New to DEV Community?{" "}
                  <a
                    className="text-blueButton"
                    href="https://dev.to/enter?state=new-user"
                  >
                    Create account.
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
