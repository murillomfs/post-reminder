const Emitter = {
    events: {},
    audio: new Audio('../audios/hey_listen.mp3'),
    
    on(event, cb) {
        Emitter.events[event] = Emitter.events[event] || [];
        Emitter.events[event].push(cb);
    },

    emit(event, ...rest) {
        if(event in Emitter.events === false){
            return;
        }

        Emitter.audio.play();

        Emitter.events[event].forEach((e) => {
            e(...rest);
        })
    }
}

export { Emitter };