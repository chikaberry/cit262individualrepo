
import {login} from '../utils/login.js';

it ('should get login token', async ()=>{
    const loginRequest = {
        userName:"gboy@gmail.com",
        password: 'P@ssw0rd',
    }
    await login(loginRequest);
})