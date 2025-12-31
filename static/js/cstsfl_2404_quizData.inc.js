//CSTS FL 2404
var cstsfl_2404_quizData = [
    {
        "type": "radio",
        "question": "테스팅과 디버깅에 대한 설명으로 올바르지 않은 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 테스팅의 목적은 알려지지 않은 결함을 발견하는 것이다.", "right": false },
            { "value": "② 테스팅은 외부 개입을 배제하고, 시스템 내부관련자가 수행하는 것이다.", "right": true },
            { "value": "③ 디버깅은 이미 알고 있는 오류를 수정하는 것이다.", "right": false },
            { "value": "④ 디버깅의 주요 작업은 오류의 위치를 파악하고 이를 적절히 수정하는 것이다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 엔지니어가 가져야 할 의사소통 태도로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 개발자와 의견 차이가 발생하는 경우, 다툼보다는 협력으로 대화한다.", "right": false },
            { "value": "② 상호간에 의사소통했던 것을 상대방이 정확하게 이해했는지 확인한다.", "right": false },
            { "value": "③ 개발자에 대한 비평은 배제하고 객관적인 사실에 근거한 결함을 전달하려고 노력한다.", "right": false },
            { "value": "④ 다른 인원이 어떻게 느꼈는지 보다, 전달해야 할 정보가 전달되었는지 확인해야 한다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "<보기>는 자율 주행 차량 소프트웨어를 구성하는 모듈들이다. 이 중 테스트 대상이 될 수 있는 모듈을 모두 고른 것은?",
        "question_sub": "<보기> (가) 스마트 에어백 제어 모듈<br> (나) 크루즈 컨트롤 모듈<br> (다) 차간 거리 제어 모듈<br> (라) 차선 이탈 경보 모듈",
        "explanation": "",
        "options": [
            { "value": "① (가), (나)", "right": false },
            { "value": "② (가), (나), (다)", "right": false },
            { "value": "③ (가), (나), (라)", "right": false },
            { "value": "④ (가), (나), (다), (라)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "<보기>의 요구사항 명세서 기준으로 반드시 수행되어야 할 테스트 유형으로 올바르지 않은것은?",
        "question_sub": "<보기>1. 기능적 요구사항<br> 1.1 기능 1<br> 1.2 기능 2<br>2. 품질 요구사항<br> 2.1 성능 요구사항<br> 2.2 보안 요구사항<br> 2.3 신뢰성 요구사항",
        "explanation": "",
        "options": [
            { "value": "① 부하 테스트", "right": false },
            { "value": "② 기능 테스트", "right": false },
            { "value": "③ 정적 분석", "right": false },
            { "value": "④ 접근성 테스트", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "동적 테스트를 수행하는 방법으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 명세 기반 방법", "right": false },
            { "value": "② 구조 기반 방법", "right": false },
            { "value": "③ 경험 기반 방법", "right": false },
            { "value": "④ 정적 분석 방법", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "정적 분석의 유형으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 코딩 규칙 검사", "right": false },
            { "value": "② 복잡도 측정", "right": false },
            { "value": "③ 자료 흐름 분석", "right": false },
            { "value": "④ 커버리지 측정", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "컴포넌트 테스트를 잘 수행하기 위한 FIRST 원칙으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① Fully", "right": true },
            { "value": "② Isolated", "right": false },
            { "value": "③ Self-validating", "right": false },
            { "value": "④ Repeatable", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "두 컴포넌트 간 연결의 정확성에 초점을 두는 관점으로 통합 테스트를 수행한다고 하자. <보기>의 경우 이 통합 테스트를 통하여 확인할 수 있는 내용이 아닌 것은?[FL-2404-08.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 전송한 데이터의 누락", "right": false },
            { "value": "② 전송한 데이터의 변경", "right": false },
            { "value": "③ 전송된 데이터로 수행된 컴포넌트 2의 기능 오류", "right": true },
            { "value": "④ 데이터의 전달 순서 변경", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "시스템 테스트 단계에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 시스템 테스트는 테스트 대상 소프트웨어의 기능 및 비기능 결함 식별이 목적이다.", "right": false },
            { "value": "② 시스템 테스트는 주로 소프트웨어를 잘 아는 개발자가 직접 수행한다.", "right": true },
            { "value": "③ 시스템 테스트의 시작 조건은 통합 테스트 결함 수정 완료나 시스템 테스트 환경 구축 완료 등이다.", "right": false },
            { "value": "④ 시스템 테스트는 사용자 환경 또는 사용자 환경과 유사한 환경에서 실행한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 중 아래 괄호(   ) 안에 들어갈 테스팅의 종류로 올바른 것은 무엇인가?",
        "question_sub": "<보기>김PM은 문화공연 예약 웹사이트의 총괄 PM이다.<br>김PM은 사용자 요구사항에 따라 2가지 필수 테스팅을 수행하고 결과 보고서를 제출해야 한다.<br>먼저 공연 예약을 위하여 짧은 시간에 사용자가 몰릴 때 시스템의 반응을 측정하는 ( 가 ) 테 스팅을 수행해야 하고,<br>다음으로는 예약시스템의 처리 능력 이상의 부하, 즉 임계점 이상의 사용자 예약 신청 부하를 가하여 비정상적인 상황에서의 예약 처리를 테스트하는 ( 나 ) 테스팅을 수행해야 한다.",
        "explanation": "",
        "options": [
            { "value": "① (가): 부하,     (나) : 스파이크", "right": false },
            { "value": "② (가): 스파이크, (나) : 스트레스", "right": true },
            { "value": "③ (가): 스트레스, (나) : 내구성", "right": false },
            { "value": "④ (가): 내구성,   (나) : 부하", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "소프트웨어 품질관련 표준(ISO/IEC 25010)에서 정의하고 있는 8가지 품질 주특성(Quality Characteristics)에 속하지 않는 것은?",
        "explanation": "",
        "options": [
            { "value": "① 호환성", "right": false },
            { "value": "② 신뢰성", "right": false },
            { "value": "③ 완전성", "right": true },
            { "value": "④ 이식성", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음의 평가 방법들은 어떤 품질 특성의 평가를 위한 방법인가?",
        "question_sub": "∙ 인지적 워크쓰루(Cognitive Walkthrough)<br>∙ FGI(Focus Group Interview)<br>∙ 휴리스틱 평가(Heuristic Evaluation)",
        "explanation": "",
        "options": [
            { "value": "① 사용성", "right": true },
            { "value": "② 호환성", "right": false },
            { "value": "③ 유지보수성", "right": false },
            { "value": "④ 신뢰성", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 괄호 안에 들어갈 가장 알맞은 방법은 무엇인가?",
        "question_sub": "ISO/IEC/IEEE 29119에서는 테스트 방법을 (      ) 기반 테스트, 명세 기반 테스트, 구조 기반 테스트로 분류한다.",
        "explanation": "",
        "options": [
            { "value": "① 경험", "right": true },
            { "value": "② 키워드", "right": false },
            { "value": "③ 요구사항", "right": false },
            { "value": "④ 시나리오", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음은 어떤 테스팅 방법에 대한 설명인가?",
        "question_sub": "개발자가 결함을 제거하기 위해서 코드를 수정하고 나면 실제로 결함이 제거되었는지 확인을 해야 한다. 이를 위해 초기에 결함을 검출한 테스트케이스를 이용하여 다시 수행하는 테스팅",
        "explanation": "",
        "options": [
            { "value": "① 통합 테스팅", "right": false },
            { "value": "② 재테스팅", "right": true },
            { "value": "③ 디버깅", "right": false },
            { "value": "④ 동적 테스팅", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "<보기>는 소프트웨어 유지보수 활동의 비율을 나타내고 있다. 이에 대한 설명으로 올바르지 않은 것은?[FL-2404-15.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 50%의 작업이 소프트웨어 기능을 추가하거나 성능을 개선하기 위한 변경이다.", "right": false },
            { "value": "② 더 나은 유지보수를 위해 시스템 구조를 새로운 구조로 변경하는 작업이 제일 적게 일어났다.", "right": false },
            { "value": "③ 21%의 작업은 소프트웨어 시스템을 새로운 OS에 적응시키기 위한 변경 작업이다.", "right": true },
            { "value": "④ 소프트웨어를 사용하는 도중에 발견된 결함을 수정하기 위한 변경이 3번째로 많이 일어났다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 소프트웨어 생명 주기 모형 중 진화적 개발 모델에 대한 설명으로 가장 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 요구사항이 프로젝트 시작부터 명확하게 정의된 프로젝트에 적합한 개발 모델이다.", "right": false },
            { "value": "② 시스템의 모든 구성 요소를 한꺼번에 개발 완료하는 방식이다.", "right": false },
            { "value": "③ 폭포수 모델보다 프로젝트 관리가 용이하여 보다 큰 차세대 프로젝트에 적합한 개발 모델이다.", "right": false },
            { "value": "④ 사이클마다 리스크 분석이 수행되므로 발생하는 문제점을 해결할 방안을 마련할 수 있다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "애자일 개발 프로세스인 XP(eXtreme Programming)의 실현 방안으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 짝 프로그래밍", "right": false },
            { "value": "② 소규모 릴리스", "right": false },
            { "value": "③ 구현 우선개발", "right": true },
            { "value": "④ 점증적인 계획 수립", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "정적 테스팅을 통해 확인할 수 있는 것으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 잠재적 결함", "right": false },
            { "value": "② 요구사항 결함", "right": true },
            { "value": "③ 코드의 유지보수성", "right": false },
            { "value": "④ 코드의 가독성", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 설명 중 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 관리 리뷰는 프로젝트 진행 상황에 대한 검토를 바탕으로 일정, 인력, 범위 등에 대한 제어 및 의사 결정을 지원한다.", "right": false },
            { "value": "② 기술 리뷰는 정의된 계획 및 명세서를 준수하고 있는지에 대한 검토를 수행한다.", "right": false },
            { "value": "③ 인스펙션은 문제(anomaly)를 식별하고 문제에 대한 올바른 해결(resolution)을 검증한다.", "right": false },
            { "value": "④ 워크쓰루는 객관적인 표준과 규제에 대한 준수를 독립적으로 평가한다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중 정적 분석 도구의 용도로 적합하지 않은 경우는 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 사이클로매틱 복잡도 계산", "right": false },
            { "value": "② 코딩 표준 준수 검사", "right": false },
            { "value": "③ 사용하지 않은 변수 검출", "right": false },
            { "value": "④ 테스트 케이스 커버리지 측정", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "코딩 스타일의 예로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 널 역 참조", "right": true },
            { "value": "② 주석 작성 방법", "right": false },
            { "value": "③ 스페이스 사용 규칙", "right": false },
            { "value": "④ 권장 아키텍처", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "다음 프로그램에 대해 자료흐름 분석을 수행하여 검출되는 자료 패턴 중에서 잠재적 오류인 패턴은 무엇인가?",
        "question_sub": "   int foo(int x) {<br>      int y;<br>     if (x==1)<br>        y=x+1;<br>     x=10;<br>    return y;<br>      y=10;<br>   }",
        "explanation": "",
        "options": [
            { "value": "① ~u", "right": true },
            { "value": "② du", "right": false },
            { "value": "③ uu", "right": false },
            { "value": "④ ~k", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "<보기>의 프로그램 코드에서 (a=250) 테스트 케이스를 통해 수행되는 경로로 올바른 것은?[FL-2404-23.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 1, 2, 3, 4, 5, 7, 9, 10", "right": false },
            { "value": "② 1, 2, 3, 4, 5, 7, 8, 9, 10", "right": true },
            { "value": "③ 1, 2, 3, 4, 6, 9, 10", "right": false },
            { "value": "④ 1, 2, 3, 9, 10", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "① ", "right": false },
            { "value": "② ", "right": true },
            { "value": "③ ", "right": false },
            { "value": "④ ", "right": false }
        ],
        "correct": 
    },

    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "",
        "explanation": "",
        "options": [
            { "value": "○", "right": false },
            { "value": "X", "right": true }
        ],
        "correct": 
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "",
        "explanation": "",
        "correct": [""]
    }
];