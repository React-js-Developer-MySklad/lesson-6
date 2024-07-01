const a = (function() {
    let i = 1;

    return {
        valueOf: function() {
            return i++
        }
    }
})()


console.log(a == 1 && a == 2 && a == 3 === true);