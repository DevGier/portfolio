<section>
	<div class="hero">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<h1>I'm <span>&lt;h1&gt;</span>Tim<span>&lt;/h1&gt;</span></h1>
					<h3>Frontend Developer with a love for programming.</h3>
					<a href="#about" class="btn btn--primary">Let's have a chat!</a>
				</div>

				<div class="col-md-6 hero__image-column">
					<div class="card"><img src="/images/tim.jpeg" alt="Tim de Gier" /></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/abstracts/variables';
	@import '../styles/abstracts/functions';
	.hero {
		height: 100vh;
		display: flex;
		align-items: center;
		h1 {
			color: $white;
			font-size: rem(48px);
			margin: 0;

			@media (min-width: 768px) {
				font-size: rem(64px);
			}

			span {
				color: $purple;
			}
		}

		h3 {
			font-size: rem(28px);
			font-weight: normal;
			margin: 24px 0 40px;
		}

		&__image-column {
			@media (max-width: 768px) {
				display: none;
			}
		}

		.card {
			position: relative;
			top: 25px;
			animation-name: updown;
			animation-duration: 6s;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;

			//background-color: $white;
			//padding: 32px;

			overflow: hidden;
			transform: perspective(800px) rotateY(-20deg) scale(0.7) rotateX(15deg);
			transition: 0.2s ease all;

			img {
				width: 100%;
				height: 100%;
				border-radius: 16px;
				aspect-ratio: 1/1;
				object-fit: cover;
				object-position: top;
			}
		}

		.row {
			align-items: center;
		}

		@keyframes updown {
			0% {
				top: 25px;
			}
			50% {
				top: -25px;
			}
			100% {
				top: 25px;
			}
		}
	}
</style>
