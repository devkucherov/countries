function mobileNav() {
		// Mobile nav button
		const navBtnOpen = document.querySelector('#modalOpen');
		const navBtnClose = document.querySelector('#modalClose');

		const navOverlay = document.querySelector('#mobileNavOverlay');
		const nav = document.querySelector('#mobileNav');

		navBtnOpen.onclick = tooggleMobileNav;
		navBtnClose.onclick = tooggleMobileNav;
		navOverlay.onclick = tooggleMobileNav;

		function tooggleMobileNav () {
			navOverlay.classList.toggle('mobile-nav-overlay--open');
			nav.classList.toggle('mobile-nav--open');
			document.body.classList.toggle('no-scroll');
		}
}

export default mobileNav;