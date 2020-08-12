<template>
	<div class="todo">
		<v-container>
			
			<SearchVue></SearchVue>

			<v-list two-line>
				<template v-for="(memo,index) in memoArray">
					<v-list-tile :key="memo + index" v-show="memo.filtered == 'y'">
						<v-list-tile-content>
							<v-list-tile-title class="list_item_title" v-text="memo.title" @click="ViewMemo(index)"></v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</template>
			</v-list>
		</v-container>
	</div>
</template>

<script>
import SearchVue from './Search.vue'
export default {
	components: {
		SearchVue
	},
	data(){
		return{
			memoArray: [],
			memo: null,
  		}
	},
	methods:{
	  	ViewMemo(idx){
			this.$store.dispatch('ViewMemo', idx);
		},
	},
	created(){
		if(JSON.parse(localStorage.getItem('item')) !== null){

			// 로컬스토리지에 있는 값을 가져온다.
			this.memoArray = JSON.parse(localStorage.getItem('item'));

		}
	},
}

		
</script>

<style scoped>
.todo{width:100%;height:100%;}
.todo .container{padding:0;}
.todo .container .v-list{padding:0;}
.todo .container .v-list > div{border:1px solid #1976d2;margin:6px 0 0 0;height:42px;}
.todo .container .v-list >>> .v-list__tile{height:42px;}
</style>
