document.addEventListener('click', function(e) {
    
    console.log(e.target);
})







function addImage() {
    
    let image = document.getElementById('inputImage').value;
    let topText = document.getElementById('topText').value;
    let bottomText = document.getElementById('bottomText').value;
    let newImages = document.getElementById('newImages');
    
    let newMeme = document.createElement('div');
    newMeme.setAttribute('class', 'newMeme');

    let x = document.createElement('IMG');
    x.setAttribute('src', image);
    x.setAttribute('class', 'x')
    
    let xTopText = document.createElement('div');
    xTopText.setAttribute('class', 'xTopText');
    xTopText.innerText = topText;
    
    let xBottomText = document.createElement('div');
    xBottomText.setAttribute('class', 'xBottomText');
    xBottomText.innerText = bottomText;
    
    let delButton = document.createElement('button');
    delButton.setAttribute('class', 'delButton');
    delButton.innerText = 'X';

    newMeme.appendChild(delButton);
    newMeme.appendChild(xBottomText);
    newMeme.appendChild(xTopText);
    newMeme.appendChild(x);

    delButton.addEventListener('click', function(){
        newMeme.parentNode.removeChild(newMeme);
    });

    newImages.appendChild(newMeme);
    
    document.getElementById('inputImage').value = '';
    document.getElementById('bottomText').value = '';
    document.getElementById('topText').value = '';
}





