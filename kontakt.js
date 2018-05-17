$(document).ready(function () {
    // pierwszy element jest aktywny po załadowaniu
    $('#imie').focus();
    $('#all').on('click', function(){
        var checkboxes = $('#formularz').find('.check');
        if (this.checked) {
            checkboxes.attr('checked', 'true'); 
        } 
        else {
            checkboxes.attr('checked', 'false'); 
        };  
    });
    // tu zaczyna się skrypt validation

    $('#formularz').validate({
         rules: {
             imie: 'required',
             email: {
                   required: true,
                   email: true
             },
            approve: 'required'
           },

           messages: {
            approve: "To pole jest wymagane!",
            imie: "Imię jest wymagane.",
            email: "Adres e-mail jest wymagany.",
           },
           showErrors: function(errorMap, errorList) {
        $("#summary").html("Formularz zawiera błędy. Liczba błędów: "
                           + this.numberOfInvalids() 
                           + ". Poniżej podano szczegóły.").addClass('error');
        this.defaultShowErrors();
        }

      });

    // nadal jQuery
    var form = $( "#formularz" );
    var yesno = '';
    form.validate();
    $( "#wyslij" ).click(function(e) {
        e.preventDefault();
        if(form.valid() === true) {
            yesno = 'TAK';
        }else{
            yesno = 'NIE';
        };
        alert( "Czy formularz jest poprawnie wypełniony: " + yesno );
    });
});