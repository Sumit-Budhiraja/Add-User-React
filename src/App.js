import React,{useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {
  const [usersList,setUsersList]=useState([]);
  const addUserHandler = (uName,uAge) =>{
    setUsersList((prevUserList)=>{
      return([...prevUserList,{name:uName,age:uAge}]);
    })
  };
  
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
