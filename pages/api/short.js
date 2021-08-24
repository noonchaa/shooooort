const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")

const shortUrl = 'https://impraise-shorty.herokuapp.com/'

export default async function handler(req, res) {
  const requestOptions = {
    method: req.method,
    headers:myHeaders,
    body: req.body,
    redirect: 'follow'
  }
  const short = await fetch(shortUrl+'shorten', requestOptions).then(respon => respon.text())
  res.status(200).send(short)
}