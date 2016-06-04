angular.module('todoApp', [])   					//var todoApp = angular.module('todoApp',[]) //todoApp.controller
.controller('todoController', function (){
	var todo = this;
	todo.list = [
		{text:'Aprender Angular',done: true},
		{text:'Hacer la tarea.',done: false}
	];
});				


