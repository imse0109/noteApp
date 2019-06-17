<template>
	<div class="write">
		<v-container bg fill-height grid-list-md text-xs-center>
			<textarea></textarea>
			
			<v-btn block color="primary">확인</v-btn>
		</v-container>
	</div>
</template>

<script>
export default {
  
}
</script>

<style>
.write{height:100%;}
.write .container{padding:16px 16px 72px 16px;}
.write textarea{width:100%;height:100%;background:#fff;border:1px solid #1976d2;}
.write .v-btn{position:fixed;bottom:0;left:0;height:56px;}
</style>
