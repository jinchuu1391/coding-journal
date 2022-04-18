const singleton = (function() {
  let instance
  let privateVariable = 'secret'

  function initiate() {
    return  {
      privateVariable,
      method: function() {
        console.log(privateVariable)
      }
    }
  }
  return {
    getInstance: function() {
      if(!instance){
        instance = initiate()
      }
      return instance
    }
  }
})()

const instance = singleton.getInstance()
const another = singleton.getInstance()
console.log(instance === another)