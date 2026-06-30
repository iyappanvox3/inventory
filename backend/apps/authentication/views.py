from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile(request):
    """
    Returns data about the currently logged-in user
    """
    user = request.user
    return Response({
        'id': user.id,
        'username': user.username,
        'email': user.email,
    })

