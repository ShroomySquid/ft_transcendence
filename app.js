let avocado_list = document.getElementById("avocado-list");
let banner = document.querySelector("#avocado-banner");
let avocado_name = document.getElementsByClassName("avocado-name");
//let mike = document.getElementById("mike");
let list = document.getElementsByTagName("li");
let list2 = document.querySelectorAll("li");
let delete_btn = document.querySelectorAll("#avocado-list .delete");
let query_banner = document.querySelector("#avocado-banner");
const addForm = document.forms["add-form"];
const addBtn = document.getElementById("add-btn");

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
};

/*
delete_btn.forEach(function(btn) {
	console.log("for each trigger");
	btn.addEventListener("click", function(e) {
		console.log("callback function trigger for delete");
		const li = e.target.parentElement;
		li.parentNode.removeChild(li);
	});
});
*/

avocado_list.addEventListener("click", function(e) {
	if (e.target.className == "delete") {
		const li = e.target.parentElement;
		li.parentNode.removeChild(li);
	};
});

// other way for add_avocado func
/*
	const li = document.createElement("li");
	const avocado = document.createElement("span");
	//avocado.className += " avocado-name";
	//avocado.setAttribute("class", "avocado-name");
	//avocado.getAttribute("class") -> return the class
	avocado.classList.add("avocado-name");
	const new_delete = document.createElement("span");
	new_delete.classList.add("delete");
	//new_delete.className += " delete";
	li.appendChild(avocado);
	li.appendChild(new_delete);
	avocado_list.children[1].appendChild(li);
	avocado.textContent = `${new_avocado}`;
	new_delete.textContent = "delete";
*/

function add_new_avocado(e, avocado_list, addForm) {
	e.preventDefault();
	const new_avocado = addForm.querySelector('input[type="text"]').value;
	if (new_avocado == "") {
		return ;
	}
	console.log(avocado_list.children[1]);
	avocado_list.children[1].innerHTML +=`
		<li>
			<span class="avocado-name">${new_avocado}</span>
			<span class="delete">delete</span>
		</li>
	`;
};

addForm.addEventListener("submit", function(e) {
	add_new_avocado(e, avocado_list, addForm);
});

addBtn.addEventListener("click", function(e) {
	add_new_avocado(e, avocado_list, addForm);
});

/*
 * Async tuto
 * jwt token
 * qr code (2fa)
*/
/*
const getAvocados = resource => {
	const request = new XMLHttpRequest();

	return new Promise((resolve, reject) => {
		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4 && request.status === 200) {
				const data = JSON.parse(request.responseText)
				resolve(data);
			}
			else if (request.readyState === 4) {
				reject('error getting resource');
			}
		});	
		request.open('GET', resource);
		request.send();
	});
};
*/
/*
getAvocados('avocados.json').then(data => {
	console.log('promise resolved:', data);
	return getAvocados('potato.json');
}).then(data => {
	console.log('promise 2 resolved:', data);
	return getAvocados('nothing.json');
}).then(data => {
	console.log('promise 3 resolved:', data);
}).catch(err => {
	console.log('promise rejected: ', err);
});
*/
/*
getTodos('potato.json', (err, data) => {
	console.log("callback fired");
	if (err) {
		console.log(err);
	}
	else {
		console.log(data);
	}
});
getTodos('avocados.json', (err, data) => {
	console.log("callback fired");
	if (err) {
		console.log(err);
	}
	else {
		console.log(data);
	}
});
*/
/*
const getSomething = () => {
	
	return new Promise((resolve, reject) => {
		// fetch something
		//resolve('some data');
		reject ('some error');
	});
};

getSomething().then(data => {
	console.log(data);
}, (err) => {
	console.log(err);
});

getSomething().then(data => {
	console.log(data);
}).catch(err => {
	console.log(err);
});
*/
/*
fetch('avocados.json').then((response) => {
	console.log('resolved', response);
	return response.json();
}).then(data => {
	console.log(data);
	return fetch('potato.json');
}).then((response) => {
	console.log('resolved 2', response);
	return response.json();
}).then(data => {
	console.log(data);
}).catch((err) => {
	console.log('rejected', err);
});
*/


const getAvocados = async () => {
	const response = await fetch('avocados.json');
	if (response.status !== 200) {
		throw new Error('dla schnoute');
	}
	//console.log(response);
	const data = await response.json();
	//console.log(data);
	return data;
};

const test = getAvocados()
	.then(data => console.log('resolved:', data))
	.catch(err => console.log('error:', err.message));

const formData = new FormData()

formData.append('name', 'bob');
formData.append('email', 'bob@bob.com');
formData.append('name', 'cooking');

const test_send_django = async () => {
	const response = await fetch('http://127.0.0.1:8000/contact/', {
		method: 'POST',
		body: formData
	})
	if (response.status !== 200) {
		throw new Error('nope, u suck');
	}
	const data = await response.json();
	return data;
};

const django_test = test_send_django()
	.then(data => console.log('success:', data))
	.catch (err => console.log('error:', err.message));


