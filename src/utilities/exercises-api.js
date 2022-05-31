import sendRequest from './send-request';

const BASE_URL = '/api/exercises';

// Retrieve exercise history of logged in user
export function getLog() {
    return sendRequest(`${BASE_URL}/log`);
}

// Add exercise to log
export function addExercisetoLog(itemId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/log/item/${itemId}`, 'POST');
}
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}