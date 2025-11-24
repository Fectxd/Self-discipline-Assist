# Self-Discipline Assistant - Quick Start Script
# Encoding: UTF-8

Write-Host "=== Self-Discipline Assistant ===" -ForegroundColor Cyan
Write-Host ""

# Set Flutter China mirrors (Required for users in mainland China)
$env:PUB_HOSTED_URL = "https://pub.flutter-io.cn"
$env:FLUTTER_STORAGE_BASE_URL = "https://storage.flutter-io.cn"

Write-Host "Step 1: Checking Flutter environment..." -ForegroundColor Yellow
flutter --version

Write-Host ""
Write-Host "Step 2: Installing dependencies..." -ForegroundColor Yellow
flutter pub get

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Dependencies installed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Available commands:" -ForegroundColor Cyan
    Write-Host "  - Windows: flutter run -d windows" -ForegroundColor White
    Write-Host "  - Web:     flutter run -d chrome" -ForegroundColor White
    Write-Host ""
    
    $choice = Read-Host "Run app now? (w=Windows, c=Chrome, n=No) [w/c/n]"
    
    switch ($choice.ToLower()) {
        "w" {
            Write-Host ""
            Write-Host "Starting Windows version..." -ForegroundColor Green
            flutter run -d windows
        }
        "c" {
            Write-Host ""
            Write-Host "Starting Web version..." -ForegroundColor Green
            flutter run -d chrome
        }
        default {
            Write-Host ""
            Write-Host "Project ready. Please run manually." -ForegroundColor Yellow
        }
    }
} else {
    Write-Host ""
    Write-Host "Failed to install dependencies. Please check the error messages." -ForegroundColor Red
}
