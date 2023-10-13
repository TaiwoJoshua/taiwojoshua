import React from 'react';
import allServices from './Data/service';
import {nanoid} from 'nanoid';
import { FaPenToSquare } from 'react-icons/fa6';

export default class Services extends React.Component{
  render(){
    const serviceElements = allServices.map(service => <div key={nanoid()} className="box"><FaPenToSquare /><h1 className="headings">{service.service}</h1><p>{service.info}</p></div>);
    return (
      <section id="services" className="animate__animated animate__slower">
        <h1 className="headings">
            SERVICES
        </h1>
        <div className="row">
          {serviceElements}
        </div>
      </section>
    );
  }
}