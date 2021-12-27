import Post from './Post'
import json from './assets/json.json'
import WebpackLogo from './assets/webpack-logo.png'
import './styles/styles.css'

const post = new Post('Webpapck post title', WebpackLogo)

console.log('Post tostring', post.toString())

console.log('JSON', json)