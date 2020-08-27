function Slider() {
	this.slideImg = null;
	this.btnBack = null;
	this.btnNext = null;

	this.imgs = ['img/img_1.jpg', 'img/img_2.jpg', 'img/img_3.jpg'];

	this.zero = 0;

	this.start = function (elemId) {

		let elem = document.querySelector(`#${elemId}`);

		this.slideImg = elem.querySelector('.slider__img');
		this.btnBack = elem.querySelector('.back');
		this.btnNext = elem.querySelector('.next');

		firstImg = this.slideImg.src = this.imgs[this.zero]

		clickOnBack = this.btnBack.addEventListener('click', () => {
			if (this.zero == 0) {
				this.zero += this.imgs.length;
			}
			this.zero--;
			this.slideImg.src = this.imgs[this.zero];
		})

		clickOnNext: this.btnNext.addEventListener('click', () => {
			if (this.zero == this.imgs.length - 1) {
				this.zero -= this.imgs.length;
			}
			this.zero++;
			this.slideImg.src = this.imgs[this.zero];
		})
	}
}


let slider1 = new Slider();

slider1.start('slider1');