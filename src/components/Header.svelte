<script lang="ts">
	import { onMount } from 'svelte';
	import Menu from './Menu.svelte';

	let menuActive = false;

	function toggleMenu() {
		const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;

		if (!menuActive) {
			mobileMenu.style.bottom = '16px';
			menuActive = true;
		} else {
			mobileMenu.style.bottom = '-160px';
			menuActive = false;
		}
	}

	onMount(() => {
		const header = document.querySelector('header');

		window.onscroll = () => {
			const curScroll = document.documentElement.scrollTop || document.body.scrollTop;
			if (curScroll > 0) {
				header?.classList.add('sticky');
			} else {
				header?.classList.remove('sticky');
			}
		};
	});
</script>

<header class="header">
	<div class="container">
		<div class="header__wrapper">
			<div class="header__logo">
				<img src="images/logo-light.svg" alt="" />
			</div>

			<div class="header__menu">
				<div class="menu-wrapper"><Menu /></div>
				<a href="#" class="header__mobile-toggle" on:click|preventDefault={toggleMenu}
					><i class="ri-menu-4-line" /></a
				>
			</div>
		</div>
	</div>
</header>

<div class="mobile-menu">
	<Menu />
	<a href="/cv.pdf" download class="btn btn--primary">Download CV </a>
</div>

<style lang="scss">
	@import '../styles/abstracts/variables';

	.header {
		padding-block: 24px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		right: 0;

		&__wrapper {
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: center;
		}

		&__menu {
			@media (max-width: 768px) {
				.menu-wrapper {
					display: none;
				}
			}
		}

		&__mobile-toggle {
			display: none;
			cursor: pointer;
			color: #fff;
			text-decoration: none;

			i {
				font-size: 24px;
			}

			@media (max-width: 768px) {
				display: block;
			}
		}
	}

	.mobile-menu {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;

		& > .btn {
			flex: 0 0 100%;
			border-radius: 50px;
		}

		overflow: hidden;

		@media (min-width: 768px) {
			display: none;
		}

		position: fixed;
		bottom: -160px;
		left: 50%;
		transform: translateX(-50%);
		box-sizing: border-box;
		padding: 0;
		width: fit-content;

		justify-content: center;
		transition: 0.2s ease;
	}
</style>
