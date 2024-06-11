let avocado_list = document.getElementById("avocado-list");
let banner = document.querySelector("#avocado-banner");
let avocado_name = document.getElementsByClassName("avocado-name");
//let mike = document.getElementById("mike");
let list = document.getElementsByTagName("li");
let list2 = document.querySelectorAll("li");
let delete_btn = document.querySelectorAll("#avocado-list.delete");
let query_banner = document.querySelector("#avocado-banner");

function Converter() {
	avocado_name[0].textContent = `salut`;
	avocado_name[1].innerHTML = "proot";
	//mike.textContent = "soupe";
	list[2].innerHTML = "shoubouda";
	query_banner.innerHTML = "webedee";
	Array.from(list).forEach( function(avocado) {
		console.log(avocado.innerHTML)
	});
	Array.from(list2).forEach( function(avocado) {
		console.log(avocado.textContent)
	});
	console.log(banner.parentNode);
	console.log(banner.parentElement.parentElement);
	console.log(avocado_list.childNodes);
	console.log(avocado_list.children);
}

delete_btn.forEach(function(btn) {
	btn.addEventListener("click", function(e) {
		const li = e.target.parentElement;
		li.parentNode.removeChild(li);
	});
});
