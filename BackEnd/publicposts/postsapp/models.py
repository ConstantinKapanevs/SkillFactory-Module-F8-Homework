from django.db import models


class Posts(models.Model):
    content = models.CharField(max_length=500)
    likes_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
