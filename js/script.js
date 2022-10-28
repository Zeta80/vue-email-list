// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
//Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue;

createApp({
    data() {
        return {
            itemsEmail: [],
            interval: "",
            cont: 10,
            emailsArray: [],
        };
    },
    created() {
    },

    methods: {
        getEmails() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    // this.rndNumber = resp.data.response;
                    this.itemsEmail.push(resp.data.response)
                    console.log(this.itemsEmail);
                });
        },
        buttonGenerate() {
            if (this.itemsEmail.length < this.cont) {
                for (let i = 0; i < this.cont; i++) {
                    this.getEmails()
                }
                console.log(this.itemsEmail, "array");
            }

            // this.interval = setInterval(() => {
            //     this.emailsArray.push(this.itemEmail)
            //     clearInterval(this.interval)
            // }, 500);

            // console.log(this.itemEmail, "item");
            // console.log(this.emailsArray, "array");

        },
    },
}).mount("#app");

