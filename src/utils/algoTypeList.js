import { sortingThumb, pathfindingThumb, searchingThumb } from '../assets/index';

const algoTypes = [
    {
        image: sortingThumb,
        title: 'Sorting Algorithms',
        link: '/sorting',
        subAlgoList: [
            {
                title: 'Bubble Sort',
                link: '/bubbleSort',
            },
            {
                title: 'Selection Sort',
                link: '/selectionSort',
            },
            {
                title: 'Insertion Sort',
                link: '/insertionSort',
            },
            {
                title: 'Merge Sort',
                link: '/mergeSort',
            }
        ]
    },
    {
        image: searchingThumb,
        title: 'Searching Algorithms',
        link: '/searching',
        subAlgoList: [
            {
                title: 'Linear Search',
                link: '/linearSearch',
            },
            {
                title: 'Binary Search',
                link: '/binarySearch',
            }
        ]
    },
    {
        image: pathfindingThumb,
        title: 'Path-Finder Algorithms',
        link: '/pathfinding',
        subAlgoList: [
            {
                title: 'Dijkstra',
                link: '/dijkstra',
            },
            {
                title: 'A*',
                link: '/aStar',
            },
            {
                title: 'BFS',
                link: '/bfs',
            },
            {
                title: 'DFS',
                link: '/dfs',
            }
        ]
    }
];

export default algoTypes;