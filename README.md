# js-gtm-event

js-gtm-event is a minimal tool to help developers in dispatching GTM events on elements with additional data.

### Usage

Include the following javascript in the end of your body.

```js
!function(){function t(t){window.dataLayer=window.dataLayer||[];var a=t.target||t.srcElement,e=a.dataset?a.dataset.event:a.getAttribute("data-event"),r=a.dataset?a.dataset.params:a.getAttribute("data-params"),n={};if(r){r=r.split("|");for(var d=0;d<r.length;d++){var i=r[d].split(":"),s=i[0],l=i[1];-1!==l.indexOf(",")&&(l=l.split(",")),n[s]=l}}n.event=e,dataLayer.push(n)}for(var a=document.querySelectorAll("[data-event]"),e=0;e<a.length;e++)a[e].addEventListener("click",t)}();
```

Add the `data-event` and `data-params` (optional) attributes to the elements that you want to dispatch the events.

`data-event` specifies the event that GTM should received e.g. `lead`
`data-params`specifies additional parameters to be sent along with the event. **This is optional**

**Below are some examples on how to use the attributes.**


```html
<button type="submit" class="btn" data-event="form-submit">Submit</button>
```
This wil result in the following payload sent to GTM

```js
{
   "event": "form-submit" 
}
```

Here is an example with `data-params`
```html
<button type="submit" class="btn" data-event="newsletter-signup" data-params="website:example.com|page:about" 
```

This will result in the following payload sent to GTM

```js
{
    "event": "newsletter-signup",
    "website": "example.com",
    "page": "about"
}
```

### data-params

`data-params` takes a string as value. Multiple parameters can be separated with `|`. Parameter values are passed along as string, however it is possible to create an array with separating the values with a `,` (comma).

Example:

```html
<button type="submit" class="btn" data-event="example" data-params="parameter:value|array_parameter:value1,value2,value3">Button</button>
```

This will result in the following payload sent to GTM

```js
{
    "event": "example",
    "parameter": "value",
    "array_parameter": [
        "value1",
        "value2",
        "value3"
    ]
}
```
