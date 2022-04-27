// car1.engine.v = 23;
// window.alert(car1.isTurnOn);
// car1.start();
// window.alert(car1.isTurnOn);
// var currentImageIndex = 0;
// var ImagesUrls = [];
// var showPrevBtn = document.getElementById('show-prev-btn');
// var showNextBtn = document.getElementById('show-next-btn');
// var slideImage = document.getElementById('slideImage');
 
// showNextBtn.addEventListener('click', onShowNextBtnClick);
// showPrevBtn.addEventListener('click', onShowPrevBtnClick);


// ImagesUrls.push('https://sun6-21.userapi.com/s/v1/ig2/esTXNpXIoD-YwZSFIbkkEGTByV6yDcLBm9KzJMCnvnwNwwx6KOty7l_F6PkrzDkH6biz9LyM2IqGmlCeH37H3twc.jpg?size=400x0&quality=96&crop=0,0,768,768&ava=1');
// ImagesUrls.push('https://sun6-21.userapi.com/s/v1/ig2/mAKSdPgBE22uOW1p904eYmMwiZiWeNA7Ac4M5CmkmNtF40-bNAaxi1ZWTeHGoOU8-oCmhOFk9bqQz6ngPUdLPpyp.jpg?size=400x0&quality=96&crop=39,39,2025,2025&ava=1');
// ImagesUrls.push('https://sun6-22.userapi.com/s/v1/ig2/C4-G_zSAQA1bNeigpqkopkd0222BCDvWd4s2pJN4Vhd5v0C2ymQ4ZYMOdKsdMpvUoBYSnS_4ZxJhPH3bWvu6lVqv.jpg?size=400x0&quality=96&crop=316,0,326,326&ava=1');
// ImagesUrls.push('https://sun1-86.userapi.com/s/v1/ig2/4_2P6CbomkbROhq9_hwydEJrSHHTHR4YckA-kWDQXjLMyR2sPVUd9nn9UMaMIxi5vhoKUFusl4tGezQtpDd1ryHF.jpg?size=400x0&quality=96&crop=1,301,1077,1077&ava=1');



// slideImage.src = ImagesUrls[currentImageIndex];
// showPrevBtn.disabled=true;

// function onShowPrevBtnClick(event){
//     currentImageIndex--;
//     slideImage.src = ImagesUrls[currentImageIndex];
//     showNextBtn.disabled=false;
//     if(currentImageIndex === 0){
//         showPrevBtn.disabled=true;
//     }
// }

// function onShowNextBtnClick(event){
//     currentImageIndex++;
    
//     slideImage.src = ImagesUrls[currentImageIndex];
//     showPrevBtn.disabled=false;

//     if(currentImageIndex === (ImagesUrls.length-1)){
//         showNextBtn.disabled=true;
//     }
// }

// var cont1 = document.querySelector('#itk-slider1');
// var cont2 = document.querySelector('#itk-slider2');
//!!
// var slider1 = new Slider();
// var slider2 = new Slider();
// slider1.start('itk-slider1'); 
// slider2.start('itk-slider2');
//!!
// function Dog(name) {
//     this.myname = name;
//     this.voice = function(){
//         console.log('Hey, my name is '+ this.myname);
//     }
// }

// var chauchau = new Dog('Laika');
// var bulldog = new Dog('Bobik');

// chauchau.voice();
// bulldog.voice();


var reno = new Car('reno');
reno.start();
var mers = new Car('mers');
mers.start();