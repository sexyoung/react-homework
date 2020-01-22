import cx from 'classnames';
import React, { useEffect, useState, useRef } from 'react';
import './style.scss';

export const makeLottery = () => {
  return [...Array(49).keys()]
    .map(v => `0${v + 1}`.slice(-2))
    .sort(() => Math.random() - .5)
    .slice(0, 6)
    .sort((a, b) => a - b);
}

export const makeLotteryList = (size = 10) => {
  let list = [];
  let lottery = '';
  do {
    lottery = makeLottery();
    if(list.map(v => v.join('')).every(v => v !== lottery.join(''))) {
      list.push(lottery);
    }
  } while (list.length < size);
  return list;
}

export const isCorrect = list => {

  let len = 0;
  for (let index = 0; index < list.length; index++) {
    len += list[index].length;
    if(+list[index] < 1 || list[index] > 49) return false;
  }
  if(len !== 12) return false;

  if(list.length !== [...new Set(list)].length) return false;

  return true;
}

export default function HW24Lottery() {
  const inputList = [ useRef(), useRef(), useRef(), useRef(), useRef(), useRef() ];
  const [list, setList] = useState([]);
  const [buyList, setBuyList] = useState([]);
  const [enable, setEnable] = useState(false);


  const setInputList = (value) => {
    const lottery = makeLottery();
    inputList.forEach((input, index) => {
      input.current.value = value === undefined ? lottery[index]: value;
    });
    setEnable(true);
  }

  useEffect(() => {
    setList(makeLotteryList(100));
    // setInputList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (index, { target: { value }}) => {

    if(!value && index > 0) {
      return inputList[index - 1].current.focus();
    }

    if(isNaN(+value)) {
      inputList[index].current.value = value = value.slice(0, value.length - 1);
    }
    
    if(index < 5 && value.length === 2) {
      inputList[index + 1].current.focus();
    }

    setEnable(isCorrect(inputList.map(input => input.current.value)));
  }

  const handleSubmit = e => {
    e.preventDefault();
    setBuyList([inputList.map(input => input.current.value), ...buyList])
    setInputList('');
    setEnable(false);
    inputList[0].current.focus();
  }

  const handleFocus = ({ target }) => {
    target.select();
  }

  const styleLi = (item, index) => {
    const { lottery } = list.reduce((best, lottery) => {
      const len = lottery.reduce((sum, num) =>  +item.includes(num) + sum, 0);
      if(len >= best.len) {
        return {
          len,
          lottery
        }
      }
      return best;
    }, {len: 0, lottery: []});

    return (
      <li key={index}>
        {item.map(v =>
          <div key={v} className={cx({
            match: lottery.includes(v)
          })}>{v}</div>
        )}
      </li>
    );
  }

  return (
    <div className="HW24Lottery">
      <div className="container">
          <div className="block mx-auto">
            <div className="header">
              <h1>大樂透</h1>
              <div className="open-date">
                開獎日期：
                <span className="date">{new Date().toLocaleDateString()}</span>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="numberList">
                  {[...Array(6).keys()].map(index =>
                    <input
                      key={index}
                      type="text"
                      maxLength="2"
                      className="number"
                      ref={inputList[index]}
                      onFocus={handleFocus}
                      onChange={handleChange.bind(this, index)}
                    />
                  )}
                </div>
                <button disabled={!enable} className="btn btn-primary btn-block">輸入</button>
              </form>
            </div>
            {!!buyList.length &&
              <ul className="content">
                {buyList.map(styleLi)}
              </ul>
            }
          </div>
      </div>
    </div>
  )
}
