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
            name: "startdate",
            title: "На какой вечеринке мы познакомились?",
            choices: [
                "Clan Capkan",
                "Student Party",
                "Казантип",
                "Roots"
            ],
            correctAnswer: "Roots"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "caramel",
            title: "Что на первых свиданиях я приготовил для тебя, чтобы удивить?",
            choicesOrder: "random",
            choices: [
                "Соленая карамель",
                "Паста",
                "Эчпочмаки"
            ],
            correctAnswer: "Соленая карамель"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "firstphotoplace",
            title: "В каком месте мы сделали первое совместное фото?",
            choicesOrder: "random",
            choices: [
                "У тебя",
                "В универе",
                "В Рокко",
                "У меня"
            ],
            correctAnswer: "В универе"
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
