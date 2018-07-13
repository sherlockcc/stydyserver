const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,"statics")))

const accountRouter = require(path.join(__dirname,"./routers/accountRouter"))
app.use('/account',accountRouter)



app.listen(5566,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('start OK')
})