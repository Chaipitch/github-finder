import React,{createContext, useState} from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
            const res = await fetch(`https://api.github.com/users`, {
                headers: {
                    Authorization: `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`
                }
            })
            const data = await res.json()
            setUsers(data)
            setLoading(false)
        }

    return <GithubContext.Provider value={{
        users, loading, fetchUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;