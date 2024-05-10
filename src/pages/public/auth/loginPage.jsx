
import { useForm } from 'react-hook-form';
import imgBg from "../../../assets/icons/maisonbg.jpg"
import { NavLink } from 'react-router-dom';
import data from '../../../data.json'
const LoginPage = () =>{

    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    //les gestion de la soumission du formulaire sera faite ici
    //telle que l'envoi de données d'identification au serveur

   // console.log(data);
  };
    return(
        <div className='w-full h-full bg-cover items-center content-center opacity-90'>
          <img className=' absolute w-full h-full object-cover'  src={imgBg} alt="image background"/>
          
              <div className=' absolute border rounded-[20px] m-96 mt-40 bg-slate-400 opacity-100'>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' flex flex-col w-max gap-2 content-center items-center'>
                    <img className='w-16 h-12 pt-4' src={data.nav[0].logo} alt="logo du site" />
                        <h3 className=' pt-2 pb-2 font-bold text-white text-xl'>Veillez vous connecter</h3>
                        <input className='p-2 ml-8 mr-8 rounded-full w-72' placeholder='djokadimatshibangu@gmail.com' {...register("username", { required: true })} />
                        {errors.username && <span>Ce champ est requis.</span>}
                        <input className=' p-2  ml-8 mr-8 rounded-full w-72' placeholder=' ************' type="password" {...register("password", { required: true })} />
                        {errors.password && <span>Ce champ est requis.</span>}
                        <button className=' border p-2  ml-8 mr-8 rounded-full w-72 bg-red-400 text-white font-extrabold ' type="submit">Se Connecter</button>
                        <span className=' pb-2 text-white'>Pas de compte? <NavLink to="/signupPage" className=" text-red-500 underline">Inscrivez-vous</NavLink></span>
                    </div>
                  </form>
              </div>
        </div>
    ) 
}

export default LoginPage