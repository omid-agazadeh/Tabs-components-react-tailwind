import { useState } from 'react';

function App() {
   const [tab, setTab] = useState(1);
   return (
      <>
         <div className="bg-lime-400 flex flex-col justify-between text-white h-56 p-10 pb-4">
            <h1 className="text-5xl">Tabs Components with React </h1>
            <div className=" text-2xl flex">
               <span onClick={() => setTab(1)} className={`${tab === 1 ? 'text-red-500 border-b-4 border-red-500 transition-all duration-500  ' : ''} cursor-pointer px-6 py-2`}>
                  TAB 1
               </span>
               <span onClick={() => setTab(2)} className={`${tab === 2 ? 'text-red-500 border-b-4 border-red-500 transition-all duration-500  ' : ''} cursor-pointer px-6 py-2`}>
                  TAB 2
               </span>
               <span onClick={() => setTab(3)} className={`${tab === 3 ? 'text-red-500 border-b-4 border-red-500 transition-all duration-500  ' : ''} cursor-pointer px-6 py-2`}>
                  TAB 3
               </span>
               <span onClick={() => setTab(4)} className={`${tab === 4 ? 'text-red-500 border-b-4 border-red-500 transition-all duration-500  ' : ''} cursor-pointer px-6 py-2`}>
                  TAB 4
               </span>
            </div>
         </div>
         <div className={`${tab === 1 ? 'flex' : 'hidden'} bg-lime-800 text-white  p-8 flex flex-col gap-y-5`}>
            <h2 className="text-4xl">content 1</h2>
            <p className="text-2xl">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora quia corporis earum reiciendis
               at, officiis quasi. Consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora
               quia corporis earum reiciendis at, officiis quasi. Consequuntur?
            </p>
         </div>
         <div className={`${tab === 2 ? 'flex' : 'hidden'} bg-red-800 text-white  p-8 flex flex-col gap-y-5`}>
            <h2 className="text-4xl">content 2</h2>
            <p className="text-2xl">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima, ea exercitationem nam, esse illum accusamus, alias fuga itaque dignissimos consequatur reprehenderit voluptatem
               ullam similique nostrum saepe corrupti in necessitatibus!
            </p>
         </div>
         <div className={`${tab === 3 ? 'flex' : 'hidden'} bg-blue-800 text-white  p-8 flex flex-col gap-y-5`}>
            <h2 className="text-4xl">content 3</h2>
            <p className="text-2xl">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora quia corporis earum reiciendis
               at, officiis quasi. Consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora
               quia corporis earum reiciendis at, officiis quasi. Consequuntur?
            </p>
         </div>
         <div className={`${tab === 4 ? 'flex' : 'hidden'} bg-purple-800 text-white  p-8 flex flex-col gap-y-5`}>
            <h2 className="text-4xl">content 4</h2>
            <p className="text-2xl">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora quia corporis earum reiciendis
               at, officiis quasi. Consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea vero cupiditate ullam eligendi ad, totam sint quae velit magnam beatae tempora
               quia corporis earum reiciendis at, officiis quasi. Consequuntur?
            </p>
         </div>
      </>
   );
}

export default App;
