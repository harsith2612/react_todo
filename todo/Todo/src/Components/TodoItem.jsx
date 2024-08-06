

function TodoItem({ taskList }) {
    // const task='Study';
    // const date='4/12/2024';
    return (
        <>
            {
                taskList.map((tasks) =>
                    <div className="flex space-x-2 align-middle text-center mx-auto px-5 my-5">
                        <div className="w-[40%]">
                            <p className="">{tasks['task']}</p>
                        </div>
                        <div className="w-[40%]">
                            <p className="">{tasks['date']}</p>
                        </div>
                        <div className="w-[20%]">
                            <button className="px-7 py-2 bg-red-600 text-white rounded-lg">
                                Delete
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default TodoItem;