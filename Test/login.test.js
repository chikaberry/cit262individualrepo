
import {login} from '../utils/login.js';

it ('should get login token', async ()=>{
    const loginRequest = {
        userName:"buha@yahoo.com",
        password: 'Longman2@',
    }
    await login(loginRequest);
})