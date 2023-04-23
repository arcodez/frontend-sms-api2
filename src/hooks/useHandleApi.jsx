import { useEffect, useState } from "react";

export function useHandleApi(apiUrl) {
  const [loading, setLoading] = useState(false);

  //Validate Url to Fetch
  let url = "";
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      url = `https://backend-sms-api2.vercel.app/${apiUrl}`;
    } else {
      url = `http://localhost:4000/${apiUrl}`;
    }
  }, []);

  //Es de los datos de la api
  const onSubmit = async (data) => {
    if (data.body) data.body = `${data.remitente} ${data.body}`;
    if (data.text) data.text = `${data.remitente} ${data.text}`;

    console.log(data);
    try {
      setLoading(true);
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(data),
      }).then((response) => console.log(response));
      setLoading(false);
      alert("El mensaje ha sido enviado");
    } catch (error) {
      setLoading(false);
      alert("Hubo un error al enviar el mensaje");

      console.error(error);

      if (url === `http://localhost:4000/${apiUrl}`)
        console.error("No se Pudo conectar al endpoint en localhost");
    }
  };

  return { onSubmit, loading };
}
