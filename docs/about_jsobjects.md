How js code is presented as a standard o.object

#1 - make js code and save it as ("o.yourobjname.js"); 
#2 - create a new max patcher from the template "o.library.js_deployer.maxpat", located in the /templates folder. And save it with same name of the js file (ex: "o.yourobjname.maxpat")


Note: the template contains a js object - js_deployer - which will deploy a js object containing the file you've just created, whenever you create a new max object with the same name (ex: "o.yourobjname")