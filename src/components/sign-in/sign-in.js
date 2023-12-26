import {
    signInWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';

import { firebaseApp } from '../../../configs/firebase';

const signInForm = document.querySelector('.sign-in-form');
const preloader = document.querySelector('.preloader');

const auth = getAuth(firebaseApp)


const onSubmit = (evt) => {
    preloader.style.display = 'block'
    evt.preventDefault();
    const data = new FormData(evt.target);

    signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
        .then((data) => {
            console.log(data);
            window.location.href = '/';
        }).catch((err) => {
            console.error(err)
        }).finally(() => {
            preloader.style.display = 'none'
        })
}

signInForm.addEventListener('submit', onSubmit)