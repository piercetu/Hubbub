from django.http import JsonResponse
import json
import base64

def train_model():
    from pyAudioAnalysis import audioTrainTest as aT

    aT.featureAndTrain(["classifierData/music","classifierData/speech"], 1.0, 1.0, aT.shortTermWindow, aT.shortTermStep, "svm", "svmSMtemp", False)
    aT.fileClassification("data/doremi.wav", "svmSMtemp","svm")

def analyze_audio(request):
    if request.method == 'POST':
        # body is a bytes object, decoded into string, then loaded into dictionary by Python JSON parser
        body = json.loads(request.body.decode('utf-8'))
        file = body.get('file', None)
        time = body.get('time', None)

        if file and time:
            with open('./hubbub_api/resources/' + str(time) + '.mp3', 'wb') as outfile:
                outfile.write(base64.standard_b64decode(file.split(',')[1]))
                outfile.close()
            
            return JsonResponse({
                'success': True,
            })
    
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })