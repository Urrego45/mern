const nodemailer = require("nodemailer")
const emailCtrl = {}

const Usuario = require('../models/Usuario')

emailCtrl.createUser = async (req, res) =>{
    const {username, cedula, email} = req.body
    const newUser = new Usuario({username, cedula, email})
    await newUser.save()
    res.json({message: 'creado'})
}

emailCtrl.getUsers = async (req, res) => {
    const users = await Usuario.find()
    res.json(users)
}

emailCtrl.sendCovid = async (req, res) =>{

    const email = await Usuario.findOne(req.body)

    console.log(email.email)

    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: "santiagourregou.4@gmail.com",
            pass: "cghvbqgpwjmnzjsf"
        }
    })

    var mailOptions = {
        from: "Remitente",
        to: email.email,
        subject: "Enviado desde el aplicativo MENR",
        text: "Hola mundo. este mensaje le informa que tiene COVID",
        html: `<h1>COVID</h1>`
    }

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            res.status(500).send(error.message);
        } else {
            console.log("email enviado")
            res.status(200).jsonp(req.body);
        }
    })
}

emailCtrl.sendObesidad = async (req, res) =>{

    const email = await Usuario.findOne(req.body)

    console.log(email)

    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: "santiagourregou.4@gmail.com",
            pass: "cghvbqgpwjmnzjsf"
        }
    })

    var mailOptions = {
        from: "Remitente",
        to: email.email,
        subject: "Enviado desde el aplicativo MERN ",
        text: "Hola mundo. este mensaje le informa que tiene OBESIDAD"
    }

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            res.status(500).send(error.message);
        } else {
            console.log("email enviado")
            res.status(200).jsonp(req.body);
        }
    })
}

module.exports = emailCtrl;