function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example usage:
const logMessage = debounce(() => console.log("Debounced!"), 2000);
logMessage(); 