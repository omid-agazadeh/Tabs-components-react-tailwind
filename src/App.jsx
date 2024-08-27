import { useState } from 'react';

function App() {
   const [tab, setTab] = useState(1);
   return (
      <>
         <div className="bg-orange-500 flex flex-col justify-between text-white h-96 p-10 pb-4">
            <h1 className="text-5xl font-serif">Tabs Components with React </h1>
            <div className=" text-2xl flex">
               <span
                  onClick={() => setTab(1)}
                  className={`${tab === 1 ? 'border-b-4  text-lime-500 hover:text-lime-500 border-green-500 transition-all duration-300  ' : ''} cursor-pointer hover:text-black  px-6 py-2`}
               >
                  TAB 1
               </span>
               <span
                  onClick={() => setTab(2)}
                  className={`${tab === 2 ? 'border-b-4  text-lime-500 hover:text-lime-500 border-green-500 transition-all duration-300  ' : ''} cursor-pointer hover:text-black  px-6 py-2`}
               >
                  TAB 2
               </span>
               <span
                  onClick={() => setTab(3)}
                  className={`${tab === 3 ? 'border-b-4  text-lime-500 border-green-500 hover:text-lime-500   transition-all duration-300  ' : ''} cursor-pointer  px-6 py-2  hover:text-black`}
               >
                  TAB 3
               </span>
               <span
                  onClick={() => setTab(4)}
                  className={`${tab === 4 ? 'border-b-4  text-lime-500 border-green-500 hover:text-lime-500 transition-all duration-300  ' : ''} cursor-pointer hover:text-black  px-6 py-2`}
               >
                  TAB 4
               </span>
            </div>
         </div>

         <div className={`${tab === 1 ? 'flex' : 'hidden'} bg-lime-800 overflow-auto h-96 text-white  p-8 flex flex-col gap-y-5`}>
            <h2 className="text-4xl font-semibold">content 1</h2>
            <p className="text-2xl text-gray-300">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates dolores reprehenderit adipisci eos incidunt dolorum. Cumque animi suscipit minima dignissimos eligendi vitae,
               earum modi? Odit porro iure accusantium officiis?
            </p>
         </div>
         <div className={`${tab === 2 ? 'flex' : 'hidden'} bg-red-800 overflow-auto h-96 text-white  p-8 flex flex-col gap-y-5`}>
            <h2 className="text-4xl font-semibold">content 2</h2>
            <p className="text-2xl text-gray-300">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima, ea exercitationem nam, esse illum accusamus, alias fuga itaque dignissimos consequatur reprehenderit voluptatem
               ullam similique nostrum saepe corrupti in necessitatibus!
            </p>
         </div>
         <div className={`${tab === 3 ? 'flex' : 'hidden'} bg-blue-800 overflow-auto h-96 text-white  p-8 flex flex-col gap-y-5`}>
            <h2 className="text-4xl font-semibold">content 3</h2>
            <p className="text-2xl text-gray-300">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora quia corporis earum reiciendis
               at, officiis quasi. Consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora
               quia corporis earum reiciendis at, officiis quasi. Consequuntur?
            </p>
         </div>
         <div className={`${tab === 4 ? 'flex' : 'hidden'} bg-purple-800 overflow-auto h-96 text-white  p-8 flex flex-col gap-y-5`}>
            <h2 className="text-4xl font-semibold">content 4</h2>
            <p className="text-2xl text-gray-300">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora quia corporis earum reiciendis
               at, officiis quasi. Consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora
               quia corporis earum reiciendis at, officiis quasi. Consequuntur?
            </p>
         </div>
      </>
   );
}

export default App;
