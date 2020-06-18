var app = new Vue({
	el: '#app',
	data:{
		message: 'Hello Vue.js',
		godol: '고돌이',
		uid: '10',
		flag: false  
	},
	methods:{
		clickBtn(){
			console.log("hi");
		},
		eventMethod(){
			alert('hi');
		}  
	}
});