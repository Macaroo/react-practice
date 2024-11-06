import * as React from "react";
import { Heading } from "../components/parts/heading";
import { TextField } from "../components/parts/Textfield";
import { Button } from "../components/parts/Button";
import { useAuth } from "../hooks/use-Auth";

export const Login = () => {
  const { login, userName, setUserName } = useAuth();
  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">ログイン</Heading>
      <div className="flex gap-2">
        <TextField
          id="user-name"
          label="ユーザー名"
          type="text"
          value={userName}
          onChange={setUserName}
        />
        <Button onClick={login} color="blue">
          ログイン
        </Button>
      </div>
    </main>
  );
};
