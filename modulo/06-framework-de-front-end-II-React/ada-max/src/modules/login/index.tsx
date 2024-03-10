import {
  Alert,
  Button,
  IconEyeClosed,
  IconEyeOpened,
  Input,
} from "../../components";

import { Link } from "react-router-dom";
import { useLogin } from "./hooks/use-login";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    errors,
    isPending,
    isError,
    showPassword,
    togglePassword,
  } = useLogin();

  return (
    <div className="container">
      <div className="header">
        <Link to="/login" className="logo">
          <img src="/max.webp" alt="Ada Max" />
        </Link>

        <Button variant="subtle">Sign Up Now</Button>
      </div>
      <div className="content">
        <h1 className="title">Get Started</h1>
        <div className="login">
          <h2 className="title">Sign In</h2>
          <p className="text-center">{t("login.description")}</p>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              placeholder="email@email.com"
              disabled={isPending}
              error={errors?.email?.message}
              {...register("email")}
            />

            <div className="form-group">
              <label htmlFor="">Password</label>
              {/* TODO: criem um componente suportando o ícone */}
              <div className="input-with-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  disabled={isPending}
                  {...register("password")}
                />
                <button className="eye" type="button" onClick={togglePassword}>
                  {showPassword ? <IconEyeClosed /> : <IconEyeOpened />}
                </button>
              </div>
              {errors?.password?.message && (
                <span>{errors?.password?.message}</span>
              )}
            </div>
            <div>
              <Button type="submit" isLoading={isPending}>
                {t("login.signIn")}
              </Button>
            </div>
            {isError && <Alert>Credencias inválidas</Alert>}
          </form>
        </div>
      </div>
    </div>
  );
};
