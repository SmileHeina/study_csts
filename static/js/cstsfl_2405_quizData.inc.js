//CSTS FL 2405
var cstsfl_2405_quizData = [
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
        "question": "테스트 케이스를 체계적으로 관리해야 하는 목적으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 케이스를 재사용하여 테스트하기 위해서", "right": true },
            { "value": "② 결함의 발견 확률을 높일 수 있기 때문에", "right": false },
            { "value": "③ 결함이 많이 발생한 부분에 테스트를 집중하기 위해서", "right": false },
            { "value": "④ 결함을 발견하지 못할 가능성이 커지기 때문에", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음에서 설명하는 특징과 테스트 단계를 올바르게 연결한 것은?[FL-2405-03.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (가) 인수 테스트   (나) 단위 테스트  (다) 통합 테스트   (라) 시스템 테스트", "right": true },
            { "value": "② (가) 시스템 테스트 (나) 단위 테스트  (다) 통합 테스트   (라) 인수 테스트", "right": false },
            { "value": "③ (가) 시스템 테스트 (나) 통합 테스트  (다) 단위 테스트   (라) 인수 테스트", "right": false },
            { "value": "④ (가) 인수 테스트   (나) 통합 테스트  (다) 단위 테스트   (라) 시스템 테스트", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "피처에 대한 설명으로 올바르지 않은 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 피처는 테스트 대상의 특성 중에서 테스트하고자 하는 측면 또는 관점을 말한다.", "right": false },
            { "value": "② 피처는 크게 기능 피처와 비 기능 피처로 구분된다.", "right": false },
            { "value": "③ 하나의 테스트 대상에 대하여 여러 개의 피처가 있을 수 있다.", "right": false },
            { "value": "④ 피처와 테스트 케이스는 1:1의 관계를 갖는다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중 정적 테스트에 대한 설명으로 가장 올바른 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 정적 테스트는 테스트 대상을 실행하지 않고 테스트를 수행하는 방식이며, 정적 분석 도구를 통해서만 수행할 수 있다.", "right": false },
            { "value": "② 정적 테스트는 테스트 대상에 대한 실행 환경을 필요로 하지 않는다.", "right": false },
            { "value": "③ 정적 분석은 자동화 도구를 활용함으로써 테스트를 자동으로 수행하고, 도출된 문제는 모두 코드 변경이 필요한 결함이다.", "right": false },
            { "value": "④ 리뷰는 각 개발 단계별로 해당 단계의 산출물이 품질 목표에 부합하는지 점검하거나 산출물에 존재하는 결함을 검출하려는 목적으로, 정적 분석 도구를 통해 검사하는 방법이다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음에서 설명하고 있는 용어는 무엇인가?[FL-2405-06.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 테스트 스텁", "right": false },
            { "value": "② 테스트 드라이버", "right": true },
            { "value": "③ 하향식 테스트", "right": false },
            { "value": "④ 상향식 테스트", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음은 모의객체의 분류에 대한 설명으로 맞는 것은?",
        "explanation": "",
        "options": [
            { "value": "① 더미(Dummy)는 테스트 할 때 해당 객체의 기능이 필요한 경우에 사용되며, 더미 객체의 메소드가 호출되면 정상 동작한다.", "right": false },
            { "value": "② 테스트 스텁(Stub)은 더미 객체에 단순한 기능을 작성하며 추가객체의 특정한 값을 가정하지 않고 호출한 값을 리턴하거나 호출한 메시지를 출력한다.", "right": false },
            { "value": "③ 테스트 스파이(Spy)는 주로 테스트 대상 클래스(CUT)가 협력하는 클래스로 가는 출력을 검증하는데 사용하며 CUT가 실행하는 동안 특정 협력 클래스로의 호출을 잡아낸다.", "right": true },
            { "value": "④ 가짜(Fake) 객체는 실제 협력 클래스의 기능을 대체해야 할 경우에 사용하며 실제 협력클래스의 기능 전체를 그대로 구현하고 실제 협력 클래스가 너무 느리거나 테스트 환경에서 사용할 수 없을 때 사용한다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "통합 테스트에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 상향식 통합 테스트는 하위 컴포넌트를 충분하게 테스트 할 수 있다.", "right": true },
            { "value": "② 빅뱅 방식의 경우 테스트 드라이버 및 스텁을 여러 번 개발해야 한다.", "right": false },
            { "value": "③ 점진적 방식의 경우 오동작이 확인되었을 때 어떤 컴포넌트가 원인인지 찾기가 어렵다.", "right": false },
            { "value": "④ 샌드위치 방식은 테스트 스텁을 개발하는 비용이 들지 않는다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "통합 테스트 단계에 수행하는 테스트 방법으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 상향식 테스트", "right": false },
            { "value": "② 하향식 테스트", "right": false },
            { "value": "③ 알파 테스트", "right": true },
            { "value": "④ 빅뱅 테스트", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "소프트웨어 개발 단계별 테스트에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 단위 테스트: 모듈을 통합하는 과정에 사용되는 인터페이스를 대상으로 상호 작용이 올바르게 이루어지는지 검증하는 테스트", "right": false },
            { "value": "② 통합 테스트: 개발 시스템이 인수 조건을 만족하는지 검증하는 테스트", "right": false },
            { "value": "③ 시스템 테스트: 시스템이 요구사항에 맞게 개발되었는지 기능 및 비기능 측면을 확인하는 테스트", "right": true },
            { "value": "④ 인수 테스트: 하나의 소프트웨어 단위가 정상적으로 기능을 수행하는지 여부를 확인하는 테스트", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "시스템의 성능 테스트를 수행할 때 자원의 최대 사용치를 모니터링하기 위해 필요한 요소가 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① CPU 사용률", "right": false },
            { "value": "② 메인 메모리 점유율", "right": false },
            { "value": "③ 입출력 자원 사용률", "right": false },
            { "value": "④ 모니터링 표준 해상도", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "호환성이 특히 중요한 산업 분야가 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 국방 정보 시스템", "right": false },
            { "value": "② 자동차 안전 계장 시스템", "right": false },
            { "value": "③ 앱 기반 애플리케이션", "right": true },
            { "value": "④ 사물인터넷(IoT)", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 신뢰성 테스트에 관한 설명 중 올바르지 않은 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 신뢰성 테스트는 일반적으로 통계적인 테스트 방법을 사용하여 측정한다.", "right": false },
            { "value": "② 구성요소 간 정보 교환 및 교환된 정보를 사용할 수 있는 능력을 측정한다.", "right": true },
            { "value": "③ 시스템이 비정상적인 상황에서도 원활하게 동작할 수 있는지를 나타내는 속성이다.", "right": false },
            { "value": "④ 신뢰성은 시스템이 어느 기간 동안에 요구되는 서비스를 제공하는 능력을 측정한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "침입 테스트에 대한 설명으로 올바르지 않은 것은 ?",
        "explanation": "",
        "options": [
            { "value": "① 침입 테스트 통과로 시스템의 보안성이 확보되었다고 확신할 수 있다.", "right": true },
            { "value": "② 모든 침입 시나리오를 미리 테스트 하는 것은 불가능하다.", "right": false },
            { "value": "③ 침입 테스트를 했다 하더라도 시스템 운영 중 침입이 발생할 수 있다.", "right": false },
            { "value": "④ 과거에 사용되었던 침입 시나리오로 테스트를 진행한다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음은 프로그램을 얼마나 손쉽게 테스트할 수 있는지를 나타내는 테스트 용이성을 나타내는 특성들과 그에 대한 설명들이다. 특성과 설명이 올바르게 연결된 것은?[FL-2405-15.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (가) - Ⓓ, (나) - Ⓐ, (다) - Ⓒ, (라) - Ⓑ", "right": true },
            { "value": "② (가) - Ⓓ, (나) - Ⓑ, (다) - Ⓒ, (라) - Ⓐ", "right": false },
            { "value": "③ (가) - Ⓒ, (나) - Ⓐ, (다) - Ⓓ, (라) - Ⓑ", "right": false },
            { "value": "④ (가) - Ⓒ, (나) - Ⓑ, (다) - Ⓓ, (라) - Ⓐ", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 수행 방법에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 회귀(Regression) 테스트 전략으로는 Retest-all 전략, 선택적 회귀 테스트 전략, 테스트 최소화 전략, 테스트 우선 순위화 전략이 있다.", "right": false },
            { "value": "② TDD는 애자일 개발의 중요한 실전 규칙 중 하나로 테스트 케이스를 먼저 작성한 후 이를 통과할 수 있도록 결과 프로그램을 작성한다.", "right": false },
            { "value": "③ 위험기반 테스트는 테스트 대상 분석을 통해 가용한 자원을 효율적으로 사용하여 최대의 효과를 얻을 수 있는 합리적인 테스트 설계 기법이다.", "right": true },
            { "value": "④ 모델기반 테스트는 테스트 모델 구축에 큰 비용이 소요되기 때문에 장애가 발생하였을 때 많은 위험과 손실이 예상되는 자동차, 의료 등 주로 안전 필수 소프트웨어를 대상으로 한다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "테스트와 관련된 다음의 설명 중 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 성숙도가 높은 테스트는 결함이 발견된 소프트웨어 모듈을 확인하고, 이를 해결하기 위해 소스 코드를 어떻게 수정해야 하는지 알려준다.", "right": false },
            { "value": "② 단순한 소스 코드의 철자를 바로잡거나 알고리즘의 부정확한 구현을 정확하게 수정하는 작업을 정적분석이라 한다.", "right": false },
            { "value": "③ 초기에 결함을 검출한 테스트 케이스를 이용하여 다시 테스트하는 것을 스모크테스트라 한다.", "right": false },
            { "value": "④ 유지보수 단계에서 소프트웨어가 수정된 후, 기존 프로그램이 변경된 부분으로 인해 영향을 받지 않았는지 검사하기 위한 테스트를 회귀(Regression) 테스트라 한다.", "right": true }
        ],
        "correct": 3
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
        "question": "탐색적 테스트가 가장 적합한 소프트웨어 생명 주기 모델은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 애자일 모델", "right": true },
            { "value": "② 진화적 모델", "right": false },
            { "value": "③ 폭포수 모델", "right": false },
            { "value": "④ 나선형 모델", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 설명 중에서 모델 기반 테스트와 거리가 가장 먼 것은?",
        "explanation": "",
        "options": [
            { "value": "① 개발 단계 산출물에 존재할 수 있는 결함을 검출할 수 있다는 이점도 있다.", "right": false },
            { "value": "② 장애가 발생하였을 때 큰 비용이 유발되는 자동차, 의료 등 안전 필수 소프트웨어를 대상으로 수행되고 있다.", "right": false },
            { "value": "③ 모델을 바탕으로 테스트 계획을 수립하고, 테스트 케이스, 테스트 절차, 테스트 입력 및 예상 결과 등을 결정한다.", "right": false },
            { "value": "④ 기존의 테스팅에서 이용하던 의사결정표, 순서도 등은 모델이 아니다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "나머지 셋과 성격이 다른 테스트는 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 조합테스트", "right": false },
            { "value": "② 경계값 분석 테스트", "right": false },
            { "value": "③ 정적 테스트", "right": true },
            { "value": "④ 결정 테스트", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "인스펙션 주재자가 수행해야 하는 역할로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 인스펙션 참가자들을 선정하고 인스펙션을 계획한다.", "right": false },
            { "value": "② 회의의 논쟁은 제외하고 모든 질문 및 답변등을 기록한다.", "right": false },
            { "value": "③ 회의 주재자나 개발자 입장으로 회의에 참가해야 한다.", "right": false },
            { "value": "④ 인스펙션 주재자가 기록자 역할도 수행할 수 있다.", "right": true }
        ],
        "correct": 4
    },
    {
        "type": "radio",
        "question": "워크쓰루(Walkthroughs)를 수행하는 목적으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 결함 검출", "right": false },
            { "value": "② 진행 상황 확인", "right": true },
            { "value": "③ 참가자 교육", "right": false },
            { "value": "④ 시스템 이해도 향상", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "외부 인원에 의해 수행되는 리뷰 유형은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 감사", "right": true },
            { "value": "② 기술 리뷰", "right": false },
            { "value": "③ 관리 리뷰", "right": false },
            { "value": "④ 인스펙션", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "<보기> 코드를 정적 분석했을 때 발견되는 문제점의 유형은 무엇인가?[FL-2405-25.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 초기화 하지 않은 변수의 사용", "right": true },
            { "value": "② 유효하지 않은 포인터의 역참조", "right": false },
            { "value": "③ 범위를 벗어난 배열 접근", "right": false },
            { "value": "④ 부호 있는 정수형의 오버플로", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "순환 복잡도를 측정하는 식으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 닫힌 영역의 개수 + 1", "right": true },
            { "value": "② 닫힌 영역의 개수 + 2", "right": false },
            { "value": "③ 노드의 수 – 간선의 수 + 1", "right": false },
            { "value": "④ 노드의 수 – 간선의 수 + 2", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "모듈 안의 동작을 자세히 관찰하면서 프로그램 원시 코드의 논리적인 구조를 검사하도록 테스트 케이스를 설계하는 방법은?",
        "explanation": "",
        "options": [
            { "value": "① 구조 기반 테스트", "right": true },
            { "value": "② 명세 기반 테스트", "right": false },
            { "value": "③ 알파 테스트", "right": false },
            { "value": "④ 베타 테스트", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "<보기>의 제어 흐름 그래프에서 문장 커버리지 100%를 만족시키는 테스트 케이스는?[FL-2405-28.jpg]",
        "explanation": "",
        "options": [
            { "value": "① x = 1, y = 0, z = 1", "right": false },
            { "value": "② x = 2, y = 0, z = 1", "right": false },
            { "value": "③ x = 2, y = 2, z = 1", "right": true },
            { "value": "④ x = 1, y = 2, z = 2", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "<보기>의 프로그램 코드에서 결정 커버리지 100%를 만족하기 위한 최소 테스트 케이스의 수는 몇 개인가?[FL-2405-29.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 2개", "right": false },
            { "value": "② 3개", "right": false },
            { "value": "③ 4개", "right": true },
            { "value": "④ 5개", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "커버리지 간의 포용 관계를 도식화한 것 중 올바른 것은?[FL-2405-30.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 결정 커버리지 ⊇ 조건 커버리지 ⊇ 문장 커버리지지", "right": false },
            { "value": "② 조건 커버리지 ⊇ 결정 커버리지 ⊇ 문장 커버리지지", "right": false },
            { "value": "③ ( 조건 커버리지 ⊇ 문장 커버리지 ) ∩ 결정 커버리지지", "right": false },
            { "value": "④ ( 결정 커버리지 ⊇ 문장 커버리지 ) ∩ 조건 커버리지지", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 소스 코드에 대하여 100% 다중 조건 커버리지를 만족하는 최소의 테스트 케이스 개수는 몇 개인가?[FL-2405-31.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 2", "right": false },
            { "value": "② 4", "right": false },
            { "value": "③ 6", "right": false },
            { "value": "④ 8", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "명세기반 테스트의 이점에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 명세기반 테스트는 어떤 테스트 레벨에서든 적용할 수 있다.", "right": false },
            { "value": "② 명세기반 테스트 케이스를 통해 명세에는 있지만 구현되지 않은 기능을 검출할 수 있다.", "right": false },
            { "value": "③ 테스터가 구현에 대한 지식이 없어도 사용자 관점에서 테스트를 수행할 수 있다.", "right": false },
            { "value": "④ 명세기반 테스트 케이스는 코드가 구현된 이후에 설계할 수 있다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중 입력 인자와 클래스의 개수가 <보기>와 같을 때, 테스트 케이스가 가장 많이 생성되는 조합 테스트 방법은 무엇인가?[FL-2405-33.jpg]",
        "explanation": "",
        "options": [
            { "value": "① Each choice 테스트", "right": false },
            { "value": "② 페어와이즈 테스트", "right": false },
            { "value": "③ All combinations 테스트", "right": true },
            { "value": "④ Base choice 테스트", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "결정표 테스트에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 명세서를 분석하여 조건과 행위를 식별한다.", "right": true },
            { "value": "② 입력 조건은 항상 true와 false값만 가질 수 있다.", "right": false },
            { "value": "③ 중요한 조건을 선정하여 결정표에 포함시킨다.", "right": false },
            { "value": "④ 가능하지 않은 조건의 조합도 결정표에 남겨두어야 한다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "시스템의 상태 전이도를 기반으로 테스트 케이스를 도출하는 절차로 올바른 것은?[FL-2405-35.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (가) → (나) → (다) → (라)", "right": false },
            { "value": "② (나) → (가) → (다) → (라)", "right": false },
            { "value": "③ (다) → (나) → (라) → (가)", "right": true },
            { "value": "④ (다) → (나) → (가) → (라)", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 경험기반 테스트의 특징으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 시간이 제한되는 경우에 사용한다.", "right": false },
            { "value": "② 제품에 대한 이해가 부족한 경우에 사용한다.", "right": false },
            { "value": "③ 과거 경험을 기반으로 적절한 전략과 계획을 수립하여 테스트한다.", "right": false },
            { "value": "④ 리스크가 높은 제품의 경우 공식적인 테스트 방법과 병행하지 않아도 된다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트 프로세스의 필요성으로 거리가 먼 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 소프트웨어 품질 목표 달성에 프로세스가 중요한 역할을 하기 때문에", "right": false },
            { "value": "② 효율적이고 효과적인 테스트 수행을 위한 관리의 중요성이 부각되었기 때문에", "right": false },
            { "value": "③ 충분한 시간과 비용을 사용하여 체계적인 테스트 수행이 필요하기 때문에", "right": true },
            { "value": "④ 평가를 통한 테스트 활동 개선이 필요하기 때문에", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "테스트 프로세스에 따른 문서의 산출물 순서가 올바른 것은 무엇인가?[FL-2405-38.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (라) - (다) - (나) - (마)", "right": false },
            { "value": "② (가) - (다) - (라) - (나)", "right": false },
            { "value": "③ (나) - (라) - (다) - (마)", "right": false },
            { "value": "④ (가) - (다) - (마) - (바)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트 계획을 구성하는 4가지 상위 수준의 항목으로 보기에 가장 거리가 먼 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 위험분석", "right": false },
            { "value": "② 테스트 메트릭", "right": true },
            { "value": "③ 테스트 전략 수립", "right": false },
            { "value": "④ 테스트 컨텍스트 명세", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 계획을 수립하는 과정에서 “테스터의 기술 및 경험 부족”이라는 위험이 높은 것으로 파악되었다. 이에 따른 완화 유형의 조치 계획으로 가장 적절하지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 인력에 대한 교육훈련 계획을 테스트 계획에 포함", "right": false },
            { "value": "② 테스터들의 훈련 시간을 충분히 확보하도록 일정에 반영", "right": false },
            { "value": "③ 산출물에 대한 검토 및 개선 시간이 충분히 확보되도록 일정에 반영", "right": false },
            { "value": "④ 테스트 현황 보고를 빈번하게 할 수 있도록 일정에 반영", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트 계획에서 전략을 수립할 때 고려사항으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 중단 및 재시작 조건", "right": false },
            { "value": "② 테스트 환경 요건과 테스트 데이터 요건", "right": false },
            { "value": "③ 개략적인 테스트 기법과 테스트 완료 기준", "right": false },
            { "value": "④ 테스트 케이스 선택 및 테스트 케이스별 수행 절차", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중에서 테스트 완료 기준으로 사용되는 예를 모두 고른 것은?[FL-2405-42.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (가)", "right": false },
            { "value": "② (가), (나)", "right": false },
            { "value": "③ (가), (다)", "right": false },
            { "value": "④ (가), (나), (다)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음의 보기는 테스트 활동의 수행할 역할별로 인력을 정의한 예시이다. 역할이 틀리게 지정된 것은 무엇인가?<br>[FL-2405-43.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (가) : 테스트 관리자", "right": false },
            { "value": "② (나) : 테스트 리더", "right": false },
            { "value": "③ (다) : 테스트 설계자", "right": false },
            { "value": "④ (라) : 테스트 분석가", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "피처 집합에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 상호의존적으로 확인이 필요한 피처들이더라도 서로 다른 피처 집합으로 나눌 수 있다.", "right": false },
            { "value": "② 동일한 테스트 재시작 조건이 적용되는 피처들은 동일한 피처 집합에 포함 시켜야 한다.", "right": true },
            { "value": "③ 상이한 테스트 설계 기법을 적용하는 피처들도 같은 피처 집합으로 구성할 수 있다.", "right": false },
            { "value": "④ 다른 피처 집합에 속한 피처들이더라도 함께 묶어서 테스트를 실행할 수 있다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트를 계획한 이후 테스트 케이스를 개발할 때 불명확한 테스트 케이스 개발로 이어지는 주된 원인은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 대상에 대한 명확한 정리", "right": false },
            { "value": "② 모든 결함이 긴급한 것으로 보고됨", "right": false },
            { "value": "③ 테스트 대상의 동작에 대한 명세 부재", "right": true },
            { "value": "④ 음성 등 비교가 어려운 형태로 실행 결과가 산출됨", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "테스트 설계 시 테스트 절차 명세에 작성되는 항목이 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 종료 작업", "right": false },
            { "value": "② 시작 작업", "right": false },
            { "value": "③ 예상 결과", "right": true },
            { "value": "④ 우선 순위", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 환경에 대한 요구사항 정의와 가장 거리가 먼 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 대상 요소가 실행될 수 있는 하드웨어 및 시스템 소프트웨어 환경이 정의되어야 한다.", "right": false },
            { "value": "② 하드웨어의 환경의 경우, 세부 규격(CPU, 메모리 등)은 추후에 정의하도록 한다.", "right": true },
            { "value": "③ 시스템 테스트 수준에서는 가능하다면 운영 환경에 근접한 환경을 구성하는 것이 권장된다.", "right": false },
            { "value": "④ 컴포넌트 테스트 수준에서는 개발자 환경에서 테스트를 수행하는 것이 일반적이다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 실행에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트를 실행하는 주체는 테스트 단계(레벨)에 따라서 달라질 수 있다.", "right": true },
            { "value": "② 컴포넌트 테스트는 사용자가 직접 실행시키는 것이 일반적이다.", "right": false },
            { "value": "③ 인수 테스트는 원칙적으로 운영 환경에서 개발자에 의해 실행된다.", "right": false },
            { "value": "④ 통합 테스트는 개발 환경에서 시스템 테스트 완료 후에 수행한다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "테스트 현황 보고서를 통해 파악할 수 있는 내용이 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 활동의 계획 대비 진척도", "right": false },
            { "value": "② 테스트 활동 수행의 방해 요인", "right": false },
            { "value": "③ 테스트 완료 기준 평가", "right": true },
            { "value": "④ 신규 또는 변경된 위험", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 종료 조건에 대한 기준(Exit Criteria)으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 전체 요구 사항 중 테스트를 통해 확인된 요구 사항 비율", "right": false },
            { "value": "② 준비된 테스트 케이스의 통과율(Pass rate)", "right": false },
            { "value": "③ 해당 제품 개발자의 승인 여부", "right": true },
            { "value": "④ 발견된 결함 수 대비 수정된 결함 수", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "명세 기반 테스트와 구조 기반 테스트 방법은 대표적인 정적 테스트 방법이다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "소프트웨어 생명주기 모델 중 폭포수 모델은 사용자의 요구사항이 개발자에게 익숙한 경우나 요구사항 변경이 개발도중에 빈번하게 이루어 질 경우에 적합한 개발 모형이다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "기술 리뷰(Technical review)에서는 체크리스트를 필수적으로 사용하여야 한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "명세기반 테스트는 소프트웨어를 실행하면서 테스트하고, 구조기반 테스트는 소프트웨어를 실행하지 않고 테스트를 수행한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "조건/분기 커버리지는 각 개별 조건식 및 전체 조건식의 결과 값이 참(True)과 거짓(False)을 적어도 한 번 이상 실행시키는 것을 기준으로 하는 테스트 방법이다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "명세 기반 테스트 기법 중에서 경곗값 분석은 동등분할 테스트보다 테스트 강도가 높다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "테스트 프로세스는 개발 프로세스가 종료된 후에 시작되며, 한번 정립된 프로세스는 변경하지 않는 것이 효율적이다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 계획 수립 시에는 테스트 절차 실행 시 테스트 대상에 입력되는 테스트 데이터만 식별한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 설계 및 구현 단계에서 피처 집합을 구성하는 하나의 세부 피처마다 테스트 케이스는 하나씩만 개발해야한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "결함 나이(defect age)는 수정(resolved)된 이후 검증(verified)이 될 때까지의 시간을 말한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "text",
        "question": "규정된 조건에서 규정된 기간 동안 오동작 없이 의도된 기능을 수행하는 소프트웨어의 품질 특성을 무엇이라 하는가?",
        "explanation": "신뢰성 | reliability",
        "correct": ["신뢰성", "reliability", "Reliability"]
    },
    {
        "type": "text",
        "question": "다음은 무엇에 대한 설명인지 기재하시오.[FL-2405-62.jpg]",
        "explanation": "인수 테스트 | 사용자 인수 테스트",
        "correct": ["인수 테스트", "사용자 인수 테스트"]
    },
    {
        "type": "text",
        "question": "다음 사례의 내용 중 밑줄 친 부분은 어떤 테스트에 대한 설명인가?[FL-2405-63.jpg]",
        "explanation": "재테스팅(Re-testing)",
        "correct": ["재테스팅", "Re-testing", "re-testing"]
    },
    {
        "type": "text",
        "question": "<보기>의 프로그램을 제어 흐름 그래프로 작성했을 때 최소 기본 블록은 몇 개인가?[FL-2405-64.jpg]",
        "explanation": "5개",
        "correct": "5개"
    },
    {
        "type": "text",
        "question": "다음은 구조기반 테스트 커버리지에 대한 설명이다. 어떤 테스트 커버리지에 대한 설명인지 기재하시오.<br>[FL-2405-65.jpg]",
        "explanation": "결정/조건, 조건/분기 및 / 기준 좌우가 바뀌어도 정답",
        "correct": ["결정/조건", "조건/분기"]
    },
    {
        "type": "text",
        "question": "<보기>의 단계들을 나열하여, 동등 분할을 하는 절차로 구성하시오.[FL-2405-66.jpg]",
        "explanation": "나 → 라 → 가 → 다",
        "correct": "나 → 라 → 가 → 다"
    },
    {
        "type": "text",
        "question": "<보기>의 명세를 기반으로 동등분할과 경계값 분석을 적용하여 테스트 케이스를 설계하였다. 이때 설계된 테스트 케이스 수는 각각 몇 개 인가? (단. 경계값 분석은 2-value를 적용한다.)[FL-2405-67.jpg]",
        "explanation": "동등분할: 4개, 경계값 분석: 7개",
        "correct": "동등분할 4개, 경계값 분석 7개"
    },
    {
        "type": "text",
        "question": "다음의 설명에서 빈칸에 들어갈 알맞은 테스팅은 무엇인가?[FL-2405-68.jpg]",
        "explanation": "리그레션 또는 회귀",
        "correct": ["리그레션", "회귀", "regression", "Regression"]
    },
    {
        "type": "text",
        "question": "다음은 결함 분석 방법에 대한 설명이다. 빈칸에 들어갈 알맞은 용어는 무엇인가?[FL-2405-69.jpg]",
        "explanation": "고립화 또는 Isolation",
        "correct": ["고립화", "Isolation", "isolation"]
    },
    {
        "type": "text",
        "question": "다음의 보기에서 설명하는 활동은 테스트 프로세스의 어느 단계에 해당하는가?[FL-2405-70.jpg]",
        "explanation": "테스트 종료",
        "correct": "테스트 종료"
    }
];
