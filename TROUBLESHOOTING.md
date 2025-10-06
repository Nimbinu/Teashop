# 🔧 TEASHOP TROUBLESHOOTING GUIDE

## 🚨 QUICK FIX - Images Not Showing

### ✅ SOLUTION (Follow in Order):

1. **CLOSE ALL** existing terminal windows

2. **DOUBLE-CLICK** this file: `START-TEASHOP.bat`
   - This will open 2 new command windows
   - Keep BOTH windows open

3. **WAIT** for both servers to start (about 10 seconds)

4. **OPEN** your browser to: http://localhost:8080

---

## 🎯 Common Problems & Solutions

### Problem: "Menu and Products sections are empty"
**Cause:** Backend server not running
**Solution:** 
- Check if "Teashop Backend Server" window is open
- Should show "Server running on port 5000" and "Connected to MongoDB"
- If not, double-click `start-backend.bat`

### Problem: "Images not loading" 
**Cause:** Frontend can't connect to backend
**Solution:**
- Make sure BOTH server windows are running
- Backend: http://localhost:5000 (should show JSON data)
- Frontend: http://localhost:8080 (should show your website)

### Problem: "Cannot connect to server"
**Cause:** Port conflicts or MongoDB not running
**Solution:**
- Close all applications using ports 5000 and 8080
- Restart both servers using `START-TEASHOP.bat`

### Problem: "Static content showing instead of database products"
**Cause:** JavaScript falling back due to API errors
**Solution:**
- Open browser console (F12)
- Look for error messages
- Ensure backend returns data at http://localhost:5000/api/products

---

## 🔍 Manual Testing Steps

1. **Test Backend API:**
   - Open: http://localhost:5000/api/products
   - Should show JSON with product data

2. **Test Frontend:**
   - Open: http://localhost:8080
   - Should show website with navigation

3. **Test Image Loading:**
   - Check browser console (F12) for errors
   - Images should load from `images/` folder

---

## 📁 File Locations

- **Backend Server:** `E:\Teashop\backend\server.js`
- **Frontend Files:** `E:\Teashop\index.html`
- **Images:** `E:\Teashop\images\`
- **Database Seeder:** `E:\Teashop\backend\seeder.js`

---

## 🆘 Still Having Issues?

1. **Check Terminal Output:**
   - Look for error messages in both server windows
   - Common issues: "Port in use", "MongoDB connection failed"

2. **Restart Everything:**
   - Close all terminal windows
   - Run `START-TEASHOP.bat` again

3. **Verify Files:**
   - Ensure all image files exist in `E:\Teashop\images\`
   - Check that `server.js` exists in `E:\Teashop\backend\`

---

## ✅ Success Indicators

- ✅ Backend window shows: "Server running on port 5000"
- ✅ Backend window shows: "Connected to MongoDB"  
- ✅ Frontend window shows: "Available on: http://127.0.0.1:8080"
- ✅ Website loads at http://localhost:8080
- ✅ Menu and Products sections show tea items with images
- ✅ Browser console has no errors

When ALL these are ✅, your teashop is working perfectly! 🎉