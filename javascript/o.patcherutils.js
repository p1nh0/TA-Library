// Collection of patcher utilities 
// Tiago Ângelo 05-03-2012

//INIT 
outlets = 2; 
setinletassist(0, "gettitle(), setvarname(name), getparenttitle(), findparent(), findpiece(), getvarname()");
setoutletassist(0, "(symbol) title");
setoutletassist(1, "(symbol) setname done"); 
// VARIABLES
var toplevel; // top-level patcher window title

function defer(d) {
	gettitle.immediate = d; 
	findparent.immediate = d; 
	getvarname.immediate = d; 
	}
//gettitle.immediate = 1; 
// get patcher's title
function gettitle() { 
	//thisname = this.patcher.wind.title; 
		// this statement will somehow give us the parent patcher title
	thisname = this.patcher.name; // this is the correct statement
	outlet(0, thisname); 
}
	
// get parent patcher window title
function getparenttitle() {
	parentname = this.patcher.parentpatcher.parentpatcher.wind.title; 
	outlet(0, parentname); 
}

// obsolete? (get hierarchy till top-level patcher) 
function findparent() {
	p = this.patcher.box; // patcher  
	var s = new String(); // number of subpatchers until getting to the parent patcher  
	while(p!=null) {
		p = p.patcher.box; 
		s+= "parent::"; 
	} outlet(0, s); 
}

// gets the patch hierarchy till the Piece file 
function findpiece() {
	p = this.patcher.box; // patcher  
	var s = new String(); // string four path hierarchy output   
	var pieceloc = "parent::parent::"; 
	while(p!=null) { // run until it gets to the top-level patcher (MIDP_API) 
		p = p.patcher.box; 
		s+= "parent::"; 
	} 
	s = s.slice(16); // assuming the piece file is two patches inside the top-level patcher (MIDP_API)
	// we slice "parent::parent::"(=16 characters) to the string 
	outlet(0, s); 
}

// get parent patcher scripting name
function getvarname () {
	outlet(0, this.patcher.box.varname);
	}
// get parent::parent scripting name
function getparentvarname() {
	outlet(0, this.patcher.parentpatcher.box.varname);
	}
// set the scritpting name of the parent patcher containing 'p_utils' 
function setvarname(n) {
	this.patcher.box.varname = n;
	outlet(0, n);
	a = new Array("setvarname","done"); 
	outlet(1, a.join("\t"));
	}

// get the top-level patch window title   
function gettoplevel() {
	p = this.patcher.box; 
	t = this.patcher; 
	while(p!=null) { // iterate until top-level patch
		p = p.patcher.box; // patcher
 		t = t.parentpatcher; // title 
	} 
	toplevel = new Array('toplevel', t.wind.title); 
	outlet(0, toplevel.join("\t")); 
}

// returns if this js object is inside midp.api or not! 
function isinsidemidp() { 
 	p = this.patcher.box; 
	t = this.patcher; 
	while(p!=null) { // iterate until top-level patch
		p = p.patcher.box; // patcher
 		t = t.parentpatcher; // title 
	} 
	toplevel = new Array('toplevel', t.wind.title); 
		// check for midp.api possible window titles
	if (toplevel[1] == "midp.api (presentation)" 
		|| toplevel[1] == "midp.api (unlocked presentation)"
 		|| toplevel[1] == "midp.api (unlocked)" 
		|| toplevel[1] == "midp.api") 
	{	
		//a = new Array('midp', 1); 
		//outlet(0, a.join("\t"));
		outlet(0, 'midp 1'); 
		return true; 
	} else {
			//a = new Array('midp', 0); 
			//outlet(0, a.join(' '));
			outlet(0, 'midp 0'); 
			return false;
			}
}


// outputs patcher filepath
function getfilepath(){
	outlet(0, this.patcher.filepath);
	}
function getparentpath() {
	//p = this.parentpatcher; 
	outlet(0, this.patcher.parentpatcher.filepath); 
	}