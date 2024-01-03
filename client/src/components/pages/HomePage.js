import React from "react";
import Layout from "../layout/Layout";
import { useAuth } from "../../context/auth";

const HomePage = ()=>{

    const [auth, setAuth] = useAuth();

    return(
        <>
            <Layout title={"Aadi Cart - Ecommerce Website Develope By ATS Global"}>
                HomePage
                <pre>{JSON.stringify(auth, null, 4)}</pre>
            </Layout>
        </>
    )
}

export default HomePage;
