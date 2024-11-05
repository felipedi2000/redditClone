from django.urls import include, path
from rest_framework import routers
from backend import views
from rest_framework.documentation import include_docs_urls

#creamos losp metodos get, post, delete  actualizar 
router = routers.DefaultRouter()
router.register(r'comments', views.CommentView, 'comments')

urlpatterns = [
    path("api/", include(router.urls)),
    path('docs/', include_docs_urls(title="Comment Api"))
]