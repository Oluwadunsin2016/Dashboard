
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignupMutation } from "../apis/auth";
import { ImSpinner8 } from "react-icons/im";
import { notifier } from "../lib/utils";
import { useAuth } from "../lib/AuthContext";
import { Button, Input } from "@nextui-org/react";

export function SignUp() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const {authenticate}=useAuth()

    const { mutateAsync: signup, isPending } = useSignupMutation();
  

    const password = watch("password");


    const onSubmit = async (values) => {
        try {
          delete values.confirmPassword;
          const {user,token} = await signup({...values,role: 'admin'});
          console.log({user,token});
          
          authenticate({user,token});
        } catch (e) {
            notifier({
                 message:
                 e.response?.data?.message ?? e.response?.data ?? "Error signing up",
                      type: 'error',
                    })
             
        }
      };
  
    return (
      <div className="w-full">
            <div className="mb-10">
                <h1 className="text-2xl font-semibold">Sign Up</h1>
                <p className="mt-3 text-base">
                  Create an account as admin
                </p>
              </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-base">First Name</label>
                <Input
                type='text'
                  variant="bordered"
                  radius="sm"
                  classNames={{
                    input: "text-base",
                    base: "transition-all duration-300",
                    inputWrapper: "h-11 border",
                    label: "text-lg tracking-wide",
                  }}
                  {...register("firstName", { required: "First Name is required" })}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-base">Last Name</label>
                <Input
                type='text'
                  variant="bordered"
                  radius="sm"
                  classNames={{
                    input: "text-base",
                    base: "transition-all duration-300",
                    inputWrapper: "h-11 border",
                    label: "text-lg tracking-wide",
                  }}
                  {...register("lastName", { required: "Last Name is required" })}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-base">Email</label>
                <Input
                type='enail'
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
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                  })}
                  placeholder="example@mail.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-base">Phone Number</label>
                <Input
                type='tel'
                  variant="bordered"
                  radius="sm"
                  classNames={{
                    input: "text-base",
                    base: "transition-all duration-300",
                    inputWrapper: "h-11 border",
                    label: "text-lg tracking-wide",
                  }}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^0\d{10}$/,
                      message: "Enter a valid 11-digit Nigerian phone number starting with 0",
                    },
                  })}
                  placeholder="08164874930"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-base">Password</label>
                <Input
                  type="password"
                  variant="bordered"
                  radius="sm"
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
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-base">Confirm Password</label>
                <Input
                type="password"
                  variant="bordered"
                  radius="sm"
                  classNames={{
                    input: "text-base",
                    base: "transition-all duration-300",
                    inputWrapper: "h-11 border",
                    label: "text-lg tracking-wide",
                  }}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      !password ? "Fill password first" : value === password || "Passwords do not match",
                  })}
                  placeholder="********"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
              </div>
              <div className="flex items-start justify-end">
              <Button type="submit" isDisabled={isPending} className=" bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                {isPending? <span className="flex items-center gap-1 justify-center"><ImSpinner8 className='animate-spin' size={18} /> please wait...</span> :'Sign Up'}
              </Button>
              </div>
            </form>
            <p className="text-center text-sm mt-4">
              Already have an account? <Link to="/sign-in" className="text-blue-500">Sign In</Link>
            </p>
      </div>
    );
  }