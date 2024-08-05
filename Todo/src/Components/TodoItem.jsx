

function TodoItem({task,date}) {
    // const task='Study';
    // const date='4/12/2024';
    return (
        <div className="flex space-x-2 align-middle text-center mx-auto px-5 my-5">
            <div className="w-[40%]">
                <p className="">{task}</p>
            </div>
            <div className="w-[40%]">
                <p className="">{date}</p>
            </div>
            <div className="w-[20%]">
                <button className="px-7 py-2 bg-red-600 text-white rounded-lg">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;