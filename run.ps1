# Flutter Run ARM64
# 在ARM64架构下运行应用

Write-Host "启动 Flutter 应用（ARM64）..." -ForegroundColor Cyan

# 运行应用
flutter run -d windows

# 注意：CMakeLists.txt 已配置强制 ARM64，所以 flutter run 会自动使用 ARM64 架构
