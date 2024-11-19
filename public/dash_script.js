const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


// Select the breadcrumb elements
const breadcrumbFirst = document.querySelector('#breadcrumb-first');
const breadcrumbSecond = document.querySelector('#breadcrumb-second');

// Initially hide all content except the dashboard
document.querySelectorAll('#main > section').forEach(section => {
    section.style.display = 'none';
});

// Select the "Tableau de bord" link and the content container
const dashboardLink = document.querySelector('#dashboard-link');
const Content1 = document.querySelector('#head-title');
const Content2 = document.querySelector('#order');
const Content3 = document.querySelector('#box-info');
const Content4 = document.querySelector('#quiz');

// Add click event listener for "Tableau de bord" link
dashboardLink.addEventListener('click', (e) => {
    e.preventDefault();

    // Hide all content sections
    document.querySelectorAll('#main > section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the dashboard content
    Content1.style.display = 'block';
    Content2.style.display = 'none';
    Content3.style.display = 'grid';
	Content4.style.display = 'block';
	
    // Update the breadcrumb
    breadcrumbFirst.textContent = 'Tableau de bord';
    breadcrumbSecond.textContent = 'Accueil';
});