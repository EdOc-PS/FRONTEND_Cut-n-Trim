export function Post (url, body){
  return fetch(url ,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })
    .then(jBody => jBody.results)
    .catch(error => console.log(error))
}