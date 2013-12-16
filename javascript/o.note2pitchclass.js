//TA160512
// convert a note number or a list of notes(midi 0~127) into a pitch-class

var defer = 0; 
declareattribute("defer", null, null, 1);

list.immediate = 1 - defer;
function list() 
{
	l = arrayfromargs(messagename, arguments); 
	pitchclass = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); 
	if (l!=-1) { // -1 sends an empty pitch-class through the outlet
		for (i=0; i<l.length; i++)
 		{
			pitchclass[l[i]%12] = 1; 
		}
	}
	outlet(0, pitchclass);
}

list.immediate = 1 - defer;
function msg_int(num)
{
	pitchclass = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); 
	pitchclass[num%12] = 1; 
	outlet(0, pitchclass);
}
