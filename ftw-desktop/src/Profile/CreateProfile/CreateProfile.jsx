import React from 'react'
import './CreateProfile.css';
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../userContext";
import { addProfile } from "./slice/thunks";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CreateProfile = () => {
    let { authToken } = useContext(UserContext);

    const dispatch = useDispatch();
    const { info, error, isLoading } = useSelector((state) => state.profiles) || {};
    let [formulari, setFormulari] = useState({});
    
    const afegir = (data) => {
        //e.preventDefault();
    
        const data2 = { ...data};
    
        dispatch(addProfile(data2, authToken));
    
    };
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
      } = useForm();
  return (
    <>
    <div className='CreateProfile'>
        <div className='cabecera'>
            <h1>CREA TU PERFIL PARA CONOCER A GENTE </h1>
        </div>
        <div className='formulario'>
        
		<label htmlFor="descripcion">Descripción:</label>
		<textarea
            {...register("description", {
                required: "El description del profile és obligatori",
                maxLength: {
                value: 255,
                message: "La longitud màxima és de 255 caràcters",
                },
            })}
            id="descripcion"
            name="descripcion"></textarea>

		<label htmlFor="tipo-jugador">Tipo de jugador:</label>
		<select
            {...register("tipo-jugador", {
                required: "El tipo de jugador és obligatòria",
            })}
            id="tipo-jugador" 
            name="tipo-jugador">
			<option value="casual">Casual</option>
			<option value="hardcore">Hardcore</option>
			<option value="pro">Professional</option>
		</select>

		<label htmlFor="horario">Horario:</label>
		<select
             {...register("horario", {
                required: "El horario és obligatòria",
            })}
            id="horario"
            name="horario">
			<option value="morning">Morning</option>
			<option value="afternoon">Afternoon</option>
			<option value="evening">Evening</option>
			<option value="flexible">Flexible</option>
		</select>

		<label htmlFor="generos">Géneros de Videojuegos:</label><br/>
        <div className='generos'>
            <input type="checkbox" id="accion" name="generos[]" value="action"/>
            <label className="checkbox" htmlFor="accion">Acción</label><br/>
            <input type="checkbox" id="aventura" name="generos[]" value="adventure"/>
            <label className="checkbox" htmlFor="aventura">Aventura</label><br/>
            <input type="checkbox" id="rol" name="generos[]" value="rpg"/>
            <label className="checkbox" htmlFor="rol">Rol</label><br/>
            <input type="checkbox" id="disparos-primera" name="generos[]" value="fps"/>
            <label className="checkbox" htmlFor="disparos-primera">Disparos en primera persona</label><br/>
            <input type="checkbox" id="disparos-tercera" name="generos[]" value="tps"/>
            <label className="checkbox" htmlFor="disparos-tercera">Disparos en tercera persona</label><br/>
            <input type="checkbox" id="plataformas" name="generos[]" value="platformer"/>
            <label className="checkbox" htmlFor="plataformas">Plataformas</label><br/>
            <input type="checkbox" id="estrategia" name="generos[]" value="strategy"/>
            <label className="checkbox" htmlFor="estrategia">Estrategia</label><br/>
            <input type="checkbox" id="simulacion" name="generos[]" value="simulation"/>
            <label className="checkbox" htmlFor="simulacion">Simulación</label><br/>
            <input type="checkbox" id="deportes" name="generos[]" value="sports"/>
            <label className="checkbox" htmlFor="deportes">Deportes</label><br/>
            <input type="checkbox" id="lucha" name="generos[]" value="fighting"/>
            <label className="checkbox" htmlFor="lucha">Lucha</label><br/>
            <input type="checkbox" id="musica" name="generos[]" value="music"/>
            <label className="checkbox" htmlFor="musica">Música</label><br/>
            <input type="checkbox" id="puzzle" name="generos[]" value="puzzle"/>
            <label className="checkbox" htmlFor="puzzle">Puzzle</label><br/>
            <input type="checkbox" id="carreras" name="generos[]" value="racing"/>
            <label className="checkbox" htmlFor="carreras">Carreras</label><br/>
            <input type="checkbox" id="mundo-abierto" name="generos[]" value="sandbox"/>
            <label className="checkbox" htmlFor="mundo-abierto">Mundo abierto</label><br/>
            <input type="checkbox" id="terror" name="generos[]" value="horror"/>
            <label className="checkbox" htmlFor="terror">Terror</label><br/>
            <input type="checkbox" id="sigilo" name="generos[]" value="stealth"/>
            <label className="checkbox" htmlFor="sigilo">Sigilo</label><br/>
            <input type="checkbox" id="supervivencia" name="generos[]" value="survival"/>
            <label className="checkbox" htmlFor="supervivencia">Supervivencia</label><br/>
        </div>


        <label htmlFor="idiomas">Idiomas:</label>
        <div className='idiomas'>
            <input type="checkbox" name="idiomas[]" value="en" id="english"/><label className="checkbox" htmlFor="english">English</label>
            <input type="checkbox" name="idiomas[]" value="es" id="espanol"/><label className="checkbox" htmlFor="espanol">Español</label>
            <input type="checkbox" name="idiomas[]" value="fr" id="francais"/><label className="checkbox" htmlFor="francais">Français</label>
            <input type="checkbox" name="idiomas[]" value="de" id="deutsch"/><label className="checkbox" htmlFor="deutsch">Deutsch</label>
            <input type="checkbox" name="idiomas[]" value="zh-hans" id="chino-simplificado"/><label className="checkbox"  htmlFor="chino-simplificado">简体中文</label>
            <input type="checkbox" name="idiomas[]" value="ja" id="japones"/><label className="checkbox" htmlFor="japones">日本語</label>
            <input type="checkbox" name="idiomas[]" value="pt" id="portugues"/><label className="checkbox" htmlFor="portugues">Português</label>
            <input type="checkbox" name="idiomas[]" value="ru" id="ruso"/><label className="checkbox" htmlFor="ruso">Pусский</label>
            <input type="checkbox" name="idiomas[]" value="ca" id="catalan"/><label className="checkbox" htmlFor="catalan">Català</label>
            <input type="checkbox" name="idiomas[]" value="gl" id="gallego"/><label className="checkbox" htmlFor="gallego">Galego</label>
            <input type="checkbox" name="idiomas[]" value="eu" id="euskera"/><label className="checkbox" htmlFor="euskera">Euskara</label>
        </div>

        <label htmlFor="pais">País:</label>
		<select
            {...register("pais", {
                required: "El pais és obligatòria",
            })}
            id="pais" 
            name="pais">
			<option value="ES">España</option>
			<option value="US">Estados Unidos</option>
			<option value="MX">México</option>
			<option value="AR">Argentina</option>
			<option value="CO">Colombia</option>
			<option value="PE">Perú</option>
			<option value="CL">Chile</option>
			<option value="BR">Brasil</option>
			<option value="FR">Francia</option>
			<option value="DE">Alemania</option>
			<option value="IT">Italia</option>
			<option value="UK">Reino Unido</option>
			<option value="JP">Japón</option>
			<option value="CN">China</option>
			<option value="KR">Corea del Sur</option>
			<option value="RU">Rusia</option>
			<option value="AU">Australia</option>
			<option value="CA">Canadá</option>
			<option value="IN">India</option>
			<option value="ZA">Sudáfrica</option>
		</select>
        <button
            onClick={handleSubmit(afegir)}
            type="submit">
            Guardar informacion
        </button>
        </div>
    </div>
    </>
  )
}

export default CreateProfile