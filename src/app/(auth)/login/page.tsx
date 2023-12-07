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
    <Form {...form}
    >
      <div className="sm:w-420 flex justify-center items-center flex-col">
        <Image src="/assets/images/Frame 68.png" alt="logo" className="absolute top-10" width={47} height={15} />
        <form
        //   onSubmit={form.handleSubmit(handleSignin)}
          className="flex flex-col gap-2 w-full mt-4 py-7">
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>  
                 <div className="flex justify-center items-center relative w-full border-none">
                    <input type="email" className="placeholder:text-gray-500 border-t-0 border-l-0 border-r-0 border-b-2 bg-[#D9DEEF] outline-none border-[#1B5299] py-2 pr-24" placeholder="Email" {...field} />
                  </div>
           </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>  
                  <div className="flex py-6 justify-center items-center relative w-full">
                    <input type="password" className="placeholder:text-gray-500 border-t-0 border-l-0 border-r-0 border-b-2 bg-[#D9DEEF] outline-none border-[#1B5299] py-2 pr-24" placeholder="Password" {...field} />
                  </div>
              </FormItem>
            )}
          />
          <div className="text-[#1B5299] pt-2 flex justify-start">
            <p>Forgot password?</p>
          </div>
          <Button type="submit" className="bg-[#1B5299] mt-3  hover:bg-[#1452a3] text-white flex gap-2 rounded-xl"> Log in </Button>
        </form>
        <div className='flex  justify-center items-center w-40  py-1 font-semibold rounded-lg cursor-pointer border-2 border-gray-500 gap-2'>
              <FcGoogle size={15} />Google
         </div>
      </div>
    </Form>
  );
};

export default SigninForm;