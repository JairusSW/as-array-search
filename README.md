# Search-Data
**Search An Array For Data**

## About
- AssemblyScript Compatible
- Isomorphic (Browser / Node)
- Not case-sensitive

## Installation
```bash
~ npm install as-array-search --save
```

## Usage

**Basic Usage**
```js
import { search } from 'as-array-search'

const toSearch = ['Hello World', 'This is Awesome', 'The World Is Crazy']

const results = search(toSearch, 'world')
//=> ['Hello World', 'The World Is Crazy']
```

## API

### search(array: Array<string>, search: string) -->> Array<string>
Search an array for a search-string and return results as an array.