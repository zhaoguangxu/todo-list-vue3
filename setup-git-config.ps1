# 获取当前目录的绝对路径
$currentPath = Get-Location

# 设置 Git 提交模板（使用绝对路径）
git config --local commit.template "$currentPath\.gitmessage"

# 设置 Git 编辑器为 VSCode
git config --local core.editor "code --wait"

# 设置 Git 提交信息长度限制
git config --local commit.template "$currentPath\.gitmessage"

# 验证配置
Write-Host "`n当前 Git 配置：" -ForegroundColor Cyan
git config --local --list | Select-String "commit.template|core.editor"

Write-Host "`nGit 提交模板已设置完成！" -ForegroundColor Green
Write-Host "请按照以下步骤操作：" -ForegroundColor Yellow
Write-Host "1. 关闭 VSCode" -ForegroundColor Yellow
Write-Host "2. 删除 .git/index.lock 文件（如果存在）" -ForegroundColor Yellow
Write-Host "3. 重新打开 VSCode" -ForegroundColor Yellow
Write-Host "4. 使用 VSCode 的源代码管理面板（Ctrl+Shift+G）进行提交" -ForegroundColor Yellow 