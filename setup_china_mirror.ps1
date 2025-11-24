# Configure China Mirror for Flutter (Permanent)

Write-Host "Configuring Flutter China mirror..." -ForegroundColor Cyan

# Set user environment variables (permanent)
[System.Environment]::SetEnvironmentVariable("PUB_HOSTED_URL", "https://pub.flutter-io.cn", "User")
[System.Environment]::SetEnvironmentVariable("FLUTTER_STORAGE_BASE_URL", "https://storage.flutter-io.cn", "User")

# Set current session environment variables
$env:PUB_HOSTED_URL = "https://pub.flutter-io.cn"
$env:FLUTTER_STORAGE_BASE_URL = "https://storage.flutter-io.cn"

Write-Host ""
Write-Host "Environment variables configured successfully (permanent):" -ForegroundColor Green
Write-Host "  PUB_HOSTED_URL = https://pub.flutter-io.cn" -ForegroundColor White
Write-Host "  FLUTTER_STORAGE_BASE_URL = https://storage.flutter-io.cn" -ForegroundColor White
Write-Host ""
Write-Host "Configuration completed. Restart terminal or use current session." -ForegroundColor Yellow
Write-Host ""

Read-Host "Press Enter to continue"
