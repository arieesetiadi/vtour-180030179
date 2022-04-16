function popup(buttonId, modalId) {
	var modal = document.getElementById(modalId);
	var btn = document.getElementById(buttonId);
	var span = document.getElementsByClassName("close")[0];

	modal.style.display = "block";

	span.onclick = function () {
		modal.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
}
