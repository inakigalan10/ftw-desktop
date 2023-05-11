import React from 'react'
import './CreateProfile.css';

const CreateProfile = () => {
  return (
    <>
    <div>
        <div className='cabecera'>
            <h1>CREA TU PERFIL PARA CONOCER A GENTE </h1>
        </div>
        <div className='formulario'>
        <form>
		<label for="descripcion">Descripción:</label>
		<textarea id="descripcion" name="descripcion"></textarea>

		<label for="tipo-jugador">Tipo de jugador:</label>
		<select id="tipo-jugador" name="tipo-jugador">
			<option value="casual">Casual</option>
			<option value="hardcore">Hardcore</option>
			<option value="professional">Professional</option>
		</select>

		<label for="horario">Horario:</label>
		<select id="horario" name="horario">
			<option value="morning">Morning</option>
			<option value="afternoon">Afternoon</option>
			<option value="evening">Evening</option>
			<option value="flexible">Flexible</option>
		</select>

		<label for="generos">Géneros de Videojuegos:</label><br/>
        <div className='generos'>
            <input type="checkbox" id="accion" name="generos[]" value="accion"/>
            <label class="checkbox" for="accion">Acción</label><br/>
            <input type="checkbox" id="aventura" name="generos[]" value="aventura"/>
            <label class="checkbox" for="aventura">Aventura</label><br/>
            <input type="checkbox" id="rol" name="generos[]" value="rol"/>
            <label class="checkbox" for="rol">Rol</label><br/>
            <input type="checkbox" id="disparos-primera" name="generos[]" value="disparos-primera"/>
            <label class="checkbox" for="disparos-primera">Disparos en primera persona</label><br/>
            <input type="checkbox" id="disparos-tercera" name="generos[]" value="disparos-tercera"/>
            <label class="checkbox" for="disparos-tercera">Disparos en tercera persona</label><br/>
            <input type="checkbox" id="plataformas" name="generos[]" value="plataformas"/>
            <label class="checkbox" for="plataformas">Plataformas</label><br/>
            <input type="checkbox" id="estrategia" name="generos[]" value="estrategia"/>
            <label class="checkbox" for="estrategia">Estrategia</label><br/>
            <input type="checkbox" id="simulacion" name="generos[]" value="simulacion"/>
            <label class="checkbox" for="simulacion">Simulación</label><br/>
            <input type="checkbox" id="deportes" name="generos[]" value="deportes"/>
            <label class="checkbox" for="deportes">Deportes</label><br/>
            <input type="checkbox" id="lucha" name="generos[]" value="lucha"/>
            <label class="checkbox" for="lucha">Lucha</label><br/>
            <input type="checkbox" id="musica" name="generos[]" value="musica"/>
            <label class="checkbox" for="musica">Música</label><br/>
            <input type="checkbox" id="puzzle" name="generos[]" value="puzzle"/>
            <label class="checkbox" for="puzzle">Puzzle</label><br/>
            <input type="checkbox" id="carreras" name="generos[]" value="carreras"/>
            <label class="checkbox" for="carreras">Carreras</label><br/>
            <input type="checkbox" id="mundo-abierto" name="generos[]" value="mundo-abierto"/>
            <label class="checkbox" for="mundo-abierto">Mundo abierto</label><br/>
            <input type="checkbox" id="terror" name="generos[]" value="terror"/>
            <label class="checkbox" for="terror">Terror</label><br/>
            <input type="checkbox" id="sigilo" name="generos[]" value="sigilo"/>
            <label class="checkbox" for="sigilo">Sigilo</label><br/>
            <input type="checkbox" id="supervivencia" name="generos[]" value="supervivencia"/>
            <label class="checkbox" for="supervivencia">Supervivencia</label><br/>
        </div>


            <label for="idiomas">Idiomas:</label>
            <div className='idiomas'>
                <input type="checkbox" name="idiomas[]" value="english" id="english"/><label for="english">English</label>
                <input type="checkbox" name="idiomas[]" value="espanol" id="espanol"/><label for="espanol">Español</label>
                <input type="checkbox" name="idiomas[]" value="francais" id="francais"/><label for="francais">Français</label>
                <input type="checkbox" name="idiomas[]" value="deutsch" id="deutsch"/><label for="deutsch">Deutsch</label>
                <input type="checkbox" name="idiomas[]" value="chino-simplificado" id="chino-simplificado"/><label for="chino-simplificado">简体中文</label>
                <input type="checkbox" name="idiomas[]" value="japones" id="japones"/><label for="japones">日本語</label>
                <input type="checkbox" name="idiomas[]" value="portugues" id="portugues"/><label for="portugues">Português</label>
                <input type="checkbox" name="idiomas[]" value="ruso" id="ruso"/><label for="ruso">Pусский</label>
                <input type="checkbox" name="idiomas[]" value="catalan" id="catalan"/><label for="catalan">Català</label>
                <input type="checkbox" name="idiomas[]" value="gallego" id="gallego"/><label for="gallego">Galego</label>
                <input type="checkbox" name="idiomas[]" value="euskera" id="euskera"/><label for="euskera">Euskara</label>
            </div>

        <label for="pais">País:</label>
		<select id="pais" name="pais">
			<option value="espana">España</option>
			<option value="estados-unidos">Estados Unidos</option>
			<option value="mexico">México</option>
			<option value="argentina">Argentina</option>
			<option value="colombia">Colombia</option>
			<option value="peru">Perú</option>
			<option value="chile">Chile</option>
			<option value="brasil">Brasil</option>
			<option value="francia">Francia</option>
			<option value="alemania">Alemania</option>
			<option value="italia">Italia</option>
			<option value="reino-unido">Reino Unido</option>
			<option value="japon">Japón</option>
			<option value="china">China</option>
			<option value="corea-del-sur">Corea del Sur</option>
			<option value="rusia">Rusia</option>
			<option value="australia">Australia</option>
			<option value="canada">Canadá</option>
			<option value="india">India</option>
			<option value="sudafrica">Sudáfrica</option>
		</select>
        <button>
            Guardar informacion
        </button>
        </form>
        </div>
    </div>
    </>
  )
}

export default CreateProfile