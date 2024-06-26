from django.middleware.csrf import get_token
from .models import User  # Import your custom User model
from .models import Notification
from .models import Caregiver
from django.http import JsonResponse
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
from django.core import serializers
from .models import Medication
from datetime import date, timedelta



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
        if pillbox_used == 'Yes':
            pillbox_used = True
        else:
            pillbox_used = False
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
    
def caregiver(request):
    if request.method == 'POST':
        # Parse JSON data from request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        
        user_email = data.get('user_email', '')
        email = data.get('email', '')
        phone_number = data.get('phone_number', '')
        brings_medication = data.get('brings_medication', '')
        if brings_medication == 'Someone else':
            brings_medication = True
        else:
            brings_medication = False
        user = User.objects.get(email=user_email)

        # Create a new caregiver object and save it to the database
        try:
            caregiver = Caregiver(user=user, email=email, phone_number=phone_number, brings_medication=brings_medication)
            caregiver.save()
            return JsonResponse({'message': 'Caregiver updated successfully'})
        except ValidationError as e:
            return JsonResponse({'error': e.message_dict}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
def set_medication(request):
    if request.method == 'POST':
        # Parse JSON data from request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        
        email = data.get('email', '')
        user = User.objects.get(email=email)
        name = data.get('name', '')
        picture = data.get('picture', '')
        dosage_instructions = data.get('dosage_instructions', '')
        frequency = data.get('frequency', '')
        dietary_restrictions = data.get('dietary_restrictions', '')
        tabletcount = data.get('tabletcount', '')
        current_stock = data.get('current_stock', '')

        # Create a new medication object and save it to the database
        try:
            medication = Medication(user=user, name=name, picture=picture, dosage_instructions=dosage_instructions, frequency=frequency, dietary_restrictions=dietary_restrictions, tabletcount=tabletcount, current_stock=current_stock)
            medication.save()
            return JsonResponse({'message': 'Medication updated successfully'})
        except ValidationError as e:
            return JsonResponse({'error': e.message_dict}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
def get_medication(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email', '')
            user = User.objects.get(email=email)
            medications = Medication.objects.filter(user=user)
            medication_list = list(medications.values())  # Convert queryset to list of dictionaries
            return JsonResponse({'medications': medication_list})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def get_personal_info(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email', '')
            print(email)
            user = User.objects.get(email=email)
            caregiver = Caregiver.objects.filter(user=user)
            caregiver_list = list(caregiver.values())
            print(caregiver_list)
            user_info = {
                'email': user.email,  
                'firstname': user.firstname,
                'lastname': user.lastname,
                'gender': user.gender,
                'caregiver': caregiver_list[0]['email'],
                'phone_number': caregiver_list[0]['phone_number'],
            }
            
            return JsonResponse({'personalInfo': user_info})
    
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    
def delete_medication(request, medication_id):
    try:
        medication = Medication.objects.get(pk=medication_id)
        medication.delete() # Delete the medication from the database
        return JsonResponse({'message': 'Medication deleted successfully'})
    except Medication.DoesNotExist:
        return JsonResponse({'error': 'Medication does not exist'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def increase_stock (request, medication_id):
    try:
        medication = Medication.objects.get(pk=medication_id)
        medication.current_stock += medication.tabletcount # Assuming each stock lasts for one day 
        medication.save()
        return JsonResponse({'message': 'Stock updated successfully'})
    except Medication.DoesNotExist:
        return JsonResponse({'error': 'Medication does not exist'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def decrease_stock (request, medication_id):
    try:
        medication = Medication.objects.get(pk=medication_id)
        if medication.current_stock <= 0: # Prevent negative stock
            return JsonResponse({'error': 'Stock is already 0'}, status=400)
        else:
            medication.current_stock -= 1 # Taking one tablet means reducing stock by 1
        medication.save()
        return JsonResponse({'message': 'Stock updated successfully'})
    except Medication.DoesNotExist:
        return JsonResponse({'error': 'Medication does not exist'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def get_stock(request, medication_id):
    try:
        medication = Medication.objects.get(pk=medication_id)
        return JsonResponse({'current_stock': medication.current_stock}) # Return the current stock of the medication
    except Medication.DoesNotExist:
        return JsonResponse({'error': 'Medication does not exist'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    
def set_refill_date(request, medication_id):
    try:
        medication = Medication.objects.get(pk=medication_id)
        current_stock = medication.current_stock
        days_until_refill = current_stock - 2 # Assuming each stock lasts for one day and refill when there are 2 tablets left
        refill_date = date.today() + timedelta(days=days_until_refill) # Calculate the refill date as today's date + days_until_refill
        medication.refill_date = refill_date
        medication.save()
        return JsonResponse({'message': 'Refill date updated successfully'})
    except Medication.DoesNotExist:
        return JsonResponse({'error': 'Medication does not exist'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)