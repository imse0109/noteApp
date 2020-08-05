<template>
	<div class="view">
		<v-container bg fill-height grid-list-md text-xs-center>
			<p v-text="memo"></p>
			 <div class="btn_wrap">
				<v-btn color="warning" to="/Write">수정</v-btn>
				<v-btn color="error">삭제</v-btn>
			</div>
		</v-container>
	</div>
</template>

<script>
export default {
  	created(){
		this.memo = JSON.parse(localStorage.getItem('item'))[localStorage.getItem('index')];
    }
}
</script>

<style scoped>
.view{width:100%;height:100%;}
.view .container{padding:16px 16px 72px 16px;}
.view .btn_wrap{position:fixed;width:100%;height:72px;background:#fff;bottom:0;left:0;}
.view .v-btn{position:fixed;bottom:0;left:0;height:56px;}
.view .v-btn:first-child{left:16px;width:43%;}
.view .v-btn:last-child{right:16px;left:auto;width:43%;}
.view .v-btn:hover{position:fixed;}
.view p{width:100%;height:100%;padding:12px;font-size:12px;text-align:left;background:#1976d2;color:#fff;margin:0;word-break:break-all;}
</style>
