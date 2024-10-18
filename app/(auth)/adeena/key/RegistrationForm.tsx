"use client";

import { Input } from "@/components/ui/input";
import { RegistrationFormData, RegistrationSchema } from "@/schemas/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ErrorMessage from "@/app/_components/ErrorMessage";
import { createAccount } from "@/actions/session";
import { useState } from "react";
import AlertMessage from "@/app/_components/AlertMessage";

const RegistrationForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: RegistrationFormData) => {
    try {
      await createAccount(values);
      setSuccess("Account created successfully");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit(values))}
      className="space-y-4 max-w-[500px] w-full"
    >
      {error && <AlertMessage type="error" message={error} />}
      {success && <AlertMessage type="success" message={success} />}
      <div className="">
        <Label>Email</Label>
        <Input
          {...register("email")}
          type="email"
          placeholder="email@email.com"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <div className="">
        <Label>Password</Label>
        <Input
          {...register("password")}
          type="password"
          placeholder="********"
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </div>
      <Button className="w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;
