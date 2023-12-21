import React from "react";
import Layout from "../layout/Layout";

const About = () => {
    return (
        <>
            <Layout>
                <div className="row contactus align-items-center py-5">
                    <div className="col-md-6 ">
                        <img
                            src="/images/AboutUs.jpg"
                            alt="contactus"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="col-md-4">
                        <h1 className="bg-dark p-2 text-white text-center">About US</h1>
                        <p className="text-justify mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque enim magni cupiditate quia beatae recusandae cum consectetur, error excepturi totam qui, est quasi repudiandae molestias expedita autem quibusdam ut, quos eaque eius aperiam quisquam esse. Voluptatum delectus dolores vel libero necessitatibus sint modi non deleniti voluptatibus rem reprehenderit volu.</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About;