from django.http import JsonResponse
import json
import base64

def analyze_audio(request):
    if request.method == 'POST':
        # body is a bytes object, decoded into string, then loaded into dictionary by Python JSON parser
        body = json.loads(request.body.decode('utf-8'))
        file = body.get('file', None)
        time = body.get('time', None)

        if file and time:
            print(time)
            with open('./' + time + '.mp3', 'w') as outfile:
                outfile.write(base64.b64decode(file))
                outfile.close()
            
            return JsonResponse({
                'success': True,
            })
    
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })