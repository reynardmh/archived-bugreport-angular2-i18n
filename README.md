# Bug Demo: ng-xi18n does not extract ICU message 

## How to reproduce the bug

Run ng-xi18n: 
```
./node_modules/.bin/ng-xi18n
```

Message xlf does not contain the ICU message from the template

```
<div i18n>{count, plural,
  =0 {There are no messages}
  =1 {There is one message}
  other {There are {{count}} messages}
  }</div>
```

There is one empty trans-unit in messages.xlf

```
<trans-unit id="d1d9daf4574c5a84c8ff0ad84059344ce48b91c2" datatype="html">
  <source/>
  <target/>
</trans-unit>
```

## Expected behavior

There should be trans-unit for the following texts: 
- There are no messages
- There is one messages
- There are `<x id="INTERPOLATION"/>` messages
 
## How to run the project

```
npm install
ng serve
```

Open `http://localhost:4200/`

---

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

