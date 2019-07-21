const URL_API = 'https://ghibliapi.herokuapp.com/films'


document.addEventListener("DOMContentLoaded", function() {

	const app = document.getElementById("app");

	fetch(URL_API)
		.then(res => res.json())
		.then(data => {
			console.log('hey ini respon API nya', data)

			data forEach(element => {
				var div = document.createElement("div");

				var att = document.createTextNode("class");
				div.setAttributeNodes(att)
				att.value = "notification"
				div.appendChild(node);

				var element = document.getElementById("div");
				element.appendChild(div);
			})

			
		})

});
