import React from 'react';
import projects from './Data/projects';
import {nanoid} from 'nanoid';
import Fancybox from './Fancybox';
import MotionComponent from './MotionComponent';

export default function Portfolio(){
  const portfolioElements = projects.map(project => {
    const images = project.images.map(image => <a key={nanoid()} href={require(`../images/${project.folder}/${image}`)} data-fancybox={project.title}> </a>);
    images.shift();

    return <div className="ver" key={nanoid()}><img src={require(`../images/${project.folder}/${project.images[0]}`)} alt={project.title} title={project.title} /><div className="ver_wrapper"><button><a className="view-link" data-fancybox={project.title} href={require(`../images/${project.folder}/${project.images[0]}`)}>View</a>{images}</button><button><a href={project.link} rel='noreferrer' className="view-link" target="_blank">Visit</a></button></div></div>
  });

  const Content = () => { 
    return (
      <>
        <h1 className="headings">
            PORTFOLIO
        </h1>
        <div className="gallery">
          <Fancybox>
            {portfolioElements}            
          </Fancybox>
        </div>
      </>
    );
  };

  return (
    <MotionComponent tag={"section"} id={"portfolio"} content={<Content />} />
  );
}