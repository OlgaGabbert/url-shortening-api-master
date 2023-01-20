let form = document.getElementById("form");
let button = document.getElementById("button");
let input = document.getElementById('input');

async function shortenURL(url) {
    let request = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`); 
    let response  = await request.json();
    let myShortURL = response.result.full_short_link;
    console.log(myShortURL);
    let newURL = document.createElement("div");
    let a = document.createElement('a');
    a.href = myShortURL;
    newURL.innerHTML = 'Short url for ' + url + ' is ';
    a.innerHTML = myShortURL;
    newURL.appendChild(a); 
    form.append(newURL);
    let newButton = document.createElement('button');
    newButton.classList.add('newButton');
    newButton.textContent = 'Copy';
    newURL.appendChild(newButton);
    newButton.onclick = function() {
        console.log(myShortURL);
        navigator.clipboard.writeText(myShortURL);
        newButton.textContent = 'Copied!';
        newButton.classList.add('newButtonCopied');
    }
}
function myFunction() {
    let myInput = document.getElementById('input').value;
    if(myInput == "") {
        let newDiv = document.createElement("div");
        newDiv.id = 'newDiv';
        newDiv.innerHTML = "Please add a link";
        form.append(newDiv);
        newDiv.classList.add('new');
        input.classList.add('newLabel');
    } else {
        shortenURL(myInput);
    }
}