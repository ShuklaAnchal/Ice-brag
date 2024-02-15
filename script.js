// locomotive js

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nava",{
     y:10,
     duration:0.7,
     ease:Power2,
}) 


Shery.textAnimate("#headings h1", {
    //Parameters are optional.
    style: 2,
    y: 20,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   
});

gsap.from(".anim2",{
       y:20,
       stagger:0.5,
       ease:Power4,
       duration:0.6
})

Shery.imageEffect("#image img",{
    style: 3, //Select Style
    config:{"uFrequencyX":{"value":14.5,"range":[0,100]},"uFrequencyY":{"value":12.21,"range":[0,100]},"uFrequencyZ":{"value":10.69,"range":[0,100]},"geoVertex":{"range":[1,64],"value":3.4},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7575832305795315},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    
})


Shery.imageEffect("#imagewrapper img",{
    style: 3, //Select Style
    config:{"uFrequencyX":{"value":0,"range":[0,100]},"uFrequencyY":{"value":0,"range":[0,100]},"uFrequencyZ":{"value":4.58,"range":[0,100]},"geoVertex":{"range":[1,64],"value":2.92},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.666679565637105},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.55,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    preset: "./presets/wigglewobble.json",
    
})







