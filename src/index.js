$(function() {
    const btnNavClose = $('#btn-close-nav');
    const btnNavOpen = $('#btn-open-nav');
    const navCollapse = $('.navbar-collapsed');
    const navOpen = $('.nav-open');
    const sideBarWrap = $('.sidebar-wrap');
    
    btnNavClose.on('click', function () {
        btnNavOpen.toggleClass('show');
        navCollapse.toggleClass('show-flex');
        navOpen.toggleClass('show-flex');
        sideBarWrap.toggleClass('collapsed');
        
    });

    btnNavOpen.on('click', function () {
        $(this).toggleClass('show');
        navOpen.toggleClass('show-flex');
        navCollapse.toggleClass('show-flex');
        sideBarWrap.toggleClass('collapsed');
    });
    const closeNav = () => {
        
        
    };

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });
});