import React from 'react';
import './App.css';
import { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { addUser , deleteUser , updateUsername} from './Features/Users';

function App() {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [first , setFirst] = useState("")
  const [second , setSecond] = useState("")

  const [newFirstname , setNewFirstname] = useState("")
  const [newSecondname , setNewSecondname] = useState("")



  return (
    <div className="App">
      
         <h1 className='head'>Curd Operation Using ReactJS and Redux</h1>
      
      <div className='addUser'>
        <input type='text' placeholder='First Name..' 
        onChange={(event) => {setFirst(event.target.value);
        }}/>
        <input type='text' placeholder='Second Name..' 
        onChange={(event) => {setSecond(event.target.value);
        }}/>
        <button onClick={() => {dispatch(addUser({id : userList[userList.length -1].id +1 , first : first , second : second}));
         }}>Add User</button> 
      </div>

      <div className='displayUsers'>
          {userList.map((user) => {
            return (
              <div>
              <h1>{user.first}</h1>
              <h1>{user.second}</h1>
                <input type = 'text' placeholder='New First Name'
                 onChange={(event) => {setNewFirstname(event.target.value);
                }}/>
                <input type = 'text' placeholder='New Second Name'
                 onChange={(event) => {setNewSecondname(event.target.value);
                }}/>
                <button 
                  onClick={() => {dispatch(updateUsername({id : user.id , first : newFirstname , second : newSecondname}));
                 }}>Update Username</button>
                <button 
                  onClick={() => {dispatch(deleteUser({id : user.id}));
                 }}>Delete Username</button>
              </div>
            ); 
          })}
      </div>
    </div>
  );
}

export default App;
