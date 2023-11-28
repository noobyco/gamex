const StartButton = (props) => {
    return (
        <div>
            <button className="bg-white w-[8rem] text-black font-bold py-2 px-4 m-2 rounded">
                {props.title}
            </button>
        </div>
    );
}

export default StartButton;
