<template>
    <div class="container-fluid">
        <div class="row wrapper">
            <div class="col-md-2 pr-0">
                <Sidebar/>
            </div>
            <article class="col-md-10 p-0">
              <Navbar/>
              <section>
                  <router-view/>
              </section>
            </article>
        </div>
    </div>
</template>
<script>

import Navbar from './components/navbar/NavBar.vue'
import Sidebar from './components/sidebar/SideBar.vue'


export default {
    name: 'App',
    components: {
        Navbar,
        Sidebar
        
    },
    data(){
        return{
            message: 'Empty Template vue+css+html+babel+webpack+backend'
        }
    }
}
</script>
<style scope>
body, html, .container-fluid {
    height: 100% !important;
    padding: 0px !important;
}

.wrapper {
    min-height: 100vh;
    max-height: 100%;
}

</style>
