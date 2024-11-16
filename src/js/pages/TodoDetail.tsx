import { Box } from "@chakra-ui/react"
import React from "react"
import { useParams } from "react-router-dom"
import { useTodoList } from "../hooks/use-todo-list";

export const TodoDetail = () => {

    let { id } = useParams();
    const { todoList } = useTodoList()

    const todo = todoList.find(todo => todo.id === id);

    return (
        <Box>
            <Box>{todo?.id}</Box>
            <Box>{todo?.task}</Box>
            <Box>{todo?.person}</Box>
            <Box>{todo?.deadline}</Box>
        </Box>
    );
};