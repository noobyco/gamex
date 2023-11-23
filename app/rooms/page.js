import Button1 from "@/components/button1";
import { PrismaClient } from "@prisma/client";
const Page = async  () => {
    const prisma = new PrismaClient()

    const allGameData = await prisma.gameData.findMany()
    allGameData.reverse()
    return (
        <div className="bg-transparent w-full flex flex-col pt-[10rem] items-center">
            <div className="w-[100%] flex flex-col justify-center items-center mb-[8em]">

                {
                    allGameData.length === 0?  <div className="text-4xl text-white uppercase"> no rooms</div> :allGameData.map( (gameData) => {
                        
                        return(
                            
                            <div key={gameData.id} className="w-[100%] sm:w-[60%] flex justify-around border-sky-500 border-solid border-2 rounded-2xl m-2">
                            <div className="text-white p-4">
                                <h1 className="text-xl font-extrabold"> <span className="text-sky-500 uppercase">Room name : </span>{gameData.name}</h1>
                                <p className="text-md font-extrabold"> <span className="text-sky-500 uppercase">Player-1 ID : </span>{gameData.pId1}</p>
                                <p className="text-md font-extrabold"><span className="text-sky-500 font-extrabold uppercase ">Player-2 ID : </span>{gameData.pId2}</p>
                                <p className="text-md font-extrabold uppercase"><span className="text-sky-500 font-extrabold uppercase">Game mode : </span>{gameData.mode}</p>
                            </div>
                            <div className="flex justify-center items-center p-4">
                                < Button1 />
                            </div>
                        </div>
                        )
                    })
                    
                    
                }

            </div>
        </div>
    );
}

export default Page;
