import React from 'react';
import {nanoid} from 'nanoid';
import allSkills from './Data/skill';

export default function Skills(){
  const skillElements = allSkills.map(skill => <div className="skill-wrapper" key={nanoid()}><div><img src={require("../images/Skills/" + skill.icon)} alt={skill.skill} className="skill-icon" /></div><h3>{skill.skill}</h3></div>);
  return (
    <section id="skills" className="animate__animated animate__slower">
      <h1 className="headings">
          SKILLS
      </h1>
      <div>
        {skillElements}
      </div>
    </section>
  );
}