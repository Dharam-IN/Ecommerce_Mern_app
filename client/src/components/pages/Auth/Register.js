import React, { useState } from "react";
import Layout from "../../layout/Layout";
import toast from 'react-hot-toast';
import axios from 'axios';
import "../../styles/AuthStyles.css";
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate();

    const [hideshow, setHideShow] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
                { name, email, password, phone, address, answer }
            );

            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Some Error in register")
        }
    }

    return (
        <Layout title={"Register Page"}>
            {/* <div className="register-bg"> */}
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h1 className="title">Register</h1>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={name}
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                id="exampleInputName1"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail1"
                                required
                            />
                        </div>
                        <div className="mb-3 position-relative">
                            <input
                                type={hideshow ? "text" : "password"}
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
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
                                value={phone}
                                placeholder="Phone"
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                                id="exampleInputPhone1"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={address}
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control"
                                id="exampleInputAddress1"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={answer}
                                placeholder="Enter Your Favorite Sport Name"
                                onChange={(e) => setAnswer(e.target.value)}
                                className="form-control"
                                id="exampleInputAnswer1"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            {/* </div> */}
        </Layout>
    )
}

export default Register;
