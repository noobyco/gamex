
const DeleteButton = (props) => {
    return (
        <div>
            <button type="submit" className="bg-sky-500 w-[8rem] text-black font-bold py-2 px-4 m-2 rounded" > {props.title} </button>
        </div>
    );
}

export default DeleteButton;
