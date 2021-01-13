const firebase = require('firebase')

const app = firebase.initializeApp({
  apiKey: process.env.APIKEY || "AIzaSyCeLPgM8XD0RyPA3c4CdmO-Eg8y2LuY4xM",
  authDomain: process.env.AUTHDOMAIN || "contact-me-pg.firebaseapp.com",
  databaseURL: process.env.DATABASEURL || "https://contact-me-pg-default-rtdb.firebaseio.com",
  projectId: process.env.PROJECTID || "contact-me-pg",
  storageBucket: process.env.STORAGEBUCKET || "contact-me-pg.appspot.com",
  messagingSenderId: process.env.MESSAGINGSENDERID || "850918410160",
  appId: process.env.APPID || "1:850918410160:web:569f03de39f935cc857875",
  measurementId: process.env.MEASUREMENTID || "G-G6WEXGZMZB"
})

module.exports = app