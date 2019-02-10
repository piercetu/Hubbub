cd server
pip install -r requirements.txt
cd dependecies/pyAudioAnalysis
pip install -e .
cd ..
python3 manage.py runserver