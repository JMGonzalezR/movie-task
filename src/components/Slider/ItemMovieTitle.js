import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import Mark from './Mark'
import './ItemMovieTitle.css'

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx('item-movie-title', {
            'item--open': isActive,
          })}
        >
          <img src={movie.image} alt="" />
          <div className="item-description">{movie.description}</div>
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
