import React from 'react';
import allServices from './Data/service';
import {nanoid} from 'nanoid';
import { FaPenToSquare } from 'react-icons/fa6';
import MotionComponent from './MotionComponent';

export default function Services({ direction }){
  const serviceElements = allServices.map(service => <div key={nanoid()} className="box"><FaPenToSquare /><h1 className="headings">{service.service}</h1><p>{service.info}</p></div>);
  
  const Content = () => { 
    return (
      <>
        <h1 className="headings">
            SERVICES
        </h1>
        <div className="row">
          {serviceElements}
        </div>
      </>
    );
  };

  return (
    <MotionComponent tag={"section"} id={"services"} content={<Content />} direction={ direction } />
  );
}