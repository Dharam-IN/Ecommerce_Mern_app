import React, { useState } from "react";
import Layout from "../../layout/Layout";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const [hideshow, setHideShow] = useState(false)

    // const showhide = ()=>{
    //     setHideShow(!hideshow)
    // }

    return (
        <Layout title={"Login Page - Aadi Cart"}>
            <div className="form-container">
                <form>
                    <h1 className="title">Login</h1>
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
                    <div className="mb-3 position-relative">
                        <input
                            type={hideshow ? "text" : "password"}
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            placeholder="Password"
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                        />
                        <div className="showhidePass" onClick={()=>setHideShow(!hideshow)}>
                            {hideshow ? "Hide" : "Show"}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default Login;
