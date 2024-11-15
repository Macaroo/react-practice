import * as React from "react";
import { Heading } from "../components/parts/heading";
import { TextField } from "../components/parts/Textfield";
import { Button } from "../components/parts/Button";
import { useAuth } from "../hooks/use-Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { isLoggedIn, login, userName, setUserName } = useAuth();
  const navigate = useNavigate();

  // ログイン中だった場合は、/todoに推移させる
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/todo");
    }
  }, [isLoggedIn]);

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
