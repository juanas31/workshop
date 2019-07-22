const URL_API = 'https://ghibliapi.herokuapp.com/films'


document.addEventListener("DOMContentLoaded", function() {

	const app = document.getElementById("app");

	fetch(URL_API)
		.then(res => res.json())
		.then(data => {
			console.log('hey ini respon API nya', data)

			data.forEach(element => {
				var div = document.createElement("div");

				const att = document.createAttribute("class");       // Create a "class" attribute
		        att.value = "notification is-primary";
		        div.setAttributeNode(att);

				const text = document.createTextNode(element.title + '\n'+'\n' + element.description +'\n'+ element.producer);
				// const text = document.createTextNode(element.description);
		        div.appendChild(text);
		        app.appendChild(div);
			});
		})
});
