Shows an issue in Cypress where the Test Runner will crash with a preprocessor error. 

**To recreate:**
- `npm install`
- Run `npx cypress open` and click on `spec.js` or run `cypress run`

**Error:**

**Title:** Error running plugin

**Message:** The following error was thrown by a plugin. We stopped running your tests because a plugin crashed. Please check your plugins file (`/Users/jennifer/Dev/preprocessor-crash/cypress/plugins/index.js`)

**Details:** TypeError: aSourceMapConsumer.eachMapping is not a function
    at Function.fromStringWithSourceMap (/Users/jennifer/Dev/preprocessor-crash/node_modules/source-map/lib/source-node.js:87:24)
    at SourceMapSource.node (/Users/jennifer/Dev/preprocessor-crash/node_modules/webpack-sources/lib/SourceMapSource.js:32:25)
    at ReplaceSource.node (/Users/jennifer/Dev/preprocessor-crash/node_modules/webpack-sources/lib/ReplaceSource.js:82:27)
    at CachedSource.node (/Users/jennifer/Dev/preprocessor-crash/node_modules/webpack-sources/lib/CachedSource.js:18:24)
    at /Users/jennifer/Dev/preprocessor-crash/node_modules/webpack-sources/lib/ConcatSource.js:59:50
    at Array.map (<anonymous>)
    at ConcatSource.node (/Users/jennifer/Dev/preprocessor-crash/node_modules/webpack-sources/lib/ConcatSource.js:58:63)
    at ConcatSource.proto.sourceAndMap (/Users/jennifer/Dev/preprocessor-crash/node_modules/webpack-sources/lib/SourceAndMapMixin.js:29:18)
    at CachedSource.sourceAndMap (/Users/jennifer/Dev/preprocessor-crash/node_modules/webpack-sources/lib/CachedSource.js:58:31)
    at getTaskForFile (/Users/jennifer/Dev/preprocessor-crash/node_modules/webpack/lib/SourceMapDevToolPlugin.js:64:30)
    at /Users/jennifer/Dev/preprocessor-crash/node_modules/webpack/lib/SourceMapDevToolPlugin.js:206:20
    at Array.forEach (<anonymous>)
    at /Users/jennifer/Dev/preprocessor-crash/node_modules/webpack/lib/SourceMapDevToolPlugin.js:177:12
    at SyncHook.eval (eval at create (/Users/jennifer/Dev/preprocessor-crash/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)
    at SyncHook.lazyCompileHook (/Users/jennifer/Dev/preprocessor-crash/node_modules/tapable/lib/Hook.js:154:20)
    at /Users/jennifer/Dev/preprocessor-crash/node_modules/webpack/lib/Compilation.js:1413:42
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/jennifer/Dev/preprocessor-crash/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/jennifer/Dev/preprocessor-crash/node_modules/tapable/lib/Hook.js:154:20)
    at /Users/jennifer/Dev/preprocessor-crash/node_modules/webpack/lib/Compilation.js:1409:36
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/jennifer/Dev/preprocessor-crash/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/jennifer/Dev/preprocessor-crash/node_modules/tapable/lib/Hook.js:154:20)
    at /Users/jennifer/Dev/preprocessor-crash/node_modules/webpack/lib/Compilation.js:1405:32

**Stack trace:**

```
Error: The following error was thrown by a plugin. We stopped running your tests because a plugin crashed. Please check your plugins file (`/Users/jennifer/Dev/preprocessor-crash/cypress/plugins/index.js`)
    at Object.get (/Users/jennifer/Library/Caches/Cypress/6.2.1/Cypress.app/Contents/Resources/app/packages/server/lib/errors.js:961:15)
    at EventEmitter.handleError (/Users/jennifer/Library/Caches/Cypress/6.2.1/Cypress.app/Contents/Resources/app/packages/server/lib/plugins/index.js:159:20)
    at EventEmitter.emit (events.js:315:20)
    at ChildProcess.<anonymous> (/Users/jennifer/Library/Caches/Cypress/6.2.1/Cypress.app/Contents/Resources/app/packages/server/lib/plugins/util.js:19:22)
    at ChildProcess.emit (events.js:315:20)
    at emit (internal/child_process.js:876:12)
    at processTicksAndRejections (internal/process/task_queues.js:85:21)
```
