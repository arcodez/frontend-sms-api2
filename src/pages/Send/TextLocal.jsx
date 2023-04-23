import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHandleApi } from "../../hooks/useHandleApi";
import { Layout } from "../../components/Layout";
import { Loader } from "../../components/Loader";

export function TextLocal() {
  const [textLocalKeys, setTextLocalKeys] = useState([
    {
      name: "username",
      value: "",
    },
    {
      name: "hash",
      value: "",
    },
    {
      name: "SenderName",
      value: "",
    },
  ]);

  const { onSubmit, loading } = useHandleApi("textlocal");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading) return <Loader />;
  return (
    <div className="container">
      <div className="login-box">
        <Layout>
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <h2 style={{ color: "#fff" }}>Remintente</h2>
                <input type="text" {...register("remitente")} />
              </div>

              <div className="form-group checkbox-list">
                <label
                  className="text-center"
                  style={{ color: "white", margin: "5px" }}
                >
                  TextLocal
                </label>
                {textLocalKeys.map((opcion, index) => (
                  <div className="config" key={index}>
                    <input
                      type="text"
                      // {...register(opcion.name)}
                      value={opcion.value || "Provided on Backend"}
                      placeholder={opcion.name}
                    />
                  </div>
                ))}
              </div>

              <div className="form-group">
                <textarea
                  {...register("number-list")}
                  placeholder="Number List"
                ></textarea>
              </div>

              <div className="form-group">
                <textarea
                  {...register("message", { maxLength: 260 })}
                  placeholder="Message"
                ></textarea>
                {errors.message && (
                  <p style={{ color: "white" }}>
                    Supero el numero de caracteres permitidos
                  </p>
                )}
              </div>
              <div className="login-button">
                <button type="submit" className="btn-outline-primary">
                  Enviar Sms
                </button>
              </div>
            </form>
          </div>
        </Layout>
      </div>
    </div>
  );
}
