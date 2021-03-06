var BankAccNumber =1234;
var OTP=5456; 
    var promise =new Promise(function(resolve,reject){
        setTimeout(()=>{if(BankAccNumber==1234){
           // var OTP=5456;
            resolve('welcome')
        }else{
            reject('authentication problem')
        }},1000);
    }).then((resolve1)=>{
        console.log(resolve1);
        return new Promise(function (resolve2){
            setTimeout(()=>{console.log('verifying OTP')},1000);
            setTimeout(()=>{if(OTP==5456)
            resolve2("OTP is matched")
        },4500);
        }).then((resolve3)=>{console.log(resolve3)
        console.log('succesful Login ')});
    })