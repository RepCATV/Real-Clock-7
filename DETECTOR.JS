function checkOS()
{
 var main=navigator;
 var OPERATING_SYSTEM=main.userAgent;
 var Faulting="";
 // start with Windows 98 and end with Windows 8.1
 if ( OPERATING_SYSTEM.indexOf("Windows 98") != -1 )
     Faulting="Windows 98";
 else if ( OPERATING_SYSTEM.indexOf("Win 9x 4.90")!=-1 )
     Faulting="Windows 98 Millennium Edition";
 else if ( OPERATING_SYSTEM.indexOf("Windows NT 4.0") != -1 )
     Faulting="Windows NT 4.0";
 else if ( OPERATING_SYSTEM.indexOf("Windows NT 5.0") != -1 )
     Faulting="Windows 2000";
 else if ( OPERATING_SYSTEM.indexOf("Windows NT 5.1") != -1 )
     Faulting="Windows XP";
 else if ( OPERATING_SYSTEM.indexOf("Windows NT 5.2") != -1 )
     Faulting="Windows Server 2003";
 else if ( OPERATING_SYSTEM.indexOf("Windows NT 6.0") != -1 )
     Faulting="Windows Vista";
 else if ( OPERATING_SYSTEM.indexOf("Windows NT 6.1") != -1 )
     Faulting="Windows 7";
 else if ( OPERATING_SYSTEM.indexOf("Windows NT 6.2") != -1 )
     Faulting="Windows 8";
 else if ( OPERATING_SYSTEM.indexOf("Windows NT 6.3") != -1 )
     Faulting="Windows 8.1";
 else if ( OPERATING_SYSTEM.indexOf("Linux") != -1 ) // Detector.js now has full support for Linux
     Faulting="Linux";
 else
     Faulting="Invalid Operating System";
 return Faulting;
}
