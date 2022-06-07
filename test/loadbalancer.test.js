import fetch from 'node-fetch';
import assert from 'assert';


it ('should get hello', async ()=>{
    const response = await fetch('http://35.194.74.149');
    const text = await response.text();
    assert.equal(text,"Hello");
}
)