export const getSubstring = ({ start, end, str }) => {
    const startIndex = str.indexOf(start) + start.length;
    const endIndex = str.indexOf(end, startIndex);

    if (startIndex === start.length - 1) {
        return '';
    }

    return str.substring(startIndex, endIndex === -1 ? str.length : endIndex);
}