const express = require('express');
const app = express();
const fs = require("fs");
const url = require("url");

var PORT = process.env.PORT || 3000;
const startPath = `${__dirname}`;

app.get(["/","/index.html", "/index"], (req,res)=>{

    fs.readFile(startPath + '/index.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/404","/404.html"], (req,res)=>{

    fs.readFile(startPath + '/404.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/about","/about.html"], (req,res)=>{

    fs.readFile(startPath + '/about.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/contact","/contact.html"], (req,res)=>{

    fs.readFile(startPath + '/contact.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/projects","/projects.html"], (req,res)=>{

    fs.readFile(startPath + '/projects.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/skills","/skills.html"], (req,res)=>{

    fs.readFile(startPath + '/skills.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/eduportal","/eduportal.html"], (req,res)=>{

    fs.readFile(startPath + '/eduportal.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/store","/store.html"], (req,res)=>{

    fs.readFile(startPath + '/store.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/medical","/medical.html"], (req,res)=>{

    fs.readFile(startPath + '/medical.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/vocab","/vocab.html"], (req,res)=>{

    fs.readFile(startPath + '/vocab.html', "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
          }
    }); 
})

app.get(["/covid","/covid.html"], (req,res)=>{

      fs.readFile(startPath + '/covid.html', "utf-8", (err, data) => {
            if (err) {
                  console.log(err);
                  res.redirect('/404');
            }
            else
            {
                  res.writeHead(200, { "Content-type": "text/html" });
                  res.end(data);
            }
      }); 
})

// app.get(["/test","/test.html"], (req,res)=>{

//       fs.readFile(startPath + '/test.html', "utf-8", (err, data) => {
//             if (err) {
//                   console.log(err);
//                   res.redirect('/404');
//             }
//             else
//             {
//                   res.writeHead(200, { "Content-type": "text/html" });
//                   res.end(data);
//             }
//       }); 
// })

app.get([/\.(bin)$/i,/\.(gltf)$/i,/\.(glb)$/i], (req,res)=>{
      fs.readFile("./" + req.originalUrl, (err, data) => {
            if (err) {
                  console.log(err);
                  res.redirect('/404');
            }
            else
            {
                  res.writeHead(200, { "Content-type": "application/javascript" });
                  res.end(data);
            }
      }); 
})

app.get(/\.(css)$/i, (req,res)=>{
    fs.readFile(startPath + req.originalUrl, "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "text/css" });
                res.end(data);
          }
    }); 
})

app.get(/\.(jpg|jpeg|png|gif|mp4|ogg)$/i, (req,res)=>{

    console.log(req.originalUrl);

    fs.readFile(startPath + req.originalUrl, (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else{
                res.writeHead(200, { "Content-type": "image/png" });
                res.end(data);
          }
    });
})

app.get(/\.(js)$/i, (req,res)=>{
    fs.readFile(startPath + req.originalUrl, (err, data) => {
          if (err||req.originalUrl === "/server.js") {
                console.log(err);
                res.redirect('/404');
          }
          else{
                res.writeHead(200, { "Content-type": "application/javascript" });
                res.end(data);
          }
    });
})

app.get(/\.(json)$/i, (req,res)=>{
    fs.readFile(startPath + req.originalUrl, "utf-8", (err, data) => {
          if (err) {
                console.log(err);
                res.redirect('/404');
          }
          else
          {
                res.writeHead(200, { "Content-type": "application/json" });
                res.end(data);
          }
    }); 
})

app.get('*', function(req, res){
    res.writeHead(302, { Location: "404" });
    res.end();
});

app.put('*', function(req, res){
    res.end('No put pathway created.');
});

app.post('*', function(req, res){
    res.end('No post pathway created.');
});

app.delete('*', function(req, res){
    res.end('No delete pathway created.');
});

app.listen(PORT, () => {
    console.log("Listening for reqests on port 3000.");
});