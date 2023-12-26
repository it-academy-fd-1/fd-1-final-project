import './auth.scss'
import { firebaseApp } from '../../../configs/firebase';
import {
    onAuthStateChanged,
    getAuth,
    signOut,
} from 'firebase/auth';

const auth = getAuth(firebaseApp)

const userName = document.querySelector('.auth__user-name');
const btnLogOut = document.querySelectorAll('.auth__logout');

const onStateChanged = (user) => {
    if (user) {
        userName.textContent = `Hi ${user.email}`
    } else {
        userName.innerHTML = `Hi, user <br /> let's get stated`
    }
}

const onError = (error) => {
    console.error(error)
}

onAuthStateChanged(auth, onStateChanged, onError)

btnLogOut.forEach((element) => {
    element.addEventListener('click', () => {
        signOut(auth)
    })
})

