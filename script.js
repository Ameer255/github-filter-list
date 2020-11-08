const result = document.querySelector('#result');
const filterValue = document.querySelector('#filterValue');

const filterCards = data => {
	data.forEach(item => {
		const div = document.createElement('div');
		div.classList = "user card mb-2"
		output = `
		<div>
			<h1 class="card-title">${item.login}</h1>
		</div>
		<div>
			<img class="img-fluid rounded-circle" src="${item.avatar_url}" width="150">
		</div>
		`;
		div.innerHTML = output;
		result.appendChild(div);
	});
};

const filterList = e => {
	let filterTargetValue = e.target.value.toUpperCase();
	let users = document.querySelectorAll(".user");
	users.forEach(user => {
		user.textContent.toUpperCase().includes(filterTargetValue)
		? (user.style.display = "")
		: (user.style.display = "none");
	});
};

fetch('https://api.github.com/users')
	.then(res => res.json())
	.then(data => {
		console.log(data);
		filterCards(data);
	});


filterValue.addEventListener("input", filterList);