import { useState } from 'react'
import Header from './components/header/index'
import FeedbackForm from './components/feedback-form/index'
import FeedbackStats from './components/feedback-stats/index'
import FeedbackList from './components/feedback-list/index'
import feedbackData from './data/feedbackData'

function App() {
	const [feedback, setFeedback] = useState(feedbackData)

	const deleteFeedback = id => {
		window.confirm('Are you sure you want to delete?') &&
			setFeedback(feedback.filter(item => item.id !== id))
	}

	return (
		<>
			<Header text='Feedback UI' />
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats feedback={feedback} />
				<FeedbackList
					feedback={feedback}
					handleDelete={deleteFeedback}
				/>
			</div>
		</>
	)
}

export default App
