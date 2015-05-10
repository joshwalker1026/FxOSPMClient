navigator.id.watch({
    loggedInUser: undefined,
    onlogin: function(assertion) {
        // var token = $('#token').val();
        // $.post('http://localhost:8168/authenticate', {
        //     assertion: assertion,
        //     _csrf: token
        // }, function(data) {
        //     console.log('loggedin!');
        // });

       $.ajax({
            type: 'POST',
            url: 'http://localhost:8168/authenticate',
            data: {assertion: assertion},
            success: function(res, status, xhr) {
                console.log('loggedin!');
            },
            error: function(res, status, xhr) {
                alert("Login Failed" + res);
            }
        });

    },
    onlogout: function() {
       $.ajax({
            type: 'POST',
            url: '/auth/logout', // 這是你網站上的一個 URL
            success: function(res, status, xhr) {
                window.location.reload();
            },
            error: function(res, status, xhr) {
                alert("登出失敗" + res);
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
