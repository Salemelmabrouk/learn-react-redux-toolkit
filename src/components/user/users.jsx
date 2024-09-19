import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
 

const Users = () => {
  const usersList = useSelector(state => state.utilisateur.users)
  const dispatch = useDispatch()
  return (
    <>
      <h1>List of Users</h1>
      {usersList.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <button onClick={()=>dispatch({type:'myUser/deleteUser',payload:user.id})}>delete</button>
        </div>
      ))}
    </>
  )
}

export default Users


