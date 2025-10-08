@echo off
title Teashop Project Launcher
color 0A
echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                    TEASHOP PROJECT LAUNCHER                  ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.
echo Welcome to your Teashop project!
echo.
echo This script will help you start both backend and frontend servers.
echo.
echo IMPORTANT INSTRUCTIONS:
echo 1. This will open 2 separate command windows
echo 2. Keep BOTH windows open while using the website
echo 3. Backend runs on: http://localhost:5000
echo 4. Frontend runs on: http://localhost:8080
echo.
echo ┌──────────────────────────────────────────────────────────────┐
echo │ What each server does:                                       │
echo │ • Backend: Provides API data (products, contact forms)      │
echo │ • Frontend: Serves your website files                       │
echo └──────────────────────────────────────────────────────────────┘
echo.
pause

echo.
echo [1/2] Starting Backend Server...
echo Opening new window for backend...
start "Teashop Backend Server" /d "E:\Teashop" start-backend.bat

echo.
echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo.
echo [2/2] Starting Frontend Server...  
echo Opening new window for frontend...
start "Teashop Frontend Server" /d "E:\Teashop" start-frontend.bat

echo.
echo ┌──────────────────────────────────────────────────────────────┐
echo │                          SUCCESS!                            │
echo │                                                              │
echo │ ✅ Both servers are starting in separate windows            │
echo │ ✅ Your website will open automatically                     │
echo │ ✅ Backend API: http://localhost:5000                       │
echo │ ✅ Frontend Web: http://localhost:8080                      │
echo │                                                              │
echo │ TROUBLESHOOTING:                                             │
echo │ • If images don't show: Check both server windows           │
echo │ • If menu is empty: Backend might not be running            │
echo │ • If page won't load: Frontend might not be running         │
echo └──────────────────────────────────────────────────────────────┘
echo.
echo Press any key to close this launcher...
pause > nul