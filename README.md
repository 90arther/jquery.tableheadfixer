# jquery.tableheadfixer


## Require:
* jQuery 1.7+

## Demo & Example:
<http://www.90arther.net/jquery-table-head-fixer/>

## Usage:

### HTML
```html
<table id="tableheadfixer">
    <thead>
        <tr>
            <th>第一项</th>
            <th>第二项</th>
            <th>第三项</th>
            <th>第四项</th>
            <th>第五项</th>
            <th>第六项</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
    </tbody>
</table>
```

### Javascript
```js
$('#tableheadfixer').tableHeadFixer();

```
By default, background-color will be added. You can override default by passing the bgColor option:
```js
$('#tableheadfixer').tableHeadFixer({bgColor: #aaa});

```

### License
The MIT License (MIT)

Copyright (c) 2015 蔡卫国

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


