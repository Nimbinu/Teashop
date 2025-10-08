@echo off
echo ========================================
echo      TEASHOP FRONTEND SERVER STARTER
echo ========================================
echo.

REM Change to the main project directory
cd /d "E:\Teashop"
echo Current directory: %CD%

REM Check if index.html exists
if not exist "index.html" (
    echo ERROR: index.html not found!
    echo Please make sure you're in the right location.
    pause
    exit /b 1
)

echo.
echo Installing http-server if needed...
npx http-server --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing http-server...
    npm install -g http-server
)

echo.
echo Starting frontend server...
echo.
echo Frontend will run on: http://localhost:8080
echo.
echo IMPORTANT: Make sure backend is running first!
echo IMPORTANT: Keep this window open!
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Start the frontend server
npx http-server . -p 8080 -o

echo.
echo Server stopped. Press any key to exit...
pause > nul