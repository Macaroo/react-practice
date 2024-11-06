import * as React from "react";
import { useAuth } from "./hooks/use-Auth";
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo";

export const App = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Login />;
  }

  return <Todo />;
};
