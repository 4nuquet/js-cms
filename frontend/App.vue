<template>
    <div class="container">
        <router-link to="/about">About</router-link>
        <h1>App Component</h1>
        <p>{{message}}</p>
        <Hello/>
        <router-view/>
    </div>
</template>
<script>

import Hello from './components/Hello.vue'

export default {
    name: 'App',
    components: {
        Hello
    },
    data(){
        return{
            message: 'Empty Template vue+css+html+babel+webpack+backend'
        }
    }
}
</script>
