const express = require('express')
const app = express()
const fs = require('fs')

var seq = 0
app.get('/update', function(req, res) {

	fs.appendFile('log.txt', JSON.stringify(req.query)+"\n", function(err){
		if(err) throw err
		res.end("Got " + String(seq++) + " " + JSON.stringify(req.query))
	});
})

app.get('/get', function(req, res){
	var ans = "";
	var arr = fs.readFileSync('log.txt').toString().split("\n");

	for(var i=0;i<arr.length; i++)
	{
		ans = ans + arr[i] + '<br>';
		console.log(arr[i]);
	}
	res.send(ans);
})

app.listen(3000, () => console.log('App listening on port 3000!'))
