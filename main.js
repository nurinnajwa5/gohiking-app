//import library
const { app, BrowserWindow } = require('electron');
const fs = require('fs') //import bila guna textfile
const path = require('path') //import untuk electron directory

var btnCreate = document.getElementById('btnCreate')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files') //nama folder untuk letak file txt tu

btnCreate.addEventListener('click', function(){  //creating text file when user click CREATE button
  let file = path.join(pathName, fileName.value) //param1: file directory, param2: file name
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
        alert("The system is unable to create file")
      return console.log(err)

    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was created")    
    console.log("The file was created")
    fileName.value = ""
    fileContents.value = ""
  
  })
  
})
