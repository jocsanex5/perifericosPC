<?php 

	require_once('content.html');

	if(isset($_GET['enviar'])){ 

		if(preg_match("/^[a-zA-Z0-9\_\-]{0,40}\s?[a-zA-Z0-9\_\-]{0,40}?$/", $_GET['nombre'])){ 

			if(strlen($_GET['contenido']) >= 1){ //no estan vacios los campos

				$destinatario = 'jocsanex5@gmail.com';
				$asunto = 'Perifericos de la computadora -' . $_GET['nombre'];
				$mensaje = $_GET['contenido'];

				$mail = mail($destinatario, $asunto, $mensaje);

				if(!$mail){

					?>
						<div class="alert alert-danger position-fixed top-0 end-0 w-lg-25 d-flex justify-content-center" role="alert">
							<div class="m3">
								Error al enviar el correo...
							</div>

							<button type="button" class="btn-close ms-4" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
					<?php
				
				} else{

					?>
						<div class="alert alert-success position-fixed bottom-0 end-0 w-lg-25 d-flex justify-content-center" role="alert">
							<div class="m3">
								Gracias por tu mensaje!!!
							</div>

							<button type="button" class="btn-close ms-4" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
					<?php
				}
			}
		}
	}
?>