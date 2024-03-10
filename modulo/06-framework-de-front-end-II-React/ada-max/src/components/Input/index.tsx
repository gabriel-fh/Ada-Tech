import { ComponentPropsWithoutRef, forwardRef } from "react";

import styles from "./index.module.css";

type InputProps = {
  label?: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }: InputProps, ref) => {
    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label} htmlFor={props.id}>
            {label}
          </label>
        )}
        <input {...props} className={styles.input} ref={ref} />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);
