
import DeleteButton from "@/components/deleteButton";
import CreateRoomButton from "@/components/createRoomButton";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const Page = async  () => {
    const prisma = new PrismaClient()

    const allGameData = await prisma.gameData.findMany()
    allGameData.reverse()

    // server action for delete button
    async function deleteList(id){
        "use server"
        const prisma = new PrismaClient()
        const deleteGameData = await prisma.gameData.delete({
            where:{
                id: id
            }
        })
        redirect ('/rooms')
    }

    // server action to refresh the /rooms page after deletion of a list
    const gotoCreateRoom = async () => {
        "use server"
        await redirect('/createroom')
    }

    return (
        <div className="bg-transparent w-full min-h-screen flex flex-col pt-6 items-center">
            <div className="w-[100%] h-SCREEN flex flex-col justify-center items-center mb-[8em]">

                {
                    allGameData.length === 0?  

                        <div className="h-fit w-[100%]">
                            <form action={gotoCreateRoom}>
                                <h1 className="text-center m-3 text-4xl text-white uppercase">No rooms available</h1>
                                <CreateRoomButton link="/createroom" title="Create room"/>
                            </form>
                        </div> 
                        
                        :allGameData.map( (gameData) => {
                        const bindDeleteList = deleteList.bind(this, gameData.id)
                        
                        return(
                            
                            <div key={gameData.id} className="w-[100%] sm:w-[60%] flex justify-around border-sky-500 border-solid border-2 rounded-2xl m-2">
                            <div className="text-white p-4">
                                <h1 className="text-xl font-extrabold"> <span className="text-sky-500 uppercase">Room name : </span>{gameData.name}</h1>
                                <p className="text-md font-extrabold"> <span className="text-sky-500 uppercase">Player-1 ID : </span>{gameData.pId1}</p>
                                <p className="text-md font-extrabold"><span className="text-sky-500 font-extrabold uppercase ">Player-2 ID : </span>{gameData.pId2}</p>
                                <p className="text-md font-extrabold uppercase"><span className="text-sky-500 font-extrabold uppercase">Game mode : </span>{gameData.mode}</p>
                            </div>
                                
                            <div className="flex flex-col justify-center items-center p-4">
                                

                                <form action={bindDeleteList}>
                                
                                    < DeleteButton title="Delete"/>

                                </form>

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
