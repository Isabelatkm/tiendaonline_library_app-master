import React from 'react';
import '../../styles/ContactUs.css';
export const ContactForm = () => {

    return (
        <>
                <div className='inicioCU'>
                    <div className='row'>
                        <h1>Contactanos</h1>
                    </div>

                </div>

                <div className='formulario'>
                    <h1>Formulario de Contacto </h1>
                    <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>
                        <form action="">
                        <p>
                        <label for="nombre" className="colocar_nombre">Nombre
										<span className="obligatorio">*</span>
									</label><br/>
                        <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/><br/>
                        </p>

                        <p>
                        <label for="nombre" className="colocar_email">Email
										<span className="obligatorio">*</span>
									</label><br/>
                        <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu email"/><br/>
                        </p>

                        <p>
                            <label for="telefone" className="colocar_telefono">Teléfono
                            </label>
                                <input type="tel" className="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"/>
                        </p> 


                        <p>
                            <label for="asunto" className="colocar_asunto">Asunto
                                <span className="obligatorio">*</span>
                            </label>
                                <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"/>
                        </p>  
                        <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

                        <p className="aviso">
                            <span className="obligatorio"> * </span>los campos son obligatorios.
                        </p>        

                        </form> 

                   
                    


                </div>

               

        </>
        

        
       
    )
}

