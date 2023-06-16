"""
URL configuration for publicposts project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from postsapp.views import PostList, PostCreation, PostDeletion, PostUpdating, PostDetail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts', PostList.as_view()),
    path('api/posts/<int:pk>', PostDetail.as_view()),
    path('api/posts/create', PostCreation.as_view()),
    path('api/posts/delete/<int:pk>', PostDeletion.as_view()),
    path('api/posts/update/<int:pk>', PostUpdating.as_view()),

]
