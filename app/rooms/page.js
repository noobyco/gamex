import rooms from "@/data/createRoomData";
import Button1 from "@/components/button1";

const Page = () => {
    
    return (
        <div className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] w-full h-screen flex flex-col pt-[10rem] items-center">
            {
                rooms.length == 0?  <div className="text-4xl text-white uppercase"> no rooms</div> :rooms.map( (room) => {
                    return(
                    
                        <div key={room.name} className="w-[40%] flex justify-around border-sky-500 border-solid border-2 rounded-2xl pb-2">
                        <div className="text-white p-4">
                            <h1 className="text-xl font-extrabold"> <span className="text-sky-500 uppercase">Room name : </span>{room.name}</h1>
                            <p className="text-md font-extrabold"> <span className="text-sky-500 uppercase">Player-1 ID : </span>{room.pId1}</p>
                            <p className="text-md font-extrabold"><span className="text-sky-500 font-extrabold uppercase ">Player-2 ID : </span>{room.pId2}</p>
                            <p className="text-md font-extrabold uppercase"><span className="text-sky-500 font-extrabold uppercase">Game mode : </span>{room.mode}</p>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            < Button1 />
                        </div>
                    </div>
                    )
                })
                    
                
            }

        </div>
    );
}

export default Page;
