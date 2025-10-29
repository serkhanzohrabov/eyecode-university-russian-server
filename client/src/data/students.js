// Данные про  студентов 

export let result_data = [
   
{   id:1,
        name:'Тимофей С.',
        missed:1,
        creativity:10,
        percent:100,
        status:true,
        english:7,
        student_id:'#FD-240501-001',
        country:'RU',
        team:'Quantum Fire',
        email:'timoxxastolarov@gmail.com',
        attendance:['V','V','X','V','V','O','O','O'],
        social_medias:{
            github:'https://github.com/FocUUsMe'
        },
        schedule:[
            {day:'Суббота',time:'12:00 - 13:30'},
            {day:'Воскресенье',time:'14:00 - 15:30'}
        ]
    },
    {
        id:2,
        name:'Вадим Б.',
        missed:0,
        creativity:6,
        percent:81,
        status:true,
        english:5,
        student_id:'#FD-240501-002',
        country:'RU',
        team:'Quantum Fire',
        email:'vadimbolotnikov26@gmail.com',
        attendance:['V','V','V','V','V','O','O','O'],
        social_medias:{
            github:'Информация отсутсвует'
        },
         schedule:[
            {day:'Суббота',time:'12:00 - 13:30'},
            {day:'Воскресенье',time:'14:00 - 15:30'}
        ]
           
    },
    {
        id:3,
        name:'Алек Е.',
        missed:1,
        creativity:8,
        percent:81,
        status:true,
        english:3,
        student_id:'#FD-240501-003',
        country:'RU',
        team:'Quantum Fire',
        email:'alek.efremov@icloud.com',
        attendance:['X','V','V','V','O','O','O'],
          social_medias:{
            github:'Информация отсутсвует'
        },
          schedule:[
            {day:'Суббота',time:'12:00 - 13:30'},
            {day:'Воскресенье',time:'14:00 - 15:30'}
        ]
    },
    {
        id:4,
        name:'Платон З.',
        missed:1,
        creativity:9,
        percent:81,
        status:true,
        english:7,
        student_id:'#FD-240501-004',
        country:'RU',
        team:'Quantum Fire',
        email:'platon.masterskaya@gmail.com',
        attendance:['V','V','V','V','X','O','O','O'],
          social_medias:{
            github:'https://github.com/platoncyber'
        },
         schedule:[
            {day:'Суббота',time:'12:00 - 13:30'},
            {day:'Воскресенье',time:'14:00 - 15:30'}
        ]
    },
    {
        id:5,
        name:'Михаил Т.',
        missed:0,
        creativity:7,
        percent:81,
        status:true,
        english:6,
        student_id:'#FD-240501-007' ,
        country:'RU',
        team:'Quantum Fire',
        email:'mishail34122564@mail.ru',
        attendance:['V','V','V','V','V','O','O','O'],
          social_medias:{
            github:'https://github.com/S1lwer '
        },
          schedule:[
            {day:'Суббота',time:'12:00 - 13:30'},
            {day:'Воскресенье',time:'14:00 - 15:30'}
        ]
    },
    {
        id:6,
        name:'Михаил Р.',
        missed:0,
        creativity:4,
        percent:31,
        status:false,
        english:5,
        student_id:'#FD-240501-005' ,
        country:'RU',
        team:'Digital Wizards',
        email:'Информация отсутствует',
        attendance:['V','V','V','V','V','O','O','O'],
          social_medias:{
            github:'https://github.com/FocUUsMe'
        },
        schedule:[
            {day:'Суббота',time:'16:00 - 17:30'},
            {day:'Воскресенье',time:'10:00 -11:30'}
        ] 
    },
    {
        id:7,
        name:'Данил Р.',
        missed:0,
        creativity:10,
        percent:100,
        status:true,
        english:6,
        student_id:'#FD-240501-006' ,
        country:'RU',
        team:'Digital Wizards',
        attendance:['V','V','V','V','V','O','O','O'],
         email:'Slondanii@gmail.com',
    
          social_medias:{
            github:'https://github.com/Daniil775'
        },
        schedule:[
            {day:'Суббота',time:'16:00 - 17:30'},
            {day:'Воскресенье',time:'10:00 -11:30'}
        ] 
    },
    {
        id:8,
        name:'Чингиз П',
        missed:0,
        creativity:9,
        percent:100,
        status:true,
        english:8,
        student_id:'#FD-240501-008',
        country:'RU',
        team:'Shadow Coder',
        email:'Primak2020@gmail.com',
        attendance:['V','V','V','V','V','V','V','O'],
          social_medias:{
            github:'https://github.com/LirWe786'
        },
        schedule:[
            {day:'Воскресенье',time:'08:00 - 09:00'},
            {day:'Вторник',time:'17:00 - 18:00'}
        ] 
    },
    {
        id:9,
        name:'Арон Г.',
        missed:1,
        creativity:7,
        percent:71,
        status:true,
        english:5,
        student_id:'#FD-240701-009',
        country:'RU',
        team:'IT Warriors',
        email:'aarongavrilov2011@mail.ru',
        attendance:['V','V','X','V','V','O','O','O'],
          social_medias:{
            github:'https://github.com/AronGavrilo'
        },
         schedule:[
            {day:'Вторник',time:'18:30 - 20:00'},
            {day:'Четверг',time:'18:30 - 20:00'}
        ] 
    },
    {
        id:10,
        name:'Мухаммед Н.',
        missed:3,
        creativity:6,
        percent:0,
        status:false,
        english:8,
        student_id:'#FD-240701-010',
        country:'AZE',
        team:'IT Warriors',
        email:'mikizet1221@gmail.com',
        attendance:['X','X','X','V','V','O','O','O'],
          social_medias:{
            github:'https://github.com/MuhammedEyecode'
        },
       schedule:[
            {day:'Вторник',time:'18:30 - 20:00'},
            {day:'Четверг',time:'18:30 - 20:00'}
        ] 
    },
    {
        id:11,
        name:'Михаил Ортлиб',
        missed:0,
        creativity:8,
        percent:81,
        status:true,
        english:7,
        student_id:'#FD-240501-011',
        country:'RU',
        team:'Cyber Phantoms',
        email:'mike.549382663@gmail.com',
         attendance:['V','V','V','V','V','O','O','O'],
          social_medias:{
            github:'https://github.com/Mike635306'
        },
        schedule:[
            {day:'Суббота',time:'14:00 - 15:30'},
            {day:'Воскресенье',time:'12:00 -13:30'}
        ] 
    },
    {
        id:12,
        name:'Чибисов Стас',
        missed:0,
        creativity:6,
        percent:89,
        status:true,
        english:6,
        student_id:'#FD-240501-012',
        country:'RU',
        team:'Cyber Phantoms',
        email:'cibisovstanislav7@gmail.com',
        attendance:['V','V','V','V','V','O','O','O'],
          social_medias:{
            github:'https://github.com/Igkka'
        },
        schedule:[
            {day:'Суббота',time:'14:00 - 15:30'},
            {day:'Воскресенье',time:'12:00 -13:30'}
        ] 
    },
    {
        id:13,
        name:'Рауль',
        missed:1,
        creativity:5,
        percent:51,
        status:true,
        english:9,
        student_id:'#FD-241001-013',
        country:'KZ',
        team:'Shadow Coder',
        email:'raulkoro123@gmail.com',
        attendance:['V','V','V','X','O','O','O','O'],
          social_medias:{
            github:'https://github.com/Raux07'
        },
        schedule:[
            {day:'Суббота',time:'10:00 - 11:30'},
            {day:'Воскресенье',time:'18:00 - 19:30'}
        ]
    },
    {
        id:14,
        name:'Андрей',
        missed:0,
        creativity:7,   
        percent:72,
        status:true,
        english:6,
        student_id:'#FD-241101-014',
        country:'RU',
        team:'IT Warriors',
        email:'rexx86111@gmail.com',
        attendance:['V','V','V','V','V','O','O','O'],
           social_medias:{
            github:'https://github.com/TViNTi6'
        },
        schedule:[
            {day:'Вторник',time:'18:30 - 20:00'},
            {day:'Четверг',time:'18:30 - 20:00'}
        ] 
    },
    {
        id:15,
        name:'Сергей Арутюнян ',
        missed:1,
        creativity:6,
        percent:62,
        status:true,
        english:5,
        student_id:'#FD-241101-015',
        country:'RU',
        team:'IT Warriors',
        email:'Инфорция отсутствует',
        attendance:['V','X','V','V','V','O','O','O'],
          social_medias:{
            github:'https://github.com/SergGlitch'
        },
        schedule:[
            {day:'Вторник',time:'18:30 - 20:00'},
            {day:'Четверг',time:'18:30 - 20:00'}
        ] 
    },
    {
        id:16,
        name:'Александр Ш.',
        missed:0,
        creativity:8,
        percent:72,
        status:true,
        english:5,
        student_id:'#FD-241101-016',
        country:'RU',
        team:'IT Warriors',
        email:'Инфорция отсутствует',
        attendance:['V','V','V','V','V','O','O','O'],
          social_medias:{
            github:'https://github.com/Alexandr449'
        },
       schedule:[
            {day:'Вторник',time:'18:30 - 20:00'},
            {day:'Четверг',time:'18:30 - 20:00'}
        ] 
    }, 
     {  
        id:19,
        name:'Динияр',
        missed:0,
        creativity:0,
        percent:0,
        status:false,
        english:0,
        student_id:'#FD-250601-21',
        country:'RU',
        team:'~',
        email:'Инфорция отсутствует',
        attendance:['X','X','X','X','X','O','O','O'],
          social_medias:{
            github:'https://github.com/FocUUsMe'
        },
        schedule:[
            {day:'~',time:'~'},
            {day:'~',time:'~'}
        ] 
    },
    {  
        id:20,
        name:'Александр Налинский',
        missed:1,
        creativity:5,
        percent:61,
        status:true,
        english:5,
        student_id:'#FD-250201-017',
         country:'RU',
         team:'Cloud Coders',
        email:'Инфорция отсутствует',
        attendance:['V','V','V','X','V','O','O','O'],
           social_medias:{
            github:'https://github.com/FocUUsMe'
        },
        schedule:[
            {day:'Среда',time:'08:00 - 09:30'},
            {day:'Четверг',time:'17:00 - 18:30'}
        ] 
    },
    {  
        id:17,
        name:'Имран',
        missed:0,
        creativity:5,
        percent:10,
        status:false,
        english:10,
        student_id:'#FD-250201-018',
         country:'USA',
         team:'~',
         email:'imran.2004@gmail.com',
              attendance:['V','V','V','V','V','O','O','O'],
           social_medias:{
            github:'https://github.com/FocUUsMe'
        },
       schedule:[
            {day:'Суббота',time:'08:30 - 10:00'},
            {day:'Четверг',time:'17:00 - 18:30'}
        ] 
    },  
    {  
        id:18,
        name:'Артем В.',
        missed:1,
        creativity:1,
        percent:72,
        status:false,
        english:9,
        student_id:'#FD-250201-019',
        team:'Robo Makers',
        email:'Инфорция отсутствует',
             attendance:['V','V','V','X','V','O','O','O'],
          social_medias:{
            github:'https://github.com/FocUUsMe'
        },
       schedule:[
            {day:'Суббота',time:'08:30 - 10:00'},
            {day:'Четверг',time:'17:00 - 18:30'}
        ] 
    },
    {  
        id:21,
        name:'Георгий Л.',
        missed:1,
        creativity:9,
        percent:69,
        status:false,
        english:5,
        student_id:'#FD-250201-020',
        country:'UE',
        team:'~',
        email:'Инфорция отсутствует',
        attendance:['V','V','V','X','V','O','O','O'],
          social_medias:{
            github:'https://github.com/FocUUsMe'
        },
        schedule:[
            {day:'Суббота',time:'08:30 - 10:00'},
            {day:'Четверг',time:'17:00 - 18:30'}
        ] 
    },
    {
        id:22,
        name:'Лев П.',
        missed:1,
        creativity:8,
        percent:72,
        status:true,
        english:7,
        student_id:'#FD-250601-023',
        country:'RU',
        team:'Robo Makers',
        attendance:['V','V','V','X','V','O','O','O'],
        email:'p0nomarevlion@yandex.ru',
          social_medias:{
            github:'https://github.com/FocUUsMe'
        },
        schedule:[
            {day:'Суббота',time:'08:30 - 10:00'},
            {day:'Четверг',time:'17:00 - 18:30'}
        ] 
    },
    {
        id:23,
        name:'Никита А.',
        missed:3,
        creativity:0,
        percent:0,
        status:false,
        english:7,
        country:'AZE',
        student_id:'#FD-250601-024',
        country:"RU",
        team:'Robo Makers',
        email:'Инфорция отсутствует',
        attendance:['X','V','X','V','X','O','O','O'],
          social_medias:{
            github:'https://github.com/FocUUsMe'
        },
        schedule:[
            {day:'Суббота',time:'08:30 - 10:00'},
            {day:'Четверг',time:'17:00 - 18:30'}
        ] 
    }
  ];


