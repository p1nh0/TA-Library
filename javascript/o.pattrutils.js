// Collection of pattr utilities 
// Tiago Ângelo 05-03-2012

//INIT 
outlets = 2; 
setinletassist(0, "gettitle(), setvarname(name), getparenttitle(), findparent(), findpiece(), getvarname(), getfullpath()");
setoutletassist(0, "(symbol) title");
setoutletassist(1, "(symbol) setname done"); 
// VARIABLES
var toplevel; // top-level patcher window title
var d = 0; // defer 
declareattribute("defer", "get_defer", "set_defer", 1); 

function set_defer(d) {
	gettitle.immediate = 1-d; 
	findparent.immediate = 1-d; 
	getvarname.immediate = 1-d;
 	gethierarchy.immediate = 1-d; 
}
function get_defer(d) {
	return d; 
}

	
//gettitle.immediate = 1; 
// get patcher's title
function gettitle() { 
	//thisname = this.patcher.wind.title; 
		// this statement will somehow give us the parent patcher title
	thisname = this.patcher.name; // this is the correct statement
	outlet(0, thisname); 
}
	
// get parent patcher name/window title
function getparenttitle() {
	parentname = this.patcher.parentpatcher.name; 
	if(!parentname){
		parentname = this.patcher.parentpatcher.parentpatcher.wind.title; 
	}
	outlet(0, parentname); 
}

// get hierarchy till top-level patcher
function findparent() {
	p = this.patcher.box; // patcher  
	var s = new String(); // number of subpatchers until getting to the parent patcher  
	while(p!=null) {
		p = p.patcher.box; 
		s+= "parent::"; 
	} outlet(0, s); 
}

// get hierarchy namespaces 
function gethierarchy(m) 
{
	var s = new Array(); //patcher scriptingnames Array by hierarchy   
	if (m == 1) { h = this.patcher.parentpatcher; } 
	else{ h = this.patcher; }
	i = 0; 
	while (h.box!=null){
		// if the object has no scripting name, pick the object's name 
		if (h.box.varname != "") { s[i] = h.box.varname; }
		else { 
			if (h.getattr("name") != null){
				s[i] = h.getattr("name"); 
			} else { s[i] = h.wind.title; }
		}
		//else { s[i] = h.wind.title; }
		i++;
		h = h.parentpatcher;  
	}
	s[i] = h.wind.title;
	
	s.reverse(); 
	outlet(0, "hierarchy "+s.join("::")); 
}

// gets the patch hierarchy till the Piece file (obsolete ?) 
function findpiece() {
	p = this.patcher.box; // patcher  
	var s = new String(); // string for path hierarchy output   
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
	outlet(0, "varname "+this.patcher.box.varname);
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
function isinsideoi() { 
 	p = this.patcher.box; 
	t = this.patcher; 
	while(p!=null) { // iterate until top-level patch
		p = p.patcher.box; // patcher
 		t = t.parentpatcher; // title 
	} 
	toplevel = new Array('toplevel', t.wind.title); 
		// check for midp.oi possible window titles
	if (toplevel[1] == "oi.api (presentation)" 
		|| toplevel[1] == "oi.api (unlocked presentation)"
 		|| toplevel[1] == "oi.api (unlocked)" 
		|| toplevel[1] == "oi.api") 
	{	
		//a = new Array('midp', 1); 
		//outlet(0, a.join("\t"));
		outlet(0, 'oi 1'); 
		return true; 
	} else {
			//a = new Array('midp', 0); 
			//outlet(0, a.join(' '));
			outlet(0, 'oi 0'); 
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
	
// separates a pattr name by "::" (maxtype symbol)
function splitname(s)
{
	var sep = /::/gi;
	outlet(0, s.replace(sep, " "));
}
// joins list items (ex: "foo boo") into pattr-like hierarchy (ex: foo::boo)
//(maxtype symbol)
function mergename(s)
{
	var sep = / /gi;
	outlet(0, s.replace(sep, "::"));
}
