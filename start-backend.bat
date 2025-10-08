@echo off
echo ========================================
echo      TEASHOP BACKEND SERVER STARTER
echo ========================================
echo.

REM Change to the correct directory
cd /d "E:\Teashop\backend"
echo Current directory: %CD%

REM Check if server.js exists
if not exist "server.js" (
    echo ERROR: server.js not found in backend directory!
    echo Please make sure you're in the right location.
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
)

echo.
echo Starting backend server...
echo.
echo Backend will run on: http://localhost:5000
echo API endpoints:
echo   - Products: http://localhost:5000/api/products
echo   - Contact:  http://localhost:5000/api/contact
echo.
echo IMPORTANT: Keep this window open!
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Start the server
node server.js

echo.
echo Server stopped. Press any key to restart...
pause > nul
goto :eof