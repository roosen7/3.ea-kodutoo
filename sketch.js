window.onload = choosePic;

var random_images_array = ['1.jpg', '2.jpg', '3.jpg'];

function getRandomImage(imgAr, path) {
    path = path || 'images/'; 
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}