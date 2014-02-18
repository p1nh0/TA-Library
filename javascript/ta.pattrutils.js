// Collection of patcher/pattr utilities 
// TA050312

//INIT 
outlets = 2; 
setinletassist(0, "gettitle, getparenttitle, findparent, gethierarchy, getvarname, getparentvarname, setvarname <name>, gettoplevel, getpath, getparentpath");
setoutletassist(0, "<function> <data>");
setoutletassist(1, "set function's DONE"); 

var d = 0; // defer 
declareattribute("defer", "get_defer", "set_defer", 1); 

function set_defer(d) {
	gettitle.immediate = 1-d;
 	getparenttitle.immediate = 1-d;
	findparent.immediate = 1-d;
 	gethierarchy.immediate = 1-d;
	getvarname.immediate = 1-d;
	getparentvarname.immediate = 1-d;
	setvarname.immediate = 1-d;
 	gettoplevel.immediate = 1-d; 
	getpath.immediate = 1-d;
	getparentpath.immediate = 1-d;
}
function get_defer(d) {
	return d; 
}

//FUNCTIONS	

// get patcher's title
function gettitle() { 
	thisname = this.patcher.name;
	outlet(0, new Array('title', thisname)); 
}
	
// get parent patcher name/window title
function getparenttitle() {
	parentname = this.patcher.parentpatcher.name; 
	if(!parentname){
		parentname = this.patcher.parentpatcher.parentpatcher.wind.title; 
	}
	outlet(0, new Array('parenttitle', parentname)); 
}

// get hierarchy till top-level patcher
function findparent() {
	p = this.patcher.box; // patcher  
	var s = new String(); // number of subpatchers until getting to the parent patcher  
	while(p!=null) {
		p = p.patcher.box; 
		s+= "parent::"; 
	} outlet(0, new Array('parent', s)); 
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
	//outlet(0, "hierarchy "+s.join("::")); 
	outlet(0, new Array('hierarchy', s.join("::"))); 
}

// get parent patcher scripting name
function getvarname () {
	outlet(0, new Array('varname', this.patcher.box.varname));
	}
// get parent::parent scripting name
function getparentvarname() {
	outlet(0, new Array('parentvarname',this.patcher.parentpatcher.box.varname));
	}
// set the scritpting name of the parent patcher containing 'p_utils' 
function setvarname(n) {
	this.patcher.box.varname = n;
	//outlet(0, n);
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
	outlet(0, new Array('toplevel', t.wind.title)); 
	}

// outputs patcher filepath
function getpath(){
	outlet(0, new Array('path',this.patcher.filepath));
	}
function getparentpath() {
	//p = this.parentpatcher; 
	outlet(0, new Array('parentpath', this.patcher.parentpatcher.filepath)); 
	}
	
/*DEPRECATED - you can use 'to/fromsymbol' separator attribute set to "::" 
to achieve the same thing as splitname() and mergename()  	
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
}*/ 
