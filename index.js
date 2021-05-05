const priev = document.querySelector('.btn-1');
const next = document.querySelector('.btn-2');
const gallery = document.querySelectorAll('.content-img');

let i = 0;

const check = (i) => {
	if (i >= gallery.length - 1) {
		next.disabled = true;
		next.style.cursor = 'not-allowed';
	}
	else {
		next.disabled = false;
		next.style.cursor = 'pointer';
	}

	if ( i === 0 ) {
		priev.disabled = true;
		priev.style.cursor = 'not-allowed';
	}
	else {
		priev.disabled = false;
		priev.style.cursor = 'pointer';
	}
	
};

const nextHandler = () => {
	i++;
	check(i);
	gallery[i].style.transform = `translateX(${-i * 400}px)`;
};

const prievHandler = () => {
	gallery[i].style.transform = `translateX(${i * 400}px)`;
	i--;
	check(i);
};

console.log(gallery);

next.addEventListener('click', nextHandler);
priev.addEventListener('click', prievHandler);
