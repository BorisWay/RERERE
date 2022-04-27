function Slider() {
    this.ImagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null; // document.querySelector('.show-prev-btn'),
    this.showNextBtn = null; //document.querySelector('.show-next-btn'),
    this.slideImage = null;//document.querySelector('.slide-img'),

    this.start = function (elId) {
        var that = this;
        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

        this.showNextBtn.addEventListener('click', function (e) {
            //this.onShowNextBtnClick
            that.onShowNextBtnClick(e);
        });
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });

        this.ImagesUrls.push('https://sun6-21.userapi.com/s/v1/ig2/esTXNpXIoD-YwZSFIbkkEGTByV6yDcLBm9KzJMCnvnwNwwx6KOty7l_F6PkrzDkH6biz9LyM2IqGmlCeH37H3twc.jpg?size=400x0&quality=96&crop=0,0,768,768&ava=1');
        this.ImagesUrls.push('https://sun6-21.userapi.com/s/v1/ig2/mAKSdPgBE22uOW1p904eYmMwiZiWeNA7Ac4M5CmkmNtF40-bNAaxi1ZWTeHGoOU8-oCmhOFk9bqQz6ngPUdLPpyp.jpg?size=400x0&quality=96&crop=39,39,2025,2025&ava=1');
        this.ImagesUrls.push('https://sun6-22.userapi.com/s/v1/ig2/C4-G_zSAQA1bNeigpqkopkd0222BCDvWd4s2pJN4Vhd5v0C2ymQ4ZYMOdKsdMpvUoBYSnS_4ZxJhPH3bWvu6lVqv.jpg?size=400x0&quality=96&crop=316,0,326,326&ava=1');
        this.ImagesUrls.push('https://sun1-86.userapi.com/s/v1/ig2/4_2P6CbomkbROhq9_hwydEJrSHHTHR4YckA-kWDQXjLMyR2sPVUd9nn9UMaMIxi5vhoKUFusl4tGezQtpDd1ryHF.jpg?size=400x0&quality=96&crop=1,301,1077,1077&ava=1');



        this.slideImage.src = this.ImagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };
    this.onShowPrevBtnClick = function (event) {
        this.currentImageIndex--;
        this.slideImage.src = this.ImagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };
    this.onShowNextBtnClick = function (event) {
        this.currentImageIndex++;

        this.slideImage.src = this.ImagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === (this.ImagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    };
}

var sliderFactory = {
    createNewSlider: function () {
        var newSlider = new Slider();
        return newSlider;
    }
};



