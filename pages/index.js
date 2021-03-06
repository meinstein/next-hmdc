import { Head, Card, Container } from '../components'
import { getInitialProps } from '../util'
import { colors } from '../styles'
import data from '../data'
import { PassThrough } from 'stream'

const styles = {
	gridContainer: {
		width: '100%',
		display: 'grid',
		gridGap: 24,
		gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))'
	}
}

const Home = ({ pathname }) => (
	<Container pathname={pathname}>
		<Head />
		<div style={{ flex: 1, width: '100%' }}>
			<section style={styles.gridContainer}>
				{data.map((cardData, idx) => (
					<a key={idx} href={`/card/${cardData.link}`}>
						<Card {...cardData} />
					</a>
				))}
			</section>
		</div>
	</Container>
)

Home.getInitialProps = getInitialProps

export default Home
