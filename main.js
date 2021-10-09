studentnames=[]
function submit(){
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;
    studentnames.push(name1);
studentnames.push(name2);
studentnames.push(name3);
studentnames.push(name4);
console.log(studentnames);
document.getElementById("display_name").innerHTML=studentnames;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    studentnames.sort();
    console.log(studentnames);
    document.getElementById("display_name").innerHTML = studentnames;
}