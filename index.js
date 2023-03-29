'use strict'
function nameCheck()
{
  let  fullName = inputName.value
  let specialError=false
  let spaceError=false  
  let output="<font>"
  pic1.width="13"

  for(let i=0;i<fullName.length;i++)
  { let  x=fullName.charCodeAt(i)

        if((x<=90 && x>=65 || x<=122 && x>=97 || x==32))
        { if(fullName.endsWith(" ") || fullName.startsWith(" ")) {spaceError=true}
          else {pic1.src="right.png"}
        }
        else
        { specialError=true
        }
  }
  
  if(spaceError) {output+=`<h6 style="color:red">Space in end and start not allowed</h6>`
  pic1.src="cross.png"}
  if(specialError) {output+=`<h6 style="color:red">number,spacial char. not allowed</h6>`
  pic1.src="cross.png"}
  nameResult.innerHTML=output+"</font> "
}

function emailCheck()
    {  let email=inputEmail.value; 
       pic2.width="13"
       pic2.src="cross.png"
      let output="<h6>" 
        
      if( (email.indexOf("@")==email.lastIndexOf("@")) && email.lastIndexOf("@")!=-1 )
        {   let n=email.indexOf("@")                
            if( (email.indexOf(".",n)==email.lastIndexOf(".")) && email.lastIndexOf(".")!=-1 ) 
                pic2.src="right.png";                                   
        }
          
      if(email.startsWith("@") || email.endsWith("@")) 
        {   output+="* Email can not start and end with '@'<br>"; 
            pic2.src="cross.png" } 

      if(email.startsWith(".") || email.endsWith("."))
        {   output+="* Email can not start and end with '.'"; 
            pic2.src="cross.png" }
      eResult.innerHTML=output+"</h6>" 
    }

    function passwordCheck()
{
  let password = inputPassword.value
  let errorL=true
  let errorU=true
  let errorD=true
  let errorS=true
  let output="<h6>"
  let special="~`!@#$%^&*()_-=+[]{}|\\:;'\"<,>.?/ "
    pic3.width="13"

    
  for(let i=0;i<password.length;i++)
  { let  x=password.charCodeAt(i)
    let  c=password.charAt(i)
    
    if(x<=90 && x>=65  ) errorU=false;
    if(x<=122 && x>=97) errorL=false;
    if(x>=48 && x<=57)  errorD=false;
    if(special.includes(c)) errorS=false;
  }
 
  if(errorL || errorD || errorU || errorS) 
  {output+=`* Password must contain with UPPER/lowercase letters,
               digits, spacial characters (!$&%^*_-+=@~#<>,.?~\`\\"'[]{}/)`
             pic3.src="cross.png"}
   else
   pic3.src="right.png"          
  pResult.innerHTML=output+"</h6>"
}