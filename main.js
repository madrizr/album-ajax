document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){
	//console.log("ejecutado")

	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', 'cds.json', true);

	xhttp.send();

	xhttp.onreadystatechange = () => {
		if (this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText);
			let datos = JSON.parse(this.responseText);
			//console.log(datos);
			let res = document.querySelector('#res');
			res.innerHTML = '';

			for(let item of datos){
				// console.log(item.titulo)
				res.innerHTML += `
					<tr>
						<td>${item.titulo}</td>
						<td>${item.Artista}</td>
					</tr>
				`
			}
		}
	}
}