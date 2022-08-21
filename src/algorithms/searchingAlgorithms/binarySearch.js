export default function getBinarySearchAnimations(
    array,
    left,
    right,
    element,
    animations = []
) {
    if (right >= left) {
        let mid = parseInt(left + (right - left) / 2);
        if (array[mid] === element) {
            animations.push([left, right, mid, true]);
            return true;
        } else if (array[mid] > element) {
            animations.push([left, right, mid, false]);
            getBinarySearchAnimations(array, left, mid - 1, element, animations);
        } else {
            animations.push([left, right, mid, false]);
            getBinarySearchAnimations(array, mid + 1, right, element, animations);
        };
        return false;
    };
};