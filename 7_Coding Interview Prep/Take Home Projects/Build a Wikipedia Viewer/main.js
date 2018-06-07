function makeApiRequest() {
    var resultsBox = document.getElementById('search-results');
    while (resultsBox.firstChild) {
        resultsBox.removeChild(resultsBox.firstChild);
    }

    var searchtext = document.getElementById('search').value;
    //var url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + searchtext;
    var url ='https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=revisions&list=search&titles=Main Page&rvprop=content&srsearch=' + searchtext;

    // getJSON Method:
    // $.getJSON(url, function(data, status){
    //     debugger;
    // });

    // XMLHttpReques Method:
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xhr.responseText);
            var searchResults = response.query.search;

            for (var result in searchResults) {
                var anchorDiv = document.createElement('a');
                anchorDiv.href = 'https://en.wikipedia.org/?curid=' + searchResults[result].pageid;
                anchorDiv.target = '_blank';

                var resultDiv = document.createElement('div');
                resultDiv.id = 'result' + result;
                resultDiv.className = 'search-result';

                var heading = document.createElement('h2');
                heading.id = 'searchHeading';
                resultDiv.appendChild(heading);
                heading.innerHTML = searchResults[result].title;

                resultDiv.insertAdjacentHTML('beforeend', searchResults[result].snippet);
                anchorDiv.appendChild(resultDiv);
                resultsBox.appendChild(anchorDiv);
            }
        }
    }
    xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.withCredentials = false;
    xhr.send();

    // AJAX Method:
    // $.ajax({
    //     url: url,
    //     dataType: 'jsonp',
    //     type: 'POST',
    //     headers: {
    //         'Api-User-Agent': 'Example/1.0',
    //         'Content-Type': 'application/json'
    //     },
    //     success: function (data) {
    //         debugger;
    //     }
    //});
}

$(document).ready(function () {
    $('#search-wiki').click(function () {
        makeApiRequest();
    });
});