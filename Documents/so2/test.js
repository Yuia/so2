var data;
if(window.XMLHttpRequest){
	var rawFile = new XMLHttpRequest();
		console.log(rawFile.readyState);
		console.log(rawFile.readyState);
	rawFile.onreadystatechange = function (){
		console.log(rawFile.readyState);
		if(rawFile.readyState == 4){
			data = rawFile.responseText;
			//document.write(data);
		}
	}
	rawFile.open("GET","file:///home/yuia/Documents/so2/sale.json",false);
	rawFile.send();
}

var saleJS = JSON.parse(data);

document.write(saleJS);

