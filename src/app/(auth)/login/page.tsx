'use client'

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";

import { VscDiffRenamed } from "react-icons/vsc";
{/* <MdOutlineDriveFileRenameOutline /> */}
import { MdEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { UserLoginValidation } from "@/lib/validation/user";


const SigninForm = () => {

  const { toast } = useToast();
  const form = useForm<z.infer<typeof UserLoginValidation >>({
    resolver: zodResolver(UserLoginValidation ),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  
  return (
    <Form {...form}
    >
      <div className="sm:w-420 flex justify-center items-center flex-col">
        <Image src="/assets/images/Frame 68.png" alt="logo" className="absolute top-5" width={87} height={35} />
        <form
        //   onSubmit={form.handleSubmit(handleSignin)}
          className="flex flex-col gap-2 w-full mt-4">
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>  
                <FormControl>
                  <FormLabel className="flex justify-center items-center relative w-full">
                
                    <Input type="email" className="rounded-xl border-[#1B5299] pl-12" placeholder="Email" {...field} />
                  </FormLabel>
                 
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>  
                <FormControl>
                  <FormLabel className="flex justify-center items-center relative w-full">
                 
                    
                    <Input type="password" className="rounded-xl border-[#1B5299g] pl-12" placeholder="Password" {...field} />
                  </FormLabel>
                 
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-[#1B5299] pt-2 flex justify-start">
            <p>Forgot password?</p>
          </div>
          <Button type="submit" className="bg-[#1B5299] mt-3  hover:bg-[#1452a3] text-white flex gap-2 rounded-xl"> Log in </Button>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;