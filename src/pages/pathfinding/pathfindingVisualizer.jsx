import React from 'react';
import { Button, Select, Option } from '@material-tailwind/react';
import Node from '../../components/node';
import PathfinderComplexityTable from '../../components/pathfinderComplexityTable';
import { breadthFirstSearch, depthFirstSearch, dijkstra, aStar } from '../../algorithms/pathfindingAlgorithms/pathfindingAlgorithms';

const PathfindingVisualizer = () => {
    const [grid, setGrid] = React.useState([]);
    const [gridSize, setGridSize] = React.useState({ row: 20, column: 30 });
    const [editBoardBtn, setEditBoardBtn] = React.useState('start');
    const [startNode, setStartNode] = React.useState({ row: 2, column: 4 });
    const [endNode, setEndNode] = React.useState({ row: 17, column: 27 });
    const [algorithm, setAlgorithm] = React.useState(null);
    let speed = 30;

    // Generate a grid of nodes
    const generateGrid = (rows, cols) => {
        const grid = [];
        for (let row = 0; row < rows; row++) {
            const currentRow = [];
            for (let col = 0; col < cols; col++) {
                currentRow.push(createNode(row, col));
            }
            grid.push(currentRow);
        }
        return grid;
    };

    // Create a node
    const createNode = (row, col) => {
        return {
            row,
            col,
            isStart: row === startNode.row && col === startNode.column,
            isEnd: row === endNode.row && col === endNode.column,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            isShortestPath: false,
            previousNode: null
        };
    };

    // Change the start node on mouse click on the grid
    const changeStartNode = (row, col) => {
        const newGrid = grid.slice();
        const oldNode = newGrid[startNode.row][startNode.column];
        oldNode.isStart = false;

        const newNode = newGrid[row][col];
        newNode.isStart = true;
        newNode.isEnd = false;
        setStartNode({ row: row, column: col });
        setGrid(newGrid);
    };

    // Change the end node on mouse click on the grid
    const changeEndNode = (row, col) => {
        const newGrid = grid.slice();
        const oldNode = newGrid[endNode.row][endNode.column];
        oldNode.isEnd = false;

        const newNode = newGrid[row][col];
        newNode.isStart = false;
        newNode.isEnd = true;
        setEndNode({ row: row, column: col });
        setGrid(newGrid);
    };

    // Change the wall node on mouse click on the grid
    const changeWallNode = (row, col) => {
        const newGrid = grid.slice();
        const newNode = newGrid[row][col];
        newNode.isWall = !newNode.isWall;
        setGrid(newGrid);
    };

    // Handle node click event
    const handleNodeClick = (row, col, nodeType) => {
        if (nodeType === 'start') {
            changeStartNode(row, col);
        } else if (nodeType === 'end') {
            changeEndNode(row, col);
        } else if (nodeType === 'wall') {
            changeWallNode(row, col);
        }
    };

    // Draw the grid of nodes
    const drawGrid = (grid) => {
        return <div className="grid m-2 p-2 bg-gray-200 shadow-lg rounded-md">
            {grid.map((row, rowIdx) => {
                return <div key={rowIdx} className="grid grid-flow-col">
                    {row.map((node, nodeIdx) => {

                        // If the node is the start node, color it red
                        if (node.isStart) {
                            return <Node
                                key={nodeIdx}
                                row={rowIdx}
                                col={nodeIdx}
                                classes="bg-red-500"
                                nodeClick={() => handleNodeClick(rowIdx, nodeIdx, editBoardBtn)}
                            />;
                        }

                        // If the node is the end node, color it green
                        if (node.isEnd) {
                            return <Node
                                key={nodeIdx}
                                row={rowIdx}
                                col={nodeIdx}
                                classes="bg-green-500"
                                nodeClick={() => handleNodeClick(rowIdx, nodeIdx, editBoardBtn)}
                            />;
                        }

                        // If the node is a wall, color it black
                        if (node.isWall) {
                            return <Node
                                key={nodeIdx}
                                row={rowIdx}
                                col={nodeIdx}
                                classes="bg-black"
                                nodeClick={() => handleNodeClick(rowIdx, nodeIdx, editBoardBtn)}
                            />;
                        };

                        // If the node is visited, color it blue
                        if (node.isVisited) {
                            return <Node
                                key={nodeIdx}
                                row={rowIdx}
                                col={nodeIdx}
                                classes="bg-blue-300"
                                nodeClick={() => handleNodeClick(rowIdx, nodeIdx, editBoardBtn)}
                            />;
                        };

                        // If the node is the shortest path, color it yellow
                        if (node.isShortestPath) {
                            return <Node
                                key={nodeIdx}
                                row={rowIdx}
                                col={nodeIdx}
                                classes="bg-yellow-500"
                                nodeClick={() => handleNodeClick(rowIdx, nodeIdx, editBoardBtn)}
                            />;
                        };

                        return <Node
                            key={nodeIdx}
                            row={rowIdx}
                            col={nodeIdx}
                            classes="bg-gray-100"
                            nodeClick={() => handleNodeClick(rowIdx, nodeIdx, editBoardBtn)}
                        />;
                    })}
                </div>
            })}
        </div>
    };

    const selectAlgorithm = (e) => {
        setAlgorithm(e);
    };

    const runAlgorithmAnimation = () => {
        const newGrid = grid.slice();
        const currentStartNode = newGrid[startNode.row][startNode.column];
        const currentEndNode = newGrid[endNode.row][endNode.column];

        let visitedNodesInOrder, nodesInShortestPathOrder;

        switch (algorithm) {
            case 'Breadth First Search':
                [visitedNodesInOrder, nodesInShortestPathOrder] = breadthFirstSearch(newGrid, currentStartNode, currentEndNode);
                break;
            case 'Depth First Search':
                [visitedNodesInOrder, nodesInShortestPathOrder] = depthFirstSearch(newGrid, currentStartNode, currentEndNode);
                break;
            case 'Dijkstra':
                [visitedNodesInOrder, nodesInShortestPathOrder] = dijkstra(newGrid, currentStartNode, currentEndNode);
                break;
            case 'A*':
                [visitedNodesInOrder, nodesInShortestPathOrder] = aStar(newGrid, currentStartNode, currentEndNode);
                break;
            default:
                break;
        };

        setVisitedNodesInOrderWithAnimation(visitedNodesInOrder);
        setShortestPathNodes(nodesInShortestPathOrder);
    };

    const setVisitedNodesInOrder = (visitedNodesInOrder) => {
        const newGrid = grid.slice();
        visitedNodesInOrder.forEach(node => {
            setTimeout(() => {
                newGrid[node.row][node.col].isVisited = true;
            }, 100);
            setGrid(newGrid);
        });
    };

    const setShortestPathNodes = (nodesInShortestPathOrder) => {
        setTimeout(() => {
            const newGrid = grid.slice();
            nodesInShortestPathOrder.forEach(node => {
                newGrid[node.row][node.col].isVisited = false;
                newGrid[node.row][node.col].isShortestPath = true;
            });
            setGrid(newGrid);
        }, 100);

    };

    const setVisitedNodesInOrderWithAnimation = (visitedNodesInOrder) => {
        setVisitedNodesInOrder(visitedNodesInOrder);
        setTimeout(() => {
            setVisitedNodesInOrder([]);
        }, 1000);
    };

    const setShortestPathNodesWithAnimation = (nodesInShortestPathOrder) => {
        setShortestPathNodes(nodesInShortestPathOrder);
        setTimeout(() => {
            setShortestPathNodes([]);
        }, 1000);
    };

    const changeGridSize = (e) => {
        const newGridSize = { row: e.target.value, column: e.target.value };
        setGridSize(newGridSize);
        setGrid(generateGrid(newGridSize.row, newGridSize.column));
    }

    React.useEffect(() => {
        setGrid(generateGrid(gridSize.row, gridSize.column));
    }, []);

    return (
        <div className='grid grid-cols-12 my-8'>
            <div className='flex justify-center items-center col-span-8'>
                {drawGrid(grid)}
            </div>
            <div className='flex flex-col mx-auto col-span-4 gap-y-4'>
                <div className='flex my-4'>
                    <div className="flex flex-col justify-center items-center p-4 rounded-md bg-gray-300">
                        <p className='text-lg font-normal text-gray-900 mb-4'>
                            Edit board
                        </p>
                        <div className='flex justify-center items-center gap-4'>
                            <Button onClick={() => setEditBoardBtn('start')} color="red">Start</Button>
                            <Button onClick={() => setEditBoardBtn('end')} color="green">End</Button>
                            <Button onClick={() => setEditBoardBtn('wall')} color="gray">Wall</Button>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex justify-center items-center gap-2'>
                        <Select
                            label="Select an algorithm"
                            id="selectedAlgorithm"
                            defaultValue='default'
                            onChange={selectAlgorithm}
                            animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
                        >
                            <Option value="Breadth First Search">Breadth First Search</Option>
                            <Option value="Depth First Search">Depth First Search</Option>
                            <Option value="Dijkstra">Dijkstra</Option>
                            <Option value="A*">A*</Option>
                        </Select>
                        <Button onClick={runAlgorithmAnimation} className='whitespace-nowrap'>Find path</Button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex justify-center items-center'>
                        <span className='text-lg font-normal text-gray-800'>Start :</span>
                        <div className='bg-red-500 rounded-full m-2 p-3'></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='text-lg font-normal text-gray-800'>Finish :</span>
                        <div className='bg-green-500 rounded-full m-2 p-3'></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='text-lg font-normal text-gray-800'>Wall :</span>
                        <div className='bg-black rounded-full m-2 p-3'></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='text-lg font-normal text-gray-800'>Visited :</span>
                        <div className='bg-blue-300 rounded-full m-2 p-3'></div>
                    </div>
                </div>
                <PathfinderComplexityTable />
            </div>
        </div>
    );
};

export default PathfindingVisualizer;