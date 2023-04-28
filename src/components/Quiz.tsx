import React, { useCallback, useEffect } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import { surveyJson } from './questions'

const survey = new Model(surveyJson)
const css = {
  container: 'page-body',
  bodyContainer: 'page-body__container',
}
survey.css = css

function Quiz() {
  const surveyComplete = useCallback((sender: Model) => {
    console.log(sender)
  }, [])


  useEffect(() => {
    survey.onComplete.add(surveyComplete)

    return () => {
      survey.onComplete.clear()
    }
  }, [])


  return (
    <Survey model={survey} />
  )
}

export default Quiz