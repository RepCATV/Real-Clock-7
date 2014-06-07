var tod="";
var am="";
var pm="";
var currentoffset=0;
var otheroffset=0;
var rt;
var hidesecond=false;
function timestamp(HR,MN,SS,HT)
{
 var HSEC=HT;
 if ( HR>=12 ) tod=pm;
 else tod=am;

 if ( HR>=12 ) HR-=12;
 if ( HR==0 ) HR+=12;

 if ( SS<10 )
     SS="0"+SS;

 if ( MN<10 )
     MN="0"+MN;

 var res="";
 if ( HSEC==true )
     res=HR + ":" + MN + " " + tod;
 else
     res=HR + ":" + MN + ":" + SS + " " + tod;
 return res;
}
function datestamp(MH,DA,YR) // use getYear() in legacy way
{
 if ( YR>=100 )
     YR-=100;
 if ( MH<10 )
     MH="0"+parseInt(MH+1);
 if ( DA<10 )
     DA="0"+DA;
 if ( YR<10 )
     YR="0"+YR;
 
 return (MH) + "/" + DA + "/" + YR;
}
function timeoffset(RD,offset,HT)
{
 var LO=RD.getTime() + (RD.getTimezoneOffset() * 60000);
 var NT=new Date(LO + (3600000*offset));
 var R=timestamp(NT.getHours(),NT.getMinutes(),NT.getSeconds(),HT);
 return R;
}
function writedate(RD,offset)
{
 var LO=RD.getTime() + (RD.getTimezoneOffset() * 60000);
 var NT=new Date(LO + (3600000*offset));
 var R=datestamp(NT.getMonth(),NT.getDate(),NT.getYear());
 return R;
}
function analogclocks(nolie,offset,RD,HT)
{
    var HSEC=HT;
    var LocalOffset=RD.getTime() + (RD.getTimezoneOffset() * 60000); // required !!!!!!!!!!!!!!!
    var NT=new Date(LocalOffset + (3600000*offset));
    var realcolor=""; // formerly known as background
    var handscolor="";
    var linecolor="";
    var overlaycolor="";
    var secondcolor="";
    var MINUTE_DETECTOR=0;
    var hour3=NT.getHours();
    var minute3=NT.getMinutes();
    var second3=NT.getSeconds();
    var h=hour3;
    if ( (h==6) || (h==7) || (h==8) || (h==9) || (h==10) || (h==11) || (h==12) || (h==13) || (h==14) || (h==15) || (h==16) || (h==17) )
    {
        realcolor='white';
        handscolor='black';
        linecolor='black';
        overlaycolor='black';
        secondcolor='red';
    }
    if ( (h==18) || (h==19) || (h==20) || (h==21) || (h==22) || (h==23) || (h==0) || (h==1) || (h==2) || (h==3) || (h==4) || (h==5) )
    {
        realcolor='black';
        handscolor='white';
        linecolor='white';
        overlaycolor='white';
        secondcolor='cyan';
    }
    var T=document.getElementById(nolie).getContext('2d');
    T.save();
    T.clearRect(0,0,150,150);
    T.translate(75,75);
    T.scale(0.4,0.4);
    T.rotate(-Math.PI/2);
    T.strokeStyle = handscolor;
    T.fillStyle='white';
    T.lineWidth=6;
    T.lineCap='round';
    
    T.save();
    T.beginPath();
    T.lineWidth=14;
    T.strokeStyle=realcolor;
    T.fillStyle=realcolor;
    T.arc(0,0,142,0,Math.PI*2,true);
    T.fill();
    T.stroke();
    T.restore();

    T.save();
    for (var i=0;i<12;i++)
    {
        T.beginPath();
        T.rotate(Math.PI/6);
        T.moveTo(106,0);
        T.lineTo(120,0);
        T.stroke();
    }
    T.restore();

    T.save();
    T.lineWidth = 5;
    for (i=0;i<60;i++)
    {
        if (i%5!=0)
        {
            T.beginPath();
            T.moveTo(118,0);
            T.lineTo(120,0);
            T.stroke();
        }
        T.rotate(Math.PI/30);
    }
    T.restore();

    // To match the behavior of the hour hand like Windows' own analog clock, a special variable called MINUTE_DETECTOR is used
    switch (minute3)
    {
        case 0:
            MINUTE_DETECTOR=0;
            break;
        case 1:
            MINUTE_DETECTOR=0;
            break;
        case 2:
            MINUTE_DETECTOR=0;
            break;
        case 3:
            MINUTE_DETECTOR=0;
            break;
        case 4:
            MINUTE_DETECTOR=0;
            break;
        case 5:
            MINUTE_DETECTOR=0;
            break;
        case 6:
            MINUTE_DETECTOR=0;
            break;
        case 7:
            MINUTE_DETECTOR=0;
            break;
        case 8:
            MINUTE_DETECTOR=0;
            break;
        case 9:
            MINUTE_DETECTOR=0;
            break;
        case 10:
            MINUTE_DETECTOR=0;
            break;
        case 11:
            MINUTE_DETECTOR=0;
            break;
        case 12:
            MINUTE_DETECTOR=12;
            break;
        case 13:
            MINUTE_DETECTOR=12;
            break;
        case 14:
            MINUTE_DETECTOR=12;
            break;
        case 15:
            MINUTE_DETECTOR=12;
            break;
        case 16:
            MINUTE_DETECTOR=12;
            break;
        case 17:
            MINUTE_DETECTOR=12;
            break;
        case 18:
            MINUTE_DETECTOR=12;
            break;
        case 19:
            MINUTE_DETECTOR=12;
            break;
        case 20:
            MINUTE_DETECTOR=12;
            break;
        case 21:
            MINUTE_DETECTOR=12;
            break;
        case 22:
            MINUTE_DETECTOR=12;
            break;
        case 23:
            MINUTE_DETECTOR=12;
            break;
        case 24:
            MINUTE_DETECTOR=24;
            break;
        case 25:
            MINUTE_DETECTOR=24;
            break;
        case 26:
            MINUTE_DETECTOR=24;
            break;
        case 27:
            MINUTE_DETECTOR=24;
            break;
        case 28:
            MINUTE_DETECTOR=24;
            break;
        case 29:
            MINUTE_DETECTOR=24;
            break;
        case 30:
            MINUTE_DETECTOR=24;
            break;
        case 31:
            MINUTE_DETECTOR=24;
            break;
        case 32:
            MINUTE_DETECTOR=24;
            break;
        case 33:
            MINUTE_DETECTOR=24;
            break;
        case 34:
            MINUTE_DETECTOR=24;
            break;
        case 35:
            MINUTE_DETECTOR=24;
            break;
        case 36:
            MINUTE_DETECTOR=36;
            break;
        case 37:
            MINUTE_DETECTOR=36;
            break;
        case 38:
            MINUTE_DETECTOR=36;
            break;
        case 39:
            MINUTE_DETECTOR=36;
            break;
        case 40:
            MINUTE_DETECTOR=36;
            break;
        case 41:
            MINUTE_DETECTOR=36;
            break;
        case 42:
            MINUTE_DETECTOR=36;
            break;
        case 43:
            MINUTE_DETECTOR=36;
            break;
        case 44:
            MINUTE_DETECTOR=36;
            break;
        case 45:
            MINUTE_DETECTOR=36;
            break;
        case 46:
            MINUTE_DETECTOR=36;
            break;
        case 47:
            MINUTE_DETECTOR=36;
            break;
        case 48:
            MINUTE_DETECTOR=48;
            break;
        case 49:
            MINUTE_DETECTOR=48;
            break;
        case 50:
            MINUTE_DETECTOR=48;
            break;
        case 51:
            MINUTE_DETECTOR=48;
            break;
        case 52:
            MINUTE_DETECTOR=48;
            break;
        case 53:
            MINUTE_DETECTOR=48;
            break;
        case 54:
            MINUTE_DETECTOR=48;
            break;
        case 55:
            MINUTE_DETECTOR=48;
            break;
        case 56:
            MINUTE_DETECTOR=48;
            break;
        case 57:
            MINUTE_DETECTOR=48;
            break;
        case 58:
            MINUTE_DETECTOR=48;
            break;
        case 59:
            MINUTE_DETECTOR=48;
            break;
        case 60:
            MINUTE_DETECTOR=0;
            break;
    }

    var rh=hour3;
    if ( rh>=12 ) rh-=12;

    if ( rh==0 ) rh=12;
    
    T.fillStyle=handscolor;

    if ( HSEC==true )
    {
     T.save();
     T.rotate( rh*(Math.PI/6) + (Math.PI/360)*MINUTE_DETECTOR ); // no longer moves as second passes by
     T.lineWidth=4;
     T.beginPath();
     T.moveTo(0,0); // match Windows 7's clock
     T.lineTo(80,0);
     T.stroke();
     T.restore();

     T.save();
     T.rotate( (Math.PI/30)*minute3 );
     T.lineWidth=4;
     T.beginPath();
     T.moveTo(0,0);
     T.lineTo(105,0);
     T.stroke();
     T.beginPath();
     T.lineWidth=1;
     T.strokeStyle=linecolor;
     T.fillStyle=linecolor;
     T.arc(0,0,6,0,Math.PI*2,true);
     T.fill();
     T.stroke();
     T.restore();
    
     T.beginPath();
     T.lineWidth=14;
     T.strokeStyle=overlaycolor;
     T.arc(0,0,142,0,Math.PI*2,true);
     T.stroke();
    }
    else
    {
     T.save();
     T.rotate( rh*(Math.PI/6) + (Math.PI/360)*MINUTE_DETECTOR ); // no longer moves as second passes by
     T.lineWidth=4;
     T.beginPath();
     T.moveTo(0,0); // match Windows 7's clock
     T.lineTo(80,0);
     T.stroke();
     T.restore();

     T.save();
     T.rotate( (Math.PI/30)*minute3 );
     T.lineWidth=4;
     T.beginPath();
     T.moveTo(0,0);
     T.lineTo(105,0);
     T.stroke();
     T.restore();

     T.save();
     T.rotate( (Math.PI/30)*second3 );
     T.lineWidth=2;
     T.strokeStyle=secondcolor;
     T.beginPath();
     T.moveTo(-35,0);
     T.lineTo(105,0);
     T.stroke();
     T.beginPath();
     T.lineWidth=1;
     T.strokeStyle=linecolor;
     T.fillStyle=linecolor;
     T.arc(0,0,6,0,Math.PI*2,true);
     T.fill();
     T.stroke();
     T.restore();
    
     T.beginPath();
     T.lineWidth=14;
     T.strokeStyle=overlaycolor;
     T.arc(0,0,142,0,Math.PI*2,true);
     T.stroke();
    }
    T.restore(); // last part is call restore()
}

function weekdaymaker(RD,offset)
{
 var LO=RD.getTime() + (RD.getTimezoneOffset() * 60000);
 var NT=new Date(LO + (3600000*offset));
 var weekday=new Array();
 weekday[0]="Sunday";
 weekday[1]="Monday";
 weekday[2]="Tuesday";
 weekday[3]="Wednesday";
 weekday[4]="Thursday";
 weekday[5]="Friday";
 weekday[6]="Saturday";
 return weekday[NT.getDay()];
}
function clock()
{
 var realdate=new Date();
 //analog clock showing the page ->
 analogclocks('analogclock_0',currentoffset,realdate,hidesecond);
 document.getElementById('defaultclock').innerHTML=timeoffset(realdate,currentoffset,hidesecond)+"<br />"+weekdaymaker(realdate,currentoffset)+"<br />"+writedate(realdate,currentoffset);
 rt=setTimeout('clock()',1000);
}
function init()
{
 am="AM";
 pm="PM";
 document.getElementById('defaultclock').style.fontFamily='Arial';
 document.getElementById('defaultclock').style.fontSize="20px";
 var realoperatingsystem=checkOS();
 if ( realoperatingsystem=="Windows 8" || realoperatingsystem=="Windows 8.1" || realoperatingsystem=="Windows 9" || realoperatingsystem=="Linux" )
 {
     currentoffset=0;
     clock();
 }
 else
 {
     currentoffset=NaN; // set currentoffset to Not A Number if user's operating system is not Windows 8.1, or Windows 9 or Linux
     am=null;
     pm=null;
     document.getElementById('timezonemaker').disabled=true;
     document.getElementById('hidesecondline').disabled=true;
     document.getElementById('defaultclock').style.fontFamily='Times New Roman';
     document.getElementById('defaultclock').style.fontSize="20px";
     document.getElementById('analogclock_0').innerHTML="Real Clock 6.1 expects any Windows newer than Windows 7.";
     document.getElementById('defaultclock').innerHTML="Please upgrade your Windows version or use Ubuntu or Linux";
 }
}
function controlsecond()
{
 var HT=document.getElementById('hidesecondline');
 hidesecond=HT.checked;
}
function changetz()
{
 clearTimeout(rt);
 var TZ=document.getElementById('timezonemaker').options[document.getElementById('timezonemaker').selectedIndex].value;
 currentoffset=parseFloat(TZ);
 clock();
}
