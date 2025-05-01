import {useParams, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function User() {
    const {id} = useParams();

    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((e)=> console.log("ERROR :", e))
    }, [id])
  return (
   

    <div>
        <h3>User Details</h3>
        <p>
            <code>{JSON.stringify(user)}</code>
        </p>
        <br />
        <br />
        <br />

        <Link to={`/user/${parseInt(id) +1}`}> Next User ({parseInt(id) +1})</Link>

    </div>
  )
}

export default User