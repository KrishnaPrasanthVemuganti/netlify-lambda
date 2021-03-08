import axios from "axios"

export async function handler(event, context) {
  try {
    const response = await axios.get("https://api.census.gov/data/2019/pep/charage?get=AGE,SEX,POP,RACE,NAME&for=state:01", { headers: { Accept: "application/json" } })
    const data = response.data
    var labels = data[0]
    var output = data.slice(1).map(item => item.reduce((obj, val, index) => {
      obj[labels[index]] = val
      return obj
    }, {}));
    return {
      statusCode: 200,
      body: JSON.stringify({ output })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
