/*In promise one error occur, then other resolve o/p will also cancelled,  In promise.all also give error untill all thepromise get success .
overcome the problem we use catch for every promise in this case so we got a success mesage and failure message also */

var EmployeeId =1234;
var OTP=345
    var promise =new Promise(function(resolve,reject){
        setTimeout(()=>{if(EmployeeId==1234){
            resolve('welcome')
        }else{
            reject('authentication problem')
        }},1000);
    })
    var promise2=new Promise(function(resolve,reject){
        if (OTP==3453){
            resolve('Hello')
        }else{
            reject(new Error)
        }
    })
    Promise.all([promise.catch(console.log),promise2.catch(console.log)])
    .then((resolve)=>{console.log(resolve)}
    )