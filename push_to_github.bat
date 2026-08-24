@echo off
echo ========================================================
echo Pushing Nexora Web Platform to https://github.com/Srimunn/web.git
echo ========================================================

git init
git add -A
git commit -m "feat: complete Nexora web platform with 7-seat boardroom table, projects gallery, and instant SPA routing"
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin https://github.com/Srimunn/web.git
git push -u origin main --force

echo ========================================================
echo Done! Project successfully pushed to GitHub.
echo ========================================================
pause
