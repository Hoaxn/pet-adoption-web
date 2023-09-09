/** @format */

import Layout from "@/Components/Layout";
import { Form, Input, message } from "antd";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";

const Register = () => {
  const [registerForm] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        values
      );

      if (response) {
        message.success(response.data?.message);
        setIsLoading(false);
        setTimeout(() => {
          window.location.replace("/login");
        }, 2000);
      } else {
        setIsLoading(false);
        message.destroy();
        message.error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      message.destroy();
      message.error(error.response?.data?.message);
      //   dispatch(HideLoading());
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Layout>
        <section>
          <div className="bg_enquiry pt-50 pb-50">
            <div className="container text-center">
              <div className="bbb-wrapper fl-wrap text-start">
                <div className="subcribe-form fl-wrap">
                  {/* <p class="text-center text-dark fs-6 fw-bold">Please Send us email for more details, we will contact you:

                  </p> */}
                  <Form
                    onFinish={onFinish}
                    layout={"vertical"}
                    form={registerForm}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h1 style={{ marginBottom: "9px", fontSize: "32px" }}>
                        Create New Account Here !
                      </h1>
                    </div>
                    <div className="row gx-4 gy-3 align-items-center justify-content-center">
                      <div className="col-md-7">
                        <div className="row g-2">
                          <div className="col-md-12">
                            <Form.Item
                              label="First Name"
                              name={"firstName"}
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your First Name",
                                },
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Plese Enter Your First Name"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <Form.Item
                              name="lastName"
                              label="Last Name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Last Name",
                                },
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Please enter your Last Name"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <Form.Item
                              name="email"
                              label="Email"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your email",
                                },
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Please enter your email"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <Form.Item
                              name="phoneNumber"
                              label="Phone Number"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Phone Number",
                                },
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Please enter your Phone Number"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <Form.Item name="city" label="City">
                              <Input
                                className="form-control border"
                                placeholder="Please enter your City"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <Form.Item name="country" label="Country">
                              <Input
                                className="form-control border"
                                placeholder="Please enter your Country"
                              />
                            </Form.Item>
                          </div>

                          <div className="col-md-12">
                            <Form.Item
                              name="password"
                              label="Password"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Password",
                                },
                              ]}
                            >
                              <Input.Password
                                style={{ height: "44px" }}
                                placeholder="Please enter your Password"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <PrimaryButton
                              width="30%"
                              loading={isLoading}
                              htmlType="submit"
                              text="Register"
                            ></PrimaryButton>
                          </div>
                          <div
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            {" "}
                            Already have an account ?{"  "}
                            <Link href="/login" style={{ color: "red" }}>
                              {" "}
                              Login!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Register;
