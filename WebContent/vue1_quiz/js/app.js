Vue.component('todo-footer',{
	template: '<p>This is a global child component<p>'
});

var cmp = {
		template: '<p>This is a local child component</p>'
}

var app = new Vue({
	el: '#godol',
	data: {
		message: 'This is a parent component'
	},
	components:{
		'todo-list' : cmp
	}
	
});   