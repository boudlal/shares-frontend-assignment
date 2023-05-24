import React from 'react'
import './App.css'
import Home from './Views/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <div className='App'>
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        </div>
    )
}

export default App
