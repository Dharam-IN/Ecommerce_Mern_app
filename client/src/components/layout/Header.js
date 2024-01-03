import React from "react";
import {NavLink, Link} from 'react-router-dom';
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {

    const [auth, setAuth] = useAuth();

    const handleLogout = ()=>{
        setAuth({
            ...auth,
            user: null,
            token: ""
        });
        localStorage.removeItem('auth');
        toast.success("Logout Successfully")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category">Catrgory</NavLink>
                            </li>
                            {
                                !auth.user ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/register">Register</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">Login</NavLink>
                                        </li>
                                    </>
                                )

                                :(
                                    <>
                                        <li className="nav-item">
                                            <NavLink onClick={handleLogout} className="nav-link" to="/login">Logout</NavLink>
                                        </li>
                                    </>
                                )
                            }
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Cart (0)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
