import React, { useState } from "react";
import Layout from "../../layout/Layout";
import {toast} from 'react-toastify'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, email, password, phone, address)
        toast.success("Register Sucessfully!")
    }

    return (
        <Layout title={"Register Page"}>
            <div className="register">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="form-control"
                            id="exampleInputName1"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPhone1" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            className="form-control"
                            id="exampleInputPhone1"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress1" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e)=>setAddress(e.target.value)}
                            className="form-control"
                            id="exampleInputAddress1"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

            </div>
        </Layout>
    )
}

export default Register;
