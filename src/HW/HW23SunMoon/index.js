import cx from 'classnames';
import React, { useState } from 'react';

import './style.scss';

export default function HW23SunMoon() {

  const [isSun, setIsSun] = useState(true);

  const handleChange = () => {
    setIsSun(!isSun);
    
  }
  return (
    <div className={cx('HW23SunMoon', 'text-center', {
      [isSun? 'sun': 'moon']: true
    })}>
      <div>
        太陽圖片: https://img.icons8.com/cotton/256/000000/sun--v1.png <br />
        月亮圖片: https://img.icons8.com/cotton/256/000000/moon-satellite.png
      </div>

      <div className="dashboard">
        <button className="btn btn-primary" onClick={handleChange}>
          切換成 {isSun ? '晚上': '白天'}
        </button>
      </div>

      <div className="icon">
        <img src="https://img.icons8.com/cotton/256/000000/sun--v1.png" />
        <img src="https://img.icons8.com/cotton/256/000000/moon-satellite.png" />
      </div>

    </div>
  )
}
