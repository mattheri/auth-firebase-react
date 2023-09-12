import { QueryClientProvider, QueryClient } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './auth/components/AuthLayout/AuthLayout'
import Login from './auth/components/Login/Login'
import Signup from './auth/components/Signup/Signup'
import Main from './components/Main/Main'

const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Main />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
