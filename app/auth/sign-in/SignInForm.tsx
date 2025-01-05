"use client";

import { Button } from "@/components/ui/buttons/button";
import { ErrorMessage } from "@/components/ui/errorMessage";
import { InputField } from "@/components/ui/inputField";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      <form onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
          error={error && !email ? "Email is required" : undefined}
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
          error={error && !password ? "Password is required" : undefined}
        />
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </form>
    </div>
  );
}
