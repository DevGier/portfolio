<section class="contact" id="contact">
	<div class="container">
		<div class="row">
			<div class="col-12"><h2>Contact me</h2></div>

			<div class="col-md-4">
				<div class="card">
					<h4 class="text-white text-2xl text-center font-semibold">Phone</h4>
					<a href="tel:0618907850">+31 6 18907850</a>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card">
					<h4 class="text-white text-2xl text-center font-semibold">E-mail</h4>
					<a href="mailto:timdegier46@gmail.com">timdegier46@gmail.com</a>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card">
					<h4 class="text-white text-2xl text-center font-semibold">LinkedIn</h4>
					<a href="https://www.linkedin.com/in/tim-de-gier/">Tim de Gier</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/abstracts/variables';
	@import '../styles/abstracts/functions';
	.card {
		background-color: rgba(79, 70, 229, 0.3);
		border-radius: 8px;
		padding: 32px;
		height: fit-content;
		text-align: left;
		margin-bottom: 40px;
		transform: scale(1);
		transition: 0.2s ease;

		&:hover {
			transform: scale(1.05);
		}

		h4,
		a {
			color: #fff;
			text-align: center;
			display: block;
		}

		h4 {
			margin-block: 0 20px;
			font-size: rem(24px);
		}
	}

	.contact {
		padding-block: 80px;
	}

	h2 {
		text-align: center;
		font-size: rem(40px);
		margin-bottom: 40px;
		span {
			color: $purple;
		}
	}
</style>
