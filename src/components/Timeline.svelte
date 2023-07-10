<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
</script>

<section class="timeline" id="work">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h2>Work Experience</h2>

				<Timeline position="alternate">
					<TimelineItem>
						<TimelineOppositeContent slot="opposite-content">
							<p>Okt 2022 - Jul 2023</p>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot
								style={'width: 80px; height: 80px; background-color: #fff0;display: inline-block;'}
							>
								<img
									src="images/sb-logo.png"
									style={'border-radius: 8px'}
									alt="Social Brothers Logo"
								/>
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<div class="content">
								<h3>Junior WordPress Developer</h3>
								<p>WP Brothers</p>

								<ul>
									<li>
										Developing WordPress websites using various tools such ass SASS and TypeScript.
									</li>
									<li>
										Working with different WordPress themes that use Symfony's Twig or Laravel's
										Blade.
									</li>
									<li>Learning Svelte and many new tools for</li>
								</ul>
							</div>
						</TimelineContent>
					</TimelineItem>

					<TimelineItem>
						<TimelineOppositeContent slot="opposite-content">
							<p class="text-left">Okt 2019 - Jul 2022</p>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot
								style={'width: 80px; height: 80px; background-color: #fff0;display: inline-block;'}
							>
								<img src="images/md-logo.png" alt="MD Webbureau Logo" />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<div class="content">
								<h3>WordPress Developer</h3>
								<p>MD Webbureau</p>

								<ul>
									<li>Developing WordPress websites using various different themes and plugins.</li>
									<li>Developing and maintaining Magento 2 websites.</li>
									<li>Maintaining and updating existing websites.</li>
								</ul>
							</div>
						</TimelineContent>
					</TimelineItem>

					<TimelineItem>
						<TimelineOppositeContent slot="opposite-content">
							<p>Feb 2021 - Jun 2021</p>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot
								style={'width: 80px; height: 80px; background-color: #fff0;display: inline-block;'}
							>
								<img src="images/gi-logo.png" alt="GetInteractive Logo" />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<div class="content">
								<h3>Internship WordPress Developer</h3>
								<p>Get Interactive</p>

								<ul>
									<li>
										Developing WordPress websites using tools such as Vue and compilers for SASS.
									</li>
									<li>Learning to work with scrum in a team of approximately 15 people.</li>
								</ul>
							</div>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/abstracts/variables';
	@import '../styles/abstracts/functions';

	.timeline {
		padding-block: 80px;
	}

	h2 {
		text-align: center;
		font-size: rem(40px);
		span {
			color: $purple;
		}
		margin-bottom: 40px;
	}

	img {
		width: 100%;
		height: auto;
	}

	h3 {
		color: $white;
		font-weight: bold;
		font-size: rem(24px);
		margin-bottom: 12px;
	}
	p {
		color: #ccc;
	}

	ul {
		list-style-type: disc;
		margin: 28px 20px 20px 20px;
		padding: 0;
		li {
			color: $white;
			margin-block: 8px;
		}
	}

	.content {
		background-color: rgba(79, 70, 229, 0.3);
		border-radius: 8px;
		padding: 32px;
		height: fit-content;
		text-align: left;
		margin-bottom: 40px;
	}
</style>
