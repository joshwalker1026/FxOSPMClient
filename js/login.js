navigator.id.watch({
    loggedInUser: undefined,
    onlogin: function(assertion) {
       $.ajax({
            type: 'POST',
            url: 'http://localhost:8168/authenticate',
            data: {assertion: assertion},
            success: function(res, status, xhr) {
                console.log('loggedin!');
                window.location.assign('index.html');
            },
            error: function(res, status, xhr) {
                alert("Login Failed" + res);
            }
        });

    },
    onlogout: function() {
       $.ajax({
            type: 'POST',
            url: 'http://localhost:8168/logout', 
            success: function(res, status, xhr) {
                window.location.assign('login.html');
            },
            error: function(res, status, xhr) {
                alert("Logout Failed" + res);
            }
        });
    }
});


var signinLink = document.getElementById('signin');
if (signinLink) {

    signinLink.onclick = function() {
        navigator.id.request();
    };
};

var signoutLink = document.getElementById('signout');
if (signoutLink) {
    signoutLink.onclick = function(event) {
        event.preventDefault();
        navigator.id.logout();
    };
};
