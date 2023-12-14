import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'zzzjs',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: './zzzjs',
  base: '/zzzjs/',
  publicPath: '/zzzjs/',
  mode: 'site',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '我要参与',
      path: 'https://github.com/zzwanfeng',
    },
  ],
  // more config: https://d.umijs.org/config
});
