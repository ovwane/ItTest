from django.conf.urls import url

from blackList.api.Black import Black
from blackList.api.Interview import InterView, FilePost, download_doc

urlpatterns = [
    url(r'company/blackList', Black.as_view()),
    url(r'company/feedView', InterView.as_view()),
    url(r'company/updata', FilePost.as_view()),
    url(r'company/download', download_doc),
]
