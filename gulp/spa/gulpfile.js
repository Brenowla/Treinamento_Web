const { series, parallel } = require('gulp')
const gulp = require('gulp')

const {appHTML, appCSS, appJS, appImagem} = require('./gulpTasks/app')
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML,appCSS,appJS,appImagem),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)