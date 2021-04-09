import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';
import { Message } from './Message.js';

const App = {
    async start(){
        try {
            await Notifyer.init();

            Emitter.on('countdown-end', () => {
                let body = Message.choose();

                const notify = Notifyer.notify({
                    title: "Dae biba",
                    body
                })

                notify();
            });
            Emitter.on('countdown-end', Timer.init);

            Timer.init(.2 * 60);
            
        } catch (err) {
            console.log(err.message);
        }
    },
}

export { App };