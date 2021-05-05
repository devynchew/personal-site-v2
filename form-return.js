$(document).ready(function () {
    $("#letstalkbtn").click(function () {
        var formData = [];
        var formString = "";
        var formHeader = ["Topic: ", "First Name: ", "Last Name: ", "Email: ", "Phone: ", "Company ", "Profession: ", "Country: ", "Message: ", "Suscribe: "];
        var formID = ["#topic", "#firstName", "#lastName", "#email", "#phone", "#company", "#profession", "#country", "#message", "#customCheck"];
        for (var i = 0; i < formHeader.length; i++) {
            formData.push(formHeader[i] + $(formID[i]).val());
        }

        for (var i = 0; i < formData.length; i++) {
            formString+= "\n" + formData[i];
        }
        alert("These are your form submission details: " + formString);
    });
});



