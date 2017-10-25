
jQuery(document).ready(function() {

    //Check if the user is logged in
    if(localStorage.getItem('email')){
        //The user is logged in.
    }
    
    /*
        Login form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    $('.login-form').on('submit', function(e) {

    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

    });

    /*
        Registration form validation
    */
    $('.registration-form input[type="text"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    $('.registration-form').on('submit', function(e) {

    	$(this).find('input[type="text"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

    });
    $('.registration-form').on('submit', function(e) {
        	e.preventDefault();
        	$(this).find('input[type="text"], textarea').each(function(){
        		if( $(this).val() == "" ) {
        			e.preventDefault();
        			$(this).addClass('input-error');
        		}
        		else {
        			$(this).removeClass('input-error');
        		}
    		});

    		var email = $('#form-user').val();
    		var password = $('#form-pwd').val();

    		var url = 'http://cryptoflo-env.eu-west-1.elasticbeanstalk.com/api/users?email=' + email + '&password=' + password

    		$.ajax({
    			url: url,
    			type: "POST",
    			crossDomain: true,
    			success:function(result){     //if user is verified then allow code 200
    				alert(JSON.stringify(result));
            //When successful
            localStorage.setItem('email', email);
    			},
    			error:function(xhr,status,error){  //if user is not  verified then code 401
    				alert(status);
    			}
    		});

    	});

});
