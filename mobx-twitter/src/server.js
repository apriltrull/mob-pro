import express from 'express';
import path from 'path';
import Twitter from 'twitter';
import http from 'http';

const app = express ();
 var client = new Twitter ({
   consumer_key :'VPqcF4WpZZsds8DAataiC6tAK',
   consumer_secret:'NuUsCc8eQEiz2dg8KSB3DBqR58qd8HLMwdTpa6eGp7vsgvptyL',
   access_token_key: '853412258415689728-mWT7y0joy97KFKbmSFnpVtVc6IbkxY0',
   access_token_secret: 'f7Oc1KduxSJ2yBjVOPQpy53lkXmhsXzSDdXfNpwD2T3EZ'

 });

 var tweet;

 var stream=client.stream('statuses/filter', {track:'cats'}, function(stream){
   stream.on('data', function(response){
     tweet = response;

      // console.log(tweet);
   });



   stream.on('error', function(error){
     throw error;
   });
 });

app.get('/stream',(req, res)=>{
  res.send(tweet);
});

app.use(express.static('src/public'));

app.get('/',(req,res)=>{
  res.sendFile('index.html');
});

app.listen(3000,()=>console.log("listening"));
