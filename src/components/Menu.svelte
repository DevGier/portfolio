<div class="menu">
	<a href="#home"
		><span class="icon"><i class="ri-home-4-line" /></span><span class="text">Home</span></a
	>
	<a href="#about"
		><span class="icon"><i class="ri-user-line" /></span><span class="text">About</span></a
	>
	<a href="#work"
		><span class="icon"><i class="ri-suitcase-line" /></span><span class="text">Work</span></a
	>

	<a href="#portfolio"
		><span class="icon"><i class="ri-gallery-line" /></span><span class="text">Portfolio</span></a
	>
	<a href="#contact"
		><span class="icon"><i class="ri-phone-line" /></span><span class="text">Contact</span></a
	>
	<a href="/cv.pdf" download class="btn btn--primary">Download CV </a>
</div>

<style lang="scss">
	@import '../styles/abstracts/variables';
	.menu {
		display: flex;
		gap: 0;
		align-items: center;
		position: relative;
		z-index: 9999999;

		.text {
			display: none;
		}

		.btn {
			@media (max-width: 768px) {
				display: none;
			}
		}

		.icon {
			display: block;
			i {
				font-size: 24px;
			}
			padding: 16px 24px;
			border-radius: 50px;

			&:hover {
				background-color: #fff5;
			}
		}

		@media (max-width: 768px) {
			flex-direction: row;
			gap: 0;
			border-radius: 50px;
			position: relative;

			&:before {
				overflow: hidden;
				content: '';
				position: absolute;
				inset: 0;
				border-radius: 50px;
				z-index: -1;
				background-color: rgb(42, 42, 101);
			}
		}

		@media (min-width: 768px) {
			flex-direction: row;
			gap: 40px;

			.icon {
				display: none;
			}

			.text {
				display: block;
			}
		}

		a {
			color: #fff;
			font-weight: 500;
			text-decoration: none;
		}
	}
</style>
