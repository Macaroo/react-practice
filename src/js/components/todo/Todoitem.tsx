import * as React from "react";
import { Button } from "../parts/Button";
import { useTimer } from "./use-timer";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts";

type Props = {
    id: number;
    task: string;
    person: string;
    deadline: string;
    deleteTodo: (id: number) => void;
};

export const TodoItem = ({ id, task, person, deadline, deleteTodo }: Props) => {
    const { isLoggedIn } = useContext(AuthContext);
    const { time } = useTimer();
    return (
        <ul>
            <li className="grid grid-cols-4">
                <div>{task}</div>
                <div>{person}</div>
                <div>{deadline}</div>
                <div>
                <Button onClick={() => deleteTodo(id)} color="red">
                削除
                </Button>
                <div>タイマー : {time}</div>
                <div>{isLoggedIn ? "ログイン中" : "ログアウト中"}</div>
                </div>
            </li>
        </ul>
    );
};

