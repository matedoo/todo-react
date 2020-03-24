export const get = url => 
  new Promise(
      (resolve,reject) => {
          fetch(url)
          .then(response => json())
          .then(json => resolve(json))
      }
  )