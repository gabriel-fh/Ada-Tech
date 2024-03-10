import { IconLoading } from "..";
import clsx from "clsx";
import styles from "./index.module.css";

type ButtonProps = {
  variant?: "subtle" | "filled";
  fullWidth?: boolean;
  isLoading?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({
  children,
  variant,
  fullWidth,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.subtle]: variant === "subtle",
        [styles.filled]: variant === "filled",
        [styles.fullWidth]: fullWidth,
      })}
      disabled={props.disabled || isLoading}
      {...props}
    >
      {children}
      {isLoading && (
        <span className={styles.icon}>
          <IconLoading />
        </span>
      )}
    </button>
  );
};
