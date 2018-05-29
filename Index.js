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
  extraSpecialCharacters:{'£':163}                  // Adds additional special characters to those listed in the config files
});
 
printer.isPrinterConnected( function(isConnected){ console.log('Connected') } )     // Check if printer is connected, callback passes bool of status
printer.execute( function(err){ } );                       // Executes all the commands. Optional callback returns null if no error, else error message
printer.raw(new Buffer("Hello world"), function(err){ } ); // Print instantly. Optional callback returns null if no error, else error message
printer.print("Hello World");                              // Append text
printer.println("Hello World");                            // Append text with new line
printer.cut();                                             // Cuts the paper (if printer only supports one mode use this)
printer.partialCut();                                      // Cuts the paper leaving a small bridge in middle (if printer supports multiple cut modes)
printer.beep();                                            // Sound internal beeper/buzzer (if available)
printer.upsideDown(true);                                  // Content is printed upside down (rotated 180 degrees)
 
printer.bold(true);                                 // Set text bold
printer.invert(true);                               // Background/text color inversion
printer.underline(true);                            // Underline text (1 dot thickness)
printer.underlineThick(true);                       // Underline text with thick line (2 dot thickness)
printer.drawLine();                                 // Draws a line
printer.newLine();                                  // Insers break line
 
printer.alignCenter();                              // Align text to center
printer.alignLeft();                                // Align text to left
printer.alignRight();                               // Align text to right
 
printer.setTypeFontA();                             // Set font type to A (default)
printer.setTypeFontB();                             // Set font type to B
 
printer.setTextNormal();                            // Set text to normal
printer.setTextDoubleHeight();                      // Set text to double height
printer.setTextDoubleWidth();                       // Set text to double width
printer.setTextQuadArea();                          // Set text to quad area
 
printer.leftRight("Left", "Right");                 // Prints text left and right
printer.table(["One", "Two", "Three"]);             // Prints table equaly
printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
  { text:"Left", align:"LEFT", width:0.5 },
  { text:"Center", align:"CENTER", width:0.25, bold:true },
  { text:"Right", align:"RIGHT", width:0.25 }
]);
 
print.clear();                                      // Clears printText value
print.getText();                                    // Returns printer buffer string value
print.getBuffer();                                  // Returns printer buffer
print.getWidth();
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))