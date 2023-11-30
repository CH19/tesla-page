export default function Pruebastail() {
    return (<>
    
    
    <br />
    <br />
    <button className="bg-sky-500 hover:bg-red-500 p-3 rounded-xl m-4 active:bg-violet-700">Hola</button>
    <div>
        <p className="odd:bg-red-500 even:bg-violet-600">Hola mundo</p>
        <p className="odd:bg-red-500 even:bg-violet-600">Hola mundo</p>
        <p className="odd:bg-red-500 even:bg-violet-600">Hola mundo</p>
        <p className="odd:bg-red-500 even:bg-violet-600">Hola mundo</p>
        <p className="odd:bg-red-500 even:bg-violet-600">Hola mundo</p>
        <p className="odd:bg-red-500 even:bg-violet-600">Hola mundo</p>
        <p className="odd:bg-red-500 even:bg-violet-600">Hola mundo</p>
        <p className="odd:bg-red-500 even:bg-violet-600">Hola mundo</p>
    </div>
    <div className="w-100 my-10 p-5">
    <form action="" className="flex flex-col w-25 justify-center aling-center gap-2">
      <label htmlFor="name">passWord</label>
      <input type="text" id="name" placeholder="Escribe tu nombre" className="border-3 border-blue-400 border-solid shadow-xl" />
      <label htmlFor="password" className="decoration-blue-200">passWord</label>
      <input type="text" id="password" className="shadow-xl" placeholder="Escribe tu password" />
      <input type="submit" value={'Enviar'} className="bg-blue-500 cursor-pointer text-white rounded-lg  hover:bg-blue-700" />
      
    </form>
    </div>
      <h3 className="font-bold">Ingredientes</h3>
    <ul role="list" className="mx-8 marker:text-sky-400 list-disc ">
      <li className="text-gray-500">vegetal</li>
      <li className="text-gray-500">vegetal</li>
      <li className="text-gray-500">vegetal</li>
    </ul>

    </>)
}