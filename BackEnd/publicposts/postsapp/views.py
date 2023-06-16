from rest_framework import generics

from .models import Posts
from .serializers import PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer


class PostList(generics.ListAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer


class PostCreation(generics.CreateAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer


class PostDeletion(generics.DestroyAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer


class PostUpdating(generics.UpdateAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
