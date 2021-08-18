(function(){

	/*
		Algunos eventos de la pagina...

		Jx5
		______________________________
	*/

	//slider

	window.addEventListener('load', ()=>{

		new Glider(document.querySelector('.carousel__lista'), {

			slidesToShow: 1,
			slidesToScroll: 1,
			dots: '.carousel__indicadores',
			arrows: {
		    	prev: '.btn__carousel__ant',
		    	next: '.btn__carousel__sig'
		    }
		})
	})

	//contacto

	document.getElementById('btn-contact').addEventListener('click', ()=>{

		Swal.fire({

			showConfirmButton : false,
			showCloseButton : true,
			title : 'Envia tu sujerencia o comentario!!!',
			html : `
				<div>
					<form method="get" action="index.php" class="m-4 d-flex flex-column align-items-center">
						<label class="m-2 m-S-Small-0" for="nombre">Escribe tu nombre</label>
						<input required="" type="text" class="text-center p-1 w-100 nombre-contact" name="nombre" id="nombre-contact">

						<label class="m-2 mt-4" for="contenido">Escribe tu mensaje</label>
						<textarea required="" class="m-2 p-1 w-100 h-10 text-center" name="contenido" id="contenido-contact" cols="30" rows="10"></textarea>

						<button id="btn-contact" type="submit" name="enviar" class="btn w-50 p-3 text-white fs-4 rounded-3">Enviar</button>
					</form>
				</div>	
			`
		})
	})

	//scrollReveal

	ScrollReveal().reveal('.carousel');

	document.querySelectorAll('.item').forEach((item)=>{

		ScrollReveal().reveal(item);
	})

	//loader

	window.addEventListener('load', ()=>{

		let cont=0, time = setInterval(()=>{ cont++;

			if(cont==1){

				clearInterval(time);
				document.getElementById('loader').style.display = 'none';
			}

		}, 3000);
	})

}())