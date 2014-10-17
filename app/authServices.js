var app = angular.module('myApp');


app.service('authServices', function($firebase){
	var baseUrl = 'https://guideconnection.firebaseio.com/';
	var fireSignup = new Firebase(baseUrl);
	

this.guideSignUp = function(user, cb){
	console.log('user: ' + JSON.stringify(user))
	fireSignup.createUser({
		email: user.email,
		password: user.password
	}, function(error) {
		if (error === null){
			fireSignup.authWithPassword({
				email: user.email,
				password: user.password
			}, function(err, authData){
				if (authData){
					authData.languages = {};
					authData.name = user.name;
					authData.username = user.username;
					authData.address = user.address;
					authData.city = user.city;
					authData.state = user.state;
					authData.zip = user.zip;
					authData.aboutMe = user.aboutMe;
					authData.isConnector = false;
					authData.school = user.school;
					authData.languages.english = {language: 'English', fluent: user.english || false};
					authData.languages.portuguese = {language: 'Portuguese', fluent: user.portuguese || false};
					authData.languages.spanish = {language: 'Spanish', fluent: user.spanish || false};
					authData.languages.italian = {language: 'Italian', fluent: user.italian || false};
					authData.languages.french = {language: 'French', fluent: user.french || false};
					fireSignup.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
					cb(authData);
				} else {
					console.log('something went Wrong');
				}
				
			
			})
		} else {
			console.log('Error creating user:' + error);
			return false;
		}
	});
	}
	
this.connectionSignUp = function(user, cb){
	fireSignup.createUser({
		email: user.email,
		password: user.password
	}, function(error) {
		if (error === null){
			console.log("Connecter created successfully");
			fireSignup.authWithPassword({
				email: user.email,
				password: user.password
			}, function(err, authData){
				if (authData){
					authData.name = user.name;
					authData.username = user.name;
					authData.city = user.city;
					authData.state = user.state;
					authData.zip = user.zip;
					authData.isConnector = true;
					authData.casualTranslator = user.casualTranslator || false;
					authData.casualTranslator = user.professionalTranslator || false;
					authData.casualTranslator = user.airportPickup|| false;
					authData.casualTranslator = user.shoppingGuidance || false;
					authData.casualTranslator = user.driveAround || false;
					fireSignup.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
					cb(authData);
				}else {
					console.log('something went Wrong');
				}
				
			
			})
		} else {
			console.log('Error creating user:' + error);
			return false;
		}
	});
	}
	
this.login = function(user, cb){
	fireSignup.authWithPassword({
		email: user.email,
		password: user.password
	}, function(err, authData){
		console.log(err);
		if(err) {
			switch (err.code) {
				case "INVALID_EMAIL":
				case "INVALID_PASSWORD":
				default:
			}
		}else if (authData) {
			console.log("Logged In! User ID: " + authData.uid);
			cb(authData);
		}
	
	});
}

this.getUser = function(userId){
	return $firebase(new Firebase(baseUrl + 'users/' + userId)).$asObject()
}

this.checkUser = function(){
	var check = fireSignup.getAuth();
	if(check){
		return true;

	}
	return false;

}

this.logoutUser = function(){
	fireSignup.unauth();
}


});