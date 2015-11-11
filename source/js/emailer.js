function sendEmail(name, email, message) {
    var parseAPPID = "7zSXQv3z5sIjEwqlPlFMYqVSkao2TyS7ismtS6oo";
    var parseJSID = "QYeNUhPt4wBNLwN9HVVxexlWWKu71yw70b21T5LG";
    
    Parse.initialize(parseAPPID, parseJSID);
    var emailObject = Parse.Object.extend("emailObject");        
    
    Parse.Cloud.run("sendEmail", data, {
        success:function() {
            $('#response').html('Email successful!').addClass('success').fadeIn('fast');
        },
        error:function(e) {
            $('#response').html('Error! Email unsuccessful!').addClass('error').fadeIn('fast');
        }
    });
}