import React from 'react';
import './testimonial.css'
function testimonial(props) {
  return (
    <div className="testimonial__container">
      <img
        className='testimonial__imagen'
        src={require(`../assets/img/testimonial-${props.nameImg}.png`)} alt={`${props.name}'s Foto`} />
      <div className="testimonial__container__text">
        <div className='testimonial_meta'>
          <p className='testimonial__text__name'>
            <strong>{props.name}</strong> in {props.country}</p>
          <p className='testimonial__text_position'>{props.position} at <strong>{props.business}</strong></p>
        </div>
        <p className='testimonial__text_testimonial'>"{props.testimonial}"</p>
      </div>
    </div>
  );
}

export default testimonial;