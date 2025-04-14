import axios from 'axios'
import { JSX, useEffect, useState } from 'react'
import styles from './API.module.css'

interface User {
    id: number;
    name: string;
    username: string
    email: string
}

export default function API() {
    const [users, setUsers] = useState([] as User[])

    async function getUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }

    useEffect(() => {
        getUsers();
    }, [])
    
    function createUsersHtml(): JSX.Element[] {
        return users.map(user => {
            return ( 
                <div className={styles.user} key={user.id}>
                    <p className={styles.bold}>id: <span className={styles.value}>{user.id}</span></p>
                    <p className={styles.bold}>name: <span className={styles.value}>{user.name}</span></p>
                    <p className={styles.bold}>username: <span className={styles.value}>{user.username}</span></p>
                    <p className={styles.bold}>email: <span className={styles.value}>{user.email}</span></p>
                </div>
            )
        })
    }
    
    return (
        <div className={styles.container}>
            { createUsersHtml() }
        </div>
    )
}