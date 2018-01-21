// example-fetcher.js 

$(document).ready(function() {

	var menu_exmpl_dropdown = document.getElementById('menus-dropdown');
	var menu_exmpl_links = menu_exmpl_dropdown.children;
	
	for(let i = 0; i < menu_exmpl_links.length; i++) {
	
		menu_exmpl_links[i].addEventListener('click', function() {
	
			let link_text = this.innerHTML;
			let exmpl_path = undefined;
			let exmpl_css = document.createElement('link');
			if(link_text == 'Icon Bars') {
				// LEFT OFF HER: Not working yet. The link does get appended
				// but doesnt style the example. Might need to put into the onreadystatechange 
				// function below to work without a page refresh.
				//exmpl_css.setAttribute('href', 'examples/menus/css/icon-bars.css');
				//document.head.appendChild(exmpl_css);
				exmpl_path = 'examples/menus/icon-bars.html';
				var a = new exampleSwitcher(exmpl_path);
				a.switchExample();
			} else if(link_text == 'Menu Icons') {

			}
	
		});
	
	}

	var exmpl_frame =  document.getElementById('example-frame');

	var exampleSwitcher = function(exmpl_path) {
				this.exmpl_path = exmpl_path;
		this.switchExample = function() {
			var xhttp_req = undefined;
			if(window.XMLHttpRequest) {
				xhttp_req = new XMLHttpRequest();
			} else {
				xhttp_req = new ActiveXObject('Microsoft.XMLHTTP');
			}	
			xhttp_req.open('GET', this.exmpl_path, true);
			xhttp_req.onreadystatechange = function() {

				if(xhttp_req.readyState == 4 && xhttp_req.status == 200) {
					exmpl_frame.innerHTML = this.responseText;
				} else {
					// could not load example
				}
			}
			xhttp_req.send();
		}
	
	}

});