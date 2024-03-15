db.users.find({ edad: { $gt: 18 } });

db.users.find({ ciudad: { $in: ["Londres", "París"] } });

db.users.find({ salario: { $gt: 2000 }, edad: { $lt: 30 } });

db.users.find({ país: "España", salario: { $gt: 3000 } });

db.users.find({ edad: { $gte: 25, $lte: 35 } });

db.users.find({ país: { $ne: "USA" } });

db.users.find({ ciudad: "Londres", $or: [ { salario: { $gt: 2500 } }, { edad: { $gt: 30 } } ] });

db.users.find({ país: "Australia", peso: { $gt: 140 } });

db.users.find({ ciudad: { $nin: ["Londres", "París"] } });

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