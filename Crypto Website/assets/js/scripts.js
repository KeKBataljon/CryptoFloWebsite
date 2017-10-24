
jQuery(document).ready(function() {

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

    		var email = $('#form-firstname').val();
    		var password = $('#form-password').val();

    		var url = 'http://cryptoflo-env.eu-west-1.elasticbeanstalk.com/api/users?email=' + email + '&password=' + password

    		$.ajax({
    			url: url,
    			type: "POST",
    			crossDomain: true,
    			success:function(result){
    				alert(JSON.stringify(result));
    			},
    			error:function(xhr,status,error){
    				alert(status);
    			}
    		});

    	});

});
