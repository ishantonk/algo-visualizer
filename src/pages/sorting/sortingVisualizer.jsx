import React, { Component } from "react";
import { Select, Option, Button } from "@material-tailwind/react";

import ComplexityTable from "./complexityTable";
import randomIntFromInterval from "../../utils/randomIntFromInterval";
import cellColors from "../../utils/cellColors";
import "./sortingVisualizer.css"

// Sorting algorithm.
import { getBubbleSortAnimations } from "../../algorithms/sortingAlgorithms/bubbleSort";
import { getInsertionSortAnimations } from "../../algorithms/sortingAlgorithms/insertionSort";
import { getSelectionSortAnimations } from "../../algorithms/sortingAlgorithms/selectionSort";
import { getQuickSortAnimations } from "../../algorithms/sortingAlgorithms/quickSort";
import { getMergeSortAnimations } from "../../algorithms/sortingAlgorithms/mergeSort";
import { getHeapSortAnimations } from "../../algorithms/sortingAlgorithms/heapSort";


let SELECTED = randomIntFromInterval(0, cellColors.length - 1);
const color = cellColors[SELECTED].reverse();

const SIZE_OF_BOARD = 25; // Size of Board -> N x N Size of 1D Array
var ANIMATION_SPEED = 0.5; // Greater Value -> Slower Animation
const CELL_CORNER_BORDER_RADIUS = 3;

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            array: [],
        };
    };

    componentDidMount() {
        this.resetArray();
    };

    resetArray() {
        const array = [];
        for (let i = 0; i < SIZE_OF_BOARD * SIZE_OF_BOARD; i++) {
            array.push(randomIntFromInterval(0, cellColors.length - 1));
        }
        this.setState({ array });
        this.drawBoard(array);
    };

    drawBoard(arrayBoard = []) {
        // Creating the board.
        const arrayBoardElement = document.getElementById("array-board");

        // Clearing the board.
        arrayBoardElement.innerHTML = "";

        // Adding the board rows and columns.
        arrayBoardElement.style.gridTemplateRows = `repeat(${SIZE_OF_BOARD}, 1fr)`;
        arrayBoardElement.style.gridTemplateColumns = `repeat(${SIZE_OF_BOARD}, 1fr)`;

        // Adding the board cells.
        for (let i = 0; i < arrayBoard.length; i++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.id = `cell-${i}`;
            cell.style.backgroundColor = color[arrayBoard[i]];

            // styling the corners
            if (i === 0) {
                cell.style.borderTopLeftRadius = `${CELL_CORNER_BORDER_RADIUS}px`;
            } else if (i === SIZE_OF_BOARD - 1) {
                cell.style.borderTopRightRadius = `${CELL_CORNER_BORDER_RADIUS}px`;
            } else if (i === SIZE_OF_BOARD * SIZE_OF_BOARD - 1) {
                cell.style.borderBottomRightRadius = `${CELL_CORNER_BORDER_RADIUS}px`;
            } else if (i === SIZE_OF_BOARD * (SIZE_OF_BOARD - 1)) {
                cell.style.borderBottomLeftRadius = `${CELL_CORNER_BORDER_RADIUS}px`;
            }

            arrayBoardElement.appendChild(cell);
        }
    };

    handelChangeAlgo(e) {
        document.getElementById("selectedAlgorithm").value = e;
    }

    selectAlgorithm() {
        let algorithm = document.getElementById("selectedAlgorithm").value;

        switch (algorithm) {
            case "default":
                alert("Please select an algorithm");
                break;
            case "bubbleSort":
                this.bubbleSort();
                break;
            case "selectionSort":
                this.selectionSort();
                break;
            case "insertionSort":
                this.insertionSort();
                break;
            case "quickSort":
                this.quickSort();
                break;
            case "heapSort":
                this.heapSort();
                break;
            case "mergeSort":
                this.mergeSort();
                break;
            default:
                break;
        };
    };

    visualizeAnimation(animations = [], speedFactor) {
        this.setState({ disabled: true });
        setTimeout(() => {
            const cells = document.getElementsByClassName("cell");
            let count = 0;
            for (let i = 0; i < animations.length; i++) {
                const [idxOne, idxTwo, elemOne, elemTwo] = animations[i];
                const cellOne = cells[idxOne];
                const cellTwo = cells[idxTwo];
                const cellOneStyle = cellOne.style;
                const cellTwoStyle = cellTwo.style;

                setTimeout(() => {
                    cellOneStyle.backgroundColor = color[elemOne];
                    cellTwoStyle.backgroundColor = color[elemTwo];

                    cellOneStyle.transition = "150ms all";
                    cellTwoStyle.transition = "150ms all";
                }, ANIMATION_SPEED * speedFactor * (i + 1));
                count++;
            }

            setTimeout(() => {
                for (let i = 0; i < cells.length; i++) {
                    setTimeout(() => {
                        cells[i].classList.add("popupBlocks");
                    }, ANIMATION_SPEED * i);
                }
                this.setState({ disabled: false });
            }, ANIMATION_SPEED * speedFactor * (count + 1));

        }, 1000);
    };

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        this.visualizeAnimation(animations, 0.4);
    };

    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        this.visualizeAnimation(animations, 50);
    };

    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        this.visualizeAnimation(animations, 0.8);
    };

    quickSort() {
        const animations = [];
        getQuickSortAnimations(this.state.array, 0, this.state.array.length - 1, animations);
        this.visualizeAnimation(animations, 3.5);
    };

    heapSort() {
        const animations = [];
        getHeapSortAnimations(this.state.array, animations);
        this.visualizeAnimation(animations, 2);
    };

    mergeSort() {
        this.setState({ disabled: true });
        setTimeout(() => {
            const animations = getMergeSortAnimations(this.state.array);
            let count = 0;
            const cells = document.getElementsByClassName("cell");

            for (let i = 0; i < animations.length; i++) {
                setTimeout(() => {
                    const [cellOneIdx, newColor] = animations[i];
                    const cellOneStyle = cells[cellOneIdx].style;
                    cellOneStyle.backgroundColor = color[newColor];
                    cellOneStyle.transition = "150ms all";
                }, i * ANIMATION_SPEED);
                count++;
            };

            setTimeout(() => {
                for (let i = 0; i < cells.length; i++) {
                    setTimeout(() => {
                        cells[i].classList.add("popupBlocks");
                    }, i * ANIMATION_SPEED);
                }
                this.setState({ disabled: false });
            }, ANIMATION_SPEED * (count + 1));
        }, 1000);
    };

    render() {
        const { disabled } = this.state;
        return (
            <div className="flex flex-col justify-center items-center my-8">
                <div className="grid grid-cols-12 grid-flow-row container">
                    <div className="col-span-7 p-2 px-4">
                        <div className="px-16">
                            <div className="array-board grid p-3 rounded bg-gray-100 border border-gray-400 shadowT" id="array-board"></div>
                        </div>
                    </div>
                    <div className="col-span-5 flex flex-col items-center gap-10 mt-2">
                        <div className="array-controls flex justify-center gap-x-4">
                            <div className="array-controls-row">
                                <Select
                                    label="Select an algorithm" animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
                                    id="selectedAlgorithm"
                                    defaultValue='default'
                                    onChange={this.handelChangeAlgo}
                                >
                                    <Option value="bubbleSort">Bubble Sort</Option>
                                    <Option value="selectionSort">Selection Sort</Option>
                                    <Option value="insertionSort">Insertion Sort</Option>
                                    <Option value="quickSort">Quick Sort</Option>
                                    <Option value="heapSort">Heap Sort</Option>
                                    <Option value="mergeSort">Merge Sort</Option>
                                </Select>
                            </div>
                            <div className="array-controls-row flex gap-x-2">
                                <div className="array-controls-cell">
                                    <Button className="array-controls-button" onClick={() => this.resetArray()} disabled={disabled} color="red">Reset</Button>
                                </div>
                                <div className="array-controls-cell">
                                    <Button className="array-controls-button" onClick={() => this.selectAlgorithm()} disabled={disabled} color="green">
                                        Sort
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <ComplexityTable />
                    </div>
                </div>
            </div>
        );
    };
}

export default SortingVisualizer;