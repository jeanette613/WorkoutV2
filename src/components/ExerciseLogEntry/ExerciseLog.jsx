import { useState, useEffect, useRef } from 'react';
import * as logAPI from '../../utilities/exercises-api'



export default function ExerciseEntry({ user, setUser }) {
    const [log, setLog] = useState(null);
    const type = useRef()
    const group = useRef()

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
                    <p>Select Type of Exercise</p>
                    <label>
                        <select ref={type}>
                            <option value='Resistance'>
                                Resistance
                            </option>
                            <option value='Cardio'>
                                Cardio
                            </option>
                            <option value='Calisthenics'>
                                Calisthenics
                            </option>
                        </select>
                    </label>
                    <label>
                        <select ref={group}>
                            <option value='Upper Body'>
                                Upper Body
                            </option>
                            <option value='Core'>
                                Core
                            </option>
                            <option value='Legs'>
                                Legs
                            </option>
                        </select>
                    </label>
                    <textarea placeholder='Exercise Name' type="text" />
                    <div className='submit-button'>
                        <input type='submit' value="Add Exercise Entry" />
                    </div>
                </form>
            </div>
        </div>
    );
}