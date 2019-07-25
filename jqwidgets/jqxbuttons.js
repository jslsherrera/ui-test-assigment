/*
jQWidgets v5.1.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){e.jqx.cssroundedcorners=function(e){var t={all:"jqx-rc-all",top:"jqx-rc-t",bottom:"jqx-rc-b",left:"jqx-rc-l",right:"jqx-rc-r","top-right":"jqx-rc-tr","top-left":"jqx-rc-tl","bottom-right":"jqx-rc-br","bottom-left":"jqx-rc-bl"};for(prop in t)if(t.hasOwnProperty(prop)&&e==prop)return t[prop]},e.jqx.jqxWidget("jqxButton","",{}),e.extend(e.jqx._jqxButton.prototype,{defineInstance:function(){var t={type:"",cursor:"arrow",roundedCorners:"all",disabled:!1,height:null,width:null,overrideTheme:!1,enableHover:!0,enableDefault:!0,enablePressed:!0,imgPosition:"center",imgSrc:"",imgWidth:16,imgHeight:16,value:null,textPosition:"",textImageRelation:"overlay",rtl:!1,_ariaDisabled:!1,_scrollAreaButton:!1,template:"default",aria:{"aria-disabled":{name:"disabled",type:"boolean"}}};return this===e.jqx._jqxButton.prototype?t:(e.extend(!0,this,t),t)},_addImage:function(t){var s=this;if("input"==s.element.nodeName.toLowerCase()||"button"==s.element.nodeName.toLowerCase()||"div"==s.element.nodeName.toLowerCase()){if(s._img)s._img.setAttribute("src",s.imgSrc),s._img.setAttribute("width",s.imgWidth),s._img.setAttribute("height",s.imgHeight),s._text.innerHTML=s.value;else{s.field=s.element,s.field.className&&(s._className=s.field.className);var i={title:s.field.title},o=null;if(s.field.getAttribute("value"))o=s.field.getAttribute("value");else if("input"!=s.element.nodeName.toLowerCase())o=s.element.innerHTML;s.value&&(o=s.value),s.field.id.length?i.id=s.field.id.replace(/[^\w]/g,"_")+"_"+t:i.id=e.jqx.utilities.createId()+"_"+t;var a=document.createElement("div");a.id=i.id,a.title=i.title,a.style.cssText=s.field.style.cssText,a.style.boxSizing="border-box";var r=document.createElement("img");r.setAttribute("src",s.imgSrc),r.setAttribute("width",s.imgWidth),r.setAttribute("height",s.imgHeight),a.appendChild(r),s._img=r;var n=document.createElement("span");o&&(n.innerHTML=o,s.value=o),a.appendChild(n),s._text=n,s.field.style.display="none",s.field.parentNode&&s.field.parentNode.insertBefore(a,s.field.nextSibling);var l=s.host.data();s.host=e(a),s.host.data(l),s.element=a,s.element.id=s.field.id,s.field.id=i.id;var d=new e(s.element),h=new e(s.field);if(s._className&&(d.addClass(s._className),h.removeClass(s._className)),s.field.tabIndex){var u=s.field.tabIndex;s.field.tabIndex=-1,s.element.tabIndex=u}}s.imgSrc?s._img.style.display="inline":s._img.style.display="none",s.value?s._text.style.display="inline":s._text.style.display="none",s._positionTextAndImage()}},_positionTextAndImage:function(){var e=this,t=e.element.offsetWidth,s=e.element.offsetHeight,i=e.imgWidth,o=e.imgHeight;""==e.imgSrc&&(i=0,o=0);var a=e._text.offsetWidth,r=e._text.offsetHeight,n=0,l=0;switch(e.textImageRelation){case"imageBeforeText":case"textBeforeImage":n=i+a+8+4+8,l=Math.max(o,r)+8+4+8;break;case"imageAboveText":case"textAboveImage":n=Math.max(i,a)+8,l=o+r+4+8+8;break;case"overlay":n=Math.max(i,a)+8,l=Math.max(o,r)+8}e.width||(e.element.style.width=n+"px",t=n),e.height||(e.element.style.height=l+"px",s=l),e._img.style.position="absolute",e._text.style.position="absolute",e.element.style.position="relative",e.element.style.overflow="hidden";var d={},h={},u=function(e,t,s,i,o){switch(t.width<i&&(t.width=i),t.height<o&&(t.height=o),s){case"left":e.style.left=t.left+"px",e.style.top=t.top+t.height/2-o/2+"px";break;case"topLeft":e.style.left=t.left+"px",e.style.top=t.top+"px";break;case"bottomLeft":e.style.left=t.left+"px",e.style.top=t.top+t.height-o+"px";break;default:case"center":e.style.left=t.left+t.width/2-i/2+"px",e.style.top=t.top+t.height/2-o/2+"px";break;case"top":e.style.left=t.left+t.width/2-i/2+"px",e.style.top=t.top+"px";break;case"bottom":e.style.left=t.left+t.width/2-i/2+"px",e.style.top=t.top+t.height-o+"px";break;case"right":e.style.left=t.left+t.width-i+"px",e.style.top=t.top+t.height/2-o/2+"px";break;case"topRight":e.style.left=t.left+t.width-i+"px",e.style.top=t.top+"px";break;case"bottomRight":e.style.left=t.left+t.width-i+"px",e.style.top=t.top+t.height-o+"px"}},m=0,c=0,b=t,f=s,p=(b-m)/2,g=(f-c)/2,x=e._img,v=e._text,j=f-c,y=b-m;switch(m+=4,c+=4,b=b-4-2,y=y-8-2,j=j-8-2,e.textImageRelation){case"imageBeforeText":switch(e.imgPosition){case"left":case"topLeft":case"bottomLeft":h={left:m,top:c,width:m+i,height:j},d={left:m+i+4,top:c,width:y-i-4,height:j};break;case"center":case"top":case"bottom":d={left:(h={left:p-a/2-i/2-2,top:c,width:i,height:j}).left+i+4,top:c,width:b-h.left-i-4,height:j};break;case"right":case"topRight":case"bottomRight":d={left:(h={left:b-a-i-4,top:c,width:i,height:j}).left+i+4,top:c,width:b-h.left-i-4,height:j}}u(x,h,e.imgPosition,i,o),u(v,d,e.textPosition,a,r);break;case"textBeforeImage":switch(e.textPosition){case"left":case"topLeft":case"bottomLeft":d={left:m,top:c,width:m+a,height:j},h={left:m+a+4,top:c,width:y-a-4,height:j};break;case"center":case"top":case"bottom":h={left:(d={left:p-a/2-i/2-2,top:c,width:a,height:j}).left+a+4,top:c,width:b-d.left-a-4,height:j};break;case"right":case"topRight":case"bottomRight":h={left:(d={left:b-a-i-4,top:c,width:a,height:j}).left+a+4,top:c,width:b-d.left-a-4,height:j}}u(x,h,e.imgPosition,i,o),u(v,d,e.textPosition,a,r);break;case"imageAboveText":switch(e.imgPosition){case"topRight":case"top":case"topLeft":h={left:m,top:c,width:y,height:o},d={left:m,top:c+o+4,width:y,height:j-o-4};break;case"left":case"center":case"right":d={left:m,top:(h={left:m,top:g-o/2-r/2-2,width:y,height:o}).top+4+o,width:y,height:j-h.top-4-o};break;case"bottomLeft":case"bottom":case"bottomRight":d={left:m,top:(h={left:m,top:f-o-r-4,width:y,height:o}).top+4+o,width:y,height:r}}u(x,h,e.imgPosition,i,o),u(v,d,e.textPosition,a,r);break;case"textAboveImage":switch(e.textPosition){case"topRight":case"top":case"topLeft":d={left:m,top:c,width:y,height:r},h={left:m,top:c+r+4,width:y,height:j-r-4};break;case"left":case"center":case"right":h={left:m,top:(d={left:m,top:g-o/2-r/2-2,width:y,height:r}).top+4+r,width:y,height:j-d.top-4-r};break;case"bottomLeft":case"bottom":case"bottomRight":h={left:m,top:(d={left:m,top:f-o-r-4,width:y,height:r}).top+4+r,width:y,height:o}}u(x,h,e.imgPosition,i,o),u(v,d,e.textPosition,a,r);break;case"overlay":default:d={left:m,top:c,width:y,height:j},u(x,h={left:m,top:c,width:y,height:j},e.imgPosition,i,o),u(v,d,e.textPosition,a,r)}},createInstance:function(t){var s=this;s._setSize(),s.buttonObj=new e(s.element),(""!=s.imgSrc||""!=s.textPosition||s.element.value&&s.element.value.indexOf("<")>=0||null!=s.value)&&(s.refresh(),s._addImage("jqxButton"),s.buttonObj=new e(s.element)),s._ariaDisabled||s.element.setAttribute("role","button"),""!==s.type&&s.element.setAttribute("type",s.type),s.overrideTheme||(s.buttonObj.addClass(s.toThemeProperty(e.jqx.cssroundedcorners(s.roundedCorners))),s.enableDefault&&s.buttonObj.addClass(s.toThemeProperty("jqx-button")),s.buttonObj.addClass(s.toThemeProperty("jqx-widget"))),s.isTouchDevice=e.jqx.mobile.isTouchDevice(),s._ariaDisabled||e.jqx.aria(this),"arrow"!=s.cursor&&(s.disabled?s.element.style.cursor="arrow":s.element.style.cursor=s.cursor);i="mouseenter mouseleave mousedown focus blur";if(s._scrollAreaButton)var i="mousedown";s.isTouchDevice&&(s.addHandler(s.host,e.jqx.mobile.getTouchEventName("touchstart"),function(e){s.isPressed=!0,s.refresh()}),s.addHandler(e(document),e.jqx.mobile.getTouchEventName("touchend")+"."+s.element.id,function(e){s.isPressed=!1,s.refresh()})),s.addHandler(s.host,i,function(e){switch(e.type){case"mouseenter":s.isTouchDevice||!s.disabled&&s.enableHover&&(s.isMouseOver=!0,s.refresh());break;case"mouseleave":s.isTouchDevice||!s.disabled&&s.enableHover&&(s.isMouseOver=!1,s.refresh());break;case"mousedown":s.disabled||(s.isPressed=!0,s.refresh());break;case"focus":s.disabled||(s.isFocused=!0,s.refresh());break;case"blur":s.disabled||(s.isFocused=!1,s.refresh())}}),s.mouseupfunc=function(e){s.disabled||(s.isPressed||s.isMouseOver)&&(s.isPressed=!1,s.refresh())},s.addHandler(document,"mouseup.button"+s.element.id,s.mouseupfunc);try{if((""!=document.referrer||window.frameElement)&&null!=window.top&&window.top!=window.that){var o="";if(window.parent&&document.referrer&&(o=document.referrer),-1!=o.indexOf(document.location.host)){window.top.document&&s.addHandler(e(window.top.document),"mouseup",function(e){s.isPressed=!1,s.refresh()})}}}catch(e){}s.propertyChangeMap.roundedCorners=function(t,s,i,o){t.buttonObj.removeClass(t.toThemeProperty(e.jqx.cssroundedcorners(i))),t.buttonObj.addClass(t.toThemeProperty(e.jqx.cssroundedcorners(o)))},s.propertyChangeMap.disabled=function(t,s,i,o){i!=o&&(t.refresh(),t.element.setAttribute("disabled",o),t.element.disabled=o,t.element.style.cursor=o?"default":t.cursor,e.jqx.aria(t,"aria-disabled",t.disabled))},s.propertyChangeMap.rtl=function(e,t,s,i){s!=i&&e.refresh()},s.propertyChangeMap.template=function(e,t,s,i){s!=i&&(e.buttonObj.removeClass(e.toThemeProperty("jqx-"+s)),e.refresh())},s.propertyChangeMap.theme=function(t,s,i,o){t.buttonObj.removeClass(t.element),t.enableDefault&&t.buttonObj.addClass(t.toThemeProperty("jqx-button")),t.buttonObj.addClass(t.toThemeProperty("jqx-widget")),t.overrideTheme||t.buttonObj.addClass(t.toThemeProperty(e.jqx.cssroundedcorners(t.roundedCorners))),t._oldCSSCurrent=null,t.refresh()},s.disabled&&(s.element.disabled=!0,s.element.setAttribute("disabled","true"))},resize:function(e,t){this.width=e,this.height=t,this._setSize()},val:function(){var t=this,s=t.host.find("input");return s.length>0?0==arguments.length||"object"==typeof value?s.val():(s.val(value),t.refresh(),s.val()):0==arguments.length||"object"==typeof value?"button"==t.element.nodeName.toLowerCase()?e(t.element).text():t.element.value:(t.element.value=arguments[0],"button"==t.element.nodeName.toLowerCase()&&e(t.element).text(arguments[0]),void t.refresh())},_setSize:function(){var e=this,t=e.height,s=e.width;t&&(isNaN(t)||(t+="px"),e.element.style.height=t),s&&(isNaN(s)||(s+="px"),e.element.style.width=s)},_removeHandlers:function(){var t=this;t.removeHandler(t.host,"selectstart"),t.removeHandler(t.host,"click"),t.removeHandler(t.host,"focus"),t.removeHandler(t.host,"blur"),t.removeHandler(t.host,"mouseenter"),t.removeHandler(t.host,"mouseleave"),t.removeHandler(t.host,"mousedown"),t.removeHandler(e(document),"mouseup.button"+t.element.id,t.mouseupfunc),t.isTouchDevice&&(t.removeHandler(t.host,e.jqx.mobile.getTouchEventName("touchstart")),t.removeHandler(e(document),e.jqx.mobile.getTouchEventName("touchend")+"."+t.element.id)),t.mouseupfunc=null,delete t.mouseupfunc},focus:function(){this.host.focus()},destroy:function(){var t=this;t._removeHandlers();var s=e.data(t.element,"jqxButton");s&&delete s.instance,t.host.removeClass(),t.host.removeData(),t.host.remove(),delete t.set,delete t.get,delete t.call,delete t.element,delete t.host},render:function(){this.refresh()},propertiesChangedHandler:function(e,t,s){s&&s.width&&s.height&&2==Object.keys(s).length&&(e._setSize(),e.refresh())},propertyChangedHandler:function(e,t,s,i){void 0!=this.isInitialized&&0!=this.isInitialized&&i!=s&&(e.batchUpdate&&e.batchUpdate.width&&e.batchUpdate.height&&2==Object.keys(e.batchUpdate).length||("type"===t&&e.element.setAttribute("type",i),"textImageRelation"!=t&&"textPosition"!=t&&"imgPosition"!=t||(e._img?e._positionTextAndImage():e._addImage("jqxButton")),"imgSrc"!=t&&"imgWidth"!=t&&"imgHeight"!=t||e._addImage("jqxButton"),"value"===t&&e.val(i),"width"!=t&&"height"!=t||(e._setSize(),e.refresh())))},refresh:function(){var e=this;if(!e.overrideTheme){var t=e.toThemeProperty("jqx-fill-state-focus"),s=e.toThemeProperty("jqx-fill-state-disabled"),i=e.toThemeProperty("jqx-fill-state-normal");e.enableDefault||(i="");var o=e.toThemeProperty("jqx-fill-state-hover"),a=e.toThemeProperty("jqx-fill-state-pressed"),r=e.toThemeProperty("jqx-fill-state-pressed");e.enablePressed||(a="");var n="";if(e.host){if(e.element.disabled=e.disabled,e.disabled)return e._oldCSSCurrent&&e.buttonObj.removeClass(e._oldCSSCurrent),n=i+" "+s,"default"!==e.template&&""!==e.template&&(n+=" jqx-"+e.template,""!=e.theme&&(n+=" jqx-"+e.template+"-"+e.theme)),e.buttonObj.addClass(n),void(e._oldCSSCurrent=n);n=e.isMouseOver&&!e.isTouchDevice?e.isPressed?r:o:e.isPressed?a:i,e.isFocused&&(n+=" "+t),"default"!==e.template&&""!==e.template&&(n+=" jqx-"+e.template,""!=e.theme&&(n+=" jqx-"+e.template+"-"+e.theme)),n!=e._oldCSSCurrent&&(e._oldCSSCurrent&&e.buttonObj.removeClass(e._oldCSSCurrent),e.buttonObj.addClass(n),e._oldCSSCurrent=n),e.rtl&&(e.buttonObj.addClass(e.toThemeProperty("jqx-rtl")),e.element.style.direction="rtl")}}}}),e.jqx.jqxWidget("jqxLinkButton","",{}),e.extend(e.jqx._jqxLinkButton.prototype,{defineInstance:function(){this.disabled=!1,this.height=null,this.width=null,this.rtl=!1,this.href=null},createInstance:function(t){var s=this;this.host.onselectstart=function(){return!1},this.host.attr("role","button");var i=this.height||this.element.offsetHeight,o=this.width||this.element.offsetWidth;this.href=this.element.getAttribute("href"),this.target=this.element.getAttribute("target"),this.content=this.host.text(),this.element.innerHTML="";var a=document.createElement("input");a.type="button",a.className="jqx-wrapper "+this.toThemeProperty("jqx-reset"),this._setSize(a,o,i),a.value=this.content,new e(this.element).addClass(this.toThemeProperty("jqx-link")),this.element.style.color="inherit",this.element.appendChild(a),this._setSize(a,o,i);var r=void 0==t?{}:t[0]||{};e(a).jqxButton(r),this.wrapElement=a,this.disabled&&(this.element.disabled=!0),this.propertyChangeMap.disabled=function(e,t,s,i){e.element.disabled=i,e.wrapElement.jqxButton({disabled:i})},this.addHandler(e(a),"click",function(e){return this.disabled||s.onclick(e),!1})},_setSize:function(e,t,s){s&&(isNaN(s)||(s+="px"),e.style.height=s),t&&(isNaN(t)||(t+="px"),e.style.width=t)},onclick:function(e){null!=this.target?window.open(this.href,this.target):window.location=this.href}}),e.jqx.jqxWidget("jqxRepeatButton","jqxButton",{}),e.extend(e.jqx._jqxRepeatButton.prototype,{defineInstance:function(){this.delay=50},createInstance:function(t){var s=this,i=e.jqx.mobile.isTouchDevice(),o=i?"touchend."+this.base.element.id:"mouseup."+this.base.element.id,a=i?"touchstart."+this.base.element.id:"mousedown."+this.base.element.id;this.addHandler(e(document),o,function(e){null!=s.timeout&&(clearTimeout(s.timeout),s.timeout=null,s.refresh()),void 0!=s.timer&&(clearInterval(s.timer),s.timer=null,s.refresh())}),this.addHandler(this.base.host,a,function(e){null!=s.timer&&clearInterval(s.timer),s.timeout=setTimeout(function(){clearInterval(s.timer),s.timer=setInterval(function(e){s.ontimer(e)},s.delay)},150)}),this.mousemovefunc=function(e){i||0==e.which&&null!=s.timer&&(clearInterval(s.timer),s.timer=null)},this.addHandler(this.base.host,"mousemove",this.mousemovefunc)},destroy:function(){var t=e.jqx.mobile.isTouchDevice(),s=t?"touchend."+this.base.element.id:"mouseup."+this.base.element.id,i=t?"touchstart."+this.base.element.id:"mousedown."+this.base.element.id;this.removeHandler(this.base.host,"mousemove",this.mousemovefunc),this.removeHandler(this.base.host,i),this.removeHandler(e(document),s),this.timer=null,delete this.mousemovefunc,delete this.timer;var o=e.data(this.base.element,"jqxRepeatButton");o&&delete o.instance,e(this.base.element).removeData(),this.base.destroy(),delete this.base},stop:function(){clearInterval(this.timer),this.timer=null},ontimer:function(t){var t=new e.Event("click");null!=this.base&&null!=this.base.host&&this.base.host.trigger(t)}}),e.jqx.jqxWidget("jqxToggleButton","jqxButton",{}),e.extend(e.jqx._jqxToggleButton.prototype,{defineInstance:function(){this.toggled=!1,this.uiToggle=!0,this.aria={"aria-checked":{name:"toggled",type:"boolean"},"aria-disabled":{name:"disabled",type:"boolean"}}},createInstance:function(t){var s=this;s.base.overrideTheme=!0,s.isTouchDevice=e.jqx.mobile.isTouchDevice(),e.jqx.aria(this),s.propertyChangeMap.roundedCorners=function(t,s,i,o){t.base.buttonObj.removeClass(t.toThemeProperty(e.jqx.cssroundedcorners(i))),t.base.buttonObj.addClass(t.toThemeProperty(e.jqx.cssroundedcorners(o)))},s.propertyChangeMap.toggled=function(e,t,s,i){e.refresh()},s.propertyChangeMap.disabled=function(e,t,s,i){e.base.disabled=i,e.refresh()},s.addHandler(s.base.host,"click",function(e){!s.base.disabled&&s.uiToggle&&s.toggle()}),s.isTouchDevice||(s.addHandler(s.base.host,"mouseenter",function(e){s.base.disabled||s.refresh()}),s.addHandler(s.base.host,"mouseleave",function(e){s.base.disabled||s.refresh()})),s.addHandler(s.base.host,"mousedown",function(e){s.base.disabled||s.refresh()}),s.addHandler(e(document),"mouseup.togglebutton"+s.base.element.id,function(e){s.base.disabled||s.refresh()})},destroy:function(){this._removeHandlers(),this.base.destroy()},_removeHandlers:function(){this.removeHandler(this.base.host,"click"),this.removeHandler(this.base.host,"mouseenter"),this.removeHandler(this.base.host,"mouseleave"),this.removeHandler(this.base.host,"mousedown"),this.removeHandler(e(document),"mouseup.togglebutton"+this.base.element.id)},toggle:function(){this.toggled=!this.toggled,this.refresh(),e.jqx.aria(this,"aria-checked",this.toggled)},unCheck:function(){this.toggled=!1,this.refresh()},check:function(){this.toggled=!0,this.refresh()},refresh:function(){var e=this,t=e.base.toThemeProperty("jqx-fill-state-disabled"),s=e.base.toThemeProperty("jqx-fill-state-normal");e.base.enableDefault||(s="");var i=e.base.toThemeProperty("jqx-fill-state-hover"),o=e.base.toThemeProperty("jqx-fill-state-pressed"),a=e.base.toThemeProperty("jqx-fill-state-pressed"),r="";if(e.base.element.disabled=e.base.disabled,e.base.disabled)return r=s+" "+t,void e.base.buttonObj.addClass(r);r=e.base.isMouseOver&&!e.isTouchDevice?e.base.isPressed||e.toggled?a:i:e.base.isPressed||e.toggled?o:s,"default"!==e.base.template&&""!==e.base.template&&(r+=" jqx-"+e.base.template,""!=e.base.theme&&(r+=" jqx-"+e.template+"-"+e.base.theme)),e.base.buttonObj.hasClass(t)&&t!=r&&e.base.buttonObj.removeClass(t),e.base.buttonObj.hasClass(s)&&s!=r&&e.base.buttonObj.removeClass(s),e.base.buttonObj.hasClass(i)&&i!=r&&e.base.buttonObj.removeClass(i),e.base.buttonObj.hasClass(o)&&o!=r&&e.base.buttonObj.removeClass(o),e.base.buttonObj.hasClass(a)&&a!=r&&e.base.buttonObj.removeClass(a),e.base.buttonObj.hasClass(r)||e.base.buttonObj.addClass(r)}})}(jqxBaseFramework);

