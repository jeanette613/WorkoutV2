import { useState, useEffect, useRef } from 'react';
import * as logAPI from '../../utilities/exercises-api'
import { Link, useNavigate } from 'react-router-dom';

export default function ExerciseEntry({ user, setUser }) {
    const [log, setLog] = useState(null);

    //Needs useEffect function


    /*-- Event Handlers --*/
    async function handleAddtoLog(itemId) {
        const updateLog = await logAPI.addExercisetoLog(itemId);
        setLog(updateLog);
    }

    // async function handleCheckout() {
    //     await ordersAPI.checkout();
    //     navigate('/orders');
    // }

    return (
        <div>
            <div>
                <form onSubmit={handleAddtoLog}>
                    <textarea placeholder='Exercise Name' type="text" ref={text} />
                </form>
            </div>
        </div>
    );
}