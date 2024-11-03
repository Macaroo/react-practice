import * as React from "react";
import { TodoList } from "./components/todo/Todolist";
import { Heading } from "./components/parts/heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { useTodoList } from "./components/todo/use-todo-list";
import { useTimer } from "./components/todo/use-timer";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContexts";

export const App = () => {
  const { todoList , addTodo , deleteTodo } = useTodoList();
  const { isLoggedIn } = useContext(AuthContext);
  const { time } = useTimer();

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <div>{isLoggedIn ? "ログイン中" : "ログアウト中"}</div>
      <div>タイマー : {time}</div>
      <div className="mt-8">
        <Heading level="h2">新規TODO作成</Heading>
        <NewTodoForm addTodo={addTodo} />
      </div>
      <div className="mt-8">
        <Heading level="h2">TODO一覧</Heading>
        <TodoList todoList={todoList} deleteTodo={deleteTodo}/>
      </div>
    </main>
  );
};
