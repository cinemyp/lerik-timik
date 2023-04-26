import React, {useCallback, useEffect} from 'react';
import './App.css';
import 'survey-core/defaultV2.min.css';
import {Model} from 'survey-core';
import {Survey} from "survey-react-ui";

const surveyJson = {
    title: "Лерик и Тимик. История любви",
    firstPageIsStarted: true,
    startSurveyText: "Начать",
    pages: [{
        elements: [{
            type: "html",
            html: "Привет, Лерик!<br>Сегодня ровно год назад в ночь на <b>30 апреля</b> мы с тобой повстречались.<br> Я безумно рад, что тогда напился и набрался смелости подойти к тебе.<br>" +
                "Текила выветрилась, а <b>ты до сих пор в моих мыслях</b>.<br>" +
                "<br>Сегодня в годовщину нашего знакомства хочется проверить: помнишь ли ты как все начиналось?<br>" +
                "Будет 10 вопросов о наших отоношениях, а в конце будет... Секрет!<br>" +
                "Как будешь готова, нажми кнопку 'Начать'<br>" +
                "<br>Целую и крепко обнимаю, твой Тимик❤"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "civilwar",
            title: "When was the American Civil War?",
            choices: [
                "1796-1803", "1810-1814", "1861-1865", "1939-1945"
            ],
            correctAnswer: "1861-1865"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "libertyordeath",
            title: "Whose quote is this: \"Give me liberty, or give me death\"?",
            choicesOrder: "random",
            choices: [
                "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
            ],
            correctAnswer: "Patrick Henry"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "magnacarta",
            title: "What is Magna Carta?",
            choicesOrder: "random",
            choices: [
                "The foundation of the British parliamentary system",
                "The Great Seal of the monarchs of England",
                "The French Declaration of the Rights of Man",
                "The charter signed by the Pilgrims on the Mayflower"
            ],
            correctAnswer: "The foundation of the British parliamentary system"
        }]
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
