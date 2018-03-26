import React from "react"
import { Switch, Route } from "react-router-dom"

import asyncComponent from "util/AsyncComponent"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/404" component={PageNotFound} />
    <Route component={PageNotFound} />
  </Switch>
)

const IndexPage = asyncComponent(() => import("pages/IndexPage"))
const PageNotFound = asyncComponent(() => import("pages/PageNotFound"))

export default Routes