function initPushwoosh()
{
	var pushNotification = window.plugins.pushNotification;
	pushNotification.onDeviceReady();

	document.addEventListener('push-notification', function(event) {
   	                            var title = event.notification.title;
   	                            var userData = event.notification.userdata;

   	                            if(typeof(userData) != "undefined") {
   								}

   								navigator.notification.alert(title);

   								pushNotification.stopGeoPushes();
   							  });
}

function registerPushwoosh()
{
	console.log('registering Pushwoosh: ');
	var pushNotification = window.plugins.pushNotification;
	pushNotification.registerDevice({ projectid: "322513400367", appid : "2AEF3-05150" },
									function(token) {
										alert(token);
										onPushwooshInitialized(token);
									},
									function(status) {
										alert("failed to register: " +  status);
									});
}

function unregisterPushwoosh()
{
	var pushNotification = window.plugins.pushNotification;
	pushNotification.unregisterDevice(function(token) {
										alert("unregistered, old token " + token);
									},
									function(status) {
										alert("failed to unregister: " +  status);
									});
}

function onPushwooshInitialized(pushToken)
{

	var pushNotification = window.plugins.pushNotification;
	
	pushNotification.getTags(function(tags) {
						 },
						 function(error) {
						 });
	 

	pushNotification.setLightScreenOnNotification(false);
	
	pushNotification.setTags({deviceName:"hello", deviceId:10},
									function(status) {
									},
									function(status) {
									});
		
	function geolocationSuccess(position) {
		pushNotification.sendLocation({lat:position.coords.latitude, lon:position.coords.longitude},
								 function(status) {
								 },
								 function(status) {
								 });
	};
		
	function geolocationError(error) {
		alert('code: '    + error.code    + '\n' +
			  'message: ' + error.message + '\n');
	}
	
	function getCurrentPosition() {
		navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
	}
	
	pushNotification.startGeoPushes();
}

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        initPushwoosh();
        app.receivedEvent('deviceready');
        
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

    }
};