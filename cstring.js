/*************************************
** 
** Author Giovambattista Vieri 
** (C) 2015 Giovambattista Vieri all rights reserved
**
** LICENSE MIT
**
*************************************/


function strcmpi(s1,s2) {
var S1=s1.toLowerCase(); 
var S2=s2.toLowerCase();
ret=-1;

	if(S1==S2) { 
		ret=0; 
	} 
return(ret); 
}


function strcmp(s1,s2) {
var S1=s1; 
var S2=s2;
ret=-1;

	if(S1==S2) { 
		ret=0; 
	} 
return(ret); 
}

function strncmpi(s1,s2,n) {
var S1; 
var S2;

S1=s1.substr(0,n);
S2=s2.substr(0,n); 
S1=S1.toLowerCase(); 
S2=S2.toLowerCase();
ret=-1;

	if(S1==S2) { 
		ret=0; 
	} 
return(ret); 
}

function strncmp(s1,s2,n) {
var S1; 
var S2;

S1=s1.substr(0,n);
S2=s2.substr(0,n); 
ret=-1;

	if(S1==S2) { 
		ret=0; 
	} 
return(ret); 
}

function strcat (dest, s) {
	console.log("called + strcat + (not yet implemented) \n"); 
}


function memset( s,c,n) {
	console.log("called + memset + (not yet implemented) \n"); 
}

function memcmp( s,c,n) { 
	console.log("called + memcmp + (not yet implemented) \n"); 
} 


function memchr( s,c,n) { 
	console.log("called + memchr + (not yet implemented) \n"); 
}

function strcpy (dest , src) { 
	console.log("called + strcpy + (not yet implemented) \n"); 
} 


function strcat (dest , src) { 
	console.log("called + strcat + (not yet implemented) \n"); 
}


function strcoll ( s1, s2) { 
	console.log("called + strcoll + (not yet implemented) \n"); 
} 

function  strdup (s) { 
	console.log("called + strdup + (not yet implemented) \n"); 
} 

function strndup(s) { 
	console.log("called + strndup + (not yet implemented) \n"); 
} 

function strchr ( s,c) { 
	console.log("called + strchr + (not yet implemented) \n"); 
} 

function  strrchr ( s, c) { 
	console.log("called + strrchr + (not yet implemented) \n"); 
} 

function strpbrk (s,accept) { 
	console.log("called + strpbrk + (not yet implemented) \n"); 
} 

function strstr (haystack , needle) { 
	console.log("called + strstr + (not yet implemented) \n"); 
} 

function memcpy (dest,src,n) {
	console.log("called + memcpy + (not yet implemented) \n"); 
} 

function strlen (s) { 
	console.log("called + strlen + (not yet implemented) \n"); 
} 

function bzero (s,n) { 
	console.log("called + bzero + (not yet implemented) \n"); 
} 






