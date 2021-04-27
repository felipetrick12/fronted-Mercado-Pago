import React from 'react'
import { phones } from '../data/phone'
import { Celular } from './Celular';
import '../styles/celulares.css';

export const Celulares = () => {

    const phoness = phones;

    return (
    <div className="row mt-4 mb-2">
        {
            phoness.map( phone => (
                <Celular 
                key = {phone.id}
                phone = {phone}
                />
            ))
        }
      </div>
    )
}
