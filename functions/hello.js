const Capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

exports.handler = async event => {
  const subject = Capitalize(event.queryStringParameters.name) || 'World'
  return {
    statusCode: 200,
    body: `Hello ${subject}!`
  }
}
