import Header from "../../components/header"
import SideBar from "../../components/sidebar"

const Reservation = () =>{
    return(
        <>
           <Header/>
           <main className="flex  gap-12 py-4 pl-12 pr-12">
                <SideBar/>
                <h3>Votre page des reservation</h3>
           </main>
        </>
    )
}

export default Reservation