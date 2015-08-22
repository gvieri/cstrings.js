/*************************************
** 
** @author Giovambattista Vieri 
** (C) 2015 Giovambattista Vieri all rights reserved
**
** LICENSE MIT
**
*************************************/

/**
* strcmpi
* @see man strcmpi 
* @param {string} s1 
* @param {string} s2
* @return 0 if s1 is equal to s2 (ignore case), -1 in the other case. It will return -1 if s1 or s2 is undefined
*/

function strcmpi(s1,s2) {
var S1; 
var S2;
var ret=-1;

if ((typeof(s1) != 'undefined') && (typeof(s2) != 'undefined'))  { 
	S1=s1.toLowerCase(); 
	S2=s2.toLowerCase();
	if(S1==S2) { 
		ret=0; 
		} 
	}
return(ret); 
}

/** 
* strcmp
* @see man strcmp 
* @param {string} s1 
* @param {string} s2
* @return 0 if s1 is equal to s2, -1 in the other case. It will return -1 if s1 or s2 is undefined
*/

function strcmp(s1,s2) {
var S1;
var S2;
ret=-1;
if ((typeof(s1) != 'undefined') && (typeof(s2) != 'undefined'))  {
	S1=s1; 
	S2=s2;

	if(S1==S2) { 
		ret=0; 
		} 
	}
return(ret); 
}

/** 
* strncmpi
* @see man strncmpi 
* @param {string} s1 
* @param {string} s2
* @param {int} n
* @return 0 if the first n chararacters of both s1 and s2 are equal (ignore case) , -1 in the other case. It will return -1 if s1 or s2 is undefined
*/

function strncmpi(s1,s2,n) {
var ret;
var S1; 
var S2;

if ((typeof(s1) != 'undefined') && (typeof(s2) != 'undefined'))  {

	S1=s1.substr(0,n);
	S2=s2.substr(0,n); 
	S1=S1.toLowerCase(); 
	S2=S2.toLowerCase();
	ret=-1;

	if(S1==S2) { 
		ret=0; 
		} 
	}
return(ret); 
}

/** 
* strncmp
* @see man strcmp 
* @param {string} s1 
* @param {string} s2
* @param {int} n
* @return 0 if the first n chararacters of both s1 and s2 are equal, -1 in the other case. It will return -1 if s1 or s2 is undefined
*/
function strncmp(s1,s2,n) {
var S1; 
var S2;
var ret;
if ((typeof(s1) != 'undefined') && (typeof(s2) != 'undefined'))  {
	S1=s1.substr(0,n);
	S2=s2.substr(0,n); 
	ret=-1;

	if(S1==S2) { 
		ret=0; 
		} 
	}
return(ret); 
}

/**
* strcat
* @see man strcat
* @param {string} dest 
* @param {string} src 
* @ret   {string} dest+concatenated src 
* if both dest and src are undefined the function will return ""; 
*/
function strcat (dest, src) {
	var ret=""; 

	if(typeof(dest) != 'undefined') {
		ret=dest; 
	} 

	if(typeof(src) != 'undefined) { 
		dest+=src; 
		ret=dest; 
	} 
	return ret; 
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






