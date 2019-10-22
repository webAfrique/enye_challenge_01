import React, { useState } from 'react';
import './styles.css'


const UserDataForm = (props) => {
  const userList = props.userList
  const setUser = props.setUser
  const newUser = {}
  const fetchInput = (evt) => {
    newUser[evt.target.name] = evt.target.value
  }
  return (
    <form>
      <input type='text' onBlur={fetchInput} name='first_name' placeholder='First Name'/>
      <input type='text' onBlur={fetchInput} name='last_name' placeholder='Last Name'/>
      <input type='date' onBlur={fetchInput} name='birthday' placeholder='Birthday'/>
      <input type='text' onBlur={fetchInput} name='age' placeholder='Age'/>
      <input type='text' onBlur={fetchInput} name='hobby' placeholder='Hobby'/>
      <a href='#' onClick={() => setUser([...userList, newUser])}>submit</a>
    </form>
  )
}
//do something about birthday placeholder on line 16
const UsersTable = (props) => {
  const userList = props.userList
  return (
    <table id='users'>
      <thead>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Birthday</td>
        <td>Age</td>
        <td>Hobby</td>
      </thead>
      {userList.map((user) => {
        return <tr>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.birthday}</td>
          <td>{user.age}</td>
          <td>{user.hobby}</td>
        </tr>
      })}
    </table>
  )
}

function App() {
  const [ userList, setUser] = useState([])
  return (
    <div id='container'>
      <UserDataForm setUser={setUser} userList={userList}/>
      <UsersTable userList={userList}/>
    </div>  
      )
}


export default App;