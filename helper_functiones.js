// import all modules require
const dns = require('dns');
const fs = require('fs');
const cowsay = require('cowsay');



// complete the functions.

function getIp(website_name) {
  dns.resolve4(website_name, (err, addresses)=>{
    if(err){
        console.log("Websitename or Url is invalid.")
    }else{
        console.log(`IP address is ${addresses}`);
    }
  })
}

function writeToFile(filename, content) {
    fs.writeFile(filename, content, (err)=>{
        if(err){
            console.log('Error writing to the file.')
        }else{
            console.log(`Content successfully written to ${filename}.`)
        }
    })
  
}

function readAFile(filename) {
  fs.readFile(filename, 'utf-8', (err, data)=>{
    if(err){
        console.log('No such file or directory found.')
    }else{
        console.log(data);
    }
  })
}

function deleteAFile(filename) {
 fs.unlink(filename, (err)=>{
    if(err){
        console.log('No such file to Delete.');
    }else{
        console.log(`File ${filename} is deleted.`)
    }
 })
}

function makeCowSay(content) {
  const cowSays = cowsay.say({text:content});
  console.log(cowSays)
}

// exports all functions

module.exports = {getIp, writeToFile, readAFile, deleteAFile, makeCowSay}
