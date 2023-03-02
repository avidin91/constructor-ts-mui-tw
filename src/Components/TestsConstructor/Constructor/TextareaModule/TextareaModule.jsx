import React from 'react';
import "./TextareaModule.module.css";
import {changeTheoreticalPartText} from "../../../../store/testConstructorStore/testConstructorSlice";
import {useDispatch} from "react-redux";

const TextareaModule = ({
                            id,
                            questionId,
                            changeTitleText,
                            changeQuestionText,
                            valueText,
                            nameText,
                            idText,
                            rowsCount,
                            placeholderText,
                        }) => {

    // Функция checkPropId проверяет какие пришли пропсы, и определяет, какую менять textarea
    const checkPropId = function (e) {
        if (id === 'testTitleText') {
            const text = e.target.value
            return changeTitleText({text})
        } if (id === `question=${questionId}`) {
            const id = questionId
            const text = e.target.value
            return changeQuestionText({id, text})
        } if (id === 'theoretical') {
            const text = e.target.value
            return dispatch(changeTheoreticalPartText({text, questionId}))
        }
    }

    const dispatch = useDispatch();

    return (

        <textarea
            name={nameText}
            id={idText}
            cols="93"
            rows={rowsCount}
            minLength='1'
            maxLength='1000'
            required={true}
            placeholder={placeholderText}
            value={valueText}
            onChange={(e) => checkPropId(e)}
        >

        </textarea>
    );
};

export default TextareaModule;