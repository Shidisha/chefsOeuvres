
import { useForm } from 'react-hook-form';
import imgBg from "../../../assets/icons/maisonbg.jpg"
import data from "../../../data.json"

const LoginPage = () =>{

    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    //les gestion de la soumission du formulaire sera faite ici
    //telle que l'envoi de données d'identification au serveur

   // console.log(data);
  };
    return(
        <div className='w-full h-full bg-cover items-center content-center'>
          <img className=' absolute w-full h-full object-cover opacity-50'  src={imgBg} alt="image background"/>
              <div className=' absolute border rounded-[20px] m-96 mt-40'>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' flex flex-col gap-2 content-center'>
                        <img className=' w-12 h-6 pt-2' src={data.nav[0].logo} alt="" />
                        <h3 className=' pt-2 pb-2'>Veillez vous connecter</h3>
                        <input className='p-2 ml-16 mr-16 rounded-full w-72' placeholder='djokadimatshibangu@gmail.com' {...register("username", { required: true })} />
                        {errors.username && <span>Ce champ est requis.</span>}
                        <input className=' p-2 ml-16 mr-16 rounded-full w-72' placeholder=' ************' type="password" {...register("password", { required: true })} />
                        {errors.password && <span>Ce champ est requis.</span>}
                        <button className=' border p-2 ml-16 mr-16 rounded-full w-72 bg-red-400 text-white ' type="submit">Se Connecter</button>
                        <span>Pas de compte? Inscrivez-vous</span>
                    </div>
          
                  </form>

              </div>
        </div>
    )
}

export default LoginPage