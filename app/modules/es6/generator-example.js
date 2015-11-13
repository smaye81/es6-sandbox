// Without generators
$http.get('../api/insight/123').then(function (insight) {

    $http.get(`../api/gamerun/${insight.gameRunId}/items`).then(function (items) {

        console.log('Items for Insight 123: ', items);
    });
});





// With generators
function request(url) {
    // this is where we're hiding the asynchronicity, away from the main code of our generator
    $http.get(url).then(function (response) {
        iter.next(response);
    });
    // Note: nothing returned here
}

function *main() {
    var user = yield request('../api/user/123');

    var settings = yield request(`../api/profile/${user.userId}/settings`);

    console.log('Settings for User 123: ', settings);
}

var iter = main();

iter.next(); // get it all started
