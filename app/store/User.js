Ext.define("myapp.store.User", {
	extends:"Ext.data.Store", 
	model:"myapp.model.User",
	data:[
		{name:"dpler", age:31, phone:"13816612961"},
		{name:"欢～", age:33, phone:"13816612962"}
	]
})