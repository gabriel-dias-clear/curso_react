import React from "react"; 
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';


import Home from './../src/Views/Home/index'
import State from './../src/Views/State/index'
import Effect from './../src/Views/Effect/index'
import Ref from './../src/Views/Ref/index'
import Memo from './../src/Views/Memo/index'

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home></Home>}
          />
           <Route
            path="/state"
            element={<State></State>}
          />
           <Route
            path="/effect"
            element={<Effect></Effect>}
          />
            <Route
            path="/ref"
            element={<Ref></Ref>}
          />
            <Route
            path="/memo"
            element={<Memo></Memo>}
          />
        </Routes>
      </BrowserRouter>
  )
}

export default Router;
