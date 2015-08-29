function myScript(){
	var input = document.getElementById('tInput');
    var container = document.getElementById("container");

    $(document).on("keypress", 'form', function (e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
    	console.log(input.value);
    	
    	var para = document.createElement("P");                     
		var t = document.createTextNode(input.value);      
		para.appendChild(t);                                       
		container.appendChild(para);

		container.scrollTop = container.scrollHeight;  

    	this.reset();
        e.preventDefault();
        return false;
    }
	});
    
    // input.addEventListener( 'keypress', checkName, false );
}