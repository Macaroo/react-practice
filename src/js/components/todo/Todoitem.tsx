import * as React from "react";
import { useTimer } from "../../hooks/use-timer";
import { useAuth } from "../../hooks/use-Auth";
import { memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};

export const TodoItem = memo
  (({ id, task, person, deadline, deleteTodo }: Props) => {
  const { userName } = useAuth();
  const style = userName === person ? "text-red-600 font-bold" : "";
  const { time } = useTimer();
  return (
    <ul>
      <li className="grid grid-cols-4">
        <div>{task}</div>
        <div className={style}>{person}</div>
        <div>{deadline}</div>
        <div>
          <Button onClick={() => deleteTodo(id)} colorScheme="red" size="xs">
            削除
          </Button>
          <div>タイマー : {time}</div>
        </div>
      </li>
    </ul>
  );
});
