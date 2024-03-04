from django.middleware.csrf import get_token
from .models import User  # Import your custom User model
from django.http import JsonResponse

def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrf_token': csrf_token})

def register_user(request):
    if request.method == 'POST':
        # Get data from the request
        data = request.POST  # Assuming you are sending data as form data

        # Extract relevant fields
        first_name = data.get('firstname', '')
        last_name = data.get('lastname', '')
        email = data.get('email', '')
        password = data.get('password', '')


        # Create a new user without a username
        user = User(firstname=first_name, lastname=last_name, email=email, password=password)
        user.save()

        return JsonResponse({'message': 'User registered successfully'})
    else:
        return JsonResponse({'message': 'Invalid request method'})
