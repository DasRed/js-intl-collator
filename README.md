# intl-collator

## General
This provides a simple polyfill for [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator).

**Note:** This is not a 100% re-implementation in JS.
It provides only a simple string comparision. 

If the compare function call with values, which are NOT string, the result is NaN.
In all other cases, the result is
- -1 if the left string smaller then the right string
- 0 if the left string is equal to the right string
- 1 if the left string greater then the right string


## Install
```
bower install intl-collator --save
```
