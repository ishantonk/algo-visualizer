import React from 'react';

const PathfinderComplexityTable = () => {
    return (
        <div className='flex'>
            <table className="text-sm text-gray-700 dark:text-gray-400 text-center">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-4 rounded-l-lg">Algorithm</th>
                        <th scope="col" className="py-3 px-4">Time</th>
                        <th scope="col" className="py-3 px-4 rounded-r-lg">Space</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">Dijkstra's</td>
                        <td>O(E + V&times;LogV)</td>
                        <td>O(V)</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">BFS</td>
                        <td>O(V + E) = O(b<sup>d</sup>)</td>
                        <td>O(V) = O(b<sup>d</sup>)</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">DFS</td>
                        <td>O(V + E) = O(b<sup>d</sup>)</td>
                        <td>O(V) = O(b<sup>d</sup>)</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">A* Search</td>
                        <td>O(E)</td>
                        <td>O(V)</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="text-amber-800 py-3 px-4">Bi-Directional Search</td>
                        <td>O(b<sup>d/2</sup>)</td>
                        <td>O(b<sup>d/2</sup>)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PathfinderComplexityTable;