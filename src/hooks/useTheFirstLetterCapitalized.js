

export function useTheFirstLetterCapitalized(text) {
    const firstLetter = text.charAt(0).toUpperCase();
    const restOfTheWord = text.slice(1)
    const result = firstLetter + restOfTheWord;
    
    return result;
}