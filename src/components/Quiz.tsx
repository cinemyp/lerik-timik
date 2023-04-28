import React from 'react'
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
  return (
    <Survey model={survey} />
  )
}

export default Quiz