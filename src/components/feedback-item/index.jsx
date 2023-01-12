import { FaTimes } from 'react-icons/fa'
import Card from '/src/components/shared/card/index'

const FeedbackItem = ({ item, handleDelete }) => {
	const { id, rating, text } = item

	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button
				onClick={() => handleDelete(id)}
				className='close'
			>
				<FaTimes color='purple' />
			</button>
			<div className='txt-display'>{text}</div>
		</Card>
	)
}
export default FeedbackItem
