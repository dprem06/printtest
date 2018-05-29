var express = require('express')
var app = express()
var printer = require("node-thermal-printer");

app.get('/', function(req,res){
    printer.init({
  type: 'star',                                     // Printer type: 'star' or 'epson'
  interface: '/dev/usb/lp0',                        // Printer interface
  characterSet: 'SLOVENIA',                         // Printer character set
  removeSpecialCharacters: false,                   // Removes special characters - default: false
  replaceSpecialCharacters: true,                   // Replaces special characters listed in config files - default: true
});
 
printer.isPrinterConnected( function(isConnected){ console.log('Connected') } )     
printer.execute( function(err){  

printer.raw(new Buffer("Hello world"), function(err){
    console.log(err);
 }); 

});
      res.send({"Sucess":true});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))