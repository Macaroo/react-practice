import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "../css/main.css";
import { App } from './App';
import { AuthProvider } from './contexts/AuthContexts';
import { ChakraProvider } from "@chakra-ui/react";

const root = createRoot(document.getElementById('app')!);
root.render(
    <ChakraProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </ChakraProvider>
);