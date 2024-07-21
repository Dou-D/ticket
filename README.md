本项目由clerk+next14

clerk middleware bug stackoverflow解答  
<img src="https://github.com/Dou-D/dou-photos/blob/master/clerkmiddlewarebug.png?raw=true" />  

用pnpm安装nextui别忘了在.npmrc加上这行：public-hoist-pattern[]=*@nextui-org/*  
因为pnpm安装目录是node_modules/.pnpm，而nextui的包是放在node_modules/@nextui-org/下的，所以需要hoist到node_modules下，不然会找不到包。  

根目录下的global.css是要引入的，别给删了  

`authMiddleware()`已经废弃，现在使用`clerkMiddleware()`  

next