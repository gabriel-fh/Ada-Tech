import { IconLoading } from "../../../../components/Icons";
import styles from "./submit.module.css";

type SubmitProps = {
  isLoading: boolean;
  isDisabled: boolean;
  children: React.ReactNode;
  isLarge?: boolean;
};

export const Submit = ({
  isLoading,
  isDisabled,
  children,
  isLarge,
}: SubmitProps) => {
  return (
    <button
      className={`${styles.button} ${isLarge ? styles.buttonLarge : ""}`}
      disabled={isDisabled}
      type="submit"
    >
      <span>{children}</span>
      {isLoading && (
        <span className={styles.icon}>
          <IconLoading />
        </span>
      )}
    </button>
  );
};
