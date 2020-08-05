<template>
  <v-container bg fill-height grid-list-md text-xs-center>

		<ListVue></ListVue>

		<v-layout row wrap align-center>
			<v-flex class="text-xs-center">
				<v-btn slot="activator" color="primary" to="/Write" fab>
					<v-icon>add</v-icon>
				</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
import ListVue from './List.vue'
export default {
	components: {
		ListVue
	},
}
</script>

<style scoped>
.layout{position:fixed;bottom:0;right:0;height:auto !important;}
.v-navigation-drawer--open{width:100% !important;}
.v-btn__content .v-icon{top:25% !important;position:absolute;left:0;}
</style>
