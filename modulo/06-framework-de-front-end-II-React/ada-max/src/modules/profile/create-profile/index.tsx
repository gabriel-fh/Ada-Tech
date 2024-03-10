import {
  Alert,
  Avatar,
  Button,
  Input,
  Loader,
  Title,
} from "../../../components";

import { AvatarPicker } from "../components/avatar-picker";
import styles from "./index.module.css";
import { useCreateProfile } from "./hooks/use-create-profile";

export const CreateProfile = () => {
  const {
    register,
    handleSubmit,
    handleClose,
    errors,
    isPending,
    isError,
    avatar,
    selectAvatar,
    isDisabled,
    open,
    close,
    isOpen,
  } = useCreateProfile();

  return (
    <>
      <div className="container">
        <div className={styles.limiter}>
          <div className={styles.container}>
            <Title>Create Profile</Title>
            <div className="flex-center" onClick={open}>
              <Avatar image={avatar?.image} isEdit />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <Input
                  type="hidden"
                  error={errors?.avatarId?.message}
                  {...register("avatarId")}
                />
                <Input
                  label="Profile Name"
                  disabled={isPending}
                  error={errors.name?.message}
                  {...register("name")}
                />
              </div>
              <div className={styles.actions}>
                <Button
                  type="submit"
                  fullWidth
                  isLoading={isPending}
                  disabled={isDisabled}
                >
                  Save
                </Button>
                <Button variant="filled" onClick={handleClose} type="button">
                  Cancel
                </Button>
              </div>
            </form>
            {isError && <Alert>Deu Ruim</Alert>}
          </div>
        </div>
      </div>
      {isOpen ? (
        <AvatarPicker onSelectAvatar={selectAvatar} onClose={close} />
      ) : null}

      {isPending && <Loader />}
    </>
  );
};
