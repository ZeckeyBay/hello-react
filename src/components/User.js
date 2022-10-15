import React from 'react'

function User({data ,friends}) {
  return (
    <div>
    User
    <div>username: {(data.name)}</div>
    <div>city: {(data.city)}</div>
    <div>age: {(data.age)}</div>
    <h3>Friends</h3>
    {friends.map((friend,i)=>
    <div key={i}>{friend}</div>
    )}
    <hr></hr>
    </div>
  )
}

export default User;