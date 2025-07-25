import Acceuil from "./accueil/Accueil"   
import SousAccueil from "./sous-accueil/sousAccueil"
import PartieAccueil from "./partie-accueil/PartieAccueil"
import Deboucher from "./deboucher/deboucher"
import Domaines from "./Domaine-hei/Domaines"
import Admission from "./adùission/Admissions"
import Programme from "./Programmes/Programme"
import SystemeEduc from "./Systeme/SystemeEduc"
import Technologie from "./technologie/Technologie"
import Partenaires from "./partenaire/Partenaires"
import Apropos from "./apropos/Apropos"

function App() {

return <> <div className="w-full ">
 <nav className="w-full bg-blue-950 flex col-auto justify-around ">
 <div><img className="size-25" src="/image/heiSchool.jpg" alt="" /></div>
 <br />
 <br />
 <br />
 <br />
  <div className="flex gap-4 my-auto"><a href="" className="text-white w-34 text-center p-2 font-bold">Acceuil</a><a href="" 
   className="text-white w-34 text-center p-2 font-bold">Actualité</a><a href=""  className="text-white w-34 text-center p-2 font-bold">Bourse d'Etude</a><a href="" 
    className="text-white w-34 text-center p-2 font-bold">Inscription</a><a href=""  className="text-white bg-amber-400 w-34 text-center p-2 font-bold">Intrinet</a></div>
 </nav>
</div>
 <Acceuil></Acceuil>
 <SousAccueil></SousAccueil>
 <PartieAccueil></PartieAccueil>
 <Deboucher></Deboucher>
 <Domaines></Domaines>
 <Admission></Admission>
 <Programme></Programme>
 <SystemeEduc></SystemeEduc>
 <Technologie></Technologie>
 <Partenaires></Partenaires>
 <Apropos></Apropos>
 </>

}

export default App
