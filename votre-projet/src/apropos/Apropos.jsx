function Apropos() {
    return <div className="bg-blue-950 px-10">
        <img className="w-20" src="/image/heiSchool.jpg" alt="" />
        <div className="flex row-auto justify-between">
            <div className="w-50">
                <p className="text-center text-white">Formation habilitée par l’Etat suivant le système LMD</p>
                <br />
                <p className="text-center text-white">Habilitation MESupRes n°31309/2023</p>
            </div>
            <div>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-3xl dark:text-white text-center">Adresse</h1>
                <p className="text-white">II J 161 R Ambodivoanjo </p>
                <p className="text-white">Ivandry Antananarivo</p>
                <p className="text-white">101, Madagascar</p>
            </div>
            <div className="flex flex-col">
                <h1  className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-3xl dark:text-white text-center">Navigation</h1>
                <button className="text-white">Accueil</button>
                <button className="text-white">Actualite</button>
                <button className="text-white">Bourse d'inscription</button>
                <button className="text-white">Inscription</button>
            </div>
            <div>
            <h1  className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-3xl dark:text-white text-center">Media sociaux</h1>

            </div>
        </div>
    </div>
}

export default Apropos