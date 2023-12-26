import {
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';

import { firebaseApp } from '../../../configs/firebase';

const registrationForm = document.querySelector('.registration-form');

const auth = getAuth(firebaseApp)


const onSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);

    createUserWithEmailAndPassword(auth, data.get('email'), data.get('password'))
        .then((data) => {
            console.log(data);
            window.location.href = '/';
        }).catch((err) => {
            console.error(err)
        })
}

registrationForm.addEventListener('submit', onSubmit)