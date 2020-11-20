var app = new Vue({
    el: '#root',
    data: {
        //creo una lista email dove pushare tutte le mail prese
        lista_email: [

        ]
    },
    //una volta caricata ciclo per 10 volte una mail random
    mounted() {
        //imposto il ciclo fino a 9
        for (var i = 0; i < 10; i++) {
            const self = this;
            //prendo l'API della mail random generata e replico fin quando non arrivo a 10 mail
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                //creo una funzione dove pusherò ogni volta la mail pescata nella lista
                .then(function(contact) {
                    self.lista_email.push(contact.data.response)
                });
            }
        }
    });
