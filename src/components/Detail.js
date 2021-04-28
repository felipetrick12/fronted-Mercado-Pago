import React from 'react'
import { useParams } from 'react-router';
import { getPhoneById } from '../selectors/getPhoneById';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { CreatePreferencia } from '../actions/actionProduct';
import '../styles/detail.css';

export const Detail = ({history}) => {

    const { id } = useParams();
    const phone = getPhoneById(id);

    const {name_product,description,url,cantidad,precio} = phone;

  
    const handleClick = () => {
        history.goBack();
    }

    const handleClickPagar = () => {
      CreatePreferencia(phone, history);
    }
    return (
        <>
      <div className="container ">
         <div className="icon">
        <h1 className="my-4" style={{ fontFamily: "georgia" }}>
        Producto Seleccionado
        </h1>
         <FontAwesomeIcon 
         className="my-4" 
         icon={faChevronCircleLeft} 
         onClick={handleClick}
         style={{ fontSize :35  }}
         /> 
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
