import { Button, Input } from "@nextui-org/react";
import { Link, } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../apis/auth";
import { useAuth } from "../lib/AuthContext";
import { ImSpinner8 } from "react-icons/im";
import { notifier } from "../lib/utils";


export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { authenticate } = useAuth();

  const { mutateAsync: login, isPending } = useLoginMutation();

  // const onSubmit = async (data) => {
  //   console.log("Sign In Data:", data);
  //   toast.success("Login successful!");
  // };

  const onSubmit = async (values) => {
    try {
      const data = await login(values);
      console.log(data);
      const { user, token } = data.data;
      console.log(user, token);
      if (user.role !== "admin") {
        notifier({
          message: "You are not authorized to login",
          type: "error",
        });
        return; 
      }
      authenticate({ user, token });
    } catch (e) {
      notifier({
        message:
          e.response?.data?.message ?? e.response?.data ?? "Error signing in",
        type: "error",
      });
    }
  };

  return (
    <div className="w-full">
      <div className="mb-10">
                <h1 className="text-2xl font-semibold">Login</h1>
                <p className="mt-3 text-base">
                  Enter your credentials below to sign in to your account
                </p>
              </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-base">Email</label>
          <Input
          type="email"
          variant="bordered"
          radius="sm"
          classNames={{
            input: "text-base",
            base: "transition-all duration-300",
            inputWrapper: "h-11 border",
            label: "text-lg tracking-wide",
          }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            })}
            placeholder="example@mail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 text-base">Password</label>
          <Input
            type="password"
            radius="sm"
            variant="bordered"
            classNames={{
              input: "text-base",
              base: "transition-all duration-300",
              inputWrapper: "h-11 border",
              label: "text-lg tracking-wide",
            }}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Must be at least 6 characters" },
            })}
            placeholder="********"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="flex justify-end items-center">
          <Button
            type="submit"
            isDisabled={isPending}
            className=" bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            {isPending ? (
              <span className="flex items-center gap-1 justify-center">
                <ImSpinner8 className="animate-spin" size={18} /> please wait...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>
      </form>
      <p className="text-center text-sm mt-4">
        Don&apos;t have an account?{" "}
        <Link to="/sign-up" className="text-blue-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
