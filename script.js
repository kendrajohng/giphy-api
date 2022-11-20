var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=qscWynZf0vmUFW5J9OVoNgA34ThutqnP&tag=squirrels&rating=g');

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

/* return only specific vaule for URL property, original image URL */
    var originalUrl = parsedData.data.images.original.url;
    console.log(originalUrl);

    var gif = document.createElement('img');
    gif.setAttribute('src', originalUrl);
    document.body.appendChild(gif);
}

request.send();

/*my API key:  qscWynZf0vmUFW5J9OVoNgA34ThutqnP

api_key: string(required)

use ? to denote parameters

Random Endpoing Docs
https://developers.giphy.com/docs/api/endpoint#random
*/

