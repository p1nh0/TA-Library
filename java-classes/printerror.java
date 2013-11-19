// Tiago ångelo 31-03-2012
// simple code to print a message in max window as an error message(red background)
// lookout for threading concerns !!!
import com.cycling74.max.*;

public class printerror extends MaxObject
{

	private static final String[] INLET_ASSIST = new String[]{
		"input messages are printed to max window as error messages"
	};

	
	public printerror(Atom[] args)//Constructor
	{
		declareInlets(new int[]{DataTypes.ALL});
		declareOutlets(NO_OUTLETS);// no outlets
		createInfoOutlet(false); // no info outlet
		setInletAssist(INLET_ASSIST); // set inlet assist
	}
    
	public void anything(String msg, Atom[] args)
	{
		if(args.length > 0){ 	
			for(int i = 0; i < args.length; i++){ //merge message elements 
				msg+=" "+args[i].toString();	
			} 
			error(msg);
		}else{error(msg);} //print the received message if it has only one element
	}
}













