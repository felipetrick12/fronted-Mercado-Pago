import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { getPhoneById } from '../selectors/getPhoneById';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { CreatePreferencia } from '../actions/actionProduct';
import { Link, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import '../styles/detail.css';

export const Detail = ({history}) => {

  const location = useLocation();

  useEffect(() => {
    const status = new URLSearchParams(location.search).get('collection_status')
    if (status=== undefined){
      console.log('no hay pagos')
    }
    else if(status==='approved'){
      console.log('pago aprovado')

      Swal.fire({
        title : 'Exitoso',
        icon : 'success',
        cancelButtonText : false,
        confirmButtonText : 'Aceptar',
        html : `
          <h4> Tipo de pago: ${new URLSearchParams(location.search).get('payment_type')} </h4>
          <h4> Email dev: ${new URLSearchParams(location.search).get('external_reference')} </h4>
          <h4> ID_Pago: ${new URLSearchParams(location.search).get('payment_id')} </h4>
        `,
      })
    }
    else if (status=== 'pending' || status=== 'in_process' ){
      Swal.fire({
        title : 'Pago Pendiente',
        icon : 'info',
        cancelButtonText : false,
        confirmButtonText : 'Aceptar',
        html : `
          <h4> Tipo de pago: ${new URLSearchParams(location.search).get('payment_type')} </h4>
          <h4> Email dev: ${new URLSearchParams(location.search).get('external_reference')} </h4>
          <h4> ID_Pago: ${new URLSearchParams(location.search).get('payment_id')} </h4>
        `,
      })
    }
    else if (status=== 'failure'){
      Swal.fire({
        title : 'Hubo un fallo en el pago, Reintentelo',
        icon : 'error',
        cancelButtonText : false,
        confirmButtonText : 'Aceptar',
        html : `
          <h4> Tipo de pago: ${new URLSearchParams(location.search).get('payment_type')} </h4>
          <h4> Email dev: ${new URLSearchParams(location.search).get('external_reference')} </h4>
          <h4> ID_Pago: ${new URLSearchParams(location.search).get('payment_id')} </h4>
        `,
      })
    }

    }, [location.state,location.search]);


    const { id } = useParams();
    const phone = getPhoneById(id);

    const {name_product,description,url,cantidad,precio} = phone;
    

    const handleClickPagar = () => {
      CreatePreferencia(phone, history);
    }

    const handleClickFactura = () => {
      CreateFactura();
    }


    return (
      <>
      <a href="/api/web/download" download>link</a>
      <div className="container ">
         <div className="icon">
        <h1 className="my-4" style={{ fontFamily: "georgia" }}>
        Producto Seleccionado
        </h1>
        <Link to="/">
         <FontAwesomeIcon 
         className="my-4" 
         icon={faChevronCircleLeft} 
         style={{ fontSize :35  }}
         />
         </Link>
         </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={url}
                className="card-img m-2  animate__animated animate__fadeInLeft"
                alt={name_product}
              />
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="card-body " style={{ fontFamily: "georgia" }}>
                <h5 className="card-title mx-5" style={{ fontSize: 50 }}>
                  {name_product}
                </h5>
                <p className="card-text mx-5 my-3" style={{ fontSize: 25 }}>
                    <strong>Descripcion:</strong> {description}
                </p>
                <hr />
                <p className="card-text mx-5 my-3" style={{ fontSize: 25 }}>
                  <strong> Cantidad: </strong> {cantidad}
                </p>
                <hr />
                <p className="card-text mx-5 my-3" style={{ fontSize: 25 }}>
                  Precio: {precio}
                </p>
                <hr />
                <button 
                onClick= {handleClickPagar}
                className="btn btn-primary btn-lg mx-5 my-1" >
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
        
       
    )
}
