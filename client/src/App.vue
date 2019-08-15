<template>
  <div id="app">
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
	import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
	export default {
	  name: 'App',
	  components: {
		FooterGuide
		}
	}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
#app
	color:red
	font-size:12px
</style>
