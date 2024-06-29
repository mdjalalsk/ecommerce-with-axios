import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function PrivateRoute ({ children }) {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="text-center text-5xl"><span className="loading loading-spinner text-primary"></span></div>
    }

    if (user) {
        return children;
    }

  return<Navigate state={location.pathname} to="/login"></Navigate>
}
 