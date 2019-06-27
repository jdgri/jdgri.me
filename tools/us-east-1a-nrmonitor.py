import requests
from xml.dom import minidom

#New Relic Host Id 344435038
#US East 1ac "host": "ip-172-31-24-228"
#18.234.24.238
response = requests.get(
    'https://api.newrelic.com/v2/applications/344175774/hosts.json',
    params={'filter[ids]': '344435038'},
    headers={'X-Api-Key':'db3f5c97235a70453c875af2455f80ae1ded5787a6516f8'},
)
throughput = response.json()['application_hosts'][0]['application_summary']['throughput']

loadfeedback = minidom.parse('../server/public/loadfeedback.xml')
datacenters = loadfeedback.getElementsByTagName('datacenter')
resources = datacenters[0].getElementsByTagName('resource')
for resource in resources:
    if resource.attributes['name'].value == 'RPM2':
        resource.getElementsByTagName('current-load')[0].firstChild.data = throughput

f = open('../server/public/loadfeedback.xml', 'w')
loadfeedback.writexml(f)
f.close()