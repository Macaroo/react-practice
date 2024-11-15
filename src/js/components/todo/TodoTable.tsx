import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import React, { memo } from "react"
import { Todo } from "../../types/todo";
import { TodoItem } from "./Todoitem";


type Props = {
    todoList: Todo[];
    deleteTodo: (id: number) => void;
};

export const TodoTable =  memo(({ todoList, deleteTodo }: Props) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>タスク名</Th>
                    <Th>担当者名</Th>
                    <Th>締切</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {todoList.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            task={todo.task}
                            person={todo.person}
                            deadline={todo.deadline}
                            deleteTodo={() => deleteTodo(todo.id)}
                        />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
});