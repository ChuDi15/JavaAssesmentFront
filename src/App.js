import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios"
import Header from './Components/MainMenu/Header';
import UsersList from './Components/UsersList/UsersList';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersCreate from './Components/UsersCreate/UsersCreate';

function App() {
  var show;

  const [menuList, setMenuList] = useState(null)
  const [users, setUsers] = useState(null)
  const [userCraeted, setUserCreated] = useState("")
  const getUsers = async () => {
    const res = await axios.get('http://localhost:8080/users/all')
    setUsers(res.data)

  }
  useEffect(() => {

    getUsers()
  }, [])

  const goHome = () => {
    setMenuList(null)
  }
  const menuHandler = (option) => {
    setMenuList(option)
  }
  const userCreatedHandler = (text) => {
    setUserCreated(text)
  }

  if (menuList == "create") {
    show = (
      <div className='d-flex justify-content-center p-5'>
        <UsersCreate userCreatedHandler={userCreatedHandler} goHome={goHome} />
      </div>
    )
  } else if (menuList == "show") {
    show = (
      <UsersList users={users} goHome={goHome} />
    )
  } else {
    show = (
      <div>
        <Header userCreatedHandler={userCreatedHandler} userCraeted={userCraeted} menuHandler={menuHandler} />
      </div>
    )
  }


  return (show);
}

export default App;
