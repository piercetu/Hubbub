from django.urls import include, path

from . import api

urlpatterns = [
    path('analyze-audio', api.analyze_audio, name='analyze_audio')
]