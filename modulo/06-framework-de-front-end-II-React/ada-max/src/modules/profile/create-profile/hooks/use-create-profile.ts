import { ProfileBodySchema, ProfileBodyType } from "../../types";

import { AvatarType } from "../../../../types";
import { ROUTES } from "../../../../constants";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePostProfile } from "./use-post-profile";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCreateProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState<AvatarType | null>(null); // [1
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<ProfileBodyType>({
    resolver: zodResolver(ProfileBodySchema),
  });

  const { mutate, isPending, isError } = usePostProfile({
    onSuccess: () => {
      navigate(ROUTES.PROFILE);
    },
  });

  const onSubmit = (data: ProfileBodyType) => {
    mutate(data);
  };

  const handleClose = () => {
    navigate(ROUTES.PROFILE);
  };

  const selectAvatar = (avatar: AvatarType) => {
    setAvatar(avatar);
    setValue("avatarId", String(avatar.id));
    setIsOpen(false);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    handleClose,
    errors,
    isPending,
    isError,
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    avatar,
    selectAvatar,
    isDisabled: !avatar || !isValid,
  };
};
