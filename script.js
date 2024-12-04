const ActivateAncorNav = document.querySelectorAll('.ancor');

ActivateAncorNav.forEach(ele => {
    ele.addEventListener('click', () => {   
        ActivateAncorNav.forEach(link => link.classList.remove('active'));
        ele.classList.add('active');
    });
});
