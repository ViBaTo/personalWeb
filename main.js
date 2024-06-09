import Contact from './src/components/Contact/Contact'
import Header from './src/components/Header/Header'
import Hero from './src/components/Hero/Hero'
import Posts from './src/components/Posts/Posts'
import Works from './src/components/Work/Work'
import './style.css'

const app = document.querySelector('#app')

app.appendChild(Header())
app.appendChild(Hero())
app.appendChild(Posts())
app.appendChild(Works())
app.appendChild(Contact())
