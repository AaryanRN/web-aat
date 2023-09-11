login.js
    
    function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("password").value;
		if(uname =='')
		{
			alert("please enter user name.");

		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(uname=="sanjhwi@gmail.com" && pwd=="aryan") //change username and password here
		{
	    alert('Login Success! Redirecting you to the profiles page --->');
        window.location = "ok.html"; //change redirecting page here ok bye
	    }
        else{
            alert("Invalid username or password!!");
        }
	}
	function clearfunc()
	{
		document.getElementById("email").value="";
		document.getElementById("password").value="";
	}	