import React from 'react'
// local
import {
	Card,
	Button,
	Container,
	Head,
	H1,
	Text,
	Small,
	Anchor
} from '../../components'
import styles from './styles'

const BASE_URL = 'https://honestmothersdaycards.herokuapp.com'

const Instructions = () => (
	<div style={{ marginTop: 24 }}>
		<Small>Instructions:</Small>
		<Small>Print a foldable card file.</Small>
		<Small>Download to share on Instagram.</Small>
		<Small>Email a full-frame image.</Small>
		<Small>Or share on Facebook and Twitter.</Small>
	</div>
)

class CardDetails extends React.Component {
	render() {
		const { card, pathname } = this.props
		return (
			<Container>
				<Head
					title={card.title}
					ogImage={`/static/cards/png/${card.link}.png`}
					ogImageWidth={1275}
					ogImageHeight={1650}
					url={`${BASE_URL}${pathname}`}
				>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/styles/card-details-container.css"
					/>
				</Head>
				<div className="card-details-container">
					<div className="card-details-section">
						<Card {...card} />
					</div>
					{/* spacer */}
					<div style={styles.textContainer} className="card-details-section">
						<H1>{`"${card.title}"`}</H1>
						<Text style={{ marginTop: 20 }}>{card.desc}</Text>
						<div style={{ marginTop: 24 }}>
							<Small>
								Designed by{' '}
								<Anchor href="http://www.clarejensen.com/">Clare Jensen</Anchor>
							</Small>
							<Small>
								Written by{' '}
								<Anchor href="http://www.taylormblack.com/">
									Taylor Black
								</Anchor>
							</Small>
							<Small>
								Font: {card.font_name} by{' '}
								<Anchor
									href={card.font_creator_link}
									style={{ textDecoration: 'underline' }}
								>
									{card.font_creator}
								</Anchor>
							</Small>
							<Small />
							<Small />
						</div>
						<Instructions />
						<div style={styles.buttons}>
							<a
								href={`/static/cards/pdf/${card.link}.pdf`}
								target="_blank"
								style={{ ...styles.btn, marginRight: 12 }}
							>
								<Button>
									<div style={styles.btnTxt}>print</div>
								</Button>
							</a>
							<a
								href={`/static/cards/jpg/${card.link}.jpg`}
								download={card.link}
								style={{ ...styles.btn, marginRight: 12 }}
							>
								<Button>
									<div style={styles.btnTxt}>download</div>
								</Button>
							</a>
							<a href={this._href} style={styles.btn}>
								<Button>
									<div style={styles.btnTxt}>email</div>
								</Button>
							</a>
						</div>
						<div style={styles.socialMedia}>
							<a
								target="_blank"
								href={`https://www.facebook.com/sharer?u=${BASE_URL}/card/${
									card.link
								}`}
								style={{ ...styles.icon, marginRight: 6 }}
							>
								<i className="fab fa-facebook-f" />
							</a>

							<a
								target="_blank"
								href={`https://www.twitter.com/share?text=${
									card.title
								}&url=${BASE_URL}/card/${card.link}`}
								style={{ ...styles.icon, marginRight: 6 }}
							>
								<i className="fab fa-twitter" />
							</a>
						</div>
					</div>
				</div>
			</Container>
		)
	}

	get _href() {
		const { card } = this.props
		const newLine = '%0D%0A'
		const link = `${BASE_URL}/card/${card.link}`
		return `mailto:?subject=Happy Mother's Day&body=${
			card.title
		}${newLine}${newLine}${link}`
	}
}

export default CardDetails
