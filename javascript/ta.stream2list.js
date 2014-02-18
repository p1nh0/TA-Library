/*******************************TA1712013*******************************/
// similar to 'zl stream' but outputs a list 
// whenever an input number is received
/***********************************************************************/

//INIT
inlets = 2; 
setinletassist(0,"(int/float) add number to list"); 
setinletassist(1, "(int) list size"); 
setoutletassist(0, "(list) list of size n triggerd by the input"); 

var lsize = 2; //list size
var dir; //list direction (positive numbers for R->L and neg. numbers for L->R output)
var defer = 0; 
declareattribute("defer", null, null, 1);
var initial = 0;
declareattribute("initial", null, "setinitial", 1);
var verbose = 1;
declareattribute("verbose", null, null, 1);

if (Math.abs(jsarguments[1]) >= 2) { lsize = Math.abs(jsarguments[1]); } 
else { 
	lsize = 2; //default lsize for incompatible list sizes (-1, 0, 1)
	if (verbose == 1) { post("stream2list.js can only group lists with length >= 2"); } 
}
if (jsarguments[1] > 0) { dir = 1; }
else { dir = -1; }
	
clear(); //initialize the list Array
//INIT


//STREAM FUNCTION 
msg_float.immediate = 1 - defer; 
function msg_float(f) { 
	switch(dir) {
		case 1 : 
			// retrocede
			for(i = 0; i < lsize-1; i++) {
				list[i]=list[i+1]; 
			}
			// insert input number at the end of the list 
			list[lsize-1] = f;
		break;
		
		case -1 : 
			// forward
			for(i = lsize-1; i > 0; i--) {
				list[i]=list[i-1]; 
			}
			// insert input number at the beginning of the list 
			list[0] = f;
  		break;
		
		default:
		break;
	}
	// send list to output
	outlet(0, list); 
}
//STREAM FUNCTION 

// set list length or send int to msg_float() depending on the triggerd inlet
msg_int.immediate = 1 -defer;  	
function msg_int(s) {
	if (inlet==1){
		if (s >= 2 && s!= lsize) { lsize = s; clear(); }
		else { if (verbose == 1){post("stream2list.js can only group lists with length >= 2");} }
	}
	else { msg_float(s); }
}

// list Array initialization (all elements are set to variable "initial")
clear.immediate = 1 - defer;
function clear() {
		list = new Array(lsize);
	for (i = 0; i < lsize; i++) {
		list[i] = initial;  
	}
}
// explicit setter, because clear() must be called
function setinitial(i) {
	initial = i;
	clear();
}