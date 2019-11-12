import requests
import subprocess
import shlex
from datetime import datetime

# datetime object containing current date and time
now = datetime.now()
 
print("now =", now)
# dd/mm/YY H:M:S
dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

headers = {
    'User-Agent': 'Mozilla/5',
    'Referer': 'https://shopee.vn/search?keyword=jblflip4'
}

url = 'https://shopee.vn/api/v2/search_items/?by=relevancy&keyword=jblflip4&limit=50&newest=0&order=desc&page_type=search'  
r = requests.get(url, headers = headers).json()

for item in r['items']:
    if item['itemid'] == 6203640987:
        print(item['name'], ' ', item['price'])
        if item['price'] is not None:
            with open('text.txt', 'a', encoding='utf-8') as file:
            	price = '{0:,}'.format(item['price']/100000)
            	item_name = item['name']
    	        file.write(dt_string + ': ' + price + '\n' )
    	        subject = dt_string + ': ' + 'Flip 4: ' + price
    	        command = './mutt.py -s "' + subject + '" -r "dat.startup@gmail.com" -m "' + item_name + '" text.txt'
    	        subprocess.run(shlex.split(command))