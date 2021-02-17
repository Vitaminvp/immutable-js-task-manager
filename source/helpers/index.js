export const log = (message, color) => {
    console.log(`%c ${message}`, `background: #222; color: ${color}`);
};

export const delay = (duration = 1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export const sum = (array) => array.reduce((a, b) => a + b);

export const memoize = (fn) => {
    let previousArgument = null;
    let previousResult = null;

    return (argument) => {
        if (argument === previousArgument) {
            return previousResult;
        }
        const result = fn.call(this, argument);
        previousArgument = argument;
        previousResult = result;

        return result;
    };
};

export const memoizeBad = (fn) => {
    const cache = {};

    return (argument) => {
        const hash = JSON.stringify(argument);
        if (hash in cache) {
            return cache[ hash ];
        }

        cache[ hash ] = fn.call(this, argument);

        return cache[ hash ];
    };
};
