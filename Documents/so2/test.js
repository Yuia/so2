if(window.XMLHttpRequest){
}
//出品情報
var sale = loadFile("file:///home/yuia/Documents/so2/sale.json");
var saleJS = JSON.parse(sale);

//街情報
var area = JSON.parse(loadFile("file:///home/yuia/Documents/so2/area.json"));

console.log(saleJS);
console.log(area);
listSale();

function loadFile(fileName){
	var data
	var rawFile = new XMLHttpRequest();
	console.log(rawFile.readyState);
	console.log(rawFile.readyState);
	rawFile.onreadystatechange = function (){
		console.log(rawFile.readyState);
		if(rawFile.readyState == 4){
			data = rawFile.responseText;
		}
	}
	rawFile.open("GET",fileName,false);
	rawFile.send();
	return data;
}
function listSale(){
	var count = {};
	for(var i=0;i<saleJS.length;i++){
		if(count[saleJS[i].area_id] == null){
			count[saleJS[i].area_id] = 0;
		}
		count[saleJS[i].area_id]++;
	}	
	for(var key in count){
		document.write(area[key].name);
		document.write(count[key]);
		document.write("<br>");
	}
}

