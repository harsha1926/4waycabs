//set path start
var path=location.protocol+"//"+document.domain+":"+location.port+"/"+location.pathname.split("/")[1]+"/";
//var path=location.protocol+"//"+document.domain+"/";
// set path end
//app server connect code start
function getUser(){var e,t=new XMLHttpRequest;return t.open("POST",path+"getUser",!1),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.onload=function(){e=t.status>=200&&t.status<400?t.responseText:"Exception"},t.onerror=function(){e="Exception"},t.send(null),e}function logoutSession(){var e,t=new XMLHttpRequest;return t.open("POST",path+"logoutSession",!1),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.onload=function(){e=t.status>=200&&t.status<400?t.responseText:"Exception"},t.onerror=function(){e="Exception"},t.send(null),e}function addHTML(e,t){document.getElementById(e).innerHTML+=t}function setSessionAttribute(e,t){var n,o=new XMLHttpRequest;return o.open("POST",path+"setSessionAttribute?name="+e+"&value="+t,!1),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.onload=function(){n=o.status>=200&&o.status<400?o.responseText:"Exception"},o.onerror=function(){n="Exception"},o.send(null),t}function getSessionAttribute(e){var t,n=new XMLHttpRequest;return n.open("POST",path+"getSessionAttribute?name="+e,!1),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onload=function(){t=n.status>=200&&n.status<400?n.responseText:"Exception"},n.onerror=function(){t="Exception"},n.send(null),t}function removeSessionAttribute(e){var t,n=new XMLHttpRequest;return n.open("POST",path+"removeSessionAttribute?name="+e,!1),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onload=function(){t=n.status>=200&&n.status<400?n.responseText:"Exception"},n.onerror=function(){t="Exception"},n.send(null),t}function call(e,t,n){var o,s=JSON.stringify({args:JSON.stringify(n),methodName:t,className:e}),i=new XMLHttpRequest;return i.open("POST",path+"call",!1),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.onload=function(){o=i.status>=200&&i.status<400?JSON.parse(i.responseText):"Exception"},i.onerror=function(){o="Exception"},i.send(s),"undefined"!=typeof o.ServerCallException&&alert("Exception:"+o.ServerCallException),o}function home(){window.open(path,"_self")}function getCheckboxValues(e){return $("input[name="+e+"]:checked").map(function(){return this.value}).get().join("|")}function loading(){$("body").append('<div class="loading"></div><div class="loading-dim"></div>'),$(".loading-dim").show(),$(".loading").show(),$(".loading-dim").css("opacity",.6).fadeIn(300,function(){$(".loading").css({position:"aboslute","z-index":9999})})}function loadingStop(){$(".loading-dim").hide(),$(".loading").hide()}var user=getUser().trim(),appName=location.pathname.split("/")[1]+"/";
//app server connect code end