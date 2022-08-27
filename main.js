name_of_students_array=[];

function submit(){
for(var i=1; i<=4; i++){
    var name_of_student=document.getElementById("name_of_the_student_"+i).value;
    console.log(name_of_student);
    name_of_students_array.push(name_of_student);
}

console.log(name_of_students_array);
document.getElementById("display_name_with_commas").innerHTML=name_of_students_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_of_students_array.sort();
    console.log(name_of_students_array);
    document.getElementById("display_name_without_commas").innerHTML=name_of_students_array;
}