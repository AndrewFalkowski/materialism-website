// this is a javascript file

var random_images_array_1 = ["ep_card_1.svg",  "ep_card_2.svg",  "ep_card_3.svg"];
var random_images_array_2 = ["ep_card_4.svg",  "ep_card_5.svg",  "ep_card_6.svg"];

var image_links_array_1 = [
  "https://pinecast.com/listen/dffb6f1e-e3ab-4ff1-b917-f1cd63ee5088.mp3",
  "https://pinecast.com/listen/0801cf6b-49f7-401f-844a-a959af0ac868.mp3",
  "https://pinecast.com/listen/1f4cfad7-10c7-4a5a-8b33-ff7fb4383a60.mp3"
];

var image_links_array_2 = [
  "https://pinecast.com/listen/f5072f13-5b07-4183-9f97-8cde17f8b16b.mp3",
  "https://pinecast.com/listen/3757a400-c759-4603-9ae1-d9595eb9bcce.mp3",
  "https://pinecast.com/listen/096f78c4-4318-4b80-a169-fe6a24a5480d.mp3"
];


function getRandomImage_1(imgAr, aAR, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var a = aAR[ num ];
    var imgStr = '<a href="'+ a +'"><img src="' + path + img + '" class="child_1"></a>';
    document.write(imgStr); document.close();
}

function getRandomImage_2(imgAr, aAR, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var a = aAR[ num ];
    var imgStr = '<a href="'+ a +'"><img src="' + path + img + '" class="child_2"></a>';
    document.write(imgStr); document.close();
}
