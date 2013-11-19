//TA160512
// Compares an input note with a provided note list, if the input note doesn't match with any note in the list 
// this object will output the closest note from the list (according to the findmode) 


var scale = new Array("-1"); // scale (or note list) Array (-1 means it is empty) 
var diffneg = new Array(); // negative diferences
var diffpos = new Array(); // positive differences 
var mode = 0; // find mode (default = 0 ->random) 
var find = true; // used to stop further searches whenever there is a match 
var diffs = 0; // -1 : negative difference only(input note is below all notes in the scale); +1 : positive diff only; 0 - negative&&positive diff

inlets=2;
setinletassist(0, "note: (int) input note to compare with scale from right inlet\n"); 
setinletassist(1, "scale: (int-list) note list\n"); 
setoutletassist(0, "closest note: (int) the closest note to the provided scale\n"); 

// findmode argument
if(jsarguments.length ==2){ findmode(jsarguments[1]); }
	
// SET SCALE through right inlet
function list() 
{
	if(inlet==1) { scale = arrayfromargs(messagename, arguments); }
}

// FIND THE CLOSEST NOTE 
function msg_int(note) 
{
	if(inlet==0) 
	{ 	
		if (scale!=-1) 
		{	
			find = true; 
			diffneg=new Array(); 
			diffpos=new Array();
			for(i=0; i<scale.length; i++) 
			{
				d = note - scale[i]; 
				//ROUND 1: if the note matches any note in the scale, output that note and stop further searches 
				if (d == 0) { outlet(0, note); find = false; i = scale.length; }
				else // else split into positive and negative differences
				{
					if (d>0) { diffpos.push(d); }
				 	else 	 { diffneg.push(d); }
				}
			} 
		// FIND 
		if (find==true){ //ROUND 2: if there is only positive or negative differences 
						//meaning, if the input note is below or above all notes in the scale output just output the closest note
			diffs = 0;
			if (diffneg.length<1 && diffpos.length>0) 
			{ 
				diffpos.sort(ascending); 
				outlet(0, note-diffpos[0]); 
				find == false; 
			} else { diffneg.sort(descending); diffs -=1; }
			
			if (diffpos.length<1 && diffneg.length>0) 
			{  
				diffneg.sort(descending); 
				outlet(0, note+diffneg[0]); 
				find == false; 
			} else{diffpos.sort(ascending); diffs +=1; }
			if (diffs < 0) 
			{
				outlet(0, note-diffneg[0]); 
				find = false; 
			}
			if (diffs > 0) 
			{
				outlet(0, note-diffpos[0]);
				find = false; 
			}
		}
			if (find==true){ // ROUND 3: if there are both positive and negative differences 
							//meaning, if the input note is in between the notes of our scale use the findmode to get the closest note
				switch(mode)
				{
					case -1: // favor note downwards   
						if(Math.abs(diffneg[0]) < diffpos[0]) { outlet(0, note-diffneg[0]); }
						else{ outlet(0, note-diffpos[0]); }
						break; 
					case 1: // favor note upwards 
						if(Math.abs(diffneg[0]) > diffpos[0]) { outlet(0, note-diffpos[0]); }
						else{ outlet(0, note-diffneg[0]); }
						break; 
					case 0: // random (either up or down) 
						if (Math.random() >= 0.5) { outlet(0, note-diffpos[0]); }
						else{ outlet(0, note-diffneg[0]); }
						break; 
					default:
						break; 
				}
			}
		} else{ post("findclosesnote.js: missing a scale list in right inlet\n");}
	}
}

function findmode(m) 
{
	if (m>-2 && m<2)
	{
		mode = m; // -1: downwards, 1: upwards, 0- random (upwards, downards)
  	} else {post("findclosestnote.js: wrong argument!\n"); }
}

// functions for Array.sort() method 
ascending.local=1;
function ascending(a, b)
{
	return (a-b); 
}
descending.local=1; 
function descending(a, b)
{
	return (b-a); 
}