export default function getLinearSearchAnimations(array, target) {
    let animations = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const currentElement = parseInt(target);
        if (element === currentElement) {
            animations.push([i, true]);
            break;
        } else {
            animations.push([i, false]);
        };
    };
    return animations;
};