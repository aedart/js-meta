# Js Meta

Keeps track of various kinds of meta data about a class or a method, without manipulating the target.

Behind the scene, a [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) is used to store the information.

## Contents

* [How to install](#how-to-install)
* [Quick start](#quick-start)
* [License](#license)


## How to install

```console
npm install @aedart/js-meta
```

## Quick start

```javascript
import Meta from '@aedart/js-meta';

class MyClass {
    // ... body not shown ..//
}

// Add arbitrary data about MyClass
Meta.addClass(MyClass, {
    name: 'MyClass',
    description: 'Yarr, swashbuckling strength!',
    maxLifetime: 23
});

// Obtain arbitrary data about MyClass
let metaData = Meta.get(MyClass); // Returns "ClassData" object

console.log(metaData.data);
// Outputs:
//  {
//        name: 'MyClass',
//        description: 'Yarr, swashbuckling strength!',
//        maxLifetime: 23
//   }
```

Please review internal documentation (`@aedart/js-meta/src/Meta.js`) for additional API information.

## License

[BSD-3-Clause](http://spdx.org/licenses/BSD-3-Clause), Read the LICENSE file included in this package