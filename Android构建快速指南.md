# Android 构建快速指南

- 签名配置：`android/app/build.gradle.kts` 读取 `android/key.properties`，存在则用正式签名；无则回退 debug。
- 密钥文件：生成 `android/app/my-release-key.jks`，在 `android/key.properties` 填写：
  - `storeFile=app/my-release-key.jks`
  - `storePassword=你的keystore密码`
  - `keyAlias=my_key_alias`
  - `keyPassword=你的key密码`
- 国内镜像：`android/build.gradle.kts` 的 `repositories` 增加阿里云镜像以避免下载/TLS问题。
- Desugaring：启用核心库 desugaring 以通过依赖检查：
  - `android { compileOptions { isCoreLibraryDesugaringEnabled = true } }`
  - `dependencies { coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.0.4") }`

构建命令：
```powershell
flutter clean
flutter pub get
flutter build apk --release
```

输出位置：`android/app/build/outputs/apk/release/app-release.apk`

注意：将 `android/key.properties` 与 `android/app/my-release-key.jks` 加入 `.gitignore`，避免泄露。