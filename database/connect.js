const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/School-pet"; // Убедитесь, что здесь указан правильный URL с названием базы данных

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Successful connection to the database");
  } catch (error) {
    console.log(`При подключении к базе данных возникла ошибка: ${error}`);
  }
}

module.exports = connectToDatabase;
