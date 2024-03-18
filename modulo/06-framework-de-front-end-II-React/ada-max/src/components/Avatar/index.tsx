import { IconEdit } from "../Icons";
import clsx from "clsx";
import styles from "./index.module.css";
import user from "../../assets/user.svg";

type AvatarProps = {
  image?: string;
  isEdit?: boolean;
  size?: "medium" | "large" | "small";
  disabled?: boolean;
};

export const Avatar = ({
  image,
  isEdit,
  size = "medium",
  disabled,
}: AvatarProps) => {
  const imagePath = image ? `/images/${image}.webp` : user;
  return (
    <div
      className={clsx(styles.container, {
        [styles[size]]: true,
        [styles.disabled]: disabled,
      })}
    >
      <img src={imagePath} alt="" />
      {isEdit && (
        <div className={styles.icon}>
          <IconEdit />
        </div>
      )}
    </div>
  );
};
