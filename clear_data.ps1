# 清空 Flutter 应用数据
Write-Host "Clearing app data..." -ForegroundColor Yellow

# 停止所有 Flutter 进程
Get-Process | Where-Object { $_.ProcessName -like "*flutter*" -or $_.ProcessName -like "*self_discipline*" } | Stop-Process -Force -ErrorAction SilentlyContinue

# 清空 SharedPreferences (Windows 位置)
$appDataPath = "$env:APPDATA\com.example\self_discipline_assistant"
if (Test-Path $appDataPath) {
    Remove-Item -Path $appDataPath -Recurse -Force
    Write-Host "SharedPreferences data cleared" -ForegroundColor Green
} else {
    Write-Host "SharedPreferences directory not found" -ForegroundColor Yellow
}

# 清空数据库文件
$dbPath = "$env:LOCALAPPDATA\self_discipline_assistant"
if (Test-Path $dbPath) {
    Remove-Item -Path $dbPath -Recurse -Force
    Write-Host "Database files cleared" -ForegroundColor Green
} else {
    Write-Host "Database directory not found" -ForegroundColor Yellow
}

# 清理 build 缓存
if (Test-Path ".\build") {
    Write-Host "Cleaning build cache..." -ForegroundColor Yellow
    flutter clean
    Write-Host "Build cache cleaned" -ForegroundColor Green
}

Write-Host ""
Write-Host "Data cleared successfully!" -ForegroundColor Green
Write-Host "Run: flutter run" -ForegroundColor Cyan
