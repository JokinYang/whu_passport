
var obj = JSON.parse($response.body)

var today = new Date();
var beginTime = today.toLocaleDateString().replaceAll('/','-') + " 00:01"
today.setDate(today.getDate()+2)
var endTime = today.toLocaleDateString().replaceAll('/','-') + " 23:59"

var fake_data=[
    {
		"id": "2tezg9gzq2wh1rw3vkzabt8w3px80qo1",
		"userType": 0,
		"typeCode": 1,
		"typeName": "家属",
		"beginTime": beginTime,
		"endTime": endTime,
		"status": 0,
		"specialDesc": "",
		"specialCheck": 0
	}
]

obj['data'] = fake_data

var ret = JSON.stringify(obj)
// console.log(ret)
$done(ret)
