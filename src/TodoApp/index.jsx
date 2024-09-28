import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";

function TodoApp() {
  const getLocalItems = () => {
    const getData = localStorage.getItem("items");

    if (getData) {
      return JSON.parse(getData);
    } else {
      return [];
    }
  };

  const [input, setInput] = useState("");
  const [data, setData] = useState(getLocalItems());
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
     localStorage.setItem("items", JSON.stringify(data));
  }, [data]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue.trim(""));
  };

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
      data.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
      setInput("");
    }
  };

  const handleEdit = (index) => {
    // for Example
    // let arr =[1,2,3,4,5]
    // console.log(arr[0])

    setShow(true);
    setInput(data[index]);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = input;
      setData(updatedData);
      setShow(false);
      setInput("");
    }
  };

  return (
    <>
      <div className="py-10">
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Add Something..."
            className="border-4 rounded-md border-black p-4"
            value={input}
            onChange={handleInput}
          />
          {show ? (
            <button
              className="mx-10 p-3 rounded-md bg-black text-white"
              onClick={handleUpdate}
            >
              Update
            </button>
          ) : (
            <button
              className="mx-10 p-3 rounded-md bg-black text-white"
              onClick={handleAdd}
            >
              Add
            </button>
          )}
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
{/* <Modal/> */}

      {data
        .sort()

        .map((item, index) => {
          return (
            <>
              <div key={index} className="flex justify-center font-serif">
                <div className="flex justify-between text-xl font-bold  border-4 p-4   text-black border-red-600 mt-5 w-full md:w-[30%] mx-4 md:mx-0 rounded-md">
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
