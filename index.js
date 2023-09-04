(() => {
    let yOffset = 0;
    let prevScrollHeight = 0;//현재 스크롤 위치 (yOffSet)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0 // 현재 활성화된 (눈 앞에 보고 있는)씬(scroll-section)

    const sceneInfo = [
        {
            type: 'sticky',
            heightNum: 5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight: 0,//하나의 씬의 높이
            objs: {
                container: document.querySelector("#scroll-section-0"),
                messageA: document.querySelector("#scroll-section-0 .main-message.a"),
                messageB: document.querySelector("#scroll-section-0 .main-message.b"),
                messageC: document.querySelector("#scroll-section-0 .main-message.c"),
                messageD: document.querySelector("#scroll-section-0 .main-message.d"),
            },
            values: {
                messageA_opacity: [0, 1]
            }
        },
        {
            type: 'normal',
            heightNum: 5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight: 0,//하나의 씬의 높이
            objs: {
                container: document.querySelector("#scroll-section-1")
            }
        },
        {
            type: 'sticky',
            heightNum: 5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight: 0,//하나의 씬의 높이
            objs: {
                container: document.querySelector("#scroll-section-2")
            }
        },
        {
            type: 'sticky',
            heightNum: 5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight: 0,//하나의 씬의 높이
            objs: {
                container: document.querySelector("#scroll-section-3")
            }
        }
    ];

    const setLayout = () => {
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight; //window.innerHeight는 브라우저의 내부 높이다.
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if (totalScrollHeight >= pageYOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`)
    }
    const calcValues = (values, currentYOffset) => {//스크롤 계산 이거가 핵심
        let rv;
        let scrollRatio = currentYOffset /sceneInfo[currentScene].scrollHeight;
        rv = scrollRatio *(values[1]-values[0])+values[0];
        return rv;
    }
    const playAnimation = () => {
        const {objs, values} = sceneInfo[currentScene];
        const currentYOffset = yOffset - prevScrollHeight;
        console.log(currentYOffset)
        switch (currentScene) {
            case 0:
                let messageA_opacity_in = calcValues(values.messageA_opacity, currentYOffset);
                objs.messageA.style.opacity = messageA_opacity_in;
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }
    const scrollLope = () => {
        prevScrollHeight = 0;
        //여기서 우리가 활성화 시킬 화면의 스크롤을 작성
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
        }
        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
        }
        if (yOffset < prevScrollHeight) {
            if (currentScene === 0) return;
            currentScene--;
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
        playAnimation();
    }

    window.addEventListener('scroll', () => {
        yOffset = window.scrollY;
        scrollLope();
    })
    window.addEventListener('load', setLayout);
    window.addEventListener('resize', setLayout);
})();