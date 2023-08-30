(()=>{
    let yOffset = 0;

    const sceneInfo = [
        {
            type:'sticky',
            heightNum:5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight:0,//하나의 씬의 높이
            objs:{
                container:document.querySelector("#scroll-section-0")
            }
        },
        {
            type:'normal',
            heightNum:5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight:0,//하나의 씬의 높이
            objs:{
                container:document.querySelector("#scroll-section-1")
            }
        },
        {
            type:'sticky',
            heightNum:5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight:0,//하나의 씬의 높이
            objs:{
                container:document.querySelector("#scroll-section-2")
            }
        },
        {
            type:'sticky',
            heightNum:5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight:0,//하나의 씬의 높이
            objs:{
                container:document.querySelector("#scroll-section-3")
            }
        }
    ];

    const setLayout = () =>{
        for(let i = 0; i<sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight; //window.innerHeight는 브라우저의 내부 높이다.
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
        console.log(sceneInfo);
    }
    const scrollLope =() =>{

    }

    window.addEventListener('resize',setLayout);
    window.addEventListener('scroll',()=>{
        yOffset = window.scrollY;
        scrollLope();
    })

    setLayout();
})();