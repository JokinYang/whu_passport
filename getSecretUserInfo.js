var obj = JSON.parse($response.body)

var data = obj['data']
data['userTypeName'] = '家属'

var ret = JSON.stringify(obj)
//console.log(ret)
$done(ret)