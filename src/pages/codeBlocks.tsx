import { useState, useEffect } from "react";
import { areBracketsBalanced } from "../services/codeBlocks/CodeBlocks";

const CodeBlocks = () => {
    const [code, setCode] = useState("{(])}");
    const [isBracketsBalanced, setIsBracketsBalanced] = useState(false);

    useEffect(() => {
        setIsBracketsBalanced(areBracketsBalanced(code));
    }, [code]);

    return (
        <>
            <h1 className="text-2xl font-bold mb-2 text-gray-800">04 - Bracket Validator</h1>
            <p className="text-sm text-gray-600 mb-4">
                4: Write an efficient method that tells us whether or not an input string brackets {JSON.stringify("({, }, (, ), [, ]) opened and closed properly. Example: {[]} => true, {(])} => false, {([)]} => false")}
            </p>
            <div className="my-8">
                <div className='w-full'>
                    <label htmlFor="inputArray" className="block text-sm font-medium text-gray-700">
                        Insert a string to check brackets balance:
                    </label>
                    <input
                        type="text"
                        id="inputArray"
                        className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 h-10"
                        value={code}
                        onChange={(e) => {
                            setCode(e.target.value);
                        }}
                        placeholder="e.g., {[()]} or {(])}"
                    />
                </div>
            </div>
            <div className="text-sm space-y-1 mt-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Result</h2>

                {isBracketsBalanced ? (
                    <p className="text-green-600 font-bold">Brackets are balanced!</p>
                ) : (
                    <p className="text-red-600 font-bold">Brackets are not balanced.</p>
                )}

            </div>
        </>
    );
}

export default CodeBlocks;