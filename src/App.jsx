import React, {useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const[user,setUser] = useState(null);
  const [loggedInUserData,setloggedInUserData] = useState(null);

  const [userData,setUserData] = useContext(AuthContext);
  // console.log(authData);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    // console.log(loggedInUser);
    
    if(loggedInUser){
      // console.log('user loggedin hai');
      
      const userData = JSON.parse(loggedInUser);
      // console.log(userData);
      
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  },[])


  const handleLogin=(email,password) => {
      if(email == 'admin@me.com' && password == '123'){
        setUser('admin');
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }
      else if(userData){
        const employee = userData.find((e)=> email == e.email && e.password == password);
        if(employee){
            setUser('employee');
            setloggedInUserData(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        }
      }
      else {
        alert("Invalid Credentials");
      }
  }

  

  // handleLogin('admin@me.com','123');


  return (
    <div>
      {!user ? <Login handleLogin = {handleLogin} /> : ''};
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)};
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div> 
  )
}

export default App
