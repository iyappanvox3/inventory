from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
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

@api_view(['POST'])
@permission_classes([AllowAny])
def request_password_reset(request):
    email = request.data.get('email')
    if not email:
        return Response({'detail': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Generic success response to avoid exposing user existence
    success_response = Response(
        {'detail': 'If that email matches an account, we have sent instructions to reset your password.'},
        status=status.HTTP_200_OK
    )

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return success_response

    # Generate token and encoded user ID
    token = default_token_generator.make_token(user)
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    
    reset_link = f"http://localhost:5173/reset-password?token={token}&uid={uid}"
    
    # Send email
    subject = "Reset Your Aetheris Password"
    message = f"Hello {user.username},\n\nPlease click the link below to reset your password:\n\n{reset_link}\n\nIf you did not request this, please ignore this email."
    from_email = "noreply@aetheris.com"
    
    send_mail(subject, message, from_email, [email], fail_silently=False)
    
    return success_response

@api_view(['POST'])
@permission_classes([AllowAny])
def confirm_password_reset(request):
    uidb64 = request.data.get('uid')
    token = request.data.get('token')
    new_password = request.data.get('new_password')
    
    if not uidb64 or not token or not new_password:
        return Response({'detail': 'UID, token, and new password are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        return Response({'detail': 'Invalid or expired reset link.'}, status=status.HTTP_400_BAD_REQUEST)
        
    if not default_token_generator.check_token(user, token):
        return Response({'detail': 'Invalid or expired reset link.'}, status=status.HTTP_400_BAD_REQUEST)
        
    # Update password
    user.set_password(new_password)
    user.save()
    
    return Response({'detail': 'Password has been reset successfully.'}, status=status.HTTP_200_OK)


