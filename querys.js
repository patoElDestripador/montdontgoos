
const database = 'test';
const collection = 'users';
use(database);
db.createCollection(collection);

db.users.find({ edad: { $gt: 18 } });

db.users.find({ ciudad: { $in: ["London", "Paris"] } });

db.users.find({ salario: { $gt: 2000 }, edad: { $lt: 30 } });

db.users.find({ país: "España", salario: { $gt: 3000 } });

db.users.find({ edad: { $gte: 25, $lte: 35 } });

db.users.find({ país: { $ne: "USA" } });

db.users.find({ ciudad: "London", $or: [ { salario: { $gt: 2500 } }, { edad: { $gt: 30 } } ] });

db.users.find({ país: "Australia", peso: { $gt: 140 } });

db.users.find({ $or: [ { salario: { $lt: 2000 } }, { edad: { $gt: 40 } } ] });

db.users.find({ país: "Canadá", $or: [ { salario: { $gt: 4000 } }, { altura: { $gt: 180 } } ] });

db.users.find({ país: "Italia", edad: { $gte: 20, $lte: 30 } });

db.users.find({ correo: { $exists: false } });

db.users.find({ país: "Francia", salario: { $gte: 3000, $lte: 5000 } });

db.users.find({ país: "Brasil", $or: [ { peso: { $lt: 120 } }, { peso: { $gt: 140 } } ] });

db.users.find({ $or: [ { país: "Argentina" }, { país: "Chile" } ], edad: { $lt: 25 } });

db.users.find({ país: { $nin: ["España", "México"] }, salario: { $lt: 3000 } });

db.users.find({ país: "Alemania", $or: [ { salario: { $lt: 4000 } }, { edad: { $gt: 35 } } ] });

db.users.find({ país: { $ne: "Colombia" }, altura: { $lt: 170 } });

db.users.find({ país: "India", salario: { $exists: false } });

/* //--db.users.deledeleteMany(); */ 

db.users.insertMany(
    [
        {
          "nombres": "Juan",
          "apellidos": "Pérez",
          "correo": "juan@example.com",
          "ciudad": "Bogotá",
          "país": "Colombia",
          "salario": 2500,
          "edad": 30,
          "altura": 175,
          "peso": 180
        },
        {
          "nombres": "María",
          "apellidos": "González",
          "correo": "maria@example.com",
          "ciudad": "Madrid",
          "país": "España",
          "salario": 3000,
          "edad": 28,
          "altura": 163,
          "peso": 150
        },
        {
          "nombres": "John",
          "apellidos": "Smith",
          "correo": "john@example.com",
          "ciudad": "New York",
          "país": "USA",
          "salario": 4000,
          "edad": 35,
          "altura": 180,
          "peso": 200
        },
        {
          "nombres": "Luisa",
          "apellidos": "Martinez",
          "correo": "luisa@example.com",
          "ciudad": "Mexico City",
          "país": "Mexico",
          "salario": 2800,
          "edad": 32,
          "altura": 168,
          "peso": 160
        },
        {
          "nombres": "Carlos",
          "apellidos": "López",
          "correo": "carlos@example.com",
          "ciudad": "Santiago",
          "país": "Chile",
          "salario": 3200,
          "edad": 33,
          "altura": 178,
          "peso": 170
        },
        {
          "nombres": "Ana",
          "apellidos": "Rodríguez",
          "correo": "ana@example.com",
          "ciudad": "Buenos Aires",
          "país": "Argentina",
          "salario": 2900,
          "edad": 29,
          "altura": 165,
          "peso": 140
        },
        {
          "nombres": "David",
          "apellidos": "García",
          "correo": "david@example.com",
          "ciudad": "Barcelona",
          "país": "España",
          "salario": 3500,
          "edad": 31,
          "altura": 182,
          "peso": 190
        },
        {
          "nombres": "Emily",
          "apellidos": "Johnson",
          "correo": "emily@example.com",
          "ciudad": "Los Angeles",
          "país": "USA",
          "salario": 3800,
          "edad": 27,
          "altura": 170,
          "peso": 150
        },
        {
          "nombres": "Ricardo",
          "apellidos": "Fernández",
          "correo": "ricardo@example.com",
          "ciudad": "Lima",
          "país": "Peru",
          "salario": 3000,
          "edad": 34,
          "altura": 175,
          "peso": 160
        },
        {
          "nombres": "Laura",
          "apellidos": "Martínez",
          "correo": "laura@example.com",
          "ciudad": "Medellín",
          "país": "Colombia",
          "salario": 2700,
          "edad": 25,
          "altura": 160,
          "peso": 130
        },
        {
          "nombres": "Mohammed",
          "apellidos": "Ali",
          "correo": "mohammed@example.com",
          "ciudad": "Cairo",
          "país": "Egipto",
          "salario": 3200,
          "edad": 29,
          "altura": 175,
          "peso": 180
        },
        {
          "nombres": "Sofía",
          "apellidos": "Gutiérrez",
          "correo": "sofia@example.com",
          "ciudad": "Montevideo",
          "país": "Uruguay",
          "salario": 2900,
          "edad": 27,
          "altura": 163,
          "peso": 150
        },
        {
          "nombres": "Alexander",
          "apellidos": "Ivanov",
          "correo": "alexander@example.com",
          "ciudad": "Moscow",
          "país": "Russia",
          "salario": 3800,
          "edad": 33,
          "altura": 180,
          "peso": 190
        },
        {
          "nombres": "Yuki",
          "apellidos": "Tanaka",
          "correo": "yuki@example.com",
          "ciudad": "Tokyo",
          "país": "Japon",
          "salario": 3500,
          "edad": 30,
          "altura": 168,
          "peso": 160
        },
        {
          "nombres": "Hans",
          "apellidos": "Schmidt",
          "correo": "hans@example.com",
          "ciudad": "Berlin",
          "país": "Alemania",
          "salario": 4000,
          "edad": 35,
          "altura": 185,
          "peso": 180
        },
        {
          "nombres": "Isabella",
          "apellidos": "Rossi",
          "correo": "isabella@example.com",
          "ciudad": "Rome",
          "país": "Italia",
          "salario": 3200,
          "edad": 31,
          "altura": 170,
          "peso": 150
        },
        {
          "nombres": "Chen",
          "apellidos": "Wei",
          "correo": "chen@example.com",
          "ciudad": "Beijing",
          "país": "China",
          "salario": 2800,
          "edad": 28,
          "altura": 168,
          "peso": 155
        },
        {
          "nombres": "Elena",
          "apellidos": "Vasquez",
          "correo": "elena@example.com",
          "ciudad": "Madrid",
          "país": "España",
          "salario": 3100,
          "edad": 29,
          "altura": 165,
          "peso": 140
        },
        {
          "nombres": "Nadia",
          "apellidos": "Popova",
          "correo": "nadia@example.com",
          "ciudad": "Saint Petersburg",
          "país": "Russia",
          "salario": 3500,
          "edad": 32,
          "altura": 170,
          "peso": 160
        },
      
        {
          "nombres": "María",
          "apellidos": "García",
          "correo": "maria@example.com",
          "ciudad": "Madrid",
          "país": "España",
          "salario": 3000,
          "edad": 28,
          "altura": 165,
          "peso": 60
        },
        {
          "nombres": "John",
          "apellidos": "Smith",
          "correo": "john@example.com",
          "ciudad": "London",
          "país": "Londres",
          "salario": 3500,
          "edad": 35,
          "altura": 180,
          "peso": 75
        },
        {
          "nombres": "Ana",
          "apellidos": "Martinez",
          "correo": "ana@example.com",
          "ciudad": "Buenos Aires",
          "país": "Argentina",
          "salario": 2700,
          "edad": 32,
          "altura": 170,
          "peso": 65
        },
        {
          "nombres": "Michael",
          "apellidos": "Johnson",
          "correo": "michael@example.com",
          "ciudad": "Toronto",
          "país": "Canadá",
          "salario": 4000,
          "edad": 40,
          "altura": 185,
          "peso": 80
        },
        {
          "nombres": "Giulia",
          "apellidos": "Rossi",
          "correo": "giulia@example.com",
          "ciudad": "Roma",
          "país": "Italia",
          "salario": 3200,
          "edad": 29,
          "altura": 170,
          "peso": 62
        },
        {
          "nombres": "Jean",
          "apellidos": "Dupont",
          "correo": "jean@example.com",
          "ciudad": "Paris",
          "país": "Francia",
          "salario": 3300,
          "edad": 33,
          "altura": 175,
          "peso": 70
        },
        {
          "nombres": "Paulo",
          "apellidos": "Silva",
          "correo": "paulo@example.com",
          "ciudad": "São Paulo",
          "país": "Brasil",
          "salario": 2800,
          "edad": 31,
          "altura": 178,
          "peso": 68
        },
        {
          "nombres": "Alejandra",
          "apellidos": "López",
          "correo": "alejandra@example.com",
          "ciudad": "Ciudad de Mexico",
          "país": "Mexico",
          "salario": 2900,
          "edad": 29,
          "altura": 160,
          "peso": 55
        },
        {
          "nombres": "Diego",
          "apellidos": "González",
          "correo": "diego@example.com",
          "ciudad": "Santiago",
          "país": "Chile",
          "salario": 2600,
          "edad": 27,
          "altura": 172,
          "peso": 70
        },
        {
          "nombres": "Lucía",
          "apellidos": "Hernández",
          "correo": "lucia@example.com",
          "ciudad": "Bogotá",
          "país": "Colombia",
          "salario": 2500,
          "edad": 30,
          "altura": 165,
          "peso": 63
        },
        {
          "nombres": "Pedro",
          "apellidos": "González",
          "correo": "pedro@example.com",
          "ciudad": "Santiago",
          "país": "Chile",
          "salario": 2700,
          "edad": 29,
          "altura": 175,
          "peso": 70
        },
        {
          "nombres": "Sofía",
          "apellidos": "Fernández",
          "correo": "sofia@example.com",
          "ciudad": "Valparaíso",
          "país": "Chile",
          "salario": 2800,
          "edad": 31,
          "altura": 168,
          "peso": 65
        },
        {
          "nombres": "Raj",
          "apellidos": "Patel",
          "correo": "raj@example.com",
          "ciudad": "Mumbai",
          "país": "India",
          "salario": 3200,
          "edad": 33,
          "altura": 172,
          "peso": 68
        },
        {
          "nombres": "Priya",
          "apellidos": "Sharma",
          "correo": "priya@example.com",
          "ciudad": "Delhi",
          "país": "India",
          "salario": 3300,
          "edad": 30,
          "altura": 165,
          "peso": 60
        },
        {
          "nombres": "Michael",
          "apellidos": "Johnson",
          "correo": "michael@example.com",
          "ciudad": "New York",
          "país": "USA",
          "salario": 4000,
          "edad": 35,
          "altura": 180,
          "peso": 80
        },
        {
          "nombres": "Emily",
          "apellidos": "Williams",
          "correo": "emily@example.com",
          "ciudad": "Los Angeles",
          "país": "USA",
          "salario": 3800,
          "edad": 28,
          "altura": 170,
          "peso": 65
        },
        {
          "nombres": "Eduardo",
          "apellidos": "Rodríguez",
          "correo": "eduardo@example.com",
          "ciudad": "Santiago",
          "país": "Chile",
          "salario": 2700,
          "edad": 29,
          "altura": 175,
          "peso": 70
        },
        {
          "nombres": "Maria",
          "apellidos": "Fernandez",
          "correo": "maria@example.com",
          "ciudad": "Santiago",
          "país": "Chile",
          "salario": 2800,
          "edad": 31,
          "altura": 170,
          "peso": 65
        },
        {
          "nombres": "Rahul",
          "apellidos": "Patel",
          "correo": "rahul@example.com",
          "ciudad": "Mumbai",
          "país": "India",
          "salario": 3200,
          "edad": 30,
          "altura": 172,
          "peso": 68
        },
        {
          "nombres": "Priya",
          "apellidos": "Sharma",
          "correo": "priya@example.com",
          "ciudad": "New Delhi",
          "país": "India",
          "salario": 3100,
          "edad": 28,
          "altura": 165,
          "peso": 60
        },
        {
          "nombres": "Michael",
          "apellidos": "Williams",
          "correo": "michael@example.com",
          "ciudad": "New York",
          "país": "USA",
          "salario": 3800,
          "edad": 35,
          "altura": 180,
          "peso": 75
        },
        {
          "nombres": "Emily",
          "apellidos": "Johnson",
          "correo": "emily@example.com",
          "ciudad": "Los Angeles",
          "país": "USA",
          "salario": 3600,
          "edad": 33,
          "altura": 170,
          "peso": 65
        },
        {
          "nombres": "David",
          "apellidos": "Martinez",
          "correo": "david@example.com",
          "ciudad": "Miami",
          "país": "USA",
          "salario": 4000,
          "edad": 40,
          "altura": 185,
          "peso": 80
        }
      ]
      
);

