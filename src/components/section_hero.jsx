import data from '../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaugh } from '@fortawesome/free-solid-svg-icons'

const SectionHero = () => {
    return(
        <div className='flex items-center gap-2 br bg-slate-200 rounded-tl-3xl rounded-bl-3xl rounded-tr-[60px] rounded-br-[160px]'>
            <div className='flex flex-col items-center gap-[20px] '>
                <div className=' justify-between items-center text-1xl'>
                    <h1 className='text-1xl pl-10 pr-10 text-1xl'>Chaque porte ouverte est une opportinuté, <span className=' text-[#FF8686]'>voici celle qui mène à votre propriété de reve</span></h1>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <button className='flex items-center bg-[#FF7878] rounded-[10px] px-2 py-2 text-white'>
                        <FontAwesomeIcon icon={faFaceLaugh}/>
                        <p>Contacter un agent</p>
                    </button>
                    <button className='border border-black rounded-[10px] px-2 py-2'>Publier une propriété</button>
                </div>
            </div>
            <div className=' pr-8 py-8'>
                <img className=' rounded-bl-[40px] rounded-tr-[40px] rounded-br-[130px] rounded-tl-[130px]' src= {data.sectionHero[0].imageHero} alt="image hero" />
            </div>
        </div>
    )
}

export default SectionHero