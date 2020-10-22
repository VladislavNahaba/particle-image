# Particle Images
Particles layout that can be set on body or at any dom-element.

## Installation
Type in terminal(console) git clone ```
https://github.com/VladislavNahaba/particle-image.git```  
**Install:** ```
npm install```
**Run:** ```
npm run start```

# Docs
constructor have such params: **selector**.  
## selector
Chose selector to append canvas element.  
**Default**: *body*

## Example
```javascript
window.addEventListener('load', () => {
    const image = new ImageHandler(src);
    image.onload(() => {
        const layout = new ParticlesLayout();
        layout.setImage(image);
        layout.init();
    })
    image.init();
});
```

# Demo View
![](https://i.ibb.co/F7ShNSX/Online-video-cuttercom.gif)

## License
[MIT](https://choosealicense.com/licenses/mit/)
