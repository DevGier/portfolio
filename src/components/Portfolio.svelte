<script>
	import Lazy from 'svelte-lazy';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	import '@splidejs/svelte-splide/css';
	import '@splidejs/svelte-splide/css/skyblue';
	import '@splidejs/svelte-splide/css/sea-green';
	import '@splidejs/svelte-splide/css/core';
</script>

<section class="portfolio" id="portfolio">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h2>
					Projects <span>I've worked on</span>
				</h2>
				<h4>Some of the big names I've helped</h4>
			</div>
		</div>
	</div>

	<div class="container-fluid">
		<Splide
			aria-label="My projects"
			class="portfolio"
			options={{
				rewind: true,
				gap: '40px',
				perPage: 3,
				arrows: false,
				breakpoints: {
					768: {
						perPage: 1.5
					}
				},
				pagination: false
			}}
		>
			<SplideSlide>
				<div class="slide">
					<Lazy><img src="images/dosvolleybal-website.png" alt="DOS Volleybal" /></Lazy>
					<p>
						<b>DOS Volleybal</b><br />
						<i class="text-sky-500">At my company H1 Media.</i><br />
						Volleybal website built with Roots Sage and implemented API integrations with Nevobo.
					</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="slide">
					<Lazy><img src="images/aryza-website.png" alt="Aryza website" /></Lazy>
					<p>
						<b>Aryza</b><br />
						<i class="text-orange-500">During my career at Social Brothers.</i><br />
						International company website built with a custom theme and 10+ languages.
					</p>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="slide">
					<Lazy><img src="images/abnetten-website.png" alt="ABnetten website" /></Lazy>
					<p>
						<b>ABnetten</b><br />
						<i class="text-sky-500">During my career at MD Webbureau.</i><br />
						Big webshop built with Magento. Almost completely customised the theme for this website.
					</p>
				</div>
			</SplideSlide>
		</Splide>
	</div>
</section>

<style lang="scss">
	@import '../styles/abstracts/variables';
	@import '../styles/abstracts/functions';

	.slide {
		background-color: $white;
		border-radius: 8px;
		overflow: hidden;

		p {
			padding: 24px;

			i {
				line-height: 40px;
			}
		}
	}

	img {
		width: 100%;
	}

	.portfolio {
		overflow: visible !important;
		background-color: #000;
		padding-block: 80px;

		h2 {
			text-align: center;
			font-size: rem(40px);
			margin-bottom: 0;
			span {
				color: $purple;
			}
		}

		h4 {
			text-align: center;
			font-size: rem(24px);
			span {
				color: $purple;
			}
			margin-bottom: 24px;
		}

		.splide__track {
			overflow: visible !important;
		}

		.slide {
			transform: perspective(800px) rotateY(25deg) scale(0.8) rotateX(10deg);
			transition: 0.2s ease all;

			&:hover {
				transform: perspective(800px) rotateY(0deg) rotateX(0deg) scale(1);
			}
			color: #000;
		}
	}
</style>
