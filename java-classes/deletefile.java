import com.cycling74.max.*;
import java.io.*; 

public class deletefile extends MaxObject
{ 
	String dir; 


	private static final String[] INLET_ASSIST = new String[]{
		"(symbol) delete + (symbol) directory"
	};
	private static final String[] OUTLET_ASSIST = new String[]{
		"status"
	};
	
	public deletefile(Atom[] args)
	{
		createInfoOutlet(false);
		declareInlets(new int[]{DataTypes.ALL});
		declareOutlets(new int[]{DataTypes.ALL});
		setInletAssist(INLET_ASSIST);
		setOutletAssist(OUTLET_ASSIST);

	}
    
	public void delete(String d)
	{
		dir = d; 	
		File f = new File(dir); 
		boolean success = f.delete(); 
		if(!success)
		{
			//post("could not delete file\n");
			outlet(0, "failed");
		} 
		else
		{
			//post("file deleted");
			outlet(0, "done");
		}		
	}
    
	public void dump()
	{
		outlet(0, dir); 
	}
}











