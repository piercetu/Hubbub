from django.http import JsonResponse
import json
import base64
from pyAudioAnalysis import audioTrainTest as aT
import os, sys
import pickle

def train_model():
    subfolders = [f.path for f in os.scandir(sys.path[0] + '/training/') if f.is_dir() ] 

    train = aT.featureAndTrain(['./training/cello','./training/acoustic guitar','./training/clarinet','./training/electric guitar','./training/flute','./training/organ','./training/piano','./training/piano','./training/saxophone','./training/trumpet','./training/violin'], 1.0, 1.0, aT.shortTermWindow, aT.shortTermStep, "svm", "instrumentClassifier", False)
    
    with open('./clf.pickle','wb') as outfile:
        pickle.dump(train,outfile)

def analyze_audio(request):
    if request.method == 'POST':
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

                
                with open('./clf.pickle','rb') as infile: 
                    clf = pickle.load(infile)
            
                    result = clf.fileClassification('./hubbub_api/resources/' + str(time) + '.wav', model_name='instrumentClassifier', model_type='svm')
                    
                    for file in os.listdir('./hubbub_api/resources/'):
                        os.unlink('./hubbub_api/resources/' + file)
                
                    print(result)

            return JsonResponse({
                'success': True,
                'results': dict(zip(result[1],result[0]))
            })
    
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })

def prep_training_data():
    import os, sys, shutil
    d = {
        'cel': 'cello',
        'cla': 'clarinet',
        'flu': 'flute',
        'gac': 'acoustic guitar',
        'gel': 'electric guitar',
        'org': 'organ',
        'pia': 'piano',
        'sax': 'saxophone',
        'tru': 'trumpet',
        'vio': 'violin'
    }

    for file in os.listdir('./training'):
        if file[-4:] == '.txt':
            with open('./training/' + file, 'r') as infile:
                shutil.copy(sys.path[0] + '/training/' + file[:-4] + '.wav', sys.path[0] + '/training/' + d.get(infile.readline().strip(), 'cello') + '/' + file[:-4] + '.wav')  
                infile.close()

# DEBUG only
if __name__ == '__main__':
    prep_training_data()
    train_model()