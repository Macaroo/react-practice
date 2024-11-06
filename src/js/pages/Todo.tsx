import * as React from "react";
import { Heading } from "../components/parts/heading";
import { Button } from "../components/parts/Button";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/Todolist";
import { useTodoList } from "../hooks/use-todo-list";
import { useAuth } from "../hooks/use-Auth";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList();
  const { logout, userName } = useAuth();
  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <div>{userName}</div>
      <div>
        <Button onClick={logout} color="red">
          ログアウト
        </Button>
      </div>
      <div className="mt-8">
        <Heading level="h2">新規TODO作成</Heading>
        <NewTodoForm addTodo={addTodo} />
      </div>
      <div className="mt-8">
        <Heading level="h2">TODO一覧</Heading>
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
};
