import fetch from 'node-fetch';
import assert from 'assert';


it ('should get hello', async ()=>{
    const response = await fetch('http://35.245.2.78 ');
    const text = await response.text();
    
}
)