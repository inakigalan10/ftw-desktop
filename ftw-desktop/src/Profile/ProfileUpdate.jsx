import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../userContext";


import '../Profile/CreateProfile/CreateProfile.css';
import { getProfile } from './slice/thunks';

export const ProfileUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
 
  const { pathname } = useLocation();
  const {authToken, setAuthToken, idUser, setIdUser, usernameUser, setUsernameUser} = useContext(UserContext);
  
 

  const { profile, isLoading, error, info } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(getProfile(authToken, id))
     
      .then((response) => {
        const data = response.data;
       
        // Actualizar los estados con los datos obtenidos
        setPerfil({
          description: profile.description,
          player_type: profile.player_type,
          play_schedule: profile.play_schedule,
          genres: profile.genres,
          languages: profile.languages,
          country: profile.country,
        });
      })
      .catch((error) => {
        // Manejar el error si ocurre
        console.error(error);
      });
  }, []);

  const [user, setUser] = useState({
    username: "",
    email: "",
  
  });

  const handleProfileChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPerfil((prevPerfil) => ({
      ...prevPerfil,
      [name]: type === "checkbox" ? [...prevPerfil[name], value] : value,
    }));
  };

  const handleUserChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleProfileSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar los datos del perfil del usuario
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar los datos del usuario
  };

  return (
    <>
      <div className='Update-Profile'>
        <div className='cabecera-Update-Profile'>
          <h1>Actualiza tu plerfil </h1>
        </div>
        <div className='formulario'>
          
        <form  onSubmit={handleUserSubmit}>
            <label htmlFor='username'>Nombre de usuario:</label>
            <input
              placeholder=''
              id='username'
              name='username'
              value={user.username}
              onChange={handleUserChange}
              
            />
            <label htmlFor='username'>Email:</label>
            <input
              placeholder=''
              id='email'
              name='email'
              value={user.email}
              onChange={handleUserChange}
              
            />
            <button className='button-createPerfil' type='submit'>Enviar</button>

          </form>
        </div>
        <div className='formulario'>
          <form onSubmit={handleProfileSubmit}>
            <label htmlFor='description'>Descripción:</label>
            <textarea
              placeholder='Añade una descripcion sobre ti'
              id='descripcion'
              name='description'
              value={profile.description}
              onChange={handleProfileChange}
              
            ></textarea>

            <label htmlFor='player_type'>Tipo de jugador:</label>
            <select
              id='player_type'
              name='player_type'
              value={profile.player_type}
              onChange={handleProfileChange}
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
              value={profile.play_schedule}
              onChange={handleProfileChange}
            >
              <option value=''>Escoge una opcion</option>
              <option value='morning'>Morning</option>
              <option value='afternoon'>Afternoon</option>
              <option value='evening'>Evening</option>
              <option value='flexible'>Flexible</option>
            </select>

            <label htmlFor='genres'>Géneros de Videojuegos (selecciona 3):</label>
            <div className='generos'>
                <input type='checkbox' id='accion' name='genres' value='accion' onChange={handleProfileChange}   checked={profile.genres.includes('accion')}/>
                <label className='checkbox' htmlFor='accion'> Acción </label><br/>
                <input type='checkbox' id='aventura' name='genres' value="adventure" onChange={handleProfileChange} checked={profile.genres.includes('adventure')}  />
                <label className='checkbox' htmlFor='aventura'>Aventura</label><br/>
                <input type='checkbox' id='rol' name='genres' value="rpg" onChange={handleProfileChange} checked={profile.genres.includes('rpg')} />
                <label className='checkbox' htmlFor='rol'>Rol</label><br/>
                <input type='checkbox' id='disparos-primera' name='genres' value="fps" onChange={handleProfileChange} checked={profile.genres.includes('fps')} />
                <label className='checkbox' htmlFor='disparos-primera'>Disparos en primera persona</label><br/>
                <input type='checkbox' id='disparos-tercera' name='genres' value="tps" onChange={handleProfileChange} checked={profile.genres.includes('tps')} />
                <label className='checkbox' htmlFor='disparos-tercera'>Disparos en tercera persona</label><br/>
                <input type='checkbox' id='plataformas' name='genres' value="platformer" onChange={handleProfileChange} checked={profile.genres.includes('platformer')} />
                <label className='checkbox' htmlFor='plataformas'>Plataformas</label><br/>
                <input type='checkbox' id='estrategia' name='genres' value="strategy" onChange={handleProfileChange} checked={profile.genres.includes('strategy')} />
                <label className='checkbox' htmlFor='estrategia'>Estrategia</label><br/>
                <input type='checkbox' id='simulacion' name='genres' value="simulation" onChange={handleProfileChange} checked={profile.genres.includes('simulation')} />
                <label className='checkbox' htmlFor='simulacion'>Simulación</label><br/>
                <input type='checkbox' id='deportes' name='genres' value="sports" onChange={handleProfileChange} checked={profile.genres.includes('sports')} />
                <label className='checkbox' htmlFor='deportes'>Deportes</label><br/>
                <input type='checkbox' id='lucha' name='genres' value="fighting" onChange={handleProfileChange} checked={profile.genres.includes('fighting')} />
                <label className='checkbox' htmlFor='lucha'>Lucha</label><br/>
                <input type='checkbox' id='musica' name='genres' value="music" onChange={handleProfileChange} checked={profile.genres.includes('music')} />
                <label className='checkbox' htmlFor='musica'>Música</label><br/>
                <input type='checkbox' id='puzzle' name='genres' value="puzzle" onChange={handleProfileChange} checked={profile.genres.includes('puzzle')} />
                <label className='checkbox' htmlFor='puzzle'>Puzzle</label><br/>
                <input type='checkbox' id='carreras' name='genres' value="racing" onChange={handleProfileChange} checked={profile.genres.includes('racing')} />
                <label className='checkbox' htmlFor='carreras'>Carreras</label><br/>
                <input type='checkbox' id='mundo-abierto' name='genres' value="sandbox" onChange={handleProfileChange} checked={profile.genres.includes('sandbox')} />
                <label className='checkbox' htmlFor='mundo-abierto'>Mundo abierto</label><br/>
                <input type='checkbox' id='terror' name='genres' value="horror" onChange={handleProfileChange} checked={profile.genres.includes('horror')} />
                <label className='checkbox' htmlFor='terror'>Terror</label><br/>
                <input type='checkbox' id='sigilo' name='genres' value='stealth' onChange={handleProfileChange} checked={profile.genres.includes('stealth')} />
                <label className='checkbox' htmlFor='sigilo'>Sigilo</label><br/>
                <input type='checkbox' id='supervivencia' name='genres' value="survival" onChange={handleProfileChange} checked={profile.genres.includes('survival')} />
                <label className='checkbox' htmlFor='supervivencia'>Supervivencia</label><br/>
            </div>

            <label htmlFor='languages'>Idiomas (selecciona 3): </label>
            <div className='idiomas'>
                <input
                    type='checkbox'
                    name='languages'
                    value='en'
                    id='english'
                    onChange={handleProfileChange}
                />
                <label className='checkbox' htmlFor='english'>
                    English
                </label>
                <input type='checkbox' name='languages' value="es" id='espanol' onChange={handleProfileChange} checked={profile.languages.includes('es')} /><label className='checkbox' htmlFor='espanol'>Español</label>
                <input type='checkbox' name='languages' value="fr" id='francais' onChange={handleProfileChange} checked={profile.languages.includes('fr')} /><label className='checkbox' htmlFor='francais'>Français</label>
                <input type='checkbox' name='languages' value="de" id='deutsch' onChange={handleProfileChange} checked={profile.languages.includes('de')} /><label className='checkbox' htmlFor='deutsch'>Deutsch</label>
                <input type='checkbox' name='languages' value="zh-hans" id='chino-simplificado' onChange={handleProfileChange} checked={profile.languages.includes('zh-hans')} /><label className='checkbox'  htmlFor='chino-simplificado'>简体中文</label>
                <input type='checkbox' name='languages' value="ja" id='japones' onChange={handleProfileChange} checked={profile.languages.includes('ja')} /><label className='checkbox' htmlFor='japones'>日本語</label>
                <input type='checkbox' name='languages' value="pt" id='portugues' onChange={handleProfileChange} checked={profile.languages.includes('pt')} /><label className='checkbox' htmlFor='portugues'>Português</label>
                <input type='checkbox' name='languages' value="ru" id='ruso' onChange={handleProfileChange} checked={profile.languages.includes('ru')} /><label className='checkbox' htmlFor='ruso'>Pусский</label>
                <input type='checkbox' name='languages' value="ca" id='catalan' onChange={handleProfileChange} checked={profile.languages.includes('ca')} /><label className='checkbox' htmlFor='catalan'>Català</label>
                <input type='checkbox' name='languages' value="gl" id='gallego' onChange={handleProfileChange} checked={profile.languages.includes('gl')} /><label className='checkbox' htmlFor='gallego'>Galego</label>
                <input type='checkbox' name='languages' value="eu" id='euskera' onChange={handleProfileChange} checked={profile.languages.includes('eu')} /><label className='checkbox' htmlFor='euskera'>Euskara</label>
            </div>
            <div>

        <label htmlFor='country'>País:</label>
    <select
            id='country'
            name='country'
            value={profile.country}
            onChange={handleProfileChange}
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
        </div>
      </div>
    </>
  );
};
