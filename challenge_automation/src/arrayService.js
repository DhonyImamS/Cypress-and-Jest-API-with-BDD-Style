const extractIntersectElementArray = (arr1, arr2) => {
    const array1 = arr1.sort((a, b) => a < b);
    const array2 = arr2.sort((a, b) => a < b);
    let length1;
    let length2;

    let intersectElement = [];

    if ( array2.length >= array1.length ) {
        length1 = array2.length;
        length2 = array1.length;
    } else {
        length1 = array1.length;
        length2 = array2.length;
    }

    for (let i=0; i < length1; i++) {
        for(let k=0; k < length2; k++) {
            if(array1[i] === array2[k]) intersectElement.push(array1[i])
        }
    }
    return intersectElement.sort((a, b) => a < b).slice(0, intersectElement.length - 1);
};

module.exports = {
    extractIntersectElementArray
};