jQuery(document).ready(function() {
	var url = 'http://cryptoflo-env.eu-west-1.elasticbeanstalk.com/api/transactions/1'

    		$.ajax({
    			url: url,
    			type: "GET",
    			crossDomain: true,
    			success:function(result){     //if user is verified then allow code 200
    				console.log(JSON.stringify(result));
            //When successful
            localStorage.setItem('email', email);
    			},
    			error:function(xhr,status,error){  //if user is not  verified then code 401
    				alert(status);
    			}
    		});

});