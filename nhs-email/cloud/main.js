var API = "key-8486257cbe6f1a6afeb01c0ceed88ee0";
var Domain = "sandboxedbe861c04e747b2a07f5581bf374e4e.mailgun.org";
var Mailgun = require('mailgun');
Mailgun.initialize(Domain, API);

Parse.Cloud.define("sendEmail", function(request, response) {
 
    var text = "Submission Form From MattBlackDesign.com\n\n" + 
        "Name: "+request.params.name + "\n\n"+
        "Email: "+request.params.email + "\n\n"+
        "Message: \n"+request.params.comments;
 
     
    Mailgun.sendEmail({
            to: "petermaggio@sbcglobal.net",
            from: request.params.email,
            subject: "This is a test email from: " + request.params.name,
            text: text
        }, {
        success: function(httpResponse) {
            response.success();
        },
        error: function(httpResponse) {
            console.error(httpResponse);
            console.error('this');
            response.error(httpResponse);
        }
    });
 
});
