var arr = [{ dp: '/pic2.avif', story: '/pic3.avif' },
{ dp: '/pic4.avif', story: '/pic5.avif' },
    { dp: '/pic6.avif', story: '/pic7.avif' }
,{ dp: '/pic3.avif', story: '/pic7.avif' }];

var cltr = ''
let storycontainer = document.querySelector('.storycontainer');
let fullscreen=document.querySelector('.fullscreen')
arr.forEach(function (val, idx) {
    
            cltr+=` <div class="story">
            <img id="${idx}" src="${val.dp}" alt="" />
          </div>`

})

storycontainer.innerHTML = cltr

storycontainer.addEventListener('click', function (dets) {

    fullscreen.style.display = 'block'
    fullscreen.style.backgroundImage=`url(${ arr[dets.target.id].story})`
    
    setTimeout(function () {
        fullscreen.style.display = 'none'
        
    },2000)
})