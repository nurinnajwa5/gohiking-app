//import library
const { app, BrowserWindow } = require('electron');
const fs = require('fs') //import bila guna textfile
const path = require('path') //import untuk electron directory

var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var btnUpdate = document.getElementById('btnUpdate')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files') //nama folder untuk letak file txt tu

btnRead.addEventListener('click', function(){  //read contents of the created text file
  let file = path.join(pathName, fileName.value)
  var txtfile = document.getElementById("fileName").value
  fs.readFile(file, function(err, data){ 
    if(err){
        alert("There is no file named " + txtfile)
      return console.log(err)
    }
    fileContents.value = data
    console.log("The file was read!")
  })
  
})

btnUpdate.addEventListener('click', function(){  //update text file when user click UPDATE button
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
      if(err){
        return console.log(err)
      }
      var txtfile = document.getElementById("fileName").value
      alert(txtfile + " text file was updated")    
      console.log("The file was updated")
      fileName.value = ""
      fileContents.value = ""
    
    })
    
  })

  btnDelete.addEventListener('click', function(){  
    let file = path.join(pathName, fileName.value)
    var txtfile = document.getElementById("fileName").value
    fs.unlink(file, function(err){ 
      if(err){
          alert("There is no file named " + txtfile)
        return console.log(err)
      }
      
      alert(txtfile + " text file was deleted")
      fileName.value = ""
      fileContents.value = ""
      console.log("The file was deleted!")
    })
    
  })
