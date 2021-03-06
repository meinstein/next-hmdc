import { fonts, colors } from '../styles'
import { Container, Head, H1, Text, Small, Anchor } from '../components'
import { getInitialProps } from '../util'

const styles = {
	img: {
		maxWidth: '100%',
		height: 'auto'
	}
}

const About = ({ pathname }) => (
	<Container pathname={pathname}>
		<Head />
		<div className="about-view-container">
			<div className="about-view-section margin-top">
				<H1>Moms are awesome.</H1>
				<H1>For real, honest reasons.</H1>
				<Text style={{ marginTop: 20 }}>
					But all the cards you find at the store are just a bunch of sappy,
					generic bullshit.
				</Text>
				<Text style={{ marginTop: 20 }}>
					This Mother’s Day, tell your mom why you really love her. And get
					honest with the woman who taught you just how important honesty is.
				</Text>
				<Small style={{ marginTop: 20 }}>
					Cards by{' '}
					<Anchor href="http://www.clarejensen.com/">Clare Jensen</Anchor> and{' '}
					<Anchor href="http://www.taylormblack.com/">Taylor Black</Anchor>
				</Small>
				<Small>
					Website by{' '}
					<Anchor href="https://github.com/meinstein">Max Einstein</Anchor>
				</Small>
				<Small style={{ marginBottom: 20 }}>
					Fonts: Ohno Blazeface Italic from{' '}
					<Anchor href="http://www.ohnotype.co/">Ohno Type Co.</Anchor> and
					Lauweriks Regular by{' '}
					<Anchor href="http://nicksherman.com/">Nick Sherman</Anchor>
				</Small>
			</div>
			<div className="about-view-section">
				<img src="/static/about/clare.jpg" style={styles.img} />
				<Small style={{ margin: '20px 0' }}>
					Mary Clare, You’ve been the calm to my storm since day one. Love,
					Clare
				</Small>
			</div>
			<div className="about-view-section">
				<img src="/static/about/taylor.jpg" style={styles.img} />
				<Small style={{ marginTop: 20 }}>
					Julie, Thanks for the chill AF upbringing.
				</Small>
				<Small style={{ marginBottom: 20 }}>Love, Taylor</Small>
			</div>
		</div>
	</Container>
)

About.getInitialProps = getInitialProps

export default About
