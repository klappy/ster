# [@xelah/core](https://xelah-core.netlify.app/)

A core library that others extend to edit their respective file formats.

This is a part of the [XELAH](https://github.com/xelahjs/xelah) collection of Libraries. 

XELAH: Simple Text Editor for React is a collection of libraries that build on top of each other. 

The primary implementation will be focused on ste-perf-html but architected to be useful for other projects needing to edit strings parsable into sections and blocks.

See the [XELAH ReadMe](https://github.com/xelahjs/xelah)

See also [@xelah/type-perf-html](https://xelah-type-perf-html.netlify.app/) - An implementation of STE for editing HtmlPerf, a block based format based on Epitelete/PERF.

# Useful libraries:

## Epitelete
https://www.npmjs.com/package/epitelete
https://github.com/Proskomma/epitelete

## Epitelete-Perf-Html
https://www.npmjs.com/package/epitelete-perf-html
https://github.com/unfoldingWord-box3/Epitelete-Perf-Html

## Xelah
https://www.npmjs.com/org/xelah
https://github.com/xelahjs/xelah 

# Getting Started

## Styleguide

- [@xelah/core](https://xelah-core.netlify.app/)

## Some Reference Implementations

- [Scribe SE](https://github.com/bible-technology/scribe-scripture-editor)
- [OCE-Editor=Tools](https://github.com/unfoldingword/oce-editor-tools)

## Installation/First Steps

To get a local copy up and running follow these simple example steps.

If you wish to use a package from this library in your app you will need to add it as a dependency with, for example:
```sh
npm install @xelah/core
```
OR
```shell
yarn add @xelah/core
```

You will need to add the peer dependencies.

<!-- CONTRIBUTING -->
## Contributing

If you would like to contribute, then fork the repo and create a pull request.

1. Fork the Project
2. Clone the repo
   ```sh
   git clone https://github.com/xelahjs/xelah.git
   ```
3. Install NPM packages
   ```sh
   yarn install
   ```
4. Run a package locally, for instance:
   ```sh
   yarn nx start @xelah/type-perf-html
   ``` 
5. Create your feature branch (`git checkout -b feature/AmazingFeature`)
6. Make your changes, then update what will be committed (`git add <file>`)
7. Commit your changes with comment (`git commit -m "Add some AmazingFeature"`)
8. Change the remote url to your fork (`git remote set-url origin https://github.com/(YourFork)/oce-editor-tools.git`)
9. Push to the Branch
10. Open a Pull Request
