import React from 'react';
import cx from 'classnames';
import './Tooltip.scss';

export default ({at, children, text = "text"}) => {
  let className = {}
  if(at) className[at] = true;
  return (
    <span className="tooltip-wrapper">
      {text && <div className={cx('tooltipx', className)}>{text}</div>}
      {children}
    </span>
  )
}
