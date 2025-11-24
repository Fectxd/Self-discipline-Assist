# GitHub上传指南

## 步骤1：在GitHub创建仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `self-discipline-assistant`
   - **Description**: `智能日程管理系统 - 集成GPT AI助手的Flutter桌面应用`
   - **Public** 或 **Private**（选择你想要的）
   - **不要**勾选"Initialize this repository with a README"（我们已经有了）
3. 点击"Create repository"

## 步骤2：关联远程仓库

在PowerShell中运行：

```powershell
# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/self-discipline-assistant.git

# 查看远程仓库
git remote -v
```

## 步骤3：推送代码

```powershell
# 推送到GitHub
git push -u origin master

# 或者如果你想用main作为主分支
git branch -M main
git push -u origin main
```

## 步骤4：验证

访问你的GitHub仓库页面，应该能看到所有文件已上传。

## ⚠️ 重要提醒

### 1. API密钥安全

**在推送前，确保你的API密钥文件已被忽略！**

检查：
```powershell
# 这个文件应该不存在于Git中
git ls-files | Select-String "api_keys.dart"

# 应该只看到模板文件
# lib/config/api_keys.dart.template
```

如果不小心提交了API密钥：
```powershell
# 从Git历史中删除
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch lib/config/api_keys.dart" --prune-empty --tag-name-filter cat -- --all

# 强制推送（危险操作！）
git push origin --force --all
```

### 2. 添加仓库主题（Topics）

在GitHub仓库页面添加以下主题标签：
- `flutter`
- `dart`
- `ai-assistant`
- `gpt`
- `schedule-management`
- `desktop-app`
- `windows`
- `productivity`

### 3. 启用GitHub Pages（可选）

如果想展示文档：
1. 仓库Settings → Pages
2. Source选择"main"分支
3. 选择根目录或docs文件夹

## 后续维护

### 更新代码
```powershell
# 查看状态
git status

# 添加修改
git add .

# 提交
git commit -m "fix: 修复xxx问题"

# 推送
git push
```

### 创建发布版本
```powershell
# 创建标签
git tag -a v1.0.0 -m "第一个正式版本"

# 推送标签
git push origin v1.0.0
```

然后在GitHub上创建Release，上传编译好的exe文件。

## 示例仓库地址格式

```
https://github.com/YOUR_USERNAME/self-discipline-assistant
```

## 需要帮助？

- [GitHub文档](https://docs.github.com)
- [Git教程](https://git-scm.com/book/zh/v2)
