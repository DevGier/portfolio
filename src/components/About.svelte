<section class="about">
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-12 offset-md-2">
				<h2>
					My name is <span>Tim de Gier</span>
				</h2>
				<p>
					I am a 21 year old Frontend Developer from the Netherlands. I currently have more than 5
					years of experience as a Frontend Developer. This includes making, improving or rebuilding
					entire websites. I loving working on exciting new projects and continuously learning new
					and complex technologies.
				</p>
			</div>
		</div>

		<div class="row">
			<div class="col-12">
				<div class="cards">
					<div class="card">
						<img src="images/HTML-logo.svg" alt="HTML" />
					</div>
					<div class="card">
						<img src="images/SASS-logo.svg" alt="SASS" />
					</div>
					<div class="card">
						<img src="images/TypeScript-logo.svg" alt="SASS" />
					</div>
					<div class="card">
						<img src="images/React-logo.svg" alt="React" />
					</div>
					<div class="card">
						<img src="images/Vue-logo.svg" alt="Vue" />
					</div>
					<div class="card">
						<img src="images/Svelte-logo.svg" alt="Svelte" />
					</div>
					<div class="card">
						<img src="images/PHP-logo.svg" alt="PHP" />
					</div>
					<div class="card">
						<img src="images/Tailwind-logo.svg" alt="Tailwind" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/abstracts/variables';
	@import '../styles/abstracts/functions';

	.about {
		padding-block: 80px;
		background-color: #000;

		h2 {
			text-align: center;
			font-size: rem(40px);
			span {
				color: $purple;
			}
			margin-bottom: 24px;
		}

		p {
			text-align: center;
			line-height: 30px;
		}

		.cards {
			margin-block: 40px;

			display: flex;
			align-items: center;
			justify-content: center;
			gap: 40px;
			flex-wrap: wrap;

			.card {
				background-image: linear-gradient(
					to bottom right,
					lighten($black, 15%),
					lighten($black, 5%)
				);
				padding: 16px;
				flex: 0 0 calc(20% - 40px);
				aspect-ratio: 1/1;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 16px;

				@media (max-width: 768px) {
					flex: 0 0 calc(50% - 40px);
				}

				transform: perspective(800px) rotateY(25deg) scale(0.7) rotateX(15deg);
				transition: 0.2s ease all;

				&:hover {
					transform: perspective(800px) rotateY(-15deg) rotateX(10deg) scale(1);
					opacity: 1;
				}

				img {
					width: 100%;
				}
			}
		}
	}
</style>
