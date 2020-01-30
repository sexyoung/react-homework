import cx from 'classnames';
import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.scss';

let timer;

export default (props) => {
  const { children, showDots, time = 1000} = props;
  const [shift, setShift] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slide = useCallback((index = -1) => {
    console.warn(index);
    
    const newShift = index === -1 ? shift + 1: index;
    
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setShift(newShift % children.length);
    }, 500);
  })

  useEffect(() => {
    timer = setInterval(slide, time);
    return () => {
      clearTimeout(timer);
    }
  }, [children.length, shift, slide, time]);

  const handleMouseEnter = () => {
    clearTimeout(timer);
  }

  const handleMouseLeave = () => {
    clearTimeout(timer);
    timer = setInterval(slide, time);
  }

  const moveSlide = isSliding && shift;
  const nextSlide = isSliding && ((shift + 1) % children.length);

  return (
    <div className="Carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {[...children.slice(shift), ...children.slice(0, shift)].map((item, i) => {
        const index = (i + shift) % children.length;
        return (
          <div className={cx('item', {
            active: 0 === i,
            move: [moveSlide, nextSlide].includes(index),
          })} key={index}>
            {item}
          </div>
        );
      })}
      {showDots && (
        <div className="dots">
          {[...Array(children.length).keys()].map((item, index) =>
            <div
              key={index}
              // onClick={handleClick.bind(this, index)}
              className={cx('dot', {
                active: shift === index
              })}
            />
          )}
        </div>
      )}
    </div>
  );
}
