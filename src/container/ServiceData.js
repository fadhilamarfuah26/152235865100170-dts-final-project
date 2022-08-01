import {db} from '../config/firebase';
import {collection} from 'firebase/firestore';

const userCollectionRef = collection(db, "user");
const getAll = () => {return userCollectionRef};
const create = (data) => {return userCollectionRef.add(data)};
const update = (id, value) => {return db.doc(id).update(value)};
const remove =  (id) => {return db.doc(id).delete()};

const ServiceData = {
    getAll, create, update, remove
};

export default ServiceData;