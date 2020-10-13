import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Jobs from './pages/Jobs'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={Jobs} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes