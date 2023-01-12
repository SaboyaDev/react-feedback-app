import FeedbackItem from '/src/components/feedback-item/index'

const FeedbackList = ({ feedback, handleDelete }) => {
	return (
		<div>
			{feedback.length === 0 ? (
				<p>No Feedback Yet</p>
			) : (
				feedback.map(item => (
					<FeedbackItem
						key={item.id}
						item={item}
						handleDelete={handleDelete}
					/>
				))
			)}
		</div>
	)
}
export default FeedbackList
