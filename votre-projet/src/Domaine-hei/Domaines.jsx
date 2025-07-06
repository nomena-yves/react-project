function Domaines() {
    return <div className="bg-gray-200">
        <br />
        <br />
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-950 md:text-5xl lg:text-6xl dark:text-white text-center ">Domaines</h1>
        <br />
        <p className="text-center text-blue-950">Au cours de vos trois ans de formation, naviguez entre les
            domaines les plus porteurs du numérique du présent et de l’avenir :
        </p>

        <div className="w-full flex row-auto justify-around p-30">
            <div className=" w-80 rounded-x bg-white ">
                <img className="size-50 mx-auto" src="/image/Cloud-et-cybersecurite.png" alt="" />
                <br />
                <p className=" text-center font-bold text-amber-400">
                    Cloud et cybersécurité
                </p>
                <br />
                <p className="text-center text-blue-950 m-4">
                    Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS).
                    Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications
                    contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.
                </p>
            </div>
            <div className=" w-80 rounded-xl bg-white">
                <img className="size-50 mx-auto" src="/image/cerveau.png" alt="" />
                <br />
                <p className=" text-center font-bold text-amber-400">
                Intelligence artificielle
                </p>
                <br />
                <p className="text-center m-4">
                    Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures
                    semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez
                    les bases de l’intelligence artificielle lors de vos cours chez HEI.
                </p>
            </div>
            <div className=" w-80 rounded-xl bg-white">
                <img className="size-50 mx-auto" src="/image/logicielle.png" alt="" />
                <br />
                <p className="text-center font-bold  text-amber-400">
                Ingénierie logicielle
                </p>
                <br />
                <p className="text-center m-4">
                    Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”.
                    A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers
                    ou des entreprises pour leurs besoins numériques
                </p>
            </div>
        </div>
    </div>
}

export default Domaines