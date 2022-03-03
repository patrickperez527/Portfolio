const theme = localStorage.getItem('theme');

if (theme == null) {
	setTheme('dark');
} else {
	setTheme(theme);
}

const themeDots = document.querySelectorAll('.theme-dot');

for (let i = 0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		const mode = this.dataset.mode;
		setTheme(mode);
	})
}

function setTheme(mode){
	if(mode == 'dark'){
		document.getElementById('theme-style').href = 'src/css/styles.css';
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'src/css/blue.css';
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'src/css/green.css';
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'src/css/purple.css';
	}

	if(mode == 'light'){
		document.getElementById('theme-style').href = 'src/css/light.css';
	}

	localStorage.setItem('theme', mode);
}