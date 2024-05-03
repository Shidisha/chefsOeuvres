import Header from "../../components/header"
import SideBar from "../../components/sidebar"

const Profil = () => {
    return(
        <>
            <Header/>
            <h3>Votre page de profil</h3>
            <main className="flex  gap-12 py-4 pl-12 pr-12">
                        <SideBar/>
             </main>
        </>
    )
}


export default Profil 