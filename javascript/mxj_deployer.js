// get patcher name (ex: "o.rad2deg")
var objname = this.patcher.name;
var a, c; 

function bang(){
	// make js object with name argument at object @patching_rect coordinates
	c = this.patcher.box.rect;// coordinates (@patching_rect)
	a = this.patcher.parentpatcher.newdefault(c[0], c[1], "mxj", objname.slice(2));
	
	// delete js_deployer
	this.patcher.parentpatcher.remove(this.patcher.box);
}