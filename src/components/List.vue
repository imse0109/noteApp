<template>
	<div class="todo">
		<v-container>
			<v-list two-line>
				<template>
					<v-list-tile>
						<v-list-tile-content>
							<v-list-tile-title class="list_item_title" v-text="123123123"></v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile>
						<v-list-tile-content>
							<v-list-tile-title class="list_item_title" v-text="111111111111"></v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</template>
			</v-list>
		</v-container>
	</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.todo .container .v-list{padding:0;}
.todo .container .v-list > div{border:1px solid #1976d2;margin:6px 0 0 0;height:32px;}
.todo .container .v-list >>> .v-list__tile{height:32px;}
/* .todo .container .input-group__details{min-height:1px;}
.todo .container .list__tile__content{width:69%;}
.todo .container .list__tile__title{font-family:"NotoSansKR", sans-serif;font-size:14px;font-weight:900;} */
</style>
