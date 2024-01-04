import React, { useState } from "react";
import Layout from "../../layout/Layout";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")


    const [hideshow, setHideShow] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{
                email, newPassword, answer
            });

            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Error in login")
        }
    }    
   
    return (
        <Layout title={"Forgot Password - Aadi Cart"}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">Reset Password</h1>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Email"
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                        />
                    </div>
                    <div className="mb-2 position-relative">
                        <input
                            type={hideshow ? "text" : "password"}
                            value={newPassword}
                            onChange={(e)=>{setNewPassword(e.target.value)}}
                            placeholder="Enter New Password"
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                        />
                        <div className="showhidePass" onClick={()=>setHideShow(!hideshow)}>
                            {hideshow ? "Hide" : "Show"}
                        </div>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e)=>setAnswer(e.target.value)}
                            placeholder="Enter Your Favorite Sport"
                            className="form-control"
                            id="exampleInputAnswer1"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Reset
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default Login;
