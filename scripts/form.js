// JavaScript Document

$.post('http://formprocess.sebengriffin.com/contact2.php', {

    // These are the names of the form values

    name: $('#name_input').val(),
    email: $('#email_input').val(),
    message: $('#message_input').val()

    // HTML function

    }, function (html) {
        // Place the HTML in a astring
        var response=html;

        // PHP was done and email sent
        if (response=="success") {
            alert("Message sent!"); 
        } else {

            // Error postback
            alert("Sorry please fill all fields!"); 
        return false;
    }
});