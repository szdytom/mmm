function compileStr(code){
    var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
    for(var i=1;i<code.length;i+=1){        
        c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
    }     
    return escape(c);
}

function uncompileStr(code){
    code = unescape(code);        
    var c=String.fromCharCode(code.charCodeAt(0)-code.length);        
    for(var i=1;i<code.length;i+=1){        
        c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));        
    }        
    return c;
}  

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

var ct = 0, vx = 0;
var vxtt;


vxtt = getCookie("moTime")
if (vxtt != "") {
	ct = parseInt(uncompileStr(vxtt));
} else {
    vxtt = compileStr(String(0));
}
document.getElementById("ct").innerHTML = "您已膜拜" + ct + "次"


function setPositionAbsolute() {
    document.getElementById("b1").style.position = "absolute";
    document.getElementById("b1").style.top = (Math.random() * 12345679 % (document.body.clientHeight - 100) + 50) + "px";
    document.getElementById("b1").style.left = (Math.random() * 12345679 % (document.body.clientWidth - 200) + 100) + "px";
    document.getElementById("b1").setAttribute("value","膜拜szTom")
    if (ct != parseInt(uncompileStr(vxtt))) {
        setCookie("moTime", compileStr(String(0)), 20);
        ct = -10;
        vxtt = -10;
        document.getElementById("ct").innerHTML = "[作弊者]";
        document.getElementById("ct").style.color = "brown";
        document.getElementById("b1").style.display = "none";
        alert("You Are Cheating!!!\nszTom knows everything!");
    } else {
        ct += parseInt(Math.sqrt(ct+10));
        vx += 1;
        vxtt = compileStr(String(ct));
        // wrong codes
        document.getElementById("ct").innerHTML = "您已膜拜" + ct + "次";
        setCookie("moTime", vxtt, 20)
    }
    
}
