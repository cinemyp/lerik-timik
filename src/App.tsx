import React, {useCallback, useEffect} from 'react';
import './App.css';
import 'survey-core/defaultV2.min.css';
import {Model} from 'survey-core';
import {Survey} from "survey-react-ui";

const surveyJson = {
    elements: [{
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
    }, {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
    }]
};

const survey = new Model(surveyJson);

function App() {
    const surveyComplete = useCallback((sender: unknown) => {
        console.log(sender);
    }, []);


    useEffect(() => {
        survey.onComplete.add(surveyComplete);

        return () => {
            survey.onComplete.clear();
        };
    }, []);


    return (
        <Survey model={survey}/>
    );
}

export default App;
