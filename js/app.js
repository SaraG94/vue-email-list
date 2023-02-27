const { createApp } = Vue

console.log(axios)

createApp({
    data() {
        return {
            emails:[]
        }
    },
    methods: {
		randomEmail() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
					console.log(res.data.response)
					this.emails.push(res.data.response)
                    console.log(this.emails)
				})
		},
	},
	mounted() {
		for (let i = 0; i < 10; i++) {
			this.randomEmail()
		}
	},

}).mount('#app')