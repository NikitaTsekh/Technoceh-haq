import os
import sys
from dotenv.main import load_dotenv
import mysql.connector
from pathlib import Path
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

env_path = f'{BASE_DIR}/.env'

# Проверка существования файла
if not os.path.exists(env_path):
    print(f'File {env_path} not found.')
    sys.exit(1)

load_dotenv(env_path)

# Параметры подключения к базе данных
config = {'user': os.getenv('MYSQL_USER'),
     'password': os.getenv('MYSQL_PASSWORD'),
     'host': os.getenv('MYSQL_HOST'),
     'database': os.getenv('MYSQL_DATABASE'),
     'port': os.getenv('MYSQL_PORT'),
          }
try:
    print(config)
    # Попытка подключения к базе данных
    cnx = mysql.connector.connect(**config)
    cnx.close()
except mysql.connector.Error as err:
    print(f"Ошибка подключения к базе данных: {err}")
    sys.exit(1)  # Завершение скрипта с кодом ошибки
