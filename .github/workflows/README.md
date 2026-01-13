# iOS 构建工作流说明

本项目包含两个 GitHub Actions 工作流用于构建 iOS 应用。

## 工作流文件

### 1. `build-ios.yml` - 基础构建
**触发条件：**
- 推送到 main 分支
- Pull Request 到 main 分支
- 手动触发

**功能：**
- 自动构建无签名的 IPA 文件
- 运行代码分析和格式检查
- 上传 IPA 作为 artifact（保留 30 天）
- 可直接下载用于测试

**使用方法：**
1. 推送代码到 main 分支后自动运行
2. 或在 Actions 页面手动触发
3. 构建完成后在 Actions 页面下载 IPA

### 2. `release-ios.yml` - 发布构建
**触发条件：**
- 推送版本标签（如 v1.0.0）
- 手动触发（可选上传到 TestFlight）

**功能：**
- 支持签名构建（需配置证书）
- 无签名降级构建
- 自动创建 GitHub Release
- 可选上传到 TestFlight

**使用方法：**

#### 创建发布版本
```bash
git tag v1.0.0
git push origin v1.0.0
```

#### 手动触发
在 GitHub Actions 页面选择 "Build and Release iOS"，点击 "Run workflow"

## 配置签名（可选）

如果需要构建可安装的签名版本，需要在仓库设置中配置以下 Secrets：

### 必需的 Secrets

1. **IOS_CERTIFICATE_P12**
   - Apple 开发者证书（.p12 格式）
   - Base64 编码后的字符串
   ```bash
   base64 -i certificate.p12 | pbcopy
   ```

2. **IOS_CERTIFICATE_PASSWORD**
   - P12 证书的密码

3. **IOS_PROVISIONING_PROFILE**
   - 配置文件（.mobileprovision）
   - Base64 编码后的字符串
   ```bash
   base64 -i profile.mobileprovision | pbcopy
   ```

### TestFlight 上传（可选）

4. **APPSTORE_API_KEY**
   - App Store Connect API Key（.p8 文件内容）

5. **APPSTORE_ISSUER_ID**
   - App Store Connect Issuer ID

## 配置步骤

1. 进入仓库 Settings → Secrets and variables → Actions
2. 点击 "New repository secret"
3. 添加上述 secrets
4. 重新运行工作流

## 注意事项

- 无签名版本：可以构建但无法直接安装到设备，适合 CI/CD 测试
- 签名版本：需要 Apple 开发者账号和证书，可以安装到设备或上传 TestFlight
- IPA 文件保留期：
  - build-ios.yml: 30 天
  - release-ios.yml: 90 天
- 首次构建可能需要 15-20 分钟（缓存构建后约 5-10 分钟）

## 下载 IPA

### 从 Actions 下载
1. 进入 Actions 页面
2. 选择对应的工作流运行
3. 在 Artifacts 部分下载 IPA

### 从 Release 下载
1. 进入 Releases 页面
2. 选择对应版本
3. 下载 IPA 文件

## 当前状态

✅ 项目已支持 iOS 平台
✅ 响应式布局已实现
✅ GitHub Actions 工作流已配置

未配置签名证书（构建无签名版本）

## 本地构建

如果需要在本地构建：

```bash
# 无签名版本
flutter build ios --release --no-codesign

# 签名版本（需要 Xcode 和证书）
flutter build ios --release

# 在 Xcode 中打开
open ios/Runner.xcworkspace
```
