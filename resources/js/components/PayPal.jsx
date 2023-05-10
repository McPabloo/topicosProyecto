import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import  "../../css/colores.css";

export default function Paypal(props) {
  const [pago, setPago] = useState({ pagan: props.total });
  const [scart, setScart] = useState({ cart: props.idc });
  const token = localStorage.getItem('token');

  //funcion que se llama a si misma
  (async function cargar() {
    pago.pagan = props.total;
  })();

  (async function cargar1() {
    scart.cart = props.idc;
  })();


  const cambioStatusVenta = async () => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };
    const data = new FormData();
    data.append("id", scart.cart);
    await axios.post("http://127.0.0.1/topicos/public/api/cambioStatusVenta", data, config)
        .then(response => {
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
}

  return (
      <PayPalScriptProvider options={{ "client-id": "AbpgSGZ0JlGJwsbBTs8hihGLi-FpREvXibTZBEwmSnvHQZy0OdE2PBr6-ytQ9ltzW2Brh7rEArUTvuW2" }}>
        <PayPalButtons 
          style={{ layout: "horizontal", color:"black", label:"checkout", tagline:"false" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: pago.pagan,
                  },
                },
              ],
            });
          }}
          onApprove={() => {
            console.log(scart.cart),
            console.log("carrito completado"),
            cambioStatusVenta();
          }
          }
        />
      </PayPalScriptProvider>
  );
}
Paypal.defaultProps = {
  total: '0'
}