import { db } from '../firebase'
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // uploadProfile,
    updateProfile,
    signOut,
} from "firebase/auth"
import { useState, useEffect } from 'react'