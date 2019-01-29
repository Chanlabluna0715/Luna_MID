function JSON(){

	let xhttp= XMLHTTPRequest();

	let data = getElementsById('values');

	xhttp.onreadystate=function {
	if (xhttp.onreadystate=4 && xhttpstatus=200)

		let data =JSON.parse(xhttp.response);

		for (let i=0,i<data.length,i++);

		// body...
	}
xhttp.open("Get","https://jsonplaceholder.typicode.com/tools",true);
xhttp.send();

}
}