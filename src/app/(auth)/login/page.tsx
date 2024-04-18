'use client'

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";

import { FcGoogle } from 'react-icons/fc';
import { Form, FormField, FormItem } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import { SigninValidation } from "../../../lib/validation/user";

const SigninForm = () => {

  const form = useForm<z.infer<typeof SigninValidation >>({
    resolver: zodResolver(SigninValidation ),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  
  return (
    <Form {...form}>
      <div className="sm:w-420 flex  flex-col m-4 text-[#828285] ">
        <div className="border-b-2 border-[#9747FF] w-[15%] mb-4 pb-1">
         <Image src="/assets/images/Group 4.png" alt="logo" className="" width={50} height={50} />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold text-white">Login</h1>
          <p className="text-sm ">Continue discovering rare and original networks</p>
        </div>

        <div className='flex  justify-center items-center w-full py-1 font-semibold rounded cursor-pointer border-2 hover:border-[#a4a4a4] border-[#626262] gap-2 mb-4'>
              <FcGoogle size={15} />Login with Google
        </div>

        <div className="mb-4 text-center ">
        <p className="text-sm ">Or login with email</p>
        </div>
        <div className="mb-4">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem >  
                    <label className="">Email</label>
                    <div className="flex justify-center items-center relative w-full border-none">
                        <input type="email" className="placeholder:text-gray-500 border-2 bg-[#2A2931] outline-none border-[#626262] rounded px-1 py-1 w-full cursor-pointer hover:border-[#a4a4a4] " placeholder="Enter Your Email" {...field} />
                      </div>
                  </FormItem>
                )}
              />
          </div>
          <div className="mb-4">
              <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>  
                      <label className="">Password</label>
                      <div className="flex justify-center items-center relative w-full border-none">
                          <input type="email" className="placeholder:text-gray-500 border-2 bg-[#2A2931] outline-none border-[#626262] rounded px-1 py-1 w-full cursor-pointer hover:border-[#a4a4a4] " placeholder="**********" {...field} />
                        </div>
                    </FormItem>
                  )}
                />
          </div>
          <div className="mb-4 flex justify-between">
                  <div><input type="radio" />Remember Me</div>
                  <div><a href="/forget">Forgot Password</a></div>
          </div>
          <div className="border-2  border-[#626262] rounded px-1 py-1 text-center mb-4 cursor-pointer hover:border-[#a4a4a4]">Login</div>
          <div className=""><span>dont have an account?</span> <a href="/register" className="text-[#9747FF] hover:text-[#ac6cff]">create an account</a> </div>
      </div>
    </Form>    
  );
};

export default SigninForm;

