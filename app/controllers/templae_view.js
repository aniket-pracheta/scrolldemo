// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = arguments[0] || {};

function fun(){
	alert("chal raha hai bhai..!");
}

// if(args.label1){
	// $.labelView1.value=args.label1;
// }
Ti.API.info(args);
if(args){
	Ti.API.info(args);
	$.labelView2.text=args;
}
