import { IconEyeClosed, IconEyeOpened } from "../../components/Icons";
import { Link, useNavigate } from "react-router-dom";

import { Alert } from "../../components/Alert";
import { AxiosError } from "axios";
import { Input } from "./components/input";
import { Submit } from "./components/submit/submit";
import { apiPostSignIn } from "../../clients/api";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = password.length > 3;

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!isEmailValid || !isPasswordValid) {
      console.log("Invalid form");
      return;
    }

    setIsLoading(true);

    try {
      setIsLoading(true);
      const { data } = await apiPostSignIn(email, password);
      localStorage.setItem("token", data.token);
      setError("");
      navigate("/profile");
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Something went wrong");
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <div className="header">
        <Link to="/login" className="logo">
          <img src="/max.webp" alt="Ada Max" />
        </Link>
        <Link to="/signUp" className="btn relative z-index-1">
          Sign Up Now
        </Link>
      </div>
      <div className="content">
        <h1 className="title">Get Started</h1>
        <div className="login">
          <h2 className="title">Sign In</h2>
          <p className="text-center">
            Enter your Max or HBO Max account email address and password.
          </p>
          <form onSubmit={handleSubmit}>
            {error && <Alert>{error}</Alert>}
            {/* esse eu criei um componente*/}
            <Input
              label="Email Address"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              disabled={isLoading}
              error={isSubmitted && !isEmailValid ? "E-mail inválido" : ""}
            />

            <div className="form-group">
              <label htmlFor="">Password</label>
              <div className="input-with-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  disabled={isLoading}
                />
                <button
                  className="eye"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IconEyeClosed /> : <IconEyeOpened />}
                </button>
              </div>
              {isSubmitted && !isPasswordValid && <span>Senha inválida</span>}
            </div>
            <div>
              <Submit isDisabled={isLoading} isLoading={isLoading}>
                Sign In
              </Submit>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
