// TiagoÂngelo2014©

// JS code to manipulate(insert/replace) lists by index 
var mode = "insert"; //insert/replace
var left_index, right_index; //indexes for left/right input list manipulation 
// ex: "insert right_index 4 5" at "left_index 6 7"

//mode 
function mode(m) {
	if(m=="insert" || m=="replace") { mode = m; }
	else{ post("ta.listslots — wrong mode")} 	
}


