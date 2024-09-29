window.addEventListener('load', function(){

	let btnPrev = document.querySelector('.gallery .buttons .prev');
	let btnNext = document.querySelector('.gallery .buttons .next');

	let images = document.querySelectorAll('.gallery .photos img');
	let i = 0;

	btnPrev.addEventListener('click', function(){
		images[i].classList.remove('showed');
		i--;

		if(i < 0){
			i = images.length - 1;
		}

		images[i].classList.add('showed');
	});

	btnNext.addEventListener('click', function(){
		images[i].classList.remove('showed');
		i++;

		if(i >= images.length){
			i = 0;
		}

		images[i].classList.add('showed');
	});

});

/*
	new Slider('.gallery-1');
	let s2 = new Slider('.gallery-2');

	setInterval(function(){
		s2.next();
	}, 3000)
*/