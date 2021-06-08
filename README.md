# JQJSXComponent
Default repository for use of my component baseclass based on JQuery, for use with JSX.

Usage: use appulate's File Watcher Visual Studio Code extension to autocompile JSX and SCSS on file save. Each compiled SCSS file has to be linked to index.html separately. components are concatenated to one file during compilation, which is run in index.html by default.

Setup (you need npm):
npm install 
Install sass compiler:
npm install -g sass

Install the extenxion from the Visual Studio Code Marketplace. 
Put this in VSCode's settings.json file, omitting the first line on non-windows systems:
"filewatcher.shell": "C:\\Program Files\\Git\\bin\\bash.exe",
    "filewatcher.commands": [
        {
            "isAsync": true,
            "notMatch": "^$",
            "match": ".*\\.s.ss$",
            "event": "onFileChange",
            "cmd": "cd \"${workspaceRoot}\"; sass \"${file}\" \"compiled\\${fileBasenameNoExt}.css\"",
        },
        {
            "isAsync": true,
            "notMatch": "^$",
            "match": ".*\\.[j|t]sx$",
            "event": "onFileChange",
            "cmd": "cd \"${workspaceRoot}\"; npx babel components --extensions \".tsx\" > \"compiled\\components.js\"; npx babel components >> \"compiled\\components.js\""
        },
        {
            "isAsync": true,
            "notMatch": "^$",
            "match": ".*\\.ts$",
            "event": "onFileChange",
            "cmd": "cd \"${workspaceRoot}\"; npx tsc"
        }
    ],