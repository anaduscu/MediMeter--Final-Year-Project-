from django.middleware.csrf import get_token
from .models import User  # Import your custom User model
from django.http import JsonResponse
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrf_token': csrf_token})

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

        print('Received data:', data)

        # Create a new user without a username
        user = User(firstname=firstname, lastname=lastname, email=email, password=password)
        user.save()

        return JsonResponse({'message': 'User registered successfully'})
    else:
        return JsonResponse({'message': 'Invalid request method'})