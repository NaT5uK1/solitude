export default function debounce(fn, delay = 500) {
	let timer = null;
	return function () {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, arguments);
			timer = null;
		}, delay);
	};
}