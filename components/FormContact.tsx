"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
export default function FormContact({ lang  }: { lang: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formSchema = z.object({
    mobile: z.string().regex(/^[0-9]{10}$/, "translation.mobileValidationError"),
    email: z.string().email("translation.emailValidationError"),
    message: z.string().min(10, "translation.msgValidationError"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
      email: "",
      message: "",
    },
  });

  function onSubmit() {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
       
      form.reset();
    }, 2000);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-orangeColor">
                  {/* {translation.mobile} */}
                  Mobile
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234567890"
                    {...field}
                    className="text-sm sm:text-base text-foreground"
                  />
                </FormControl>
                <FormDescription className="text-xs sm:text-sm ">
                  {/* {translation.mobilePlaceHolder} */}
                  Mobile Place Holder
                </FormDescription>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-orangeColor">
                  {/* {translation.email} */}
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                      placeholder="example@example.com"
                    {...field}
                    className="text-sm sm:text-base text-foreground"
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base text-orangeColor">
                {/* {translation.msg} */}
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[100px] text-sm sm:text-base text-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full text-sm sm:text-base py-2 sm:py-3 "
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "sending..."
              : "Send"
            }
        </Button>
      </form>
    </Form>
  );
}
