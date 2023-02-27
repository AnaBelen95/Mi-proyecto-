let alumnos = [

    [
        nombre= 'Ana',
        apellido= 'Gonzalez',
        edad = [
            nacimiento = 10,
            edad = 27
        ]
    ],
    [
        nombre= 'Yamil',
        apellido= [
            Materno => 'Lazzari',
            Paterno => 'Ruscalleda'
        ],
        edad = 28
    ]

]
console.log (alumnos[1][1])
console.log (alumnos[1][1]['Paterno'])


