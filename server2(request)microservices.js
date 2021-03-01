const express = require('express')
const request=require('request')
const app = express();
//const port = process.env.PORT || 3008;
const port =5026;
app.all('/', function (req, res) {

    request.get("http://localhost:2002/",(error,response,body) => {
    if(error){
        console.log(error)
        // return console.dir(error);
    }
        let temp=(JSON.stringify(body));
        console.log("Success",temp);
        res.send(temp);
    })

  })


app.listen(port, function() {
   console.log('Server started on port: ' + port);
}); 