/***************************Open-Library, by p1nh0***************************/ 

var defer = 0; // 0- high priority thread, 1- low priority thread
declareattribute("defer", null, null, 1); 

setinletassist(0, "(int/float) radians"); 
setoutletassist(0, "(float) degrees");

// set to execute on high-priority thread by default (defer = 0)
msg_float.immediate = 1 - defer; 
function msg_float()
{
	outlet(0, arrayfromargs(messagename, arguments) * (180./Math.PI));  	
}
