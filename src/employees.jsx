import React from 'react'
// import EmployeeList from "./EmployeeList.jsx"
import { createRoot } from 'react-dom/client'
import Page from './Page.jsx'
import { BrowserRouter as Router } from 'react-router-dom'


const root = createRoot(document.getElementById('content'))
root.render(
    <Router>
        <React.StrictMode>
            <Page />
        </React.StrictMode>
    </Router>
)