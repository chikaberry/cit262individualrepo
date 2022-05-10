
// allows you use thew fetch liabray


import fetch from 'node-fetch'; 

const login = async ({userName, password}) => {
    
    const options = {
        method: 'post',
        body: JSON.stringify({userName, password}),
        headers:{'Content-Type':'application/json', 'Accept':'text'}
    
    
    }
    console.log(options.method);

    const apiResponse = await fetch('https://dev.stedi.me/login',options);
    const loginResponse = await apiResponse.text();
    
    return loginResponse;
}
export{login};

/*c = continous
I = Integration or contribution
c= CONTINOUS
D = DEPLOYMENT OR DELIVERY 
IS THE WHOLE PURPOSE OF PIPELINBE SCRIPT */