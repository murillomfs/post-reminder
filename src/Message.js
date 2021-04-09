const Message = {
    messages: ['Deixa de ser bixona', 'Para de ser bobo', 'Não seje noob', 'Dae biba', 'É a em vez de button'],

    randomize (arr) {
        if (arr && arr.length) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
    },

    choose () {
        const message = Message.randomize(Message.messages);
        return message;
    }
}

export { Message };