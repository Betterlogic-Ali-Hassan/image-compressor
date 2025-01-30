"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Alerts from "./Alerts";
import Card from "./hero/Card";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, {
      message: "Username must not exceed 50 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(2000, {
      message: "Message must not exceed 2000 characters.",
    }),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    console.log(values);
  }

  return (
    <section className='mt-[52px] '>
      <div className='hero-container max-w-[1100px]'>
        <Alerts />
        <Card>
          <h1>Contact Us</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='mt-6'>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem className='mb-5'>
                    <FormLabel className='text-base font-normal'>
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='w-full rounded-[6px] px-[10px] appearance-none text-sm bg-background border-2 border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888] mt-3 h-[48px] '
                        placeholder='Enter your name'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='mb-5'>
                    <FormLabel className='text-base font-normal'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='w-full rounded-[6px] px-[10px] appearance-none text-sm bg-background border-2 border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888] mt-3 h-[48px] '
                        type='email'
                        placeholder='Enter your email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem className='mb-5'>
                    <FormLabel className='text-base font-normal'>
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Enter your message'
                        className='w-full rounded-[6px] px-[10px] pt-[10px] appearance-none text-sm bg-background border-2 border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888] mt-3 h-[100px]'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='sm:max-w-[150px] w-full bg-text text-background shadow-none rounded-[8px] transition-all duration-300 px-5 hover:bg-black/80 dark:hover:bg-white/80 h-[40px]'
              >
                Send
              </Button>
            </form>
          </Form>
          <br />
          <b>EMAIL ADDRESS:</b> studziddi@gmail.com
        </Card>
      </div>
    </section>
  );
};

export default ContactUs;
