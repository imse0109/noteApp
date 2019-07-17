<template>
	<div class="write">
		<v-container bg fill-height grid-list-md text-xs-center>
			<textarea></textarea>
			
			<v-btn block color="primary" to="/List">확인</v-btn>
		</v-container>
	</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.write{height:100%;}
.write .container{padding:16px 16px 72px 16px;}
.write textarea{width:100%;height:100%;background:#fff;border:1px solid #1976d2;font-size:12px;padding:12px;color:#000;}
.write .v-btn{position:fixed;bottom:0;left:0;height:56px;}
.write .v-btn:hover{position:fixed;}
</style>
