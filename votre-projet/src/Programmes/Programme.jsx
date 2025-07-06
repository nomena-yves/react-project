function Programme() {
    return <div className="flex row-auto justify-around p-20">
        <div>
            <img className="size-100" src="/image/students.jpg" alt="" />
        </div>
        <div className="w-150">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-950 md:text-3xl lg:text-4xl dark:text-white text-center">Le programme pédagogique</h1>
            <br />
            <p className="text-blue-950">Suivant le système LMD, jusqu’au Master, notre formation repose
                sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un
                diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
            </p>
            <br />
            <br />
             <button className="border-blue-950 border-2 p-3">Notre programme</button>
        </div>
    </div>
}

export default Programme