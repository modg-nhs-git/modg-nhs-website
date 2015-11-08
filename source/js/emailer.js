$(document).ready(function() {    

    $("#commentForm").on("submit", function(e) {
        e.preventDefault();
        
        var parseAPPID = "7zSXQv3z5sIjEwqlPlFMYqVSkao2TyS7ismtS6oo";
        var parseJSID = "QYeNUhPt4wBNLwN9HVVxexlWWKu71yw70b21T5LG";
        
        Parse.initialize(parseAPPID, parseJSID);
        var emailObject = Parse.Object.extend("emailObject");        

        console.log("Handling the submit");
        //add error handling here
        //gather the form data

        var data = {};
        data.name = $("#name").val();
        data.email = $("#email").val();
        data.comments = $("#comments").val();


        Parse.Cloud.run("sendEmail", data, {
            success:function() {
                $('#response').html('Email successful!').addClass('success').fadeIn('fast');
            },
            error:function(e) {
                $('#response').html('Error! Email unsuccessful!').addClass('error').fadeIn('fast');
            }
        });
    });
});