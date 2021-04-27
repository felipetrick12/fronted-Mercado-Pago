import React from 'react';
import '../styles/category.css'
import image from '../assets/music-audio-alp-201709';
import { Celulares } from './Celulares';

export const Header = () => {
    return (

        <div className="pd-billboard pd-category-header">
        <div className="pd-l-plate-scale">
            <div className="pd-billboard-background">
            <img src={image} alt="" width="1440" height="200" className="pd-billboard-hero ir"/>
         </div>
            <div className="pd-billboard-info">
              <h1 className="pd-billboard-header pd-util-compact-small-18">Tienda e-commerce</h1>
         </div>
         </div>
         <Celulares />
        </div>

    )
}
