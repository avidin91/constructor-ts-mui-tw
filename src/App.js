import {
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainScreen from "./Components/MainScreen/MainScreen";
import TestsConstructor from "./Components/TestsConstructor/TestsConstructor";
import {Box, Container} from "@mui/material";
import ConstructorMaterialUI from "./Components/TestsConstructor/ConstructorMaterialUI/ConstructorMaterialUI";


function App() {
    return (
        <Box className={'bg-slate-50'}>
            <Header/>
            <Container maxWidth="xl">
                <Routes>
                    <Route path='/' element={<MainScreen />}/>
                    <Route path='/tests-constructor' element={<TestsConstructor />}/>
                    <Route path='/tests' element={<ConstructorMaterialUI />}/>
                </Routes>
            </Container>
            <Footer/>
        </Box>

    );
}

export default App;
