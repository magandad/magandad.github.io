<%
  Dim dbConn, dbPath
   dbPath = "c:\Inet\scripts\kikoglossary.mdb"
  Set dbConn = Server.CreateObject("ADODB.Connection")
  dbConn.Open "PROVIDER=MICROSOFT.JET.OLEDB.4.0;DATA SOURCE=" & dbPath

mysql = "Select kiswahiliword, englishword, unit, unittitle from glossary where unit = '14' order by kiswahiliword"

set RS = dbConn.Execute( mysql )
RS.MOVEFIRST
dim unitno
if RS("unit") <= 18  then 
   unitno = "0" & RS("unit")
end if

%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML><HEAD><TITLE>KIKO: Unit <%=RS("unit")%>: Glossary</TITLE>
<META content="text/html; charset=iso-8859-1" http-equiv=Content-Type>
<META content="MSHTML 5.00.2314.1000" name=GENERATOR></HEAD>
<BODY bgColor=#ffffff leftMargin=0 topMargin=0 marginheight="0" marginwidth="0">
<TABLE border=0 cellPadding=4 cellSpacing=0 width="100%">
  <TBODY>
  <TR>
    <TD><IMG height=78 src="../media/images/kikoLogo.gif" width=173></TD>
    <TD>
      <P align=right><FONT face="Verdana, Arial, Helvetica, sans-serif" 
      size=2><A 
      href="../index.html">Home<BR></A></FONT><FONT 
      face="Verdana, Arial, Helvetica, sans-serif" size=2><A 
      href="../overview.html">Overview<BR></A></FONT><FONT 
      face="Verdana, Arial, Helvetica, sans-serif" size=2><A 
      href="../techHelp.html">Technical 
      Help</A></FONT></P></TD></TR>
  <TR>
    <TD bgColor=#ccccff colSpan=2><FONT 
      face="Verdana, Arial, Helvetica, sans-serif" size=2><A 
      href="../unitSelect.html">Select Unit 
      </A>&gt; <A 
      href="index.html">Unit <%=RS("unit")%>: 
      <I><%=RS("unittitle")%> </I></A> &gt;<B> Glossary</B></FONT></TD></TR>
  <TR>
    <TD colSpan=2>
      <P><FONT face="Verdana, Arial, Helvetica, sans-serif" size=4><B>Unit <%=RS("unit")%>: 
      Glossary</B></FONT></P>
      <BLOCKQUOTE>
        <TABLE border=0 cellPadding=8 cellSpacing=0>
          <TBODY>
          <TR>
            <TD bgColor=#ffff00><FONT 
              face="Verdana, Arial, Helvetica, sans-serif" size=2><B><FONT 
              color=#00cc33>Kiswahili</FONT></B></FONT></TD>
            <TD bgColor=#00cc33><FONT 
              face="Verdana, Arial, Helvetica, sans-serif" size=2><B><FONT 
              color=#ffff00>English</FONT></B></FONT></TD></TR>
<% dim myflag
 myflag = 1
WHILE NOT RS.EOF
 if myflag = 1 then
    mycolor = "#ccccff"
myflag = 0
 else
   mycolor = "#cccccc"
myflag = 1
end if
          response.write "<TR bgColor=" & mycolor & ">"
          response.write "<TD><FONT face=""Verdana, Arial, Helvetica, sans-serif"" size=2>" & RS("kiswahiliword") & "</FONT></TD>"

          response.write "<TD><FONT face=""Verdana, Arial, Helvetica, sans-serif"" size=2>" & RS("englishword") & "</FONT></TD></TR>"
RS.MOVENEXT
wend
     

response.write "</TBODY></TABLE></BLOCKQUOTE><P>&nbsp;</P></TD></TR>"

response.write "<TR><TD colSpan=2>"

response.write "<P><!-- #BeginLibraryItem ""/Library/footer.lbi"" --><FONT "
response.write "face=""Verdana, Arial, Helvetica, sans-serif"" size=2>© African Languages"
response.write "Program, University of Georgia, and African Studies Program, University of"
response.write "Pennsylvania</FONT><!-- #EndLibraryItem --></P></TD></TR></TBODY></TABLE>"
%>
</BODY></HTML>
