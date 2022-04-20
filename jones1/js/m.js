function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function sendform() {
    
    var a = document.getElementById("m").value;
    document.getElementById("msg").textContent=a;
}