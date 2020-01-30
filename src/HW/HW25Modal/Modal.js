import cx from 'classnames';
import React, { useRef } from 'react';
import './Modal.scss';

export default function Modal(props = {}) {

  const bg = useRef();

  let className = {}
  if(props.near) className[props.near] = true;
  if(props.animation) className.animation = true;

  const handleClose = (e) => {
    e.persist();
    if(e.target === bg.current) props.onClose();
  }

  return (
    <div className="modal-bg" onClick={handleClose} ref={bg}>
      <div className={cx('modalx', className)}>
        {props.header &&
          <h2 className="header">{props.header}</h2>
        }
        {props.children}
        <div className="footer">
          <button className="btn btn-primary btn-block" onClick={props.onClose}>關閉</button>
        </div>
      </div>
    </div>
  )
}
