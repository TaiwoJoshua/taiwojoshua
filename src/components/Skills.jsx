import React from 'react';
import {nanoid} from 'nanoid';
import allSkills from './Data/skill';
import MotionComponent from './MotionComponent';

export default function Skills({ direction }){
  const skillElements = allSkills.map(skill => <div className="skill-wrapper" key={nanoid()}><div><img src={require("../images/Skills/" + skill.icon)} alt={skill.skill} className="skill-icon" /></div><h3>{skill.skill}</h3></div>);
  
  const Content = () => { 
    return (
      <>
        <h1 className="headings">
            SKILLS
        </h1>
        <div>
          {skillElements}
        </div>
      </>
    );
  };

  return (
    <MotionComponent tag={"section"} id={"skills"} content={<Content />} direction={ direction } />
  );
}