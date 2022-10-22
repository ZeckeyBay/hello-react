import React, {useState} from "react";

function User(){
  const [user,setUser] = useState({name:"Zeki",surname:"Turan"})

  return(
  <div>
  <h1>User</h1>
  {user.name} {user.surname}
  <button onClick={() => setUser((prev)=> ({...prev, name:"Ahmet"}))}>Change Name</button>
  <button onClick={() => setUser((prev) =>({...user, surname:"Öz"}))}>Change Surname</button>
  </div>
  )
}
  



export default User;