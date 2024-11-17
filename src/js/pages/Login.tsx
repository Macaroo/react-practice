import * as React from "react";
import { useAuth } from "../hooks/use-Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, HStack, Input } from "@chakra-ui/react";

export const Login = () => {
  const { isLoggedIn, isLoginCheckDone, login, userName, setUserName } = useAuth();
  const navigate = useNavigate();

  // ログイン中だった場合は、/todoに推移させる
  useEffect(() => {
    if (isLoginCheckDone && isLoggedIn) {
      navigate("/todo");
    }
  }, [isLoginCheckDone, isLoggedIn]);

  if (!isLoginCheckDone || isLoggedIn) return null;

  return (
    <Box as="main" w={400} mx="auto" mt="20">
      <Heading as="h1" size="xl">ログイン</Heading>
      <HStack spacing={4} mt={10}>
        <Input
          placeholder="ユーザー名"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          w="40"
        />
        <Button colorScheme="blue" onClick={login}>
          ログイン
        </Button>
      </HStack>
    </Box>
  );
};
