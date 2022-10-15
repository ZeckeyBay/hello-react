import React from 'react'

function User(props) {
  return (
    <div>
    User
    <div>username: {(props.name)}</div>
    <div>city: {(props.city)}</div>
    <div>age: {(props.age)}</div>
    <hr></hr>
    </div>
  )
}

export default User;