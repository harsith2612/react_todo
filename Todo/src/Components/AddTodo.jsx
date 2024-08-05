function AddTodo() {
    return (
        <div className="flex space-x-2 align-middle text-center mx-auto px-5 my-5">
            <div className="w-[40%]">
                <input type="text" placeholder="task" className="w-full border-2 p-2 outline-none" />
            </div>
            <div className="w-[40%]">
                <input type="date" className="border-2 p-2 outline-none w-full" />
            </div>
            <div className="w-[20%]">
                <button className="px-10 py-2 bg-black text-white rounded-lg">
                    Add
                </button>
            </div>
        </div>
    );
}


export default AddTodo;