import React,{ useEffect, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import Spinner from '../layout/Spinner'

function UserResults() {
    const {users, loading, fetchUsers} = useContext(GithubContext)

    useEffect(() => {
        fetchUsers()
    },[])

    

  if(!loading){

      return (
        <div>
            {users.map(user => (
                <h3 key={user.id}>{user.login}</h3>
            ))}
        </div>
      )
  }  else {
      return <Spinner/>
  }
}

export default UserResults