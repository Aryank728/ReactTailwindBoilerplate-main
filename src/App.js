import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DemoComponent from './DemoComponent';
import AmieRollout from './AmieRollOut';
import TodoQuestionForm from './calendar';
import WorkQuestionForm from './work';
import CompanyQuestionForm from './size';
import Amie from './mail';
import Amnie from './thankyou';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DemoComponent />} />
        <Route path="/AmieRollout" element={<AmieRollout />} />
        <Route path="/calendar" element={<TodoQuestionForm />} />
        <Route path="/work" element={<WorkQuestionForm />} />
        <Route path="/size" element={<CompanyQuestionForm />} />
        <Route path="/mail" element={<Amie />} />
        <Route path="/thankyou" element={<Amnie />} />
      </Routes>
    </Router>
  );
};

export default App;