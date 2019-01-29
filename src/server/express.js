import express from 'express'
import webpack from 'webpack'
import config from '../../config/webpack.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import expressStaticGzip from 'express-static-gzip'

const server = express()

if(process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config)
  const wdm = webpackDevMiddleware(compiler,config.devServer)
  const whm = webpackHotMiddleware(compiler)

  server.use(wdm)
  server.use(whm)  
}

server.use(expressStaticGzip("dist",{ enableBrotli: true}))

const port = process.env.PORT || 8080

server.listen(port,() => {
  console.log(`server is listening on http://localhost:${port}`)
})