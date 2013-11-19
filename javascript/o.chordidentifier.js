var input; // our note(0~11) input list
var d = new Dict("chords-dict"); // get a chord list dictionary (available w/ Open Instruments framework)
var s = new String(d.getkeys()); // string to splint into array
var a = new Array; // array with chord names to get their respective chord notes 
a = s.split(","); // string to array 
var c = new Boolean; // false- no match; true - match found   

outlets = 2;  
setoutletassist(1, "chord name");
setoutletassist(0, "chord notes"); 
setinletassist(0, "input note {0~11} list"); 

// MAIN 
function list() 
{
	input = arrayfromargs(arguments); //get arguments from list into an array 
	var i = 0; // counter 
	c = false;  
	while(c!=true)
	{
		if(input.toString()!=d.get(a[i]).toString())
		{
			if(i<a.length-1){ i++; } 
			else
			{
				c = true; 
				outlet(1, "no-match");
 				outlet(0, -1);
			}	
 		} 
		else 
		{
			outlet(1, a[i]);
			outlet(0, d.get(a[i]));
			c = true;
		}
	}
	
}
