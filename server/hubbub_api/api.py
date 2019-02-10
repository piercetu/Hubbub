from django.http import JsonResponse
import json
import base64
from pyAudioAnalysis import audioTrainTest as aT

def train_model():
    train = aT.featureAndTrain(["training/guitar","classifierData/piano"], 1.0, 1.0, aT.shortTermWindow, aT.shortTermStep, "svm", "instrumentClassifier", False)
    print(train)

def analyze_audio(request):
    if request.method == 'POST':
        train_model()
        # body is a bytes object, decoded into string, then loaded into dictionary by Python JSON parser
        body = json.loads(request.body.decode('utf-8'))
        file = body.get('file', None)
        time = body.get('time', None)

        if file and time:
            import sys, os
            result = tuple()
            with open('./hubbub_api/resources/' + str(time) + '.wav', 'wb') as outfile:
                outfile.write(base64.standard_b64decode(file.split(',')[1]))
                outfile.close()
            
                result = aT.fileClassification('./hubbub_api/resources/' + str(time) + '.wav', 'instrumentClassifier', 'svm')
                
                for file in sys.path('./hubbub_api/resources/'):
                    os.unlink('./hubbub_api/resources/' + file)

            return JsonResponse({
                'success': True,
                'results': dict(zip(result[1],result[0]))
            })
    
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })

if __name__ == '__main__':
    train_model()