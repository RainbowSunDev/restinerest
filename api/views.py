from django.http import JsonResponse
from rest_framework import viewsets, views
from .serializers import CategorySerializer, PostSerializer
from .models import Category, Post


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('-updated_at')
    serializer_class = CategorySerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-updated_at')
    serializer_class = PostSerializer


class CustomViewSet(views.APIView):
    def get(self, request):
        return JsonResponse({"Hello": "World"})
