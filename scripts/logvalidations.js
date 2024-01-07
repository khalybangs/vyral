$( document ).ready(function() {

    ans =  $('#qain');
    // Q/A validations
    $('#getA').click(function() {
       if ($('#qain').val() !== '') {
           fetch('/logval/qaval', {method: 'post', body: JSON.stringify({ A:  $(ans).val(), user_name: '@khalybangs' }), headers : {
            "Content-type" : "application/json; charset=utf-8"} }).then((responce)=>{ return responce.json(); }).then((data)=>{
                if (data) {
                    if (data.A == $(ans).val()) {
                        $('#pass').val(data.pwd);
                        $('#done').click();
                    }else {
                        alert('Incorrect answer!');
                    }
                }
            });
        }else {
            alert('Insert Answer to your assigned question!');            
       }
    });

});