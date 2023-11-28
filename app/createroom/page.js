import { initiateIgnition } from "@/mqtt/ignition"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"


const Page = () => {


    async function submit (formData){
        'use server'
        const prisma = new PrismaClient()

        async function main(){
            const newGameData = await prisma.gameData.create({ 
                data:{
                    name : await formData.get('roomName'),
                    pId1 : await formData.get('pId1'),
                    pId2 : await formData.get('pId2'),
                    mode : await formData.get('mode')
                }
            })

            

            await initiateIgnition(newGameData.name, newGameData.pId1, newGameData.mode)
            await initiateIgnition(newGameData.name, newGameData.pId2, newGameData.mode)

            
        }
        
        main()
            .then(async () => {
                await prisma.$disconnect()
                
            })
            .catch(async e => {
                console.error(e)
                await prisma.$disconnect()
                await process.exit(1)
        })
        await redirect('/rooms')
    }


    return (
        <form className=' w-full h-full flex flex-col justify-start mt-10 mb-10 items-center' action={submit}>


            <h1 className='text-white text-[3rem]'>Create Room</h1>
            
            <div className='flex flex-col justify-center items-center w-[80%]'>

                <input type="text" placeholder="Room name" name="roomName" className='p-4 sm:w-[50%] w-[100%] rounded-md m-2' required/>

                <div className='flex w-full justify-center items-center cursor-pointer'>
                    <input type='text' placeholder='Player-1 Id' name="pId1" className='m-2 sm:w-[25%] w-[45%] p-4 rounded-md' required/>
                    <input type='text' placeholder='Player-2 Id' name="pId2" className='m-2 sm:w-[25%] w-[45%] p-4 rounded-md' required/>
                    
                </div>
            </div>
            <select className='m-2 p-4 rounded-md sm:w-[25%] w-[50%]' name="mode" required>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <input type="submit" value="Create" className='text-black p-4 sm:w-[20%] w-[30%] cursor-pointer rounded-md m-2 bg-white' />

        </form>
    );
}

export default Page;
