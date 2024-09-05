function printPage() {
  if (window.print)
    window.print()
  else
    alert("Sorry, your browser doesn't support this feature.");
}
