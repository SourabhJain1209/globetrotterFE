# 🌍 Globetrotter Challenge

**The Ultimate Travel Guessing Game!**
Globetrotter is a fun full-stack web application where users get cryptic clues about famous places and must guess the destination. If they guess correctly, they unlock fun facts and trivia about the place!

## 🚀 Features
- 🔹 Get 1–2 cryptic clues about a destination.
- ✅ Choose from multiple possible answers.
- 🎉 Correct Answer: Confetti animation + fun fact revealed.
- 😢 Incorrect Answer: Sad animation + fun fact revealed.
- 🔄 "Play Again" or "Next" button to continue the game.
- 📊 Score tracking for correct and incorrect answers.
- 🎮 Challenge a Friend: Invite friends to compete via a shareable link.

## 🛠️ Tech Stack
**Frontend:** Angular 14  
**Backend:** .NET Core Web API  
**Database:** SQL Server  
**Hosting:** Railway (Backend) & Vercel (Frontend)  
**AI Integration:** OpenAI API (for generating additional clues and trivia)  

## 📦 Installation & Setup
### 1️⃣ Backend (.NET Core API)
#### Prerequisites:
- Install [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download)
- Install [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

#### Steps:
```sh
# Clone the repository
git clone https://github.com/YOUR_GITHUB_USERNAME/globetrotter.git
cd globetrotter/backend

# Set up the database (SQL Server required)
dotnet ef database update

# Run the backend
dotnet run
```
By default, the API will run on `http://localhost:5000/`.

### 2️⃣ Frontend (Angular)
#### Prerequisites:
- Install [Node.js & npm](https://nodejs.org/)
- Install [Angular CLI](https://angular.io/cli)

#### Steps:
```sh
# Move to frontend directory
cd ../frontend

# Install dependencies
yarn install  # Or use npm install

# Start Angular server
yarn start  # Or npm start
```
The frontend will run at `http://localhost:4200/`.

## 🎮 How to Play
1. Open the app and enter your username.
2. Read the given clues and guess the correct destination.
3. Select an answer from the multiple-choice options.
4. Receive instant feedback (confetti/sad animation) and fun trivia.
5. Click "Next" to play again.
6. Challenge a friend by sharing your game link!

## 📤 Deployment
The app is hosted on:
- **Frontend:** 
- **Backend:** 

## 🛠️ API Endpoints
| Method | Endpoint               | Description |
|--------|------------------------|-------------|
| GET    | `/api/destination/random` | Fetches a random destination with clues. |
| POST   | `/api/destination/submit` | Checks if the user's guess is correct. |
| POST   | `/api/user/register` | Registers a new user. |
| GET    | `/api/user/{username}` | Retrieves user score. |

## 🏆 Future Enhancements
- ⏱️ Timer-based challenge mode.
- 🖼️ Image-based clues instead of text.
- 🌎 Expand dataset to 500+ destinations.
- 🏅 Leaderboard to rank top players.

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a Pull Request.

## 📜 License
This project is licensed under the MIT License.

---
Made with ❤️

