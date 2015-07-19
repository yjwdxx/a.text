var tecentNav=document.getElementById("tecent-nav"),
	    otecent=document.getElementById("tecent"),
	    owechatPic=document.getElementById("wechat-ma"),
	    owechat=document.getElementById("wechat"),
	    obigtel=document.getElementById("big-tel"),
	    obigPhone=document.getElementById("big-phone"),
	    time=null;
window.onload=function () {
	 move(otecent,tecentNav,"block","onmouseover");
	 move(otecent,tecentNav,"none","onmouseout");
	 move(tecentNav,tecentNav,"block","onmouseover");
	 move(tecentNav,tecentNav,"none","onmouseout");
	 move(owechat,owechatPic,"block","onmouseover");
	 move(owechat,owechatPic,"none","onmouseout");
	 move(obigtel,obigPhone,"block","onmouseover");
	 move(obigtel,obigPhone,"none","onmouseout");

};
function move (otarget,ochange,attr,active) {
    var target=otarget,
        change=ochange;
     target[active]=function(){
     	if (active=="onmouseover") {
          clearTimeout(change.time);
      	  change.style.display=attr;
     	}else if(active=="onmouseout"){
            change.time=setTimeout(function(){
         	change.style.display=attr;
         },500);
     	}else{
     		return false;
     	}
     };
}