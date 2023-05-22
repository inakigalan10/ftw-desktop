import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProfile } from '../slice/thunks';
import { useContext } from "react";
import { UserContext } from "../../userContext";
import'./CreateProfile.css'
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {
    let { authToken,setAuthToken } = useContext(UserContext);
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [perfil, setPerfil] = useState({
        description: "",
        player_type: "",
        play_schedule: "",
        genres: [],
        languages: [],
        country: "",
    });
   
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setPerfil((prevPerfil) => ({
        ...prevPerfil,
        [name]: type === 'checkbox' ? [...prevPerfil[name], value] : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (
          perfil.description === "" ||
          perfil.player_type === "" ||
          perfil.play_schedule === "" ||
          perfil.genres.length === 0 ||
          perfil.languages.length === 0 ||
          perfil.country === ""
        ) {
          setShowAlert(true);
          return;
        }
      
        dispatch(addProfile(perfil, authToken));
        navigate('/');
    };

  return (
    <>
      <div className='CreateProfile'>
        <div className='cabecera-CreateProfile'>
          <h1>CREA TU PERFIL PARA CONOCER A GENTE </h1>
        </div>
        <div className='formulario'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='description'>Descripción:</label>
            <textarea
              placeholder='Añade una descripcion sobre ti'
              id='descripcion'
              name='description'
              value={perfil.description}
              onChange={handleChange}
              
            ></textarea>

            <label htmlFor='player_type'>Tipo de jugador:</label>
            <select
              id='player_type'
              name='player_type'
              value={perfil.player_type}
              onChange={handleChange}
            >
              <option value=''>Escoge una opcion</option>
              <option value='casual'>Casual</option>
              <option value='hardcore'>Hardcore</option>
              <option value='pro'>Professional</option>
            </select>

            <label htmlFor='play_schedule'>Horario:</label>
            <select
              id='play_schedule'
              name='play_schedule'
              value={perfil.play_schedule}
              onChange={handleChange}
            >
              <option value=''>Escoge una opcion</option>
              <option value='morning'>Morning</option>
              <option value='afternoon'>Afternoon</option>
              <option value='evening'>Evening</option>
              <option value='flexible'>Flexible</option>
            </select>

            <label htmlFor='genres'>Géneros de Videojuegos:</label>
            <div className='generos'>
              <input
                type='checkbox'
                id='accion'
                name='genres'
                value='accion'
                onChange={handleChange}
              />
              <label className='checkbox' htmlFor='accion'>
                Acción
              </label>
              <br />
                <input type='checkbox' id='aventura' name='genres' value="adventure" onChange={handleChange}/>
                <label className='checkbox' htmlFor='aventura'>Aventura</label><br/>
                <input type='checkbox' id='rol' name='genres' value="rpg" onChange={handleChange}/>
                <label className='checkbox' htmlFor='rol'>Rol</label><br/>
                <input type='checkbox' id='disparos-primera' name='genres' value="fps" onChange={handleChange}/>
                <label className='checkbox' htmlFor='disparos-primera'>Disparos en primera persona</label><br/>
                <input type='checkbox' id='disparos-tercera' name='genres' value="tps" onChange={handleChange}/>
                <label className='checkbox' htmlFor='disparos-tercera'>Disparos en tercera persona</label><br/>
                <input type='checkbox' id='plataformas' name='genres' value="platformer" onChange={handleChange}/>
                <label className='checkbox' htmlFor='plataformas'>Plataformas</label><br/>
                <input type='checkbox' id='estrategia' name='genres' value="strategy" onChange={handleChange}/>
                <label className='checkbox' htmlFor='estrategia'>Estrategia</label><br/>
                <input type='checkbox' id='simulacion' name='genres' value="simulation" onChange={handleChange}/>
                <label className='checkbox' htmlFor='simulacion'>Simulación</label><br/>
                <input type='checkbox' id='deportes' name='genres' value="sports" onChange={handleChange}/>
                <label className='checkbox' htmlFor='deportes'>Deportes</label><br/>
                <input type='checkbox' id='lucha' name='genres' value="fighting" onChange={handleChange}/>
                <label className='checkbox' htmlFor='lucha'>Lucha</label><br/>
                <input type='checkbox' id='musica' name='genres' value="music" onChange={handleChange}/>
                <label className='checkbox' htmlFor='musica'>Música</label><br/>
                <input type='checkbox' id='puzzle' name='genres' value="puzzle" onChange={handleChange}/>
                <label className='checkbox' htmlFor='puzzle'>Puzzle</label><br/>
                <input type='checkbox' id='carreras' name='genres' value="racing" onChange={handleChange}/>
                <label className='checkbox' htmlFor='carreras'>Carreras</label><br/>
                <input type='checkbox' id='mundo-abierto' name='genres' value="sandbox" onChange={handleChange}/>
                <label className='checkbox' htmlFor='mundo-abierto'>Mundo abierto</label><br/>
                <input type='checkbox' id='terror' name='genres' value="horror" onChange={handleChange}/>
                <label className='checkbox' htmlFor='terror'>Terror</label><br/>
                <input type='checkbox' id='sigilo' name='genres' value='stealth' onChange={handleChange}/>
                <label className='checkbox' htmlFor='sigilo'>Sigilo</label><br/>
                <input type='checkbox' id='supervivencia' name='genres' value="survival" onChange={handleChange}/>
                <label className='checkbox' htmlFor='supervivencia'>Supervivencia</label><br/>
            </div>

            <label htmlFor='languages'>Idiomas:</label>
            <div className='idiomas'>
                <input
                    type='checkbox'
                    name='languages'
                    value='en'
                    id='english'
                    onChange={handleChange}
                />
                <label className='checkbox' htmlFor='english'>
                    English
                </label>
                <input type='checkbox' name='languages' value="es" id='espanol' onChange={handleChange}/><label className='checkbox' htmlFor='espanol'>Español</label>
                <input type='checkbox' name='languages' value="fr" id='francais' onChange={handleChange}/><label className='checkbox' htmlFor='francais'>Français</label>
                <input type='checkbox' name='languages' value="de" id='deutsch' onChange={handleChange}/><label className='checkbox' htmlFor='deutsch'>Deutsch</label>
                <input type='checkbox' name='languages' value="zh-hans" id='chino-simplificado' onChange={handleChange}/><label className='checkbox'  htmlFor='chino-simplificado'>简体中文</label>
                <input type='checkbox' name='languages' value="ja" id='japones' onChange={handleChange}/><label className='checkbox' htmlFor='japones'>日本語</label>
                <input type='checkbox' name='languages' value="pt" id='portugues' onChange={handleChange}/><label className='checkbox' htmlFor='portugues'>Português</label>
                <input type='checkbox' name='languages' value="ru" id='ruso' onChange={handleChange}/><label className='checkbox' htmlFor='ruso'>Pусский</label>
                <input type='checkbox' name='languages' value="ca" id='catalan' onChange={handleChange}/><label className='checkbox' htmlFor='catalan'>Català</label>
                <input type='checkbox' name='languages' value="gl" id='gallego' onChange={handleChange}/><label className='checkbox' htmlFor='gallego'>Galego</label>
                <input type='checkbox' name='languages' value="eu" id='euskera' onChange={handleChange}/><label className='checkbox' htmlFor='euskera'>Euskara</label>
            </div>
            <div>

        <label htmlFor='country'>País:</label>
		<select
            id='country'
            name='country'
            value={perfil.country}
            onChange={handleChange}
            >
      <option value=''>Escoge una opcion</option>
			<option value='ES'>España</option>
			<option value='US'>Estados Unidos</option>
			<option value='MX'>México</option>
			<option value='AR'>Argentina</option>
			<option value='CO'>Colombia</option>
			<option value='PE'>Perú</option>
			<option value='CL'>Chile</option>
			<option value='BR'>Brasil</option>
			<option value='FR'>Francia</option>
			<option value='DE'>Alemania</option>
			<option value='IT'>Italia</option>
			<option value='UK'>Reino Unido</option>
			<option value='JP'>Japón</option>
			<option value='CN'>China</option>
			<option value='KR'>Corea del Sur</option>
			<option value='RU'>Rusia</option>
			<option value='AU'>Australia</option>
			<option value='CA'>Canadá</option>
			<option value='IN'>India</option>
			<option value='ZA'>Sudáfrica</option>
		</select>
            </div>

            <button className='button-createPerfil' type='submit'>Enviar</button>
          </form>
          {showAlert && (
          <div className="alert">
            Por favor, completa todos los campos del formulario.
          </div>
)}
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
