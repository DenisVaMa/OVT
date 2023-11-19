import turtle

# Создаем экран для рисования
screen = turtle.Screen()
screen.bgcolor("white")

# Создаем черепаху для рисования смайлика
smiley = turtle.Turtle()
smiley.shape("circle")
smiley.color("yellow")
smiley.shapesize(2)

# Рисуем глаза
left_eye = turtle.Turtle()
left_eye.shape("circle")
left_eye.color("black")
left_eye.penup()
left_eye.goto(-25, 60)
left_eye.pendown()
left_eye.shapesize(0.2)

right_eye = turtle.Turtle()
right_eye.shape("circle")
right_eye.color("black")
right_eye.penup()
right_eye.goto(25, 60)
right_eye.pendown()
right_eye.shapesize(0.2)

# Рисуем улыбку
smiley.penup()
smiley.goto(0, 40)
smiley.pendown()
smiley.setheading(-60)
smiley.circle(40, 120)

# Завершаем программу при клике на экран
screen.exitonclick()
