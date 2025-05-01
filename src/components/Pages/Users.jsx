import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((e)=> console.log("ERROR:", e))
        .finally(()=> setLoading(false))
    },[])
  return (
    <div>
        <h1>Users</h1>
        {loading && <p>LOADING......</p>}
        <ul> {users.map((user)=>(
            <li key={user.id}><Link to= {`/user/${user.id}`} >{user.name}</Link></li>
        ))
            }
        </ul>

    </div>
  )
}

export default Users