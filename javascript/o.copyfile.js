// this (simple) code picks a maxpatch and copies it to a user specified directory/name
// 28-04-2013 Tiago Ângelo 

var destdir, desttype, dst, src, pointer;
var chunk = 16384; //16KB chunks

outlets = 1; // disable outlets
setoutletassist(0, "(symbol) status");

function from(dir, t) {
	type = ".maxpat"; 
	type = t; 
	//source file constructor
	src = new File(dir, "readwrite", type);
	if (!src.isopen){
		outlet(0, "no source found\n");
	} 
	src.close();
}

function to(dir, t) {
	destdir = dir;
	desttype = ".maxpat"; 
	desttype = t; 
}

function bang() {
	dst = new File (destdir, "readwrite", desttype);
 	if (!dst.isopen) {
		outlet(0, "failed\n");
	} 
	else{ //prepare for copy  
		src.open();
		pointer = 0; 
 		src.position = pointer; 
		dst.position = pointer; 
	}
	// copy a chunk at a time
 	outlet(0, "copying\n");
	while(pointer<(src.eof-chunk)){
		dst.writebytes(src.readbytes(chunk)); 
		pointer = dst.position; 
		src.position = pointer;
	}
	//ensure that the remaining bytes are copied
	if (dst.position < src.eof){ 
		//post("from last: "+dst.position+"\n");
		dst.writebytes(src.readbytes(src.eof)); // copy remaining bytes
		//post("to last: "+dst.position+"\n");
	}
	
	dst.eof = src.eof;
	// close files after copying
	src.close();
	dst.close(); 
	
	outlet(0, "done\n");
}
