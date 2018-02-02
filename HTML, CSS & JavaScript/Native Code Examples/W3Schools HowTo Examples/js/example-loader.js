// example-loader.js

$(document).ready(function() {
		var getExampleDataToLoad = function() {
			
			var menu_exmpl_dropdown = document.getElementById('menus-dropdown');
			var menu_exmpl_links = menu_exmpl_dropdown.children;
			
			for(let i = 0; i < menu_exmpl_links.length; i++) {
				menu_exmpl_links[i].addEventListener('click', function() {
					
					const exmpl_name = this.innerHTML;
					let exmpl_path = undefined;
					let exmpl_css_path = undefined;
					let exmpl_code_path = undefined;
					if(exmpl_name == 'Icon Bars') {
						exmpl_path = 'examples/menus/icon-bars.html';
						exmpl_css_path = 'examples/menus/css/icon-bars.css';
						exmpl_code_path = 'examples/menus/example_code/icon-bars-example-code.html';
					} else if(exmpl_name == 'Menu Icons') {
						exmpl_path = 'examples/menus/menu-icons.html';
						exmpl_css_path = 'examples/menus/css/menu-icons.css';
						exmpl_code_path = 'examples/menus/example_code/menu-icons-example-code.html';
					}		
			
					var loader = new Loader(exmpl_name, exmpl_path, exmpl_css_path, exmpl_code_path);
					loader.loadExampleTitle()
					loader.loadExample();
					loader.loadCodeExample();
				});
			}
		} // function getExampleDataToLoad();

		var Loader = function(exmpl_name, exmpl_path, exmpl_css_path, exmpl_code_path) {
			
			let _self = this;		
			
			this.exmpl_name = exmpl_name;
			this.exmpl_path = exmpl_path;
			this.exmpl_css_path = exmpl_css_path;
			this.exmpl_code_path = exmpl_code_path;
			this.exmpl_title = document.getElementById('example-title');
			this.exmpl_frame = 	document.getElementById('example-frame');
			this.exmpl_code_frame = document.getElementById('example-code-frame');
			
			this.loadExampleTitle = function() {
				this.exmpl_title.innerHTML = this.exmpl_name;
			}
			
			this.loadExample = function() {
				var xhttp_req = undefined;
				if(window.XMLHttpRequest) {
					xhttp_req = new XMLHttpRequest();
				} else {
					xhttp_req = new ActiveXObject('Microsoft.XMLHTTP');
				}	
				xhttp_req.onreadystatechange = function() {
		
					if(xhttp_req.readyState == 4 && xhttp_req.status == 200) {
						$('<link rel="stylesheet" type="text/css" href="' + _self.exmpl_css_path + '" >').appendTo('head');
						_self.exmpl_frame.innerHTML = this.responseText;
					
					} else {
						// could not load example
					}
				}
				xhttp_req.open('GET', this.exmpl_path, true);
				xhttp_req.send();
			} // this.loadExample();

			this.loadCodeExample = function() {
				var xhttp_req = undefined;
				if(window.XMLHttpRequest) {
					xhttp_req = new XMLHttpRequest();
				} else {
					xhttp_req = new ActiveXObject('Microsoft.XMLHTTP');
				}	
				xhttp_req.onreadystatechange = function() {
		
					if(xhttp_req.readyState == 4 && xhttp_req.status == 200) {
						//$('<link rel="stylesheet" type="text/css" href="' + _self.exmpl_css_path + '" >').appendTo('head');
						_self.exmpl_code_frame.innerHTML = this.responseText;
					} else {
						// could not load example
					}
				}
				xhttp_req.open('GET', this.exmpl_code_path, true);
				xhttp_req.send();
			}
		} // var Loader = function(exmpl_name, exmpl_path, exmpl_css_path);

	function init() {
		getExampleDataToLoad();
	}

	init();

}); // $(document).ready(function();