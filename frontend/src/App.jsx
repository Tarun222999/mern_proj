import { AuthProvider, useAuth } from "./context/authContext"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import SignUp from './components/SignUp'
import SignIn from "./components/SignIn";
import Home from './components/Home'
import Help from "./components/Help";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/signIn" />;
};

const ProtectedHelpRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/signIn" />;
};
function App() {


  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/help" element={<ProtectedRoute><Help /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
