import { ComponentPropsWithoutRef } from "react";
import styles from "./index.module.css";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: string;
};

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={props.id}>
        {label}
      </label>
      <input {...props} className={styles.input} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
