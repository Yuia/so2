if(window.XMLHttpRequest){
	var rawFile = new XMLHttpRequest();
		console.log(rawFile.readyState);
		console.log(rawFile.readyState);
	rawFile.onreadystatechange = function (){
		console.log(rawFile.readyState);
		if(rawFile.readyState == 4){
			var data = rawFile.responseText;
			document.write(data);
			document.write("hello js");
		}
	}
	rawFile.open("GET","file:///home/yuia/Documents/so2/sale.json",false);
	rawFile.send();
}

