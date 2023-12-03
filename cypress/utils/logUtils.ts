export const consoleLogBody = (obj) => {
    if (obj.method) {
        console.log(`${obj.method} Request to ${obj.url}, body:`, obj.body ? obj.body : '<empty>');
    } else {
        console.log('Response body:', obj.body ? obj.body : '<empty>')
    }
};
