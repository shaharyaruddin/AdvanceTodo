import React, { useState } from "react";

function TodoApp() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue.trim(""));
  };

  const handleEdit = (index) => {};

  const deleteAll = () => {
    setData([]);
  };

  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, id) => id !== index));
  };

  const handleAdd = () => {
    if (input === "") {
      setData([...data]);
    } else {
      setData([...data, input]);
      setInput("");
    }
  };

  return (
    <>
      <div className=" py-10">
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Add Something..."
            className="border-4 border-black p-4"
            value={input}
            onChange={handleInput}
          />
          <button
            className="mx-10 p-3 rounded-md bg-black text-white"
            onClick={handleAdd}
          >
            Add{" "}
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-600 text-white font-bold border p-2 rounded-md"
          onClick={deleteAll}
        >
          Delete All
        </button>
      </div>
      {data
        .sort()
        .filter((item) => {
          return item.toLowerCase().includes(input.toLowerCase());
        })
        .map((item, index) => {
          return (
            <>
              <div key={index} className="flex justify-center font-serif">
                <div className="flex justify-between text-xl font-bold  border-4 p-4 bg-black text-white border-red-600 mt-5 w-[30%]">
                  {item}
                  <div className="">
                    <button
                      className="mx-5 bg-red-600 text-white font-bold border text-base p-1 rounded-md"
                      onClick={() => handleDelete(index)}
                    >
                      Delete{" "}
                    </button>

                    <button
                      className="bg-green-600 text-white font-bold border text-base p-1 rounded-md"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}

export default TodoApp;
