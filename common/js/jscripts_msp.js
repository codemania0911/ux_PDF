function printit(){  
if (window.print) {
    window.print() ;  
} else {
    var WebBrowser = '<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';
document.body.insertAdjacentHTML('beforeEnd', WebBrowser);
    WebBrowser1.ExecWB(6, 2);//Use a 1 vs. a 2 for a prompting dialog box    WebBrowser1.outerHTML = "";  
}
}

function clearDefault(f) {
  if (f.defaultValue==f.value){
	  f.value = ""
	  f.className='black10'; 
  }
}

function restoreDefault(f) {
  if (f.value==""){
	  f.value = f.defaultValue
	  f.className='greyital'; 
  }
}


function submitenter(myfield,e){
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;
	
	if (keycode == 13){
	   myfield.form.submit();
	   return false;
	}else
	   return true;
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function popWin(url){
		windowName = window.open (url, 'popsml', config='height=300,width=400, toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, directories=no, status=no');
		windowName.focus();
}
function popWin2(url){
		windowName = window.open (url, 'popsml', config='height=530,width=400, toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, directories=no, status=no');
		windowName.focus();
}
function popLargeWin(url){
		windowName = window.open (url, 'poplrg', config='height=650,width=800, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, directories=yes, status=yes');
		windowName.focus();
}

