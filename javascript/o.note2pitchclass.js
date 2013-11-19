//TA160512
// convert a note number or a list of notes(midi 0~127) into a pitch-class

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

function msg_int(num)
{
	pitchclass = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); 
	pitchclass[num%12] = 1; 
	outlet(0, pitchclass);
}
