<template>
<div class="dashboard">
    <nav class="main-menu">
      <div class="username-container">
        <ul>
          <li>
            <p style="text-align: center;">
              <i class="fa fa-user fa-2x"></i>
              <span class="nav-text">
                {{ getUsername }}
              </span>
            </p>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <a href="#">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text">
              Dashboard
            </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#events">
            <i class="fa fa-list fa-2x"></i>
              <span class="nav-text">
                Events
              </span>
          </a>
        </li>
        <li>
          <a href="#sales">
            <i class="fa fa-money fa-2x"></i>
            <span class="nav-text">
              Sales
            </span>
          </a>
        </li>
        <li>
          <a href="#newevent">
            <i class="fa fa-calendar fa-2x"></i>
            <span class="nav-text">
              New Event
            </span>
          </a>
        </li>
        
        <li>
          <a href="#documentation">
            <i class="fa fa-info fa-2x"></i>
            <span class="nav-text">
              Documentation
            </span>
          </a>
        </li>
      </ul>

      <ul class="logout">
        <li>
          <a v-on:click="logout">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">
              Logout
            </span>
          </a>
        </li>  
      </ul>
    </nav>
    <div class="dashboard-content">
      <Summary v-if="tab == '#'" />
      <Events v-if="tab == '#events'" />
      <Sales v-if="tab == '#sales'" />
      <NewEvent v-if="tab == '#newevent'" />
      <Documentation v-if="tab == '#documentation'" />
    </div>
  </div>
</template>

<style lang="scss">

  table {
    margin: auto;
    td,
    th {
      text-align: right;
      padding: 2px 10px;
    }
  }

  /* https://codepen.io/JFarrow/pen/fFrpg */
  .dashboard {
    color: #dedede;
    .username-container {
      color: #fff;
      padding: 20px 4px;
      height: 100px;
    }
    .dashboard-content {
      padding: 0 40px 20px 100px;
    }
  }

  .btc-balance {
    p, i, span {
      display: inline-block;
    }
  }


  hr {
      border-color: #666;
      margin: 10px 10px 40px 10px;
  }

  p {
    text-align: justify;
  }

  @import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

  @import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);
  .fa-2x {
  font-size: 2em;
  }
  .fa {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size:20px;
  }

  .logout:hover {
    cursor: pointer;
  }

  .main-menu:hover,
  nav.main-menu.expanded {
  width:250px;
  overflow:visible;
  }

  .main-menu {
  background:#212121;
  border-right:1px solid #e5e5e5;
  position:fixed;
  top:0;
  bottom:0;
  height:100%;
  left:0;
  width:60px;
  overflow:hidden;
  -webkit-transition:width .05s linear;
  transition:width .05s linear;
  -webkit-transform:translateZ(0) scale(1,1);
  z-index:1000;
  }

  .main-menu>ul {
  margin:7px 0;
  }

  .main-menu li {
  position:relative;
  display:block;
  width:250px;
  }

  .main-menu li>a,
  .main-menu li>p {
  position:relative;
  display:table;
  border-collapse:collapse;
  border-spacing:0;
  color:#999;
  font-family: arial;
  font-size: 14px;
  text-decoration:none;
  -webkit-transform:translateZ(0) scale(1,1);
  -webkit-transition:all .1s linear;
  transition:all .1s linear;
    
  }

  .main-menu .nav-icon {
  position:relative;
  display:table-cell;
  width:60px;
  height:36px;
  text-align:center;
  vertical-align:middle;
  font-size:18px;
  }

  .main-menu .nav-text {
  position:relative;
  display:table-cell;
  vertical-align:middle;
  width:190px;
    font-family: 'Titillium Web', sans-serif;
  }

  .main-menu>ul.logout {
  position:absolute;
  left:0;
  bottom:0;
  }

  .no-touch .scrollable.hover {
  overflow-y:hidden;
  }

  .no-touch .scrollable.hover:hover {
  overflow-y:auto;
  overflow:visible;
  }

  a:hover,a:focus {
  text-decoration:none;
  }

  nav {
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  -o-user-select:none;
  user-select:none;
  }

  nav ul,nav li {
  outline:0;
  margin:0;
  padding:0;
  }
  .main-menu {
    li:hover>a {
      color:#fff;
      background-color:#5fa2db;
    }
  }
  .area {
  float: left;
  background: #e2e2e2;
  width: 100%;
  height: 100%;
  }
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
  }

</style>

<script>

  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'

  // @ is an alias to /src
  import OrbScape from '@/components/OrbScape.vue'
  import Sales from '@/components/Sales.vue'
  import LoginComponent from '@/components/LoginComponent.vue'
  import Events from '@/components/Events.vue'
  import Documentation from '@/components/Documentation.vue'
  import NewEvent from '@/components/NewEvent.vue'
  import Summary from '@/components/Summary.vue'

  export default {
    name: 'home',
    data: () => ({
      tab: '#'
    }),
    components: {
      OrbScape,
      LoginComponent,
      Documentation,
      NewEvent,
      Summary,
      Sales,
      Events
    },
    methods: {
      ...mapMutations([
          'logout'
      ])
    },
    computed: {
      ...mapGetters([
        'getUsername',
        'getEvents',
        'fetchSalesData'
      ])
    },
    mounted() {
      console.log("dashboard mounted", this.getUsername);
      if (!this.getUsername) {
        console.log("no username");
      	// this.$store.commit('saveUser', this.username);
        window.location.href = '/';
      } else {
        console.log("load into this page", this.$route.hash);
        if (this.$route.hash) this.tab = this.$route.hash;
        
        console.log("dashboard mounted this.fetchSalesData", this.fetchSalesData);
        
        this.$store.commit('fetchWalletData');
      }
    },
    watch:{
      $route (to, from){
        this.tab = to.hash ? to.hash : '#';
        console.log("route change", this.tab);
      }
    } 
  }
</script>
