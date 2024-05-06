import React from 'react'

import BackButton from '../components/BackButton'
import Heading from '../components/Heading'
import Form from '../components/QuizApp/Form'

function QuizApp() {
  return (
    <div className='container'>
      <Heading text={'The Quiz App'}/>
      <Form/>
     
      <BackButton />
    </div>
  )
}

export default QuizApp