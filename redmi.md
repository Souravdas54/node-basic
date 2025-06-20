node.js code run => 
node test01 (click = 'enter' ) or node test01.js (click = 'enter' )

install package.json file for (NODE.Js) = npm init (click 'enter') then 'enter -> enter -> enter -> enter . . . . . . 
all done .

open package.json file - find this 'scripts'
add this => "start": "node test01.js"

open the terminal and type this - npm start

//

export function = have a two pages test01(mian page) & test02
write function test02.js page then export test01.js page and run on terminal.
so that , we use ' module.exports = (your function name)
catch this function in test01.js page , so we type is - const any-name =  require("./your file name").

If we use two function on a page , then we will use them as objects.
such as - module.exports = { function name 1, function name 2 };

we will go to the main page(test01.js).
we will distructure it ,like - const {function name 1, function name 2} = require("./your file name").