import React from 'react';
import {Box} from "@mui/material";
import {AnswerInterface, QuestionInterface} from "../../../../../models";
import PreviewAnswer from "./PreviewAnswer";

interface PreviewProps {
    title: string,
    placeholder: string,
    question: QuestionInterface,
    numberOfQuestions: number,
    key: number,
}

const Preview = ({title, placeholder, question, numberOfQuestions}: PreviewProps) => {
    return (
        <Box className={'rounded-md border border-black p-5 mt-5 w-2/5 break-words'}>
            <p className={'font-bold text-lg leading-6 text-center '}>{title ? title : placeholder.replace('Например:', '')}</p>
            <Box className={'border rounded-md mt-3'}>
                <p className={'font-sans mr-3 mt-1 text-right'}>Вопрос <span className={'font-bold text-lg font-sans'}>{question.id}</span> из <span className={'font-bold text-lg font-sans'}>{numberOfQuestions}</span></p>
                <Box className={'p-5 mt-3'}>
                    <p className={'text-center font-bold'}>{question.questionText ? question.questionText : question.questionPlaceholder.replace('Например:', '')}</p>
                    <Box>
                        {question.answers.map(answer => {
                            return (
                                <PreviewAnswer
                                    multipleAnswers={question.multipleAnswers}
                                    key={answer.id}
                                    answer={answer}
                                />
                            )
                        })}
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Preview;