const { createApp } = Vue

console.log(axios)

createApp({
    data() {
    return {
        message: 'Hello Vue!'
    }
    }
}).mount('#app')