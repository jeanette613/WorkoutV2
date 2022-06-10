import { useState, useRef } from 'react';
import * as usersService from '../../utilities/users-api'



export default function EditUserProfile({ user, setUser }) {
    const userName = useRef();
    const userEmail = useRef();
    const calMax = useRef();
    const [profile, setProfile] = useState({})
    const [error, setError] = useState('');

    function handleChange(evt) {
        setProfile({ ...profile, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const updatedUser = await usersService.editUser(user._id);
            setUser(updatedUser);
        } catch {
            setError('User Not Updated');
        }
    }

    return (
        <main className='editUser'>
            <div>
                <input defaultValue={setProfile.userName} type="text" ref={userName} onChange={handleChange} />
                <input defaultValue={setProfile.userEmail} type="text" ref={userEmail} onChange={handleChange} />
                <input defaultValue={setProfile.calMax} type="text" ref={calMax} onChange={handleChange} />
            </div>
            <div>
                <button onClick={handleSubmit} className="button">Update Profile</button>
            </div>
        </main>
    )

}