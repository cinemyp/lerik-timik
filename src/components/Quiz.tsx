import React from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import { surveyJson } from './questions'
import { bootstrapMaterialThemeName } from "survey-core/plugins/bootstrap-material-integration";
import { StylesManager } from 'survey-core';

const survey = new Model(surveyJson)
const css = {
  container: 'page-body',
  bodyContainer: 'page-body__container',
}
survey.css = css

StylesManager.applyTheme(bootstrapMaterialThemeName);

function Quiz() {
  return (
    <Survey model={survey} />
  )
}

export default Quiz