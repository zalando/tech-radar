#!/bin/awk -f
BEGIN{
	FS=","; 
	MYRING["ADOPT"]=0; 
	MYRING["ASSESS"]=2; 
	MYRING["TRIAL"]=1; 
	MYRING["HOLD"]=3; 
	MYQUAD["DATA"]=3; 
	MYQUAD["FRAMEWORK"]=2; 
	MYQUAD["INFRASTRUCTURE"]=1; 
	MYQUAD["LANGUAGE"]=0;
} 
{printf "{quadrant:%d, ring:%d, label:'%s'},\n", MYQUAD[$1], MYRING[$2], $3;}
