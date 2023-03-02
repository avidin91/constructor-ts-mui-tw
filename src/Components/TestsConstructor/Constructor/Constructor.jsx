import React from 'react';
import classes from "./Constructor.module.css";
import {useSelector} from "react-redux";
import ConstructorCheck from "./ConstructorCheck/ConstructorCheck";
import ConstructorButton from "../../Buttons/ConstructorButton/ConstructorButton";
import TextareaModule from "./TextareaModule/TextareaModule";
import Question from "./Question/Question";
import PreviewScreen from "../PreviewScreen/PreviewScreen";
import {useAppDispatch} from "../../../hooks";
import {
    changeQuestionText, changeTitleText, setTimer
} from "../../../store/testConstructorStore/testConstructorSlice";

// Компонента Constructor отрисовывает блок с конструктором
const Constructor = () => {
    const testConstructorState = useSelector(store => store.testConstructorStore)
    const questions = testConstructorState.questions;
    const dispatch = useAppDispatch()

    return (
        <div className={classes.constructor}>
            <p className={classes.constructorHeadP}>
                Заполните поля для составления теста
            </p>
            <form action="">
                <fieldset>
                    <legend>Введите название теста</legend>
                    <TextareaModule placeholderText={testConstructorState.testTitlePlaceholder}
                                    valueText={testConstructorState.testTitleText}
                                    rowsCount={3}
                                    nameText={"title"}
                                    idText={"title"}
                                    id={'testTitleText'}
                                    changeTitleText={(text) => dispatch(changeTitleText(text))}
                    />
                </fieldset>
                <ConstructorCheck
                    text={'Тест на время'}
                    id={'timer'}
                    forTime={testConstructorState.forTime}
                    setTimer={setTimer}
                />
            </form>
            <div>
                <form action="">
                    {questions.map(question => {
                        return <div key={question.id + 1000} className={classes.questionBlock}>
                            <Question
                                question={question}
                                changeQuestionText={(text) => dispatch(changeQuestionText(text))}
                                key={question.id}
                            />
                            <PreviewScreen
                                questionId={question.id}
                                question={question}
                                key={question.id + 100}
                            />
                        </div>

                    })}
                    <ConstructorButton
                        text={'Добавить вопрос'}
                    />
                </form>
            </div>

        </div>
    );
};

export default Constructor;