import { Alert, Avatar, Button, Input, Loader } from "../../../components";
import { getProfile, putProfile } from "../../../services";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AvatarPicker } from "../components/avatar-picker";
import { AvatarType } from "../../../types";
import { AxiosError } from "axios";
import styles from "./index.module.css";

export const EditProfile = () => {
  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSelectAvatar = (avatar: AvatarType) => {
    setIsOpen(false);
    setSelectedAvatar(avatar);
  };

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      try {
        const { data: dataProfile } = await getProfile(id);

        setName(dataProfile.name);
        setSelectedAvatar(dataProfile.avatar);

        setIsLoading(false);
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        setError(error.response?.data?.message || "Something went wrong");
      }
    }
    getData();
  }, [id]);

  const handleSave = async () => {
    if (!selectedAvatar || !name) {
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await putProfile(id, {
        avatarId: selectedAvatar?.id || 0,
        name,
      });
      console.log("data", data);
      navigate("/profile");
      return;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  const isDisabled = isLoading || !selectedAvatar || isLoading;

  return (
    <>
      <div className="container">
        <div className={styles.limiter}>
          <div className={styles.container}>
            <h1 className="title">Edit Profile</h1>
            <div className="flex-center" onClick={() => setIsOpen(!isOpen)}>
              <Avatar image={selectedAvatar?.image} isEdit />
            </div>
            <div>
              <Input
                label="Profile Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
              />
            </div>
            <div className={styles.actions}>
              <Button fullWidth onClick={handleSave} disabled={isDisabled}>
                Done
              </Button>
              <Button
                variant="subtle"
                onClick={() => navigate(`/delete-profile/${id}`)}
              >
                Delete Profile
              </Button>
            </div>
            {error && <Alert>{error}</Alert>}
          </div>
        </div>
      </div>
      {isOpen ? (
        <AvatarPicker
          onSelectAvatar={handleSelectAvatar}
          onClose={() => setIsOpen(false)}
        />
      ) : null}

      {isLoading && <Loader />}
    </>
  );
};
