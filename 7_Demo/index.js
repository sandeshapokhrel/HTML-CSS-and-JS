$(function() {
    // jQuery UI Datepicker
    $("#datepicker").datepicker();

    // slick Carousel
    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // DataTables
    $('#example').DataTable();

    // jQuery Validation
    $("#email").validate({
        rules: {
            field: {
                required: true,
                email: true
            }
        }
    });

   
});

//user defined email validation function 
function checkEmailValidation(){
    let email = $('#email').val();
    let result = validateEmail(email);
    if(result != true)
        {
            alert("Invalid email address.");
            return false;
        }
}

//user defined function 
function validateEmail(email) {
    // Basic checks
    if (email.length < 5) return false; // Minimum length check
    
    // Split the email into local part and domain part
    var atIndex = email.indexOf('@');
    if (atIndex <= 0 || atIndex === email.length - 1) return false; // Check '@' position

    var localPart = email.substring(0, atIndex);
    var domainPart = email.substring(atIndex + 1);

    // Domain should have at least one dot
    var dotIndex = domainPart.indexOf('.');
    if (dotIndex <= 0 || dotIndex === domainPart.length - 1) return false;

    // Check for invalid characters in local part and domain
    var validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-";
    for (var i = 0; i < localPart.length; i++) {
        if (validChars.indexOf(localPart.charAt(i)) === -1) return false;
    }

    var domainChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-";
    for (var j = 0; j < domainPart.length; j++) {
        if (domainChars.indexOf(domainPart.charAt(j)) === -1) return false;
    }

    // Check for consecutive dots in domain part
    if (domainPart.indexOf('..') !== -1) return false;

    return true;
}