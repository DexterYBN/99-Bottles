const song = {
    word1: 'бутылка',
    word2: 'бутылки',
    word3: 'бутылок',

    generateSongText() {
        for (i = 99; i > 1; i--) {
            console.log(this.generateSingleStanza(i))
        }
    },

    generateSingleStanza(number) {
        if (number == 2 || number == 22 || number == 32 || number == 42 || number == 52 || number == 62 || number == 72 || number == 82 || number == 92) {
            return `
            ${number} ${this.word2} пива на стене
            ${number} ${this.word2} пива!
            Возьми одну, пусти по кругу
            ${number - 1} ${this.word1} пива на стене!`
        } else if (number == 1 || number == 21 || number == 31 || number == 41 || number == 51 || number == 61 || number == 71 || number == 81 || number == 91) {
            return `
            ${number} ${this.word1} пива на стене
            ${number} ${this.word1} пива!
            Возьми одну, пусти по кругу
            ${number - 1} бутылок пива на стене!`
        } else {
            return `
            ${number} ${this.word3} пива на стене
            ${number} ${this.word3} пива!
            Возьми одну, пусти по кругу`
        }
    },
}

console.log(song.generateSongText())
// console.log(song.generateSingleStanza(43))