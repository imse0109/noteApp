<template>
	<div class="todo">
		<v-container>
			<v-form>
				<v-text-field
					v-model="schWord"
					label="Search..."
					solo-inverted
					append-icon="search"
					@keyup="searchCategory"
				></v-text-field>
			</v-form>

			
		</v-container>
	</div>
</template>

<script>
export default {
	data(){
		return{
			//memoArray: [],
			//memo: null,
			schWord: '',
            filtered: 'y',
  		}
	},
	methods:{
		searchCategory(){
			var isFiltered = true;
			// this.$parent.memoArray = JSON.parse(localStorage.getItem('item'));
             for(var i=0;i<this.$parent.memoArray.length;i++){
				isFiltered = true;
				
                if(isFiltered && this.$parent.memoArray[i].title.toUpperCase().indexOf(this.schWord.toUpperCase()) == -1){
                    isFiltered = false;
                }

                if(isFiltered){
                    this.$parent.memoArray[i].filtered = 'y';
                }else{
                    this.$parent.memoArray[i].filtered = 'n';
				}
             }
		}
	},
	
}

		
</script>

<style scoped>
.todo .container .v-text-field{margin: -16px -16px 0px -16px;padding: 16px;background: #1976d2;}
.todo .container .v-text-field >>> .v-text-field__details{margin-bottom:0;height:0;}
.todo .container .v-text-field >>> .v-input__slot{margin-bottom:0;box-shadow:none;border:1px solid #fff;background: #1976d2 !important;border-radius:4px;}
.todo .container .v-text-field.v-input--is-focused >>> .v-input__slot{border:2px solid #fff;}
.todo .container .v-text-field.v-input--is-focused >>> .v-icon{color:#fff !important;}
</style>
