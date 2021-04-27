import React from 'react'
import { Link } from 'react-router-dom';

export const Celular = ({phone}) => {

    const {id,name_product,description,url,cantidad,precio} = phone;

    return (
        <div 
        className="card mt-2" style={{'width': '18rem'}}
        >
        <img src={url} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name_product}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cantidad: {cantidad}</li>
          <li className="list-group-item">Precio: {precio}</li>
        </ul>
        <div className="card-body">
            
        </div>
        <Link 
        className="btn btn-block btn-primary text-white mb-2"
        to={`/detail/${id}`}>
           Comprar 
        </Link>
      </div>
    )
}
