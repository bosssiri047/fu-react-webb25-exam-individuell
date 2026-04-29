export function randomSection () {
    const chars = "ABCDE"
    let result = "";
    for(let i = 0; i < 1; i++) {
        result = chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export function randomSeat () {
    const result = Math.floor(Math.random() * 101);

    return result;
}