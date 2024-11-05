from django.db import models

"""
    Modelo que representa un comentario en el sistema.

    Atributos:
        content (TextField): Contenido del comentario.
        user (ForeignKey): Usuario que realizó el comentario.
        created_at (DateTimeField): Fecha y hora de creación.
        updated_at (DateTimeField): Fecha de la última actualización.
        parent (ForeignKey): Comentario al que este comentario responde (si aplica).
"""
class Comment(models.Model):
    content = models.TextField()
    user = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha y hora de creación
    updated_at = models.DateTimeField(auto_now=True)  # Fecha de actualización
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='replies')

    def __str__(self):
        return f"Comment ID: {self.id} - User: {self.user}"
