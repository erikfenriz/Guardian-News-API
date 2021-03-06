/*var request = new XMLHttpRequest();
request.open('GET','http://content.guardianapis.com/search?api-key=test');
request.onload = function(){
    var data = JSON.parse(request.responseText);
    console.log(data[1]);
    };
request.send();
*/

(function () {
    fetch('http://content.guardianapis.com/search?api-key=test')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var data = data.response.results;
            var ul = document.createElement("ul");
            for (var i = 0; i < data.length; i++) {
                var textNode = document.createTextNode(data[i].webTitle);
                var li = document.createElement("li");
                li.appendChild(textNode);
                ul.appendChild(li);
            }
            console.log(ul);
            addNewsIntoDOM(ul)

        })
        .catch(function (err) {
            console.log(err);
        });

})();

function addNewsIntoDOM(news) {
    var list = document.getElementById("news");
    list.appendChild(news);
}