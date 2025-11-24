# Flutter Windows Build Fix Script

Write-Host "=== Flutter Windows Build Fix ===" -ForegroundColor Cyan
Write-Host ""

# 1. Clean build cache
Write-Host "1. Cleaning build cache..." -ForegroundColor Yellow
flutter clean

Write-Host ""
Write-Host "2. Removing build folder..." -ForegroundColor Yellow
if (Test-Path "build") {
    Remove-Item -Recurse -Force "build"
    Write-Host "   Build folder removed" -ForegroundColor Green
}

Write-Host ""
Write-Host "3. Getting dependencies..." -ForegroundColor Yellow
flutter pub get

Write-Host ""
Write-Host "4. Enabling Windows desktop..." -ForegroundColor Yellow
flutter config --enable-windows-desktop

Write-Host ""
Write-Host "=== Fix completed ===" -ForegroundColor Green
Write-Host ""
Write-Host "Now run: flutter run -d windows" -ForegroundColor Cyan
Write-Host ""
Write-Host "If still fails, try:" -ForegroundColor Yellow
Write-Host "  1. flutter run -d chrome (Use Web version)" -ForegroundColor White
Write-Host "  2. Restart VS Code" -ForegroundColor White
Write-Host "  3. Restart computer" -ForegroundColor White
