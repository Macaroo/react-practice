import * as React from "react";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/Todolist";
import { useTodoList } from "../hooks/use-todo-list";
import { useAuth } from "../hooks/use-Auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Avatar, Box, Button, Heading, HStack, Input } from "@chakra-ui/react";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();
  const { isLoggedIn, logout, userName } = useAuth();
  const navigate = useNavigate();

  // ログアウト中にアクセスされたら、/loginに遷移させる
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <Box as="main" w="720px" mx="auto" mt="20">
      <HStack as="header" justifyContent="space-between" spacing="4">
        <Heading as="h1" size="2xl">TODO</Heading>
        <HStack justifyContent="end">
          <HStack spacing="2">
            <Avatar bg='teal.500' size="xs" />
            <Box>{userName}</Box>
          </HStack>
          <Box>
            <Button onClick={logout} colorScheme="red" size="xs">
              ログアウト
            </Button>
          </Box>
        </HStack>
      </HStack>
      <Box mt="20" as="section">
        <Heading as="h2" size="xl">新規TODO作成</Heading>
        <NewTodoForm addTodo={addTodo} />
      </Box>
      <Box mt="20" as="section">
        <Heading as="h2" size="xl">TODO一覧</Heading>
        <Box mt="20">
          <Input
            placeholder="絞込み"
            value={filterWord}
            onChange={(e) => setFilterWord(e.target.value)}
          />
        </Box>
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </Box>
    </Box>
  );
};
