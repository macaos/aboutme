class ArtUtils {
    randomInt(start: number, end: number) {
        if (start < 0 && end < 0) {
            // range : negative number
            const s = Math.abs(end);
            const e = Math.abs(start);
            return (parseInt(String(Math.random() * (e - s))) + s) * -1;
        } else if (start < 0) {
            // range : negative ~ positive number
            return parseInt(String(Math.random() * end)) + parseInt(String(Math.random() * start));
        } else {
            // range : positive number 
            return parseInt(String(Math.random() * (end - start))) + start;
        }
    }
}

export default new ArtUtils();