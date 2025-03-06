function validateform() {

 var x = document.forms["myname"]["fname"].value;
 if ( x == "") {

   alert("name must be filled out");
   return false;
 } else document.write("name submitted");
}