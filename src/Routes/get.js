const firebase = require('../Configs/firebase.js')
var db = firebase.database()

module.exports = {
  getData: function (callback){
    const fetchContacts = async () => {
      var contacts = []
      const contactsRef = await db.ref("contacts/")
      contactsRef.on("child_added", function(snapshot, prevChildKey) {
        var contact = snapshot.val()
        contacts.push({
          "name": contact.name,
          "message": contact.message,
          "email": contact.email,
          "previus_contact":prevChildKey
        })
      })
      callback(contacts)
    }
    fetchContacts()
  }
}