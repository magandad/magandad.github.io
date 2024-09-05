<%
  Dim dbConn, dbPath
   dbPath = "c:\Inet\scripts\kiko.mdb"
  Set dbConn = Server.CreateObject("ADODB.Connection")
  dbConn.Open "PROVIDER=MICROSOFT.JET.OLEDB.4.0;DATA SOURCE=" & dbPath

dim un, les, uname, mname, tran, mysql, mytr1, mytr2, mytr3, mytr4, oldtrans


mysql = "Select unit, lesson, unitname, moviename, transcript from transcript where unit = '11' AND lesson = '5'"

set RS = dbConn.Execute( mysql )
RS.MOVEFIRST

Set oRegExp = new RegExp
oRegExp.Global = True
oRegExp.Pattern = "\r"

oldtrans = RS("transcript")

mytr1 = oRegExp.Replace(oldtrans,"</p><p>")

Set kRegExp = new RegExp
kRegExp.Global = True
kRegExp.Pattern = "{"

mytr2 = kRegExp.Replace(mytr1, "<A HREF=""#"" onMouseOver=""showGloss('")

Set lRegExp = new RegExp
lRegExp.Global = True
lRegExp.Pattern = "\*"

mytr3 = lRegExp.Replace(mytr2, "');"" onMouseout=""hideGloss();"">")

Set mRegExp = new RegExp
mRegExp.Global = True
mRegExp.Pattern = "}"
mytr4 = mRegExp.Replace(mytr3, "</A>")


%>


<html>
<head>
<title>KIKO: Lesson Title, Video Selection</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<SCRIPT SRC="../../scripts/glossary.js" LANGUAGE="Javascript"></SCRIPT>
<script language="JavaScript">
<!--

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

//-->
</script>
</head>

<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<DIV ID="glossaryDefinition" STYLE="position:absolute; z-index:0; visibility: hidden; background-color: #CCCCFF; layer-background-color: #CCCCFF; border: 1px none #000000"></DIV>
<table border="0" cellpadding="4" cellspacing="0" width="100%">
  <tr> 
    <td><img src="../../media/images/kikoLogo.gif" width="173" height="78"></td>
    <td> 
      <p align="right"><font face="Verdana, Arial, Helvetica, sans-serif" size="2"><a href="../../index.html">Home<br>
        </a></font><font face="Verdana, Arial, Helvetica, sans-serif" size="2"><a href="../../overview.html">Overview<br>
        </a></font><font face="Verdana, Arial, Helvetica, sans-serif" size="2"><a href="../../techHelp.html">Technical 
        Help</a></font></p>
    </td>
  </tr>
  <tr> 
    <td colspan="2" bgcolor="#CCCCFF"><font face="Verdana, Arial, Helvetica, sans-serif" size="2"><A HREF="../../unitSelect.html">Select 
      Unit </A> &gt; <A HREF="../index.html">Unit <%=RS("unit")%>: <I><% =RS("unitname") %></I></A> &gt; 
      <b>Lesson <%=RS("lesson")%>: </b></font></td>
  </tr>
  <tr> 
    <td colspan="2"> 
      <table width="100%" border="0" cellspacing="4">
        <tr> 
          <td valign="top"> 
            <p align="center"><embed src="../../media/av/unit11/Movies/<%=RS("moviename")%>" width=320 height=256 autoplay=false controller=true loop=false pluginspage="http://www.apple.com/quicktime/">
              </embed></p>
            <p align="center"><a href="#" onClick="MM_openBrWindow('../../kikoculturey2.html#unit11','culturalNote','scrollbars=yes,resizable=yes,width=400,height=300')"><img src="../../media/images/culturalNote.gif" width="106" height="28" border="0"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onClick="MM_openBrWindow('../../kikogrammary2.html#unit11','grammarNote','scrollbars=yes,resizable=yes,width=400,height=300')"><img src="../../media/images/grammarNote.gif" width="106" height="28" border="0"></a></p>
          </td>
          <td valign="top"> 
            <P><font face="Verdana, Arial, Helvetica, sans-serif" size="2"><%=mytr4%>
          </td>
        </tr>
      </table>
      <p><!-- #BeginLibraryItem "Library/footer.lbi" --><font face="Verdana, Arial, Helvetica, sans-serif" size="2">&copy; African Languages 
Program, University of Georgia, and African Studies Program, University of Pennsylvania</font><!-- #EndLibraryItem --></p>
    </td>
  </tr>
</table>
<p>&nbsp;</p>

</body>
</html>
