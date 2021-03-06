import NextHead from 'next/head'
import { string } from 'prop-types'
import { BASE_URL } from '../CardDetails'

const defaultTitle = "Honest Mother's Day Cards"
const defaultDescription =
	"Mom's are awesome. For real, honest reasons. This Mother's Day, tell your mom why you really love her with a free, honest Mother's Day card."
const defaultOGURL = BASE_URL
const defaultOGImage = `${BASE_URL}/static/cards/social/skull.jpg`
const defaultOGImageWidth = 1000
const defaultOGImageHeight = 651

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>Honest Mother's Day Cards</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/static/favicon.png" />
		<link
			rel="stylesheet"
			type="text/css"
			href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
		/>
		<link rel="stylesheet" type="text/css" href="/static/styles/styles.css" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || defaultTitle} />
		<meta property="twitter:title" content={props.title || defaultTitle} />
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta
			property="og:image:width"
			content={props.ogImageWidth || defaultOGImageWidth}
		/>
		<meta
			property="og:image:height"
			content={props.ogImageHeight || defaultOGImageHeight}
		/>

		{props.children}
	</NextHead>
)

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string
}

export default Head
