How gen code is presented as a standard ta.gen.object: 

NOTE: for gen code I use standard abstraction wrappers (the gen~ object is inside a regular max abstraction), since you can't access the help patchers or reference files through gen~ objects. The name of the wrapper should always start with "ta.gen." The procedure is similar to "ta.poly" objects


STEPS: 

1) Make gen code and save it as "ta.yourobjname.gendsp" at "/code/"; 

2) Create a new max patcher from the template "ta.library.gen_wrapper.maxpat", located in the /templates folder. And save it with same name of the js file (ex: "ta.yourobjname.maxpat")


