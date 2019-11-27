import React, { useEffect, useState } from 'react';

export default function HW14Pokemon() {

  const [ list, setList ] = useState([]);
  const [ key, setKey ] = useState("");

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then(res => res.json())
      .then(json => setList(json.results))
  }, []);

  const filterList = list.filter(item => item.name.indexOf(key) > -1);

  return (
    <div className="container">
      <h2>Pokemon</h2>

        <h3>前提</h3>
        請使用 https://pokeapi.co/api/v2/pokemon/?limit=100 來抓取100取寶可夢資訊 <br />
        每隻寶可夢的資料皆有 name, url 可從 url 取得該寶可夢的 id <br />
        每隻寶可夢的圖片位址為： https://pokeapi.co/api/v2/pokemon/[id].png
        <h3>目標</h3>
        <ol>
          <li>順利抓取 100 隻寶可夢的名字 與 圖片</li>
          <li>可以依名字篩選出寶可夢</li>
        </ol>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">keyword</span>
        </div>
        <input type="text" className="form-control" placeholder="name..." onChange={e => setKey(e.target.value)} />
      </div>
      <div className="row">
        {filterList.map((item, i) =>
          <div key={i} className="col-lg-2 col-md-3 col-sm-4 text-center">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")}.png`} alt=""/>
            <div>{item.name}</div>
          </div>
        )}
      </div>
    </div>
  )
}
