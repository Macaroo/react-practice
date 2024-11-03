import * as React from "react";
import { TodoItem } from "./Todoitem";
import { Todo } from "./type";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts";

type Props = {
    todoList: Todo[];
    deleteTodo: (id: number) => void;
}

export const TodoList = ({ todoList, deleteTodo }: Props) => {

  const { isLoggedIn } = useContext(AuthContext);
  return (
  <>
    <ul className="mt-4 ml-4 bg-emerald-100 p-4 rounded">
      <li className="grid grid-cols-4 font-bold">
        <div>タスク名</div>
        <div>担当者名</div>
        <div>締切</div>
        <div>削除</div>
      </li>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
    <div>{isLoggedIn ? "ログイン中" : "ログアウト中"}</div>
  </>
  );
};
