

/* begin addLoadEvent function - design by Simon Willison */
function addLoadEvent(func) {
    var oldonload = window.onload;
        if (typeof window.onload != 'function') {
        window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
            func();
         };
      }      
   }      
addLoadEvent(init);
addLoadEvent(function() {
/* more code to run on page load */ 
addLoadEvent(openClose);
});
/* end addLoadEvent function */

var submitButtons = new Array();

function alwaysFalse()
{
    return false;
}

function disableSubmits()
{
    for( var i = 0; i < submitButtons.length; i++ )
    {
	submitButtons[i].onclick = alwaysFalse;
    }
    
    return true;
}

/* start function init() - design by Gez Lemon */
function init()
{

    var objImage = document.getElementsByTagName('img'); 
    var objHelp, objAnchor, objClone;
    for (var iCounter=0; iCounter<objImage.length; iCounter++)
    {
        if (objImage[iCounter].className == 'help')
    	{
    
		    objHelp = document.getElementById(objImage[iCounter].id+'Div');
		
		    objAnchor = document.createElement('a');
			objClone = objImage[iCounter].cloneNode(true);
		    objAnchor.setAttribute('href', '#');
		    objAnchor.setAttribute('style','border:none;text-decoration:none;');
		    objAnchor.setAttribute('tabIndex',objClone.getAttribute('tabIndex'));
		    objClone.removeAttribute('tabIndex');

		    objAnchor.onclick = function() {return openClose(this);};
		    //objAnchor.onkeypress = function() {return openClose(this);};
		    objAnchor.appendChild(objClone);
		    objHelp.style.display = 'none';
		    objImage[iCounter].parentNode.replaceChild(objAnchor, objImage[iCounter]);
		}
  	}
    
    var inputs = document.getElementsByTagName('input');
    for( var i = 0; i < inputs.length; i++ )
    {
	if( inputs[i].type != null && inputs[i].type.toLowerCase()=="submit" )
	{
	    submitButtons.push( inputs[i] );
	}
    }
    
    var forms = document.getElementsByTagName('form');
    for( var i = 0; i < forms.length; i++ )
    {
	if( forms[i].onsubmit == null )
	{
		forms[i].onsubmit = disableSubmits;
	}
    }
}
/* end function init() */


/* begin function openClose(objElement) - design by Gez Lemon */
function openClose(objElement)
{
    var objHelp = document.getElementById(objElement.firstChild.id+'Div'); 
    
    if (objHelp)
    {
        if (objHelp.style.display == 'none')
        {
            objHelp.style.display = 'block';
        }
        else
        {
            objHelp.style.display = 'none';
        }
    }
    return false;
}            
/* end function openClose(objElement) */    
