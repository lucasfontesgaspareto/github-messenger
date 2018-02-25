const request = require('request')

request("https://api.github.com/users/lucasfontesgaspareto/following{/other_user}".replace('{/other_user}','/'), console.log)