Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "Pushing Nexora Web Platform to https://github.com/Srimunn/web.git" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

git init
git add -A
git commit -m "feat: complete Nexora web platform with 7-seat boardroom table, projects gallery, and instant SPA routing"
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/Srimunn/web.git
git push -u origin main --force

Write-Host "========================================================" -ForegroundColor Green
Write-Host "Done! Project successfully pushed to GitHub." -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
