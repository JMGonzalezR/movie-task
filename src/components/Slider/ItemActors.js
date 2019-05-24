import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import Mark from './Mark'
import './ItemActors.css'

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx('item-actors', {
            'item--open': isActive,
          })}
        >
          <img src={movie.image} alt="" />
          <div className="item-actors-name">{movie.name}</div>
          <div className="item-actors-profession">{movie.profession}</div>
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
