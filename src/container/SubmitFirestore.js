import { useState, useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../config/firebase';

const SubmitFirestore = () => {
    const [user, setUser] = useState([]);
    const userCollectionRef = collection(db, "user")

    useEffect (() => {
        const getUser = async () => {
          const data = await getDocs(userCollectionRef);
          setUser(data.Docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getUser();
      }, [userCollectionRef]);
   
      return (
        <div>{user.map((users) => 
            {return <div>halo {users.name} </div>})};
        </div>
    )
        }


export default SubmitFirestore;