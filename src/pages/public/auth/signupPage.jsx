
import { useForm } from 'react-hook-form';
import imgBg from "../../../assets/icons/maisonbg.jpg"
import { NavLink } from 'react-router-dom';
import data from '../../../data.json'

const SignupPage = () =>{

    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    //les gestion de la soumission du formulaire sera faite ici
    //telle que l'envoi de données d'identification au serveur

   // console.log(data);
  };
    return(
        <div>
          <img className='absolute w-full h-full object-cover'  src={imgBg} alt="image background"/>
              <div className='absolute border rounded-[20px] m-96 mt-40 bg-slate-400 opacity-100'>
                 <form className=' flex flex-col content-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className=' flex flex-col w-max gap-2 content-center items-center'>
                    <img className='w-16 h-12 pt-4' src={data.nav[0].logo} alt="logo du site" />
                      <h3 className=' pt-2 pb-2 font-bold text-white text-xl'>Veillez vous inscrire</h3>
                          <div className=' flex flex-row justify-center gap-6'>
                              <div className=' flex flex-col gap-2'>
                                  <input className='ml-8 p-2 rounded-full w-32' placeholder='Nom' {...register("userFirstName", { required: true })} />
                                  {errors.userFirstName && <span className=" text-red-800">Ce champ est requis.</span>}
                              </div>
                              <div className='flex flex-col gap-2'>
                                  <input className='mr-8 p-2 rounded-full w-32' placeholder='Prénom' {...register("userSecondName", { required: true })} />
                                  {errors.userSecondName && <span className=" text-red-800">Ce champ est requis.</span>}
                              </div>
                          </div>
                        <input className=' p-2 rounded-full w-72' placeholder='djokadimatshibangu@gmail.com' type="email" {...register("email", { required: true })} />
                          {errors.password && <span className=" text-red-800">Ce champ est requis.</span>}
                        <input className=' p-2 rounded-full w-72' placeholder='************' type="password" {...register("password", { required: true })} />
                          {errors.password && <span className=" text-red-800">Ce champ est requis.</span>}
                          <button className=' border p-2 rounded-full w-72 bg-red-400 text-white font-extrabold ' type="submit">Valider</button>
                          <span className=' pb-2 text-white'>Vous avez un compte? <NavLink to="/loginPage" className=" text-red-500 underline">Connectez vous</NavLink></span>
                    </div>
                  </form>
              </div>
        </div>
    ) 
}

export default SignupPage