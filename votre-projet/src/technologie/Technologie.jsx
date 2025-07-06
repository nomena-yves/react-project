function Technologie() {
    return <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-950 md:text-3xl lg:text-4xl dark:text-white text-center">Les technos et langages utilisées</h1>
        <br />
        <p className="text-center">Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript.
            Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une
            robustesse appréciées par les développeurs à travers le monde.
        </p>
        <br />
        <div className="flex row-auto justify-around m-20">
            <img className="size-29" src="/image/langageJv.png" alt="" />
            <img className="size-29" src="/image/langagePy.png" alt="" />
            <img className="size-29" src="/image/langageJs.png" alt="" />
            <img className="size-29" src="/image/langageC.png" alt="" />
            <img className="size-29" src="/image/langageTs.png" alt="" />
        </div>
        <div className="flex row-auto justify-around m-20">
            <img className="w-40" src="/image/docker.png" alt="" />
            <img className="w-20" src="/image/next.png" alt="" />
            <img className="w-20" src="/image/aws.png" alt="" />
            <img className="w-40" src="/image/serverless.png" alt="" />
            <img className="w-30" src="/image/react.png" alt="" />
            <img className="w-50" src="/image/openapi.png" alt="" />
        </div>
    </div>
}

export default Technologie