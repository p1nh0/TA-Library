// TA120512
// Collection of list utilities 

// INIT 
// io
inlets=2; 
outlets=2; 

//variables
var fsel; // function selector 
var token=0; // a token, used as a list processing parameter (it can be anything int, float, symbol...)
var list = new Array(); 
//(this object is similar to 'zl', in wich it needs an argument to define which function to execute)

// get arguments 
if (jsarguments.length >=2) { 
	fsel = jsarguments[1]; // the argument after js name is the function selector 
	if (jsarguments.length ==3) { 
		token = jsarguments[2]; // the argument after js name is the function selector 
	}
} else{ post("wrong arguments\n"); }

// MAIN 
anything.immediate=1; 
function anything() 
{
	if(inlet==0) {
		switch(fsel){
			// SLICE lists 
			case "slice": 
				list = arrayfromargs(messagename, arguments); 		 	
				l = list; 
				list = list.slice(token, list.length);
				checkreservedwords(); 
				outlet(1, list); 
				outlet(0, l.slice(0, token));
				break; 
			
			default: 
				//post("nothing happened"); 
				break; 
		}
	} else { token = arrayfromargs(messagename, arguments); } // 
}

checkreservedwords.local=1; 
function checkreservedwords() 
{
	if(list == "list" || list == "symbol" || list == "float" || list == "int")
	{
		list = list.toString().toUpperCase(); 
	}
}