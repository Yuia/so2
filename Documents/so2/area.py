import requests
import json

api = 'https://so2-api.mutoys.com/master/area.json'
r = requests.get(api)
d = r.json()
f = open('area.json','w')
json.dump(d,f)
f.close()