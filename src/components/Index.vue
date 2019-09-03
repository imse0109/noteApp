<template>
  <v-container bg fill-height grid-list-md text-xs-center>
	  	<!-- <v-navigation-drawer v-model="sidebar" app>
			<WriteVue></WriteVue>
		</v-navigation-drawer> -->
		<v-layout row wrap align-center>
			<v-flex class="text-xs-center">
				<v-btn color="primary" to="/Write">MEMO</v-btn>
      		</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
// import WriteVue from './Write.vue'
export default {
	// components: {
	// 	WriteVue
	// },
	data () {
		return {
			sidebar : false
		}
	},
}
</script>

<style scoped>
.v-navigation-drawer--open{width:100% !important;}
</style>
