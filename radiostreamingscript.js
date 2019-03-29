function play() 
{
if (navigator.onLine) 
{
document.getElementById('play').style.display = 'none';
document.getElementById('stop').style.display = 'block';
  document.getElementById('timer').style.display = 'block';

}
 
}
function stop() 
{
document.getElementById('stop').style.display = 'none';
document.getElementById('play').style.display = 'block';
  document.getElementById('timer').style.display = 'none';

}
function SetPageSettingValue(key, value)
{
if(key === 'headerimage') 
{
    var iframe = document.getElementById('headerimage');
    iframe.src = value;

}
 else if(key === 'footerimage') 
{
    var iframe = document.getElementById('footerimage');
iframe.src = value;

}
 else if(key === 'streamlink') 
{
  var iframe = document.getElementById('streamlink');
  var res = 'bgplayer-play://' + value;
    iframe.href = res;

}
 else 
{
    var element = document.getElementById(key);
    if(element != null)    
{
      element.innerHTML = value;
    
}

}

}
function GetPageSettingValue( key )
{
var result = null;
if(key === 'headerimage') 
{
  var iframe = document.getElementById('headerimage');
  var src = iframe.src;
  result = src.substring(src.lastIndexOf('/')+1);

}
 else if(key === 'footerimage') 
{
  var iframe = document.getElementById('footerimage');
  var coverurl = iframe.src;
  result = coverurl.substring(coverurl.lastIndexOf('/')+1);

}
 else if(key === 'streamlink') 
{
  var iframe = document.getElementById('streamlink');
  var href = iframe.href;
  var res = href.substring(16);
  result = res;

}
 else 
{
    var element = document.getElementById(key);
    if(element != null)    
{
      result = element.innerHTML;
    
}
 
}
return result;

}

