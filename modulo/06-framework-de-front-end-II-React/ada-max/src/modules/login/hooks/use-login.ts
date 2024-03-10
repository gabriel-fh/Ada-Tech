import { LoginSchema, LoginType } from "../types";

import { useAuth } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { usePostLogin } from "./use-post-login";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate, isPending, isError } = usePostLogin({
    onSuccess: ({ data }) => {
      login(data.token);
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  const onSubmit = (data: LoginType) => {
    mutate(data);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isPending,
    isError,
    showPassword,
    togglePassword: () => setShowPassword(!showPassword),
  };
};
