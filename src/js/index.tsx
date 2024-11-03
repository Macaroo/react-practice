import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "../css/main.css";
import { App } from './App';
import { AuthProvider } from './contexts/AuthContexts';

const root = createRoot(document.getElementById('app')!);
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);