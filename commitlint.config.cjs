module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档修改
        'style', // 代码格式修改，不影响代码运行的变动
        'refactor', // 代码重构
        'perf', // 性能优化
        'test', // 测试用例修改
        'chore', // 其他修改
        'revert', // 回退
        'build', // 打包
        'ci', // CI配置相关
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
