export const truncate = (word: string, length: number): string => {
    return `${word.slice(0, length)} …`
}