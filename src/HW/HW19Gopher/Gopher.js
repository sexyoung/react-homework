import cx from 'classnames';
import React, { useState, useEffect, useCallback } from 'react';
import style from './style.module.scss';

const getRand = (m, n) =>  ~~((n - m + 1) * Math.random()) + m;

export default function Gopher({ updateScroe }) {

  const [ box, setBox ] = useState(~~(Math.random() * 2));

  const tick = useCallback(() => {
    setBox(box => !box);
    setTimeout(tick, getRand(1000, 5000));
  }, [])

  useEffect(() => {
    tick();
  }, [tick]);

  const handleClick = () => {
    updateScroe(box ? 1: -1);
    setBox(false);
  }

  return (
      <span className={cx(style.Gopher, {
        [style.box]: box
      })} onClick={handleClick}> {box ? 'G': '-'} </span>
  )
}
