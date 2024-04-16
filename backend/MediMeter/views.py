from django.middleware.csrf import get_token
from .models import User  # Import your custom User model
from .models import Notification
from django.http import JsonResponse
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
from django.core import serializers


def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrf_token': csrf_token})

def login_user(request):
    if request.method == 'POST':
        # Parse JSON data from request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        
        # Extract email and password from request data
        email = data.get('email', '')
        password = data.get('password', '')
        
        # Check if user with given email and password exists
        try:
            user = User.objects.get(email=email, password=password)
        except User.DoesNotExist:
            return JsonResponse({'error': 'Invalid email or password'}, status=400)

        # Return success message if user exists
        return JsonResponse({'message': 'User logged in successfully'})
    else:
        return JsonResponse({'message': 'Invalid request method'})
    

def register_user(request):
    if request.method == 'POST':
        # Parse JSON data from request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        
        # Extract relevant fields
        firstname = data.get('firstName', '')
        lastname = data.get('lastName', '')
        email = data.get('email', '')
        password = data.get('password', '')

        # Check if user already exists
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'User with this email already exists'}, status=409)

        try:
            # Create a new user without a username
            user = User(firstname=firstname, lastname=lastname, email=email, password=password)
            user.full_clean()  # Validate the user object
            user.save()
            return JsonResponse({'message': 'User registered successfully'})
        except ValidationError as e:
            return JsonResponse({'error': e.message_dict}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def set_gender(request):
    if request.method == 'POST':
        # Parse JSON data from request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        
        # Extract email and gender from request data
        email = data.get('email', '')
        gender = data.get('gender', '')  
        
        # Update the user's gender
        try:
            user = User.objects.get(email=email)
            user.gender = gender
            user.save()
            return JsonResponse({'message': 'Gender updated successfully'})
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def box_used(request):
    if request.method == 'POST':
        # Parse JSON data from request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        
        pillbox_used = data.get('pillbox_used', '')
        print(pillbox_used)
        if pillbox_used == 'Yes':
            pillbox_used = True
        else:
            pillbox_used = False
        print(pillbox_used)
        email = data.get('email', '')
        user = User.objects.get(email=email)

        try:
            notification = Notification(user=user, pillbox_used=pillbox_used)
            notification.save()
            return JsonResponse({'message': 'Notification updated successfully'})
        except ValidationError as e:
            return JsonResponse({'error': e.message_dict}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    