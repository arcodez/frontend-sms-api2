import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";
import "./styles.css";
import { Context } from "../../context/Context";
import { project } from "../../config";
import { Loader } from "../../components/Loader";
import { useHandleApi } from "../../hooks/useHandleApi";

const user = "apisms";
const password = "12345";

export function Login() {
  const { activateAuth } = useContext(Context);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { loading } = useHandleApi();

  const onSubmit = (data) => {
    if (user === data.username && password === data.password) {
      activateAuth();
      navigate("/");
    } else {
      navigate("/twilio");
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="container">
      <div className=" login-box">
        <div className=" login-title">{project.name}</div>
        <img
          width="200"
          src="https://cdn.pixabay.com/photo/2018/06/12/18/11/skull-3471134_1280.png"
          alt="Skull Blue"
        />
        <div className=" login-form">
          <div className=" login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="form-control-label">Username or Email</label>
                <input
                  type="text"
                  {...register("username", { required: true })}
                  className="form-control"
                />
                {errors.username && (
                  <p style={{ color: "white" }}>Este Campo es Requerido</p>
                )}
              </div>
              <div className="form-group">
                <label className="form-control-label">Password</label>
                <input
                  type="password"
                  {...register("password")}
                  className="form-control"
                />
              </div>
              <div className=" loginbttm">
                <div className="login-button">
                  <button type="submit" className="btn btn-outline-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
