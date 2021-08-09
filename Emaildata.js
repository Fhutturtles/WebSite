
const submit = document.querySelector("button");
submit.onclick = function(event)
{

let UserEmail = document.getElementById("Email").value



    event.preventDefault();//have this to prevent the page from refreshing before the function ends!!!

 if(UserEmail == false)
 {
     alert("Enter an Email Please")
 }
else{
    alert("Email has been submitted");
}

}