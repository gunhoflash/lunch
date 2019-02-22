var food_array = [
	"찜통",
	"마즈야",
	"우작 설렁탕",
	"서초명가",
	"허수아비 돈까스",
	"강촌식당",
	"미토요",
	"샤브향"
];

function spin_btn(element, bool_spin, callback_after) {
	element.querySelector('span').style.display = (bool_spin) ? "none" : "";
	element.querySelector('div').style.display = (bool_spin) ? "" : "none";
	element.disabled = bool_spin;

	if (bool_spin) {
		setTimeout(function () {
			spin_btn(element, false);
			callback_after();
		}, 1000);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	var btn_pick = document.getElementById('btn_pick');
	var cards = document.getElementById('cards');
	var card1 = document.getElementById('card1');

	btn_pick.addEventListener("click", function () {
		spin_btn(btn_pick, true, function () {
			cards.style.display = "";
			card1.querySelector('img').src = (Math.floor(Math.random() * food_array.length) + 1) + ".jpg";
		});
	});
});