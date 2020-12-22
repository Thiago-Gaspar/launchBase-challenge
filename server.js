const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require('./data')


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", { 
    express: server,
    autoescape: false
})


server.get("/", (req, res) => {
    return res.render("index")
})

server.get("layout", (req, res) => {
    return res.render("layout")
})

server.get("/about", (req, res) => {

    const about = 
        {
        title: "Rocketseat", 
        description: "Junte-se a milhares de devs e acelere na direção dos seus objetivos", 
        image: "https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh.jpg", 
        courses: "<li>Javascript</li> <li>PHP</li> <li>Swift</li>",
        links: [
            {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png", url:"https://www.instagram.com/rocketseat_oficial/?hl=pt-br", name: "Instagram"},
            {image:"https://www.datacontrolma.com.br/wp-content/uploads/2016/12/logo-facebook.png", url:"https://pt-br.facebook.com/rocketseat/", name:"Facebook"},
            {image:"https://i.pinimg.com/originals/30/b1/50/30b150cd489202db131009ac9540cec0.png", url:"https://github.com/Rocketseat", name:"GitHub"},
              ]
        }

    return res.render("about", {about})
})

server.get("/courses", (req, res) => {
    
return res.render("courses", {items: courses})
       
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id
    const course = courses.find(function(course) {
        
        return course.id = id
     
    })

    if (!course) {
        return res.send("Blog not found")
    }

          res.render("course", {item: course});
 
});




server.listen(5000, function () {
    console.log('server is running')
})

// ERROR 404 // 

server.use((req, res) => {
    res.status(404).render("not-found");
})