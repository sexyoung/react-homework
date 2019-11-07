import React, { useEffect, useState } from 'react'

export default function HW7PersonTable() {

  const [ list, setList ] = useState([]);

  const handleUpdate = () => {
    fetch('https://randomuser.me/api/?results=25')
      .then(res => res.json())
      .then(json => setList(json.results))
  }

  useEffect(() => {
    handleUpdate();
  }, []);

  return (
    <div className="container">
      <h1>使用者表格</h1>
      <p>
        利用 <strong>https://randomuser.me/api/?results=25</strong>
        取得一批隨機使用者清單，並呈現在於一個表格，可以刷新內容
      </p>
      <button onClick={handleUpdate} className="btn btn-primary btn-lg">
        Update List
      </button>
      <table className="table thead-light table-striped table-hover">
        <thead>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>gender</th>
            <th>email</th>
            <th>age</th>
            <th>phone</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {list.map(person =>
            <tr key={person.login.uuid}>
              <td><img src={person.picture.thumbnail} alt={person.name.first} /> </td>
              <td>{person.name.first}</td>
              <td>{person.gender}</td>
              <td>{person.email}</td>
              <td>{person.dob.age}</td>
              <td>{person.phone}</td>
              <td>{person.location.country}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
