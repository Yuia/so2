import requests
import json

api = 'https://so2-api.mutoys.com/json/sale/all.json'
r = requests.get(api)
#data = json.loads(r.text)
d = r.json()
f = open('sale.json','w')
#print(json.dumps(data))
json.dump(d,f)
f.close()