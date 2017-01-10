 
function doClick(e) {
	alert($.label.text);
	var row=[];
	//var v={};
	
	var v="aniket";
	row.push(Alloy.createController('templae_view',v).getView());
    $.need_view.appendRow(row);
   
}

$.index.open();
