const express = require('express');
const app = express();
app.use(date=(req,res,next)=>{
  let requestDate=new Date();
  let requestDay= requestDate.getDay();
  let requestHours= requestDate.getHours();
  console.log(requestDate,requestDay,requestHours)
  if(requestDay<=5 && requestHours>=9 && requestHours<=17){
   console.log('availble')
   res.sendFile(__dirname + "/routes")
   }
  else
  {
   console.log('not available')
   res.sendFile(__dirname + "/routes/error.html")
  }

})

app.get('/', function(req, res) {
  console.log("reached root!");
  res.redirect("/home.html");
});

app.use(express.static(__dirname + "/routes"));

app.listen(5000, (err)=>{
  if(err) console.log('server not running')
	else console.log("server running in port 5000")
});
