function idCard() {
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var address=document.getElementById("address").value;

    document.getElementById("postFullName").innerHTML=firstName+" "+lastName;
    document.getElementById("postAddress").innerHTML=address;

    var age=document.getElementById("age").value;
    var phoneNumber=document.getElementById("phoneNumber").value;

    var numberArray=[];

    numberArray.push(age, phoneNumber);

    for(var i=0; i<numberArray.length; i++) {
        if (numberArray[i]<=100) {
            document.getElementById("postAge").innerHTML="Age: " + numberArray[i];
        } 
        else if (numberArray[i]>100) {
            document.getElementById("postPhoneNumber").innerHTML= "Phone Number: " + numberArray[i];
        }
    }

}