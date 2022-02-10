import app from "./app"

const port = +process.env.PORT! as number

const envVars: any[] = [];

const allow = envVars.every(i => i in process.env)

if(!allow){
    console.log("missing environmental variables")
    process.exit(1)
}
    
app.listen(port, ()=>{
    console.log(`Serving on port : ${port}`)
})