import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import 'normalize.css'
import './global.css'

import { Main } from './views/Main'

const mainElement = document.createElement('div')
document.body.appendChild(mainElement)

mainElement.classList.add('app_container')

ReactDOM.render(
    <AppContainer>
        <Main />
    </AppContainer>,
    mainElement
)
