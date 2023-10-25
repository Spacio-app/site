export default function page () {
    // logica de funcionamento
    // 
    return (
    <section className="">
        <div className="border border-gray-300 lg:mx-[30%] mx-[10%] h-fit justify-center flex-row md:flex mt-6">
            <div className="md:w-[100%]">
                <div className="flex border-b border-gray-300 p-3.5">
                    <img
                    src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                    alt="FOTO"
                    className='mr-3 border rounded-full w-[50px] h-fit' />
                    <div>
                        <span className="font-bold">Username</span>
                        <p className="text-gray-400 text-sm"><span>Publicado hace 6 horas</span></p>
                    </div>
                </div>
                <div className="px-6 py-3 justify-center text-justify border-b border-grey-300">
                    <div className="font-semibold">Curso de NextJS</div>
                    <div className="mt-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci eligendi corrupti dicta dolorum aliquid, natus deleniti temporibus, ut obcaecati tenetur, perferendis totam est velit ipsa quae dignissimos eius voluptatibus.</p>
                    </div>
                    <div className="flex justify-center mt-3">
                        {/* inser an image 8rem */}
                        <img 
                            src="" 
                            alt=""
                            className="w-[8rem] h-[8rem] rounded-md border border-gray-300"
                            />
                    </div>
                </div>
                <div className="px-6 py-3 justify-center text-justify">
                    <label 
                        htmlFor="miInput" 
                        className="text-lg block">
                        Comentar
                    </label>
                    <input 
                        type="text" 
                        id="miInput" 
                        placeholder="Escribir comentario" 
                        className="p-2 border border-gray-300 rounded-md" 
                    />
                </div>
            </div>
        </div>
        <div className="border border-gray-300 lg:mx-[30%] mx-[10%] h-fit justify-center flex-row md:flex mt-6">
            <div className="md:w-[100%]">
                <div className="flex border-b border-gray-300 p-3.5">
                    <img
                    src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                    alt="FOTO"
                    className='mr-3 border rounded-full w-[50px] h-fit' />
                    <div>
                        <span className="font-bold">Username 2</span>
                        <p className="text-gray-400 text-sm"><span>Publicado hace 6 horas</span></p>
                    </div>
                </div>
                <div className="px-6 py-3 justify-center text-justify border-b border-grey-300">
                    <div className="font-semibold">Busco la solución definitiva al hambre</div>
                    <div className="mt-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci eligendi corrupti dicta dolorum aliquid, natus deleniti temporibus, ut obcaecati tenetur, perferendis totam est velit ipsa quae dignissimos eius voluptatibus.</p>
                    </div>
                </div>
                <div className="px-6 py-3 justify-center text-justify">
                    <label 
                        htmlFor="miInput" 
                        className="text-lg block">
                        Comentar
                    </label>
                    <input 
                        type="text" 
                        id="miInput" 
                        placeholder="Escribir comentario" 
                        className="p-2 border border-gray-300 rounded-md" 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
