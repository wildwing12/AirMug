(()=>{
    let yOffset = 0;
    let prevScrollHeight = 0;//현재 스크롤 위치 (yOffSet)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0 // 현재 활성화된 (눈 앞에 보고 있는)씬(scroll-section)

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
    }
    const scrollLope =() =>{
        prevScrollHeight = 0;
        //여기서 우리가 활성화 시킬 화면의 스크롤을 작성
        for(let i = 0; i<currentScene; i++){
            prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
        }
        if(yOffset>prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene ++;
        }
        if(yOffset < prevScrollHeight){
            if(currentScene === 0) return;
            currentScene--;
        }
        console.log(currentScene)
    }

    window.addEventListener('resize',setLayout);
    window.addEventListener('scroll',()=>{
        yOffset = window.scrollY;
        scrollLope();
    })

    setLayout();
})();