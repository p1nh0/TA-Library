//Tiago Ângelo 03-05-2012
inlets=2; 
outlets=3;
setinletassist(0, "gate(0/1): turn list processing on or off; reset(symbol): resets");
setinletassist(1, "(symbol): input stream to learn from");   
setoutletassist(0, "(symbol) list containing all different elements gathered from the list input stream"); 
setoutletassist(1, "elements(int): number of elements in the list"); 
setoutletassist(2, "sync(0/1) with listlearn state"); 

var bucket; // collects input lists to match against our 'data' Array 
var data = new Array(); 
var truth=1; // (0/1) is our data in the bucket different from all the elements in the 'data' Array 
var prevlength = 0; // previous 'data' length 
var state=0; //(0- close/stopped..., 1-open/processing...) 
declareattribute("state", null, null, 1);
var rounds=0; // number of rounds with 0 new elements (used to shut down input processing by automatically set the state variable) 
var defer = 0; //defer attribute
declareattribute("defer", null, null, 1);

anything.immediate=1-defer; 
function anything() { //distribute input streams (int, float, list) 
	if (inlet==1) 
	{  
		bucket = arrayfromargs(messagename, arguments); // collect input messages from inlet#2
		if(messagename == "msg_float" || messagename == "msg_int") 
		{ 	 
			bucket = arrayfromargs(messagename, arguments); 	
			bucket[0] = bucket[0].toFixed(6); 
		} 
		learn(); // run learning function 
	}
	else 
	{
		if(messagename=="msg_int"){ gate(arrayfromargs(messagename, arguments)); } //operate gate
	}
		
}

function gate(i) //set js state (stopped or processing) 
{	
		state = i;  
}
learn.local=1;
learn.immediate=1-defer; 
function learn() // learn from data in the 'bucket' Array   
{
	if(state==1) 
	{	
		for(i = 0; i<bucket.length; i++) // read bucket array, element by element 
		{
			truth =1;
			for(j=0; j<data.length; j++) // read data array, element by element, and compare with element i of the bucket array 
			{
				if(differentStrings(bucket[i].toString(), data[j].toString())) { truth*=1; } 
				else { truth*=0; }
			}
			if(truth==1) { data.push(bucket[i]); }// if none of the data elements matches the elment i of the bucket array, this element is added to data[] 
		}
		
		if (data.length != prevlength) // if the data array changes, send it through the output 
		{
			outlet(1, data.length);
			outlet(0, data.join(" "));
			prevlength = data.length; 
			rounds = 0; 
		} 
		else { 
			if(jsarguments.length > 1) 
			{
				rounds++; 
			}
		}
		
		if(jsarguments.length > 1) 
		{
 			//rounds++;			
			if(rounds == jsarguments[1]) 
			{
				state=0; 
				reportstate(); 	
				autoreset(); 
			 }
		}
	}
}

reportstate.local=1; 
function reportstate() 
{
	outlet(2, state); 
}

function reset() // resets internal variables (this function also runs when object automatically stops) 
{
	if (inlet==0) { 
		data = new Array(); 
		bucket = new Array(); 
		prevlength = 0; 
		rounds = 0; 
		post("o.listlearn: data array erased\n"); }
}
autoreset.local=1; 
function autoreset() {
	data = new Array(); 
	bucket = new Array(); 
	prevlength = 0; 	
	rounds = 0; 
	post("o.listlearn: data array erased\n");
}
differentStrings.local=1;
function differentStrings(a, b) // compare two strings and return true if they're different 
{
	if(a.localeCompare(b) == 0) { return false; } 
	else{ return true; }
}
