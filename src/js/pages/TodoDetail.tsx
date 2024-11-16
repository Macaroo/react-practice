import { Box } from "@chakra-ui/react"
import React from "react"
import { useParams } from "react-router-dom"
import { useTodoList } from "../hooks/use-todo-list";
import { Layout } from "../components/layout/layout";

export const TodoDetail = () => {

    let { id } = useParams();
    const { todoList } = useTodoList();

    const todo = todoList.find(todo => todo.id === id);

    return (
        <Layout title="TODO詳細">
            <Box mt="20" as="section">
                <Box>{todo?.id}</Box>
                <Box>{todo?.task}</Box>
                <Box>{todo?.person}</Box>
                <Box>{todo?.deadline}</Box>
            </Box>
        </Layout>
    );
};