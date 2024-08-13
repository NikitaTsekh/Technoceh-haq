from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from account.models import User
from .serializers import PhoneSerializer, UserSerializer


@swagger_auto_schema(method='post', operation_id='отправить код',
                     # operation_description='Send an SMS code to a phone number and create a user if not exists.',
                     request_body=PhoneSerializer, responses={
        201: openapi.Response(description='SMS code sent successfully',
                              examples={'application/json': {"message": "SMS code 11111 sent to <phone_number>"}}),
        400: openapi.Response(description='Invalid input',
                              examples={'application/json': {"phone": ["This field is required."]}})})
@api_view(['POST'])
def send_code(request):
    serializer = PhoneSerializer(data=request.data)
    if serializer.is_valid():
        phone = serializer.validated_data['phone']
        user, created = User.objects.get_or_create(phone=phone, defaults={'username': phone})

        # Simulate sending SMS
        sms_code = '11111'

        # Response can include the SMS code or not, depending on your needs
        return Response({"message": f"СМС код {sms_code} отправлен на {phone}"}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(method='get', operation_id='чекинг кода', manual_parameters=[
    openapi.Parameter('phone', openapi.IN_QUERY, description="Phone number of the user", type=openapi.TYPE_STRING,
                      required=True),
    openapi.Parameter('code', openapi.IN_QUERY, description="SMS code sent to the user", type=openapi.TYPE_STRING,
                      required=True)],  # responses={
                     #     200: openapi.Response(description='User details', schema=UserSerializer),
                     #     400: openapi.Response(
                     #         description='Invalid code or missing phone number',
                     #         examples={'application/json': {"error": "Invalid code"}}
                     #     ),
                     #     404: openapi.Response(
                     #         description='User not found',
                     #         examples={'application/json': {"error": "User not found"}}
                     #     )
                     # }
                     )
@api_view(['GET'])
def check_code(request):
    phone = request.query_params.get('phone')
    code = request.query_params.get('code')

    if not phone:
        return Response({"error": "Phone number is required"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.filter(phone=phone).first()
    if not user:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    # Simulate code check
    if code != '11111':
        return Response({"error": "Invalid code"}, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserSerializer(user)
    token, created = Token.objects.get_or_create(user=user)

    return Response({"token": token.key}, status=status.HTTP_200_OK)
