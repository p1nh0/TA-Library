How poly~ code is presented as a standard ta.object: 

NOTE: for poly~ code I use standard abstraction wrappers (the poly~ object is inside a regular max abstraction), since you can't access the help patchers or reference files through poly~ objects. The procedure is similar to ta.gen objects.


STEPS: 

1) Make poly~ abstraction and save it as "ta_yourobjname" anywhere inside "/patchers/"; 

2) Create a new max patcher from the template "ta.library.poly_wrapper.maxpat", located in the /templates folder. And save it with a similiar name 
(ex: "ta.yourobjname.maxpat")


