function PartieAccueil() {
    return <div className="bg-blue-300">
        <br />
        <div className="p-30">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center ">L'équipe pédagogique</h1>
            <p className="text-center text-white">
                Notre équipe pédagogique se compose d’experts nationaux et internationaux
                de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un
                ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de
                l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
            </p>
        </div>
        <br />
        <br />
        <div className=" flex row-auto justify-around">
            <div className="w-80 rounded-1xl bg-white rounded-xl">
                <br />
                <img className="mx-auto rounded-full size-50" src="/image/jean-Aime.jpg" alt="" />
                <br />
                <h3 className="text-center">Jean Aimé Maxa</h3>
                <p className="text-center">Responsable technique cybersécurité chez CES France Continental (Toulouse &#8211; France)</p>
            </div>
            <div className="w-80 rounded-1xl bg-white rounded-xl">
                <br />
                <img className="mx-auto rounded-full size-50" src="/image/ryan-hei.webp" alt="" />
                <br />
                <h3 className="text-center">Ryan ANDRIAMAHERY</h3>
                <p className="text-center">Développeur back end | Cofondateur et Directeur des opérations de HEI</p>
                <br />
                <br />
            </div>
            <div className="w-80 rounded-1xl bg-white rounded-xl">
                <br />
                <img className="mx-auto rounded-full size-50" src="/image/pedagogie-hei.jpg" alt="" />
                <br />
                <h3 className="text-center">Ryan ANDRIAMAHERY</h3>
                <p className="text-center">Développeur back end | Cofondateur et Directeur des opérations de HEI</p>
                <br />
                <br />
            </div>
        </div>
        <br />
        <br />
    </div>
}

export default PartieAccueil