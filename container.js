var maxArea = function(height) {
      
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > max) {
            secondMax = max;
            max = height[i];
        } else if (height[i] > secondMax && height[i] !== max) {
            secondMax = height[i];
        }
    }

    const maxIndexes = [];
    const secondIndexes = [];

    for (let i = 0; i < height.length; i++) {
        if (height[i] === max) {
            maxIndexes.push(i);
        } else if (height[i] === secondMax) {
            secondIndexes.push(i);
        }
    }

    let maxDiff = 0;
    let area = 0;

    if (maxIndexes.length >= 2) {
        const first = maxIndexes[0];
        const last = maxIndexes[maxIndexes.length - 1];
        maxDiff = Math.abs(last - first);
        area = Math.min(max, secondMax) * maxDiff;

    } else if (secondMax !== -Infinity) {
        for (let i = 0; i < maxIndexes.length; i++) {
            for (let j = 0; j < secondIndexes.length; j++) {
                const diff = Math.abs(maxIndexes[i] - secondIndexes[j]);
                if (diff > maxDiff) {
                    maxDiff = diff;
                }
            }
        }
        area = Math.min(max, secondMax) * maxDiff;
    } else {
        maxDiff = Math.abs(height.lastIndexOf(max) - height.indexOf(max));
        area = Math.min(max, secondMax) * maxDiff;
    }

    return area;
};

height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); 