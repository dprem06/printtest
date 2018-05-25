var express = require('express')
var app = express()
var printer = require("node-thermal-printer");

app.get('/', function(req,res){
    printer.init({
        type: 'epson',                                     // Printer type: 'star' or 'epson'
        interface: '/dev/usb/lp0',                        // Printer interfac
    });
    
    printer.alignCenter();
    printer.println("Hello world");
    printer.cut();
    printer.execute(function(err){
        if (err) {
        console.error("Print failed", err);
        } else {
        console.log("Print done");
        }
    });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))