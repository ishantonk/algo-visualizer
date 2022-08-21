import React from "react";

const ComplexityTable = () => {
    return (
        <div className="">
            <table className="text-sm text-gray-700 dark:text-gray-400 text-center rounded-t-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-4 rounded-l-lg">Algorithm</th>
                        <th scope="col" colSpan={2} className="py-3 px-4">Time Complexity</th>
                        <th scope="col" className="py-3 px-4 rounded-r-lg">Space Complexity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Case: </td>
                        <td className="py-3 px-4 bg-green-100 text-green-800">Best</td>
                        <td className="py-3 px-4 bg-red-100 text-red-800">Worst</td>
                        <td className="py-3 px-4"> </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">Heap Sort</td>
                        <td>N&times;Log N</td>
                        <td>N&times;Log N</td>
                        <td>1</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">Merge Sort</td>
                        <td>N&times;Log N</td>
                        <td>N&times;Log N</td>
                        <td>N</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">Quick Sort</td>
                        <td>N&times;Log N</td>
                        <td>
                            N<sup>2</sup>
                        </td>
                        <td>Log N</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">Bubble Sort</td>
                        <td>N</td>
                        <td>
                            N<sup>2</sup>
                        </td>
                        <td>1</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">Insertion Sort</td>
                        <td>N</td>
                        <td>
                            N<sup>2</sup>
                        </td>
                        <td>1</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">Selection Sort</td>
                        <td>
                            N<sup>2</sup>
                        </td>
                        <td>
                            N<sup>2</sup>
                        </td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ComplexityTable;