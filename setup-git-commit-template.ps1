# 设置 Git 提交模板
git config --local commit.template .gitmessage

# 设置 Git 提交信息长度限制
git config --local core.editor "code --wait"

Write-Host "Git 提交模板已设置完成！" -ForegroundColor Green
Write-Host "现在您可以在 VSCode 中使用新的提交规范模板。" -ForegroundColor Green
Write-Host "请重启 VSCode 以使更改生效。" -ForegroundColor Yellow 