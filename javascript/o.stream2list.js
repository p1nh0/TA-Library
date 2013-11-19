inlets = 2; 
setinletassist(0,"(int/float) add number to list"); 
setinletassist(1, "(int) list size"); 
setoutletassist(0, "(list) list of size n triggerd by the input"); 
var size; 
if (jsarguments[1] >= 2) {
 size = jsarguments[1];
	}
else { size = 2; post("stream2list.js can only group lists with length >= 2");
}
clear();//initialize the list Array

// main function 
function msg_float(f) { 
	// retrocede
	for(i = 0; i < size-1; i++) {
		list[i]=list[i+1]; 
	}
	// insert new float at the end of the list 
	list[size-1] = f;  
	// send list to output
	outlet(0, list); 
}
// set list length 	
function msg_int(s) {
	if (inlet==1){
		if (s >= 2 && s!= size) { size = s; clear(); }
		else { post("stream2list.js can only group lists with length >= 2"); }
	}
	else { msg_float(s); }
}

// list Array initialization (all elements are set to 0)
function clear() {
		list = new Array(size);
	for (i = 0; i < size; i++) {
		list[i] = 0;  
	}
}