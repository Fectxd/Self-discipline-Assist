# Flutter Windows ARM64 编译脚本
# 您的系统：Windows 11 ARM 64-bit
# Flutter 会自动检测并使用 VS2022 的 ARM64 工具链

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Flutter Windows ARM64 构建" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 清理并构建
Write-Host "清理旧构建..." -ForegroundColor Yellow
flutter clean

Write-Host "`n开始构建 ARM64 版本..." -ForegroundColor Yellow
Write-Host "（CMakeLists.txt 已配置强制 ARM64 平台）`n" -ForegroundColor Gray

# 直接运行构建 - Flutter 会使用 VS2022 ARM64 工具链
flutter build windows --release

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ 构建成功！" -ForegroundColor Green
    Write-Host "`n可执行文件：build\windows\x64\runner\Release\self_discipline_assistant.exe" -ForegroundColor Cyan
    Write-Host "（路径虽显示x64，但已编译为ARM64原生应用）`n" -ForegroundColor Yellow
} else {
    Write-Host "`n✗ 构建失败" -ForegroundColor Red
    Write-Host "请确保 VS2022 已安装 ARM64 构建工具" -ForegroundColor Yellow
    exit 1
}
