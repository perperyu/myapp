Ext.define("myapp.model.User", {
	extends:"Ext.data.Model",
	fields:[
		{name:"name", type:"string"},
		{name:"age", type:"int"},
		{name:"phone", type:"string"}
	]
})