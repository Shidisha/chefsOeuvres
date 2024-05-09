import Footer from "../../components/footer"
import Header from "../../components/header"
import SideBar from "../../components/sidebar"

const Parametre = () =>{
    return(
        <>
            <Header/>
            <main className="flex  gap-12 py-4 pl-12 pr-12">
                    <SideBar/>
                    <div className=" flex flex-col gap-4">
                         <h3>Votre page des parametre</h3>
                    </div>
             </main>
             <Footer/>
        </>
    )
}

export default Parametre