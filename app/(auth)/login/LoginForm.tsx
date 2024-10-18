"use client";

import { Input } from "@/components/ui/input";
import { RegistrationFormData, RegistrationSchema } from "@/schemas/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ErrorMessage from "@/app/_components/ErrorMessage";
import { login } from "@/actions/session";
import { useState } from "react";
import AlertMessage from "@/app/_components/AlertMessage";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      await login(values);
      setLoading(false);
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit(values))}
      className="space-y-4 max-w-[500px] w-full"
    >
      {error && <AlertMessage type="error" message={error} />}
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
      <Button disabled={loading} className="w-full" type="submit">
        {loading ? <Loader2 className="size-4 animate-spin" /> : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
