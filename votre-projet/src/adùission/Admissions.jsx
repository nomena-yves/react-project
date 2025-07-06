function Admission() {
    return <div className="bg-blue-500">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-950 md:text-5xl lg:text-6xl dark:text-white text-center">Admission</h1>
        <br />
        <br />
        <p className="text-center">Ouverte aux bacheliers de toutes les séries,
            l’admission chez HEI se fait par test de niveau :
        </p>
        <br />
        <p className="text-center gap-2">une épreuve de français niveau B2
            et d’une épreuve de mathématiques niveau Terminale D.
        </p>
        <br />
        <br />
        <div className="flex row-auto justify-center">
            <div className="bg-orange-100 w-80 p-10">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">01</h1>
                <div>
                    <p className="text-blue-950" >  Dépôt de dossiers : pour les
                        bacheliers de toutes séries sans
                        limite d’âge
                    </p>
                    <i></i>
                </div>
                <br />
            </div>
            <div className="bg-orange-200 w-80 p-10">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white ">02</h1>
                <div>
                    <p className="text-blue-950">Dépôt de dossiers : pour les
                        bacheliers de toutes séries sans
                        limite d’âge
                    </p>
                    <i></i>
                </div>
                <br />
            </div>
            <div className="bg-orange-300 w-80 p-10">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white ">03</h1>
                <div>
                    <p className="text-blue-950">Dépôt de dossiers : pour les
                        bacheliers de toutes séries sans
                        limite d’âge
                    </p>
                    <i></i>
                </div>
                <br />
            </div>
        </div>
        <br />
        <br />
        <div className="flex row-auto justify-around w-120 m-auto ">
            <button className="border-2 border-white p-3 text-white w-50 hover:bg-blue-950 hover:border-none">Inscrivez-vous ici</button>
            <button className="p-3 bg-blue-950 text-white w-50">Resultat concours</button>
        </div>
        <br />
        <br />
    </div>
}

export default Admission