function $(el) {
	var a = document.querySelectorAll(el);
	if(a.length > 1) {
		return a;
	} else {
		return a[0];
	}
}