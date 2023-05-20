import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../userContext';
import { Navigate, useParams } from "react-router-dom";
import {editProfile, getProfile } from './slice/thunks';
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getUser, editUser } from './slice/user/thunks';




const ProfileUpdate = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser} = useContext(UserContext);
  const { profile, isLoading, error, info } = useSelector(state => state.profile);
  const { user } = useSelector(state => state.user);

  

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm();

  const selectedLanguages = watch('languages'); // Obtener los idiomas seleccionados

  const validateLanguages = (selectedLanguages) => {
    return selectedLanguages && selectedLanguages.length > 3
      ? 'Selecciona un máximo de 3 idiomas'
      : undefined;
  };
  
  const selectedGeneros = watch('genres'); // Obtener los generos seleccionados

  const validateGeneros = (selectedGeneros) => {
    return selectedGeneros && selectedGeneros.length > 3
      ? 'Selecciona un máximo de 3 generos'
      : undefined;
  };

  useEffect(() => {
    dispatch(getProfile(authToken, id));
    dispatch(getUser(authToken, id));
  }, []);

  useEffect(() => {
    setValue("description", profile.description);
    setValue("player_type", profile.player_type);
    setValue("play_schedule", profile.play_schedule);
    setValue("genres", profile.genres);
    setValue("languages", profile.languages);
    setValue("country", profile.country);

   
  }, [profile]);

  useEffect(() => {
    setValue("username", user.username);
    setValue("email", user.email);
   

   
  }, [user]);

  localStorage.setItem('username', user.username);




  const editarProfile = (data) => {
    dispatch(editProfile(authToken, data));
  }

  const editarUser = (data) => {
    dispatch(editUser(authToken, data));
  }
  const dispatch = useDispatch();
  return (
    <div>
      <div className='cabecera-Update-Profile'>
        <h1>MODIFICA TU PERFIL</h1>
      </div>
      <div className='formulario'>
        <div>
          <label >Nombre de Usuario</label>
            <input
            {...register("username", {
              required: "El nombre de usuario és obligatòria",
              maxLength: {
                value: 50,
                message: "La longitud màxima és de 50 caràcters",
              },
            })}
              
            ></input>
        </div>
        <div>
          <label >Email</label>
            <input
            type='email'
            {...register("email", {
              required: "El email obligatòria",
              maxLength: {
                value: 50,
                message: "La longitud màxima és de 50 caràcters",
              },
            })}
              
            ></input>
        </div>
         
        <button
          className='button-createPerfil'
              onClick={handleSubmit(editarUser)}
              type="submit"
            >
              Guardar
        </button>
      </div>
      <div className='formulario'>
          <div >
            <label >Descripcion</label>
              <textarea
              {...register("description", {
                required: "La descripcion és obligatòria",
                maxLength: {
                  value: 255,
                  message: "La longitud màxima és de 255 caràcters",
                },
              })}
                
              ></textarea>
          </div>
          <div>
            <label
              htmlFor="player_type"
            >
              
              Tipo de jugador:
            </label>
            <select
              {...register("player_type", {
                required: "Tipo de jugador és obligatòria",
              })}
              
              id="player_type"
            >
              <option defaultValue value="">
                ----
              </option>
                <option value='casual'>Casual</option>
                <option value='hardcore'>Hardcore</option>
                <option value='pro'>Professional</option>
            </select>
          </div>
          <div>
            <label htmlFor='play_schedule'>Horario:</label>
              <select
               {...register("play_schedule", {
                required: "El horario és obligatòria",
              })}
              >
                <option defaultValue value="">
                ----
              </option>
                <option value='morning'>Morning</option>
                <option value='afternoon'>Afternoon</option>
                <option value='evening'>Evening</option>
                <option value='flexible'>Flexible</option>
              </select>
          </div>
          <div>
          <label htmlFor='genres'>Géneros de Videojuegos (seleciona como mínimo uno y como máximo tres):</label>
            <div className='generos'>
            <input
                type='checkbox'
                id='accion'
                name='genres'
                value='accion'
                {...register("genres", { validate: validateGeneros })}
              /><label className='checkbox' htmlFor='accion'>
                Acción
              </label>
              <br />
              <input
                type='checkbox'
                id='aventura'
                name='genres'
                value='adventure'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='aventura'>Aventura</label><br />

              <input
                type='checkbox'
                id='rol'
                name='genres'
                value='rpg'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='rol'>Rol</label><br />

              <input
                type='checkbox'
                id='disparos-primera'
                name='genres'
                value='fps'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='disparos-primera'>Disparos en primera persona</label><br />

              <input
                type='checkbox'
                id='disparos-tercera'
                name='genres'
                value='tps'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='disparos-tercera'>Disparos en tercera persona</label><br />

              <input
                type='checkbox'
                id='plataformas'
                name='genres'
                value='platformer'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='plataformas'>Plataformas</label><br />

              <input
                type='checkbox'
                id='estrategia'
                name='genres'
                value='strategy'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='estrategia'>Estrategia</label><br />

              <input
                type='checkbox'
                id='simulacion'
                name='genres'
                value='simulation'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='simulacion'>Simulación</label><br />

              <input
                type='checkbox'
                id='deportes'
                name='genres'
                value='sports'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='deportes'>Deportes</label><br />

              <input
                type='checkbox'
                id='lucha'
                name='genres'
                value='fighting'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='lucha'>Lucha</label><br />

              <input
                type='checkbox'
                id='musica'
                name='genres'
                value='music'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='musica'>Música</label><br />

              <input
                type='checkbox'
                id='puzzle'
                name='genres'
                value='puzzle'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='puzzle'>Puzzle</label><br />

              <input
                type='checkbox'
                id='carreras'
                name='genres'
                value='racing'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='carreras'>Carreras</label><br />

              <input
                type='checkbox'
                id='mundo-abierto'
                name='genres'
                value='sandbox'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='mundo-abierto'>Mundo abierto</label><br />

              <input
                type='checkbox'
                id='terror'
                name='genres'
                value='horror'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='terror'>Terror</label><br />

              <input
                type='checkbox'
                id='sigilo'
                name='genres'
                value='stealth'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='sigilo'>Sigilo</label><br />

              <input
                type='checkbox'
                id='supervivencia'
                name='genres'
                value='survival'
                {...register("genres", { validate: validateGeneros })}
              />
              <label className='checkbox' htmlFor='supervivencia'>Supervivencia</label><br />

            </div>
            {errors.genres && <p>{errors.genres.message}</p>}
          </div>
          <div>
          <label htmlFor='languages'>Idiomas (seleciona como mínimo uno y como máximo tres):</label>
            <div className='idiomas'>
                <input
                    type='checkbox'
                    name='languages'
                    value='en'
                    id='english'
                    {...register("languages", { validate: validateLanguages })}
                />
                <label className='checkbox' htmlFor='english'>
                    English
                </label>

                <input
                  type='checkbox' 
                  name='languages' 
                  value="es" 
                  id='espanol' 
                  {...register("languages", { validate: validateLanguages })}
                />
                <label className='checkbox' htmlFor='espanol'>
                  Español
                </label>
                <input 
                  type='checkbox' 
                  name='languages'
                  value="fr" 
                  id='francais'
                  {...register("languages", { validate: validateLanguages })}

                />
                <label className='checkbox' htmlFor='francais'>
                  Français
                </label>
                <input 
                  type='checkbox' 
                  name='languages' 
                  value="de" 
                  id='deutsch' 
                  {...register("languages", { validate: validateLanguages })}
                  />
                  <label className='checkbox' htmlFor='deutsch'>
                    Deutsch
                  </label>
                <input 
                  type='checkbox' 
                  name='languages' 
                  value="zh-hans" id='chino-simplificado' 
                  {...register("languages", { validate: validateLanguages })}
                  /><label className='checkbox'  htmlFor='chino-simplificado'>
                    简体中文
                  </label>
                <input 
                  type='checkbox' 
                  name='languages' 
                  value="ja" 
                  id='japones' 
                  {...register("languages", { validate: validateLanguages })}
                  />
                  <label className='checkbox' htmlFor='japones'>
                    日本語
                  </label>
                <input 
                  type='checkbox' 
                  name='languages' 
                  value="pt" 
                  id='portugues' 
                  {...register("languages", { validate: validateLanguages })}
                  />
                  <label className='checkbox' htmlFor='portugues'>
                    Português
                  </label>
                <input 
                  type='checkbox' 
                  name='languages' 
                  value="ru" 
                  id='ruso' 
                  {...register("languages", { validate: validateLanguages })}
                  />
                  <label className='checkbox' htmlFor='ruso'>
                    Pусский
                  </label>
                <input 
                  type='checkbox' 
                  name='languages' 
                  value="ca" 
                  id='catalan' 
                  {...register("languages", { validate: validateLanguages })}
                  />
                  <label className='checkbox' htmlFor='catalan'>
                    Català
                  </label>
                <input 
                  type='checkbox' 
                  name='languages' 
                  value="gl" 
                  id='gallego' 
                  {...register("languages", { validate: validateLanguages })}
                  />
                  <label className='checkbox' htmlFor='gallego'>
                    Galego
                  </label>
                <input 
                  type='checkbox' 
                  name='languages' 
                  value="eu" 
                  id='euskera' 
                  {...register("languages", { validate: validateLanguages })}
                  />
                  <label className='checkbox' htmlFor='euskera'>
                    Euskara
                  </label>
            
                
              </div>
              {errors.lenguages && <p>{errors.lenguages.message}</p>}
          </div>
          <div>
            <label
              htmlFor="visibility"
            >
              
              País:
            </label>
            <select
              {...register("country", {
                required: "El pais és obligatòria",
              })}
              
              id="visibility"
            >
              <option defaultValue value="">
                ----
              </option>
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
          {error ? (
              <div>
                {error}
              </div>
            ) : (
              <></>
            )}
           <button
              className='button-createPerfil'
              onClick={handleSubmit(editarProfile)}
              type="submit"
            >
              Guardar
          </button>
        </div>
    </div>
  )
}

export default ProfileUpdate