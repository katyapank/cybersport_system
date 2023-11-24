# Как запустить сервер
1) Перейти в папку, где находится yml файл. Он лежит внутри проекта. У меня, например, это C:\Users\Anna\хахакатоны\cybersport_system\cybersport-crud-service
2) Запустить докер (очень важный этап!)
3) В консоли, после выполнения пункта 1 ввести команду "docker compose up"
4) Должны появиться вот такие малыши. Теперь можно стартовать сервер
![image](https://github.com/katyapank/cybersport_system/assets/79912099/cd4cf195-2fd1-47ea-afde-97e91c371744)
# Как зайти в pg admin
1) Нажимаем на порт
![image](https://github.com/katyapank/cybersport_system/assets/79912099/e369d804-f8b8-4131-a410-3284947307dd)
2) Логин и пароль от pgAdmin указаны в yml файле
      PGADMIN_DEFAULT_EMAIL: golovanshalom@gmail.com
      PGADMIN_DEFAULT_PASSWORD: password
3) Servers - Register - Server
Имя сервера:
POSTGRES_DB: cyberSport
4) Переходим на вкладку Connection
5) открываем терминал (cmd) и вводим команду "docker container ls"
![image](https://github.com/katyapank/cybersport_system/assets/79912099/53bc5cba-a038-4351-a2fc-2cd0d5369554)
6) Вводим команду "docker inspect {id контейнера posgres}"
![image](https://github.com/katyapank/cybersport_system/assets/79912099/068c5028-40b8-4b8d-b8ab-9e8241fa8bc0)
7) Копируем его айпишник
![image](https://github.com/katyapank/cybersport_system/assets/79912099/71b59979-b292-4d0c-b7fc-af6bc82d1463)
8) Возвращаемся в pgAdmin и вставляем айпишник. Username и password как в yml файле
      POSTGRES_PASSWORD: password
      POSTGRES_USER: admin
9) Нажимаем save
![image](https://github.com/katyapank/cybersport_system/assets/79912099/8a0a9212-23e7-4028-a511-9b89a2bec0a6)
10) Наслаждаемся
![image](https://github.com/katyapank/cybersport_system/assets/79912099/c1f48e80-70b3-4660-ba89-e2a4139f1370)





