/***************************Open-Library, by p1nh0***************************/ 

var defer = 0; // 0- high priority thread, 1- low priority thread
declareattribute("defer"); 

setinletassist(0, "(int/float) degrees"); 
setoutletassist(0, "(float) radians");

// set to execute on high-priority thread by default (defer = 0)
msg_float.immediate = 1 - defer; 
function msg_float()
{
	outlet(0, arrayfromargs(messagename, arguments) * (Math.PI/180.));   	
}
