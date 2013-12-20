// Tiago ångelo 310312
// simple code to print a message in max window as an error message(red background)
// lookout for threading concerns !!!
import com.cycling74.max.*;

public class printerror extends MaxObject
{
	String identifier;	//first string to output
	boolean gate = true; //gate
	
	private static final String[] INLET_ASSIST = new String[]{
		"input messages are printed to max window as error messages"
	};

	
	public printerror(Atom[] args)//Constructor
	{

		declareInlets(new int[]{DataTypes.ALL, DataTypes.INT});
		declareOutlets(NO_OUTLETS);// no outlets
		createInfoOutlet(false); // no info outlet
		setInletAssist(INLET_ASSIST); // set inlet assist
		
		//set identifier
		if(args.length > 0){	
			identifier = args[0].toString(); // set append string
		}
		
		if(args.length > 1 && args[1].isInt()) {
			//post(args[1]);
			if(args[1].getInt() > 0) { gate = true; }
			else { gate = false; } 				
		}
	}
    
	public void anything(String msg, Atom[] args)
	{
		if(getInlet()==0 && gate == true) { // run if inlet==0
			if (identifier != null) { msg = identifier+": "+" "+msg; }
			if(args.length > 0){ 	
				for(int i = 0; i < args.length; i++){ //merge message elements 
					msg+=" "+args[i].toString();	
				} 
				error(msg);
			}else{error(msg);} //print the received message if it has only one element
		}
	}
	
	public void inlet(int i)//set gate
	{
		if(i > 0) { gate = true; } else {gate = false; }	
	}

}











































