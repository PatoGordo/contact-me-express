const firebase = require('../Configs/firebase.js')
const db = firebase.database()

module.exports = {
  saveData: 
  function(req, callback){
    let name = req.name
    let message = req.message
    let email = req.email
    let id = Math.random().toString(36).substr(2, 9)

    const ref = db.ref("/")
    const contactsRef = ref.child("contacts/ " + id)
    contactsRef.set({
      "name": name,
      "message": message,
      "email": email
    })
    callback(null, {"statuscode":200, "message": "Inserted successfully", "pt_message": "Mensagem inserida com sucesso"})
  }
}