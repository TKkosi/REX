import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
    const isAuthenticated = Boolean(localStorage.getItem("token")); // Example check for authentication
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};  
export default ProtectedRoute;  