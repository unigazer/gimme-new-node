# Node.js Checker

Every time you log in, Windows will start a background process to check whether a new version of Node.js has been published. If there is a version newer than the one installed on your machine, it will display a notification with a small description where it shows the latest tag version from the official Node.js [GitHub](https://github.com/nodejs/node) repository.

# Why only for Windows?

Since there is no auto updater on Windows (not that I know of) I had to create this Node.js app because I like to have up-to-date Node.js installed on my machine. It's not necessary to run this app on Linux and Mac since Node.js is updated through terminal on those systems.

# Install

```bash
npm i -g node-checker
```

# Contribute

PR's are welcome. If you want to contribute, push the code to the **dev** branch.

# Licence

MIT License

Copyright (c) 2018 Vladimir Jovanović

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.