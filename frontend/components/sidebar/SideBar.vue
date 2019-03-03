<template>
  <aside class="sidebar navbar-dark bg-dark h-100" id="sidebarCollapse">
    <div class="container h-50 pt-3">
      <div class="card">
        <img src="/../frontend/assets/images/face-1.jpg" alt="" class="card-img-top">
        <div class="card-body">
          <h1>user</h1>
        </div>
      </div>
    </div>
    <ul class="navbar-nav d-flex px-2">

      <router-link v-for="(link, index) of links" :to="link.path" tag="li" :class="['nav-item']" :key="index">        
          
          <a href="" class="nav-link">
            <i class="material-icons">{{link.icon}}</i>
            {{link.name}}
          </a>
      </router-link>
    </ul>

  </aside>
</template>
<script>

import sidebarLinks from './sidebar.js'
const link = new sidebarLinks();
console.log(link.getLinks())
export default {
  name: 'Sidebar',
  data(){
    return {
      links: link.getLinks()
    }
  }
}
</script>
