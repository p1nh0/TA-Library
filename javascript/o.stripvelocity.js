//TA160512
// strip velocities from a note-velocity list 

outlets = 2; 
setinletassist(0, "note-velocity list"); 
setoutletassist(0, "note list");
setoutletassist(1, "velocity list"); 

list.immediate = 1;
msg_int.immediate = 1; 
function list() 
{
	l = arrayfromargs(messagename, arguments); 
	noteList = new Array();
 	velocityList = new Array(); 
	j=0;
	for (i=0; i<l.length; i+=2)
 	{
		noteList[j] = l[i];
		velocityList[j] = l[i+1]; 
		j++; 
	}
	outlet(0, noteList); 
	outlet(1, velocityList); 
}

//bypass integers 
function msg_int(num) 
{
	outlet(0, num);
 	outlet(1, -1); 
}