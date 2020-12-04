// Con Vue, stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data.

var app = new Vue(
    {
        el: '#root',
        data: {
            message: "Hello World!",
            buttonMessage: "Mostra Tour Eiffel",
            colosseoUrl: "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/92000/92809.jpg",
            tourUrl: "",
        },
        methods: {
            clickUrl: function() {
                if (this.tourUrl == "") {
                    this.buttonMessage = "Nascondi Tour Eiffel";
                    this.tourUrl = "https://www.italiadellacultura.it/wp-content/uploads/2019/08/Torre-Eiffel.jpg";
                } else {
                    this.buttonMessage = "Mostra Tour Eiffel";
                    this.tourUrl = "";
                }
            }
        },
    }
);