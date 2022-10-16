import React from 'react'
import PropTypes from "prop-types";

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
User.PropTypes = {
  data : PropTypes.exact({
    name : PropTypes.string,
    city : PropTypes.string,
    age : PropTypes.number,
  }),  
friends: PropTypes.array
}
export default User;