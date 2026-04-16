console.log(
fetch("https://script.google.com/macros/s/AKfycbxpRf82GkruhbZNfmXJUaRuMBF-B7ueZLfXsAGZ1XWKYq3NbnextFTlKSEWLebMEziY/exec?msg=ujid")
  .then(res => res.text())
  .then(console.log)
  .catch(console.error))