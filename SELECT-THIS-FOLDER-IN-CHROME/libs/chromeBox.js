
var _$_cf8c=["1.0","Chrome Box","getManifest","runtime","basic","default_icon","action","manifest","","object","toString","random","ceil","create","notifications","getBackgroundPage","extension","_","replace","name","_local_","default","localName","getDefaultLocalModel","log","string","stringify","localLogs","_box","clearLogs","Local data is undefined","get","local","storage","onSet","function","set","assign","setLocal","getLocal","addListener","onChanged","setBadgeText","browserAction","tabs","targetTab","activeTab","id","sendMessage","query","openedWindows","forEach","onMessage","broadcastToContentScript","active","broadcast","all","event","data","listen","state","width","height","popup","minimized","final","push","then","windows","availWidth",",height=","availHeight",",left=120,top=120\x0A\x09\x09directories=no,titlebar=no,toolbar=no,location=no,status=no","I\'m Awesome","page","contextMenus","menuItemId","onClicked","remove","url","includes","closeTab","eachTab","substr","!","reason","install","onInstalled","setUninstallURL","undefined","$box is already defined","error","info"," v","version"," "," ~ Making Chrome Extension easy for you!","Failed to load Chrome Box"];var $box=undefined;(function(){const _0x298C={info:{version:_$_cf8c[0],name:_$_cf8c[1]},manifest:chrome[_$_cf8c[3]][_$_cf8c[2]](),notify:(_0x2A52)=>{let _0x29EF={type:_$_cf8c[4],iconUrl:_0x298C[_$_cf8c[7]][_$_cf8c[6]][_$_cf8c[5]],title:_$_cf8c[8],message:_0x2A52};if( typeof _0x2A52=== _$_cf8c[9]){_0x29EF= {..._0x29EF,..._0x2A52}};let _0x2AB5=Math[_$_cf8c[12]](Math[_$_cf8c[11]]()* 100)[_$_cf8c[10]]();chrome[_$_cf8c[14]][_$_cf8c[13]](_0x2AB5,_0x29EF)},getBackgroundPage:()=>{return chrome[_$_cf8c[16]][_$_cf8c[15]]()},getDefaultLocalModel:()=>{return {}},localName:chrome[_$_cf8c[3]][_$_cf8c[2]]()[_$_cf8c[19]][_$_cf8c[18]](/ /g,_$_cf8c[17])+ _$_cf8c[20],getLocal:(_0x2B18,_0x2B7B= _$_cf8c[21])=>{_0x2B7B= $box[_$_cf8c[22]]+ _0x2B7B;chrome[_$_cf8c[33]][_$_cf8c[32]][_$_cf8c[31]](_0x2B7B,(_0x2BDE)=>{let _0x2C41=_0x2BDE[_0x2B7B];_0x2C41= _0x2C41?_0x2C41:$box[_$_cf8c[23]]();if(_0x2C41){_0x2C41[_$_cf8c[24]]= (_0x2CA4)=>{console[_$_cf8c[24]](_0x2CA4);_0x2CA4=  typeof _0x2CA4=== _$_cf8c[25]?_0x2CA4:JSON[_$_cf8c[26]](_0x2CA4);_0x2C41[_$_cf8c[28]][_$_cf8c[27]]+= _0x2CA4};_0x2C41[_$_cf8c[29]]= ()=>{_0x2C41[_$_cf8c[28]][_$_cf8c[27]]= _$_cf8c[8]};_0x2B18(_0x2C41)}else {console[_$_cf8c[24]](_$_cf8c[30]);_0x2B18(undefined)}})},setLocal:(_0x2D6A,_0x2E30)=>{let _0x2DCD={name:_$_cf8c[21],onSet:undefined};_0x2E30= {..._0x2DCD,..._0x2E30};let _0x2B7B=$box[_$_cf8c[22]]+ _0x2E30[_$_cf8c[19]];let _0x2D07={};_0x2D07[_0x2B7B]= _0x2D6A;if( typeof _0x2E30[_$_cf8c[34]]=== _$_cf8c[35]){chrome[_$_cf8c[33]][_$_cf8c[32]][_$_cf8c[36]](_0x2D07,_0x2E30[_$_cf8c[34]])}else {chrome[_$_cf8c[33]][_$_cf8c[32]][_$_cf8c[36]](_0x2D07)}},updateLocal:(_0x2E93)=>{$box[_$_cf8c[39]]((_0x2EF6)=>{let _0x2F59=Object[_$_cf8c[37]](_0x2EF6,_0x2E93);$box[_$_cf8c[38]](_0x2F59)})},flushLocal:(_0x2E93)=>{$box[_$_cf8c[38]]({})},onLocalChange:(_0x2B18)=>{chrome[_$_cf8c[33]][_$_cf8c[32]][_$_cf8c[41]][_$_cf8c[40]]((_0x2FBC)=>{_0x2B18(_0x2FBC)})},addBadge:(_0x301F)=>{chrome[_$_cf8c[43]][_$_cf8c[42]]({text:_0x301F})},broadcastToContentScript:(_0x2D6A)=>{let _0x3082={listenFor:name};_0x2D6A= {..._0x3082,..._0x2D6A};if(chrome[_$_cf8c[44]]){if(_0x2D6A[_$_cf8c[45]]== _$_cf8c[46]){chrome[_$_cf8c[44]][_$_cf8c[49]]({currentWindow:true,active:true},(_0x30E5)=>{chrome[_$_cf8c[44]][_$_cf8c[48]](_0x30E5[0][_$_cf8c[47]],_0x2D6A)})}else {$box[_$_cf8c[39]]((_0x2C41)=>{for(let _0x3148 in _0x2C41[_$_cf8c[50]]){let _0x31AB=_0x2C41[_$_cf8c[50]][_0x3148];chrome[_$_cf8c[44]][_$_cf8c[49]]({windowId:_0x31AB},(_0x30E5)=>{_0x30E5[_$_cf8c[51]]((_0x320E)=>{chrome[_$_cf8c[44]][_$_cf8c[48]](_0x320E[_$_cf8c[47]],_0x2D6A)})})}})}}},listen:(_0x2B18)=>{chrome[_$_cf8c[3]][_$_cf8c[52]][_$_cf8c[40]](_0x2B18)},broadcast:(_0x2D6A)=>{chrome[_$_cf8c[3]][_$_cf8c[48]](_0x2D6A);$box[_$_cf8c[53]](_0x2D6A)},send:(_0x3271,_0x2D6A)=>{$box[_$_cf8c[55]]({event:_0x3271,data:_0x2D6A,targetTab:_$_cf8c[54]})},sendToAll:(_0x3271,_0x2D6A)=>{$box[_$_cf8c[55]]({event:_0x3271,data:_0x2D6A,targetTab:_$_cf8c[56]})},on:(_0x2B18)=>{$box[_$_cf8c[59]]((_0x2FBC)=>{_0x2B18(_0x2FBC[_$_cf8c[57]],_0x2FBC[_$_cf8c[58]])})},openURL:(_0x32D4,_0x2E30= {active:false})=>{_0x2E30= {..._0x2E30,..._0x32D4};chrome[_$_cf8c[44]][_$_cf8c[13]]({url:_0x32D4,active:_0x2E30[_$_cf8c[54]]})},openPopup:(_0x32D4,_0x2B18,_0x2E30= {})=>{console[_$_cf8c[24]](_0x2E30);if(_0x2E30[_$_cf8c[60]]){let _0x3460=_0x2E30[_$_cf8c[61]]?_0x2E30[_$_cf8c[61]]:440;let _0x3337=_0x2E30[_$_cf8c[62]]?_0x2E30[_$_cf8c[62]]:220;let _0x339A=screen[_$_cf8c[61]]/ 2- _0x3460/ 2;let _0x33FD=screen[_$_cf8c[62]]/ 2- _0x3337/ 2;_0x2E30= {..._0x2E30,...{width:_0x3460,height:_0x3337,left:_0x339A,top:_0x33FD}}};_0x2E30= {...{url:_0x32D4,type:_$_cf8c[63],state:_$_cf8c[64]},..._0x2E30};console[_$_cf8c[24]](_0x2E30);console[_$_cf8c[24]](_$_cf8c[65]);if( typeof _0x2B18=== _$_cf8c[35]){chrome[_$_cf8c[68]][_$_cf8c[13]](_0x2E30,_0x2B18)[_$_cf8c[67]]((_0x3460)=>{$box[_$_cf8c[39]]((_0x2C41)=>{if(!_0x2C41[_$_cf8c[50]]){_0x2C41[_$_cf8c[50]]= []};_0x2C41[_$_cf8c[50]][_$_cf8c[66]](_0x3460[_$_cf8c[47]]);$box[_$_cf8c[38]](_0x2C41)})})}else {chrome[_$_cf8c[68]][_$_cf8c[13]](_0x2E30)[_$_cf8c[67]]((_0x3460)=>{$box[_$_cf8c[39]]((_0x2C41)=>{if(!_0x2C41[_$_cf8c[50]]){_0x2C41[_$_cf8c[50]]= []};_0x2C41[_$_cf8c[50]][_$_cf8c[66]](_0x3460[_$_cf8c[47]]);$box[_$_cf8c[38]](_0x2C41)})})}},simplePopup:(_0x32D4,_0x3526,_0x34C3= ("scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,\x0A\x09\x09width="+screen[_$_cf8c[69]]+_$_cf8c[70]+screen[_$_cf8c[71]]+_$_cf8c[72]))=>{open(_0x32D4,_0x3526,_0x34C3)},createMenu:(_0x2E30= {id:_$_cf8c[21],title:_$_cf8c[73],contexts:[_$_cf8c[74]]})=>{chrome[_$_cf8c[75]][_$_cf8c[13]](_0x2E30)},onMenuClick:(_0x3589,_0x2B18)=>{chrome[_$_cf8c[75]][_$_cf8c[77]][_$_cf8c[40]](function(_0x35EC){if(_0x35EC[_$_cf8c[76]]== _0x3589){_0x2B18()}})},eachTab:(_0x2B18,_0x2E30= {currentWindow:false})=>{chrome[_$_cf8c[44]][_$_cf8c[49]](_0x2E30,function(_0x364F){_0x364F[_$_cf8c[51]](_0x2B18)})},activeTab:(_0x2B18)=>{chrome[_$_cf8c[44]][_$_cf8c[49]]({active:true,currentWindow:true},function(_0x30E5){_0x2B18(_0x30E5[0])})},closeTab:(_0x320E,_0x2B18)=>{if( typeof _0x2B18=== _$_cf8c[35]){chrome[_$_cf8c[44]][_$_cf8c[78]](_0x320E[_$_cf8c[47]],_0x2B18)}else {chrome[_$_cf8c[44]][_$_cf8c[78]](_0x320E[_$_cf8c[47]])}},closeTabIfIncludes:(_0x301F,_0x36B2= _$_cf8c[79])=>{$box[_$_cf8c[82]]((_0x320E,_0x3148,_0x3715)=>{if(_0x320E[_0x36B2][_$_cf8c[80]](_0x301F)){$box[_$_cf8c[81]](_0x320E)}})},log:(_0x301F)=>{if( typeof _0x301F=== _$_cf8c[25]&& _0x301F[_$_cf8c[83]](0,1)== _$_cf8c[84]){console[_$_cf8c[24]](("%c"+_0x301F+_$_cf8c[8]),"color:red;")}else {console[_$_cf8c[24]](("%c"+_0x301F+_$_cf8c[8]),"color:black;")}},onInstall:(_0x2B18)=>{chrome[_$_cf8c[3]][_$_cf8c[87]][_$_cf8c[40]](function(_0x3778){if(_0x3778[_$_cf8c[85]]== _$_cf8c[86]){_0x2B18(_0x3778)}})},setUninstallUrl:(_0x32D4)=>{chrome[_$_cf8c[3]][_$_cf8c[88]](_0x32D4)}};$box=  typeof $box=== _$_cf8c[89]?_0x298C:console[_$_cf8c[91]](_$_cf8c[90])})();if($box[_$_cf8c[92]][_$_cf8c[19]]){console[_$_cf8c[24]](("%c "+$box[_$_cf8c[92]][_$_cf8c[19]]+_$_cf8c[93]+$box[_$_cf8c[92]][_$_cf8c[94]]+_$_cf8c[95]),"background:#3B83C0;color:white;padding:5px;"+ "border-radius:1.4em;",_$_cf8c[96])}else {console[_$_cf8c[91]](_$_cf8c[97])}