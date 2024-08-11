#!/bin/sh


while true; do
    # Вызов Python скрипта для проверки подключения к БД
      echo "Пытаемся подрубиться к БДшке"
    python /app/src/check_db_connection.py
    result=$?
    echo "Результат выполнения Python скрипта: $result"
    # Если Python скрипт завершился с кодом 0 (успех), прервать цикл
    if [ $result -eq 0 ]; then
        echo "Успешное подключение к БД."
        break
    else
        echo "Повторная попытка подключиться к БД через 5 секунд..."
    fi

    # Ожидание 5 секунд перед следующей попыткой
    sleep 5
done



# Run database migrations
echo "Running database migrations..."
python src/manage.py migrate

# Collect static files (if you have this setup)
# echo "Collecting static files..."
# python manage.py collectstatic --noinput

# Start the Django development server
echo "Starting Django development server on port 8001..."
python src/manage.py runserver 0.0.0.0:8001