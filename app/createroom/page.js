import { initiateIgnition } from "@/mqtt/ignition"
import { redirect } from "next/navigation"
import rooms from "data/createRoomData"

const Page = () => {


    async function submit (formData){
        'use server'

        const data = {
            name : await formData.get('roomName'),
            pId1 : await formData.get('pId1'),
            pId2 : await formData.get('pId2'),
            mode : await formData.get('mode')
        }
        rooms.push(data)
        console.log(rooms)

        initiateIgnition(data.name, data.pId1, data.mode)
        initiateIgnition(data.name, data.pId2, data.mode)

        redirect('/rooms')
        
    }

    return (
        <form className='bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] w-full h-screen flex flex-col justify-center items-center' action={submit}>


            <h1 className='text-white text-[3rem] pt-[5rem]'>Create Room</h1>
            
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
