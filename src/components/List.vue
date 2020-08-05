<template>
	<div class="todo">
		<v-container>
			<v-list two-line>
				<template v-for="(memo,index) in memoArray">
					<v-list-tile>
						<v-list-tile-content>
							<v-list-tile-title class="list_item_title" v-text="memo" @click="ViewMemo"></v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</template>
			</v-list>
		</v-container>
	</div>
</template>

<script>
export default {
	data(){
		return{
			memoArray: [],
			memo: null,
  		}
	},
	methods:{
	  	ViewMemo(e){

			// 값을 이용하여 인덱스 값을 찾는다
			var memoIndex = JSON.parse(localStorage.getItem('item')).indexOf(e.currentTarget.innerHTML);
			this.$store.dispatch('ViewMemo', memoIndex);
		},
	},
	created(){
		if(JSON.parse(localStorage.getItem('item')) !== null){

			// 로컬스토리지에 있는 값을 가져온다.
			this.memoArray = JSON.parse(localStorage.getItem('item'));
		}
    }
}
</script>

<style scoped>
.todo{width:100%;height:100%;}
.todo .container{padding:0;}
.todo .container .v-list{padding:0;}
.todo .container .v-list > div{border:1px solid #1976d2;margin:6px 0 0 0;height:32px;}
.todo .container .v-list >>> .v-list__tile{height:32px;}
</style>
