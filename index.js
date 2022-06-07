import express from 'express';
import bodyParser from 'body-parser';

const application = express();
    
application.get('/',(req,res)=>{res.send("Hello")});

application.listen(3000,()=>{console.log("listening......")});

application.use (bodyParser.json());

application.post('./login', (loginRequest, loginResponse)=> {
    const Username = loginRequest.body.userName;

    const password = loginRequest.body.password;

    if(userName=="buha@yahoo.com" && password=="Longman2@"){
        loginResponse.status(200);
        loginResponse.send({status:"LoggedIn"});
        
    }else{
        loginResponse.status(403);
        loginResponse.send({status:"Failedlogin"})
    }
});