import { useState } from 'react';
import { getMaxValue } from '../services/carrotsLimit/carrotsLimit';

function CarrotsLimit() {
    const [bagLimit, setBagLimit] = useState(15);
    const [carrotTypes, setCarrotTypes] = useState([{ kg: 3, price: 8 }, { kg: 2, price: 3 }, { kg: 4, price: 9 }, { kg: 1, price: 6 },]);
    const [maxValue, setMaxValue] = useState(0);

    const handleCheckValue = (e) => {
        e.preventDefault();
        setMaxValue(getMaxValue(carrotTypes, parseInt(bagLimit)));
    }

    return (
        <>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">7 - Carrots Limit</h3>
            <div className="mb-4">
                <form
                    onSubmit={(e) => handleCheckValue(e)}
                    className="flex-row space-y-4 justify-start items-end gap-4">
                    <div className='w-full'>
                        <label htmlFor="bagLimit" className="block text-sm font-medium text-gray-700">
                            Enter a bag limit
                        </label>
                        <input
                            type="text"
                            id="bagLimit"
                            className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 h-10"
                            value={bagLimit}
                            onChange={(e) => {
                                setBagLimit(e.target.value);
                            }}
                        />
                    </div>
                    <div className='w-full space-y-2'>
                        <p className="block text-sm font-medium text-gray-700">Carrot Types</p>
                        {carrotTypes.map((carrot, index) => (
                            <div key={index} className="flex gap-2 items-end">
                                <div>
                                    <label htmlFor={`kg-${index}`} className="block text-xs font-medium text-gray-500">
                                        KG
                                    </label>
                                    <input
                                        type="number"
                                        id={`kg-${index}`}
                                        className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 h-10"
                                        value={carrot.kg}
                                        onChange={(e) => {
                                            const newCarrotTypes = JSON.parse(carrotTypes);
                                            newCarrotTypes[index].kg = parseInt(e.target.value);
                                            setCarrotTypes(JSON.stringify(newCarrotTypes));
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`price-${index}`} className="block text-xs font-medium text-gray-500">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id={`price-${index}`}
                                        className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 h-10"
                                        value={carrot.price}
                                        onChange={(e) => {
                                            const newCarrotTypes = JSON.parse(carrotTypes);
                                            newCarrotTypes[index].price = parseInt(e.target.value);
                                            setCarrotTypes(JSON.stringify(newCarrotTypes));
                                        }}
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const newCarrotTypes = carrotTypes.filter((_, i) => i !== index);
                                        setCarrotTypes(newCarrotTypes);
                                    }}
                                    className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 h-10"
                                >
                                    Remove
                                </button>

                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                const newCarrotTypes = JSON.parse(carrotTypes);
                                setCarrotTypes(JSON.stringify([...newCarrotTypes, { kg: 0, price: 0 }]));
                            }}
                            className="mt-2 w-full cursor-pointer h-10 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Add New Carrot Type
                        </button>

                    </div>

                    <div className='min-w-40'>
                        <button
                            type="submit"
                            className="w-full cursor-pointer h-10 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Check max value in bag
                        </button>
                    </div>
                </form>
            </div>
            <div className="text-sm space-y-1 mt-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Result</h2>

                {maxValue ? (
                    <>
                        <p><span className="text-green-600 font-semibold">Max value is:</span> <span className="text-purple-700 font-bold">{maxValue}</span></p>
                    </>
                ) : (
                    <p className="text-gray-500"></p>
                )}

            </div>
        </>
    );
}

export default CarrotsLimit;