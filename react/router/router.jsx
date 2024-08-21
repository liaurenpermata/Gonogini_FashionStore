import { Route, Routes } from 'react-router-dom'
import  GuessLayout from '../src/pages/GuessLayout'
import Home from '../src/pages/element/Home'
import AllProduct from '../src/pages/element/AllProduct'

const router = () => {
    return (
        <Routes>
            <Route element={<GuessLayout/>}>
                <Route path='/' element={<Home/>}/> 
                <Route path='/products' element={<AllProduct/>}/> 
            </Route>
        </Routes>
    )
}

export default router;