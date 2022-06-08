import { useState, useEffect, useRef } from 'react';
import * as usersAPI from '../../utilities/orders-user';
import { Link, useNavigate } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function EditUserProfile({ user }) {
    const userName = useRef();
    const userEmail = useRef();
    const calMax = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

        }
    }
}
