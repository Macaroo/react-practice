import * as React from "react";
import { useAuth } from "../hooks/use-Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Heading, Input } from "@chakra-ui/react";

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
      <Heading as="h1" size="2xl">ログイン</Heading>
      <div className="flex gap-2">
        <Input
          placeholder="ユーザー名"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button colorScheme="blue" onClick={login}>
          ログイン
        </Button>
      </div>
    </main>
  );
};
