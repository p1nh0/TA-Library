// this (simple) code creates folders at user specified directories/names
// Tiago ångelo 22-02-2012
// version 2

import com.cycling74.max.*;
import java.io.*;
import java.util.*;


public class makefolder extends MaxObject
{	
	File f; // 
	String status, dir;   

	// inlet/outlet assist
	private static final String[] INLET_ASSIST = new String[]{
		"(symbol) make"
	};
	private static final String[] OUTLET_ASSIST = new String[]{
		"(symbol) status"
	};
	// Constructor
	public makefolder() {;
		createInfoOutlet(false);
		declareInlets(new int[]{DataTypes.ALL});
		declareOutlets(new int[]{DataTypes.ALL});
		setInletAssist(INLET_ASSIST);
		setOutletAssist(OUTLET_ASSIST); 
	}

	
	//Create folder at specified directory (input arguments)
	public void make(String d)
	{
		dir = d; 	
   		if(check())
		{	
			boolean success = (new File(dir)).mkdirs();
			post("success: new folder at "+dir+"\n"); 
			if (!success) 
			{	
				error("failed to create directory at "+dir+"\n");
				status = "failed"; 
				outlet(0, status);
			} 
			else 
			{ 
				status = "done"; 
				outlet(0, status);
			}
		}	
	}	
	
 	
	//check if directory already exists 
	public boolean check()
	{	
		f = new File(dir);
		boolean available = f.exists()? false : true;
		if (f.exists()==true) 
		{ 
			status = "folder already exists"; 	
			outlet(0,status); 		
		}	
		return available;
  	}
	// dump last directory
	public void dump() 
	{
		outlet(0, "dump dir: "+dir);	
	}
}






















