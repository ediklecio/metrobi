import { useState } from "react";


import { findDuplicates } from "../services/findDuplicatedItems/findDuplicates";

const FindDuplicatedItems = () => {
    const [initialArray, setInitialArray] = useState("1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 8, 'hello', 'world', 'hello'");
    const [duplicatedItems, setDuplicatedItems] = useState<(string | number)[]>([]);

    const handleFindDuplicates = (event) => {
        event.preventDefault();
        const inputArray = Array.from(initialArray.split(','))
        const duplicates = findDuplicates(inputArray);
        setDuplicatedItems(duplicates);
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-2 text-gray-800">1 - Find Duplicates Service</h1>
            <div className="mb-4">
                <form
                    onSubmit={(e) => handleFindDuplicates(e)}
                    className="flex justify-start items-end gap-4">
                    <div className='w-full'>
                        <label htmlFor="inputArray" className="block text-sm font-medium text-gray-700">
                            Insert items (numbers or strings) separated by commas:
                        </label>
                        <input
                            type="text"
                            id="inputArray"
                            className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 h-10"
                            value={initialArray}
                            onChange={(e) => {
                                setInitialArray(e.target.value);
                            }}
                        />
                    </div>
                    <div className='min-w-40'>
                        <button
                            type="submit"
                            className="w-full cursor-pointer h-10 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Find Duplicates
                        </button>
                    </div>
                </form>
            </div>
            <div className="text-sm space-y-1 mt-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Result</h2>

                {duplicatedItems.length > 0 ? (
                    <>
                        <p className="text-green-600">Duplicates found!</p>
                        <p><span className="font-semibold">Found Duplicates:</span> <span className="text-purple-700 font-bold">{JSON.stringify(duplicatedItems)}</span></p>
                    </>
                ) : (
                    <p className="text-red-600">No duplicates found.</p>
                )}

            </div>
        </>
    );
}

export default FindDuplicatedItems;