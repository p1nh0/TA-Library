How gen code is presented as a standard o.gen.object: 

NOTE: for gen code I use standard abstraction wrappers (the gen~ object is inside a regular max abstraction), since you can't access the help patchers or reference files through gen~ objects. The name of the wrapper should always start with "o.gen." The procedure is similar to "o.poly" objects

STEPS: 
#1 - make gen code and save it as "o.yourobjname.gendsp" at "/code/"; 
#2 - create a new max patcher from the template "o.library.gen_wrapper.maxpat", located in the /templates folder. And save it with same name of the js file (ex: "o.yourobjname.maxpat")


