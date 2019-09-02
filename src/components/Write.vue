<template>
	<div class="write">
		<v-container bg fill-height grid-list-md text-xs-center>
			<textarea v-model="memo"></textarea>
			<v-btn block color="primary" @click="localMemo">확인</v-btn>
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
	  	localMemo(){
			const todoData = {
				memoArr : this.memoArray,
				memo : this.memo,
			}
			if(this.memo !== null && this.memo !== ''){
				this.memoArray.push(this.memo);
				this.$store.dispatch('localMemo', todoData);
			}
		},
	},
	created(){
		this.memoArray = JSON.parse(localStorage.getItem('item'));
    }

}
</script>

<style scoped>
.write{height:100%;}
.write .container{padding:16px 16px 72px 16px;}
.write textarea{width:100%;height:100%;background:#fff;border:1px solid #1976d2;font-size:12px;padding:12px;color:#000;}
.write .v-btn{position:fixed;bottom:0;left:0;height:56px;}
.write .v-btn:hover{position:fixed;}
</style>
