import React from 'react';
import {Box, Container, FormGroup} from "@mui/material";
import classes from './ConstructorMaterialUI.module.css';

const ConstructorMaterialUi = () => {
    return (
        <Container maxWidth="xl" sx={{paddingTop: 19,}}  className={'border-l border-r border-b-gray-300'}>
            <p className={classes.title}>Консутруктор тестов</p>
            <Box className={'border rounded p-5 shadow-2xl m-5 bg-white'}>
                <p className={classes.name}>Заполните поля для составления теста</p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur exercitationem expedita libero modi odit suscipit. Consequuntur cum doloribus error esse expedita neque odio officia possimus quidem repellendus, sint velit veritatis, voluptatibus! Aliquid aspernatur blanditiis debitis est eveniet, fugit laudantium molestias neque nobis officia optio quaerat quidem quis quo quos rem sunt veritatis vero voluptatem voluptatibus! Adipisci aliquam, eligendi ex exercitationem facere facilis fugiat harum in iure maiores maxime obcaecati pariatur possimus quae quasi, qui reiciendis repudiandae saepe! Ab dolor in molestias nemo ratione rem voluptatum. Beatae delectus dolore est explicabo harum itaque laborum laudantium libero minima minus neque nihil odit, officia provident quis recusandae sit voluptas? Dignissimos esse rem sed? Amet culpa dolor esse, est in natus officiis placeat? Architecto, aut, corporis cupiditate deleniti dicta distinctio ea eaque eos et expedita harum ipsam iure magnam praesentium recusandae? Adipisci, animi asperiores consequatur cum cumque debitis dicta eum facilis hic laboriosam libero maxime minus nesciunt nulla omnis quibusdam ratione recusandae repellendus sequi tempora temporibus velit voluptatum! Adipisci aliquam asperiores blanditiis, consectetur consequuntur corporis debitis delectus deleniti doloremque dolores dolorum fugit id incidunt inventore laboriosam libero officiis provident, quas quos reiciendis rem sequi similique ullam unde voluptate! A accusantium consectetur quasi quo.
            </Box>
            <FormGroup>

            </FormGroup>
        </Container>
    );
};

export default ConstructorMaterialUi;