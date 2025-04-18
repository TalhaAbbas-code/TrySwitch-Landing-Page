"use client";
import React, { useState } from "react";
import { useForm, FieldError } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaUser } from "react-icons/fa";


const ContactForm = () => {
  type FormData = {
    firstName: string;
    lastName: string;
    email:string;
    subject: string;
    message: string;
    phone: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [countryCode, setCountryCode] = useState("+92");
  

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const labelStyle = "text-sm font-semibold";
  
  //errors.email...  return a FieldError object, and this is not directly compatible with a ReactNode that why we have to exract error from fielderror
  const renderErrorMessage = (error: FieldError | undefined) => {
    return error ? (
      <span className="text-red-500 text-sm">{error.message}</span>
    ) : "";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-1">
      {/*  Name */}
      <div className="flex gap-2">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="firstName" className={`${labelStyle}`}>
            First Name
          </Label>

          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              id="firstName"
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className=" input-padding" 
            />
          </div>

          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {renderErrorMessage(errors.firstName)}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="lastName" className={`${labelStyle} `}>
            Last Name
          </Label>
          <Input
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
            placeholder="Last Name"
            className="input-padding"
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {renderErrorMessage(errors.lastName)}
            </span>
          )}
        </div>
      </div>
      {/* email */}
      <div className="grid w-full gap-1.5">

        <Label htmlFor="email" className={`${labelStyle} `}>
          Email
        </Label>
        <Input
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
          placeholder="Enter your email"
          className="input-padding"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {" "}
            {renderErrorMessage(errors.email)}
          </span>
        )}
      </div>
      {/* subject */}
      <div className="grid w-full gap-1.5">
        <Label htmlFor="subject" className={`${labelStyle} `}>
          Subject
        </Label>
        <Input
          id="subject"
          {...register("subject", { required: "Subject is required" })}
          placeholder="Enter subject of your message"
          className="input-padding"
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">
            {" "}
            {renderErrorMessage(errors.subject)}
          </span>
        )}
      </div>
      {/* Mesage */}
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message" className={`${labelStyle} `}>
          Message
        </Label>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            maxLength: { value: 150, message: "Message is too long" },
          })}
          placeholder="Enter your message"
          className="w-full border px-4 py-2 rounded h-32"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">
            {" "}
            {renderErrorMessage(errors.message)}
          </span>
        )}
      </div>
      {/* Phone  */} {/* todo-> add flags and phone validation */}
      <div className="grid w-full gap-1.5">
        <Label htmlFor="phone" className={`${labelStyle} `}>
          Phone Number
        </Label>
        <div className="flex items-center gap-0">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="border rounded-l-md px-2 py-2 bg-white text-gray-700"
          >
            <option value="+92">+92</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+91">+91</option>
          </select>
          <Input
            id="phone"
            {...register("phone", { required: "Phone number is required" })}
            placeholder="Enter phone number"
            className="input-padding rounded-l-none"
          />
        </div>
        {errors.phone && (
          <span className="text-red-500 text-sm">
            {" "}
            {renderErrorMessage(errors.phone)}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-primaryBlue text-white font-semibold w-full py-3 mt-5 rounded-xl"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
