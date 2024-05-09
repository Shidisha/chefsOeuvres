import data from '../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const SectionHero = () => {
    return(
        <div className='flex items-center gap-1 br bg-slate-200 rounded-tl-3xl rounded-bl-3xl rounded-tr-[60px] rounded-br-[160px]'>
            <div className='flex flex-col items-center gap-[20px] '>
                <div className=' justify-between items-center text-1xl'>
                    <h1 className='text-1xl pl-10 pr-10 font-extrabold'>Chaque porte ouverte est une opportinuté, <span className=' text-[#FF8686]'>voici celle qui mène à votre propriété de reve</span></h1>
                </div>
                <div className='flex items-center gap-[40px]'>
                    <button className='flex items-center bg-[#FF7878] rounded-full px-2 py-2 text-white gap-1'>
                        <FontAwesomeIcon icon={faPhone}/>
                        <p>Contacter un agent</p>
                    </button>
                    <button className=' flex items-center border border-black rounded-full px-1 py-2 gap-1'>
                        <FontAwesomeIcon icon={faUpload}/>
                        <NavLink to='/pagePublication'><p>Publier une propriété</p></NavLink>
                    </button>
                </div>
            </div>
            <div className=' pr-8 py-8'>
                <img className=' rounded-bl-[40px] rounded-tr-[40px] rounded-br-[130px] rounded-tl-[130px]' src= {data.sectionHero[0].imageHero} alt="image hero" />
            </div>
        </div>
    )
}

export default SectionHero