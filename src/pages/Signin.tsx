import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AuthSocialButton from "../components/AuthSocialButton";

import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

const Signin = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      console.log("authenticated");
      navigate("/");
    }
  }, [user, navigate]);

  const socialAction = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Login Successfully");
        navigate("/dashboard");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        px-12
        sm:px-6
        lg:px-8
        bg-gray-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          src="/images/logo.png"
          alt="logo converser"
          className="mx-auto w-40 h-auto"
        />
      </div>
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Welcome to converser
        </h2>
        <div
          className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md
        "
        >
          <div
            className="
            bg-white
            px-4
            py-8
            shadow
            rounded-lg
            sm:px-10
        "
          >
            <div className="mt-6">
              <div className="relative">
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                "
                >
                  <div
                    className="
                    w-full 
                    border-t
                    border-gray-300"
                  />
                </div>
                <div
                  className="
                relative 
                flex 
                justify-center 
                text-base
                "
                >
                  <span className="bg-white px-2 text-gray-500">
                    Sign in to your account
                  </span>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <AuthSocialButton icon={FcGoogle} onClick={socialAction} />
              </div>
            </div>
            <div
              className="
                mt-6
                flex
                gap-2
                justify-center
                text-sm
                px-2
                text-gray-500
              "
            >
              <div>Converser help you connect with friends</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
