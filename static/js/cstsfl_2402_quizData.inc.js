//CSTS FL 2402
var cstsfl_2402_quizData = [
    {
        "type": "radio",
        "question": "잠재적 결함을 포함하지 않는 요구사항은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① A 성적 프로그램은 성적 점수대로 정렬하여야 한다.", "right": false },
            { "value": "② B 시스템은 어떤 고객이 사용하더라도 사용이 쉬워야 한다.", "right": false },
            { "value": "③ C 데이터는 DES(데이터 암호화 표준)로 암호화할 수 있어야 한다.", "right": true },
            { "value": "④ D 앱은 언제 어디서라도 빠른 속도로 이용할 수 있어야 한다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중에서 품질 보증, 테스트, V&V의 관계를 가장 잘 표현 하고 있는 것은?<br>※ A ＜ B는 A의 개념보다 B가 더 광범위한 용어임을 의미한다. A = B는 A와 B가 동일한 범위를 가짐을 의미한다.",
        "explanation": "",
        "options": [
            { "value": "① 테스트 &gt; V&V = 품질 보증", "right": false },
            { "value": "② V&V = 테스트 &lt; 품질 보증", "right": false },
            { "value": "③ 테스트 &lt; V&V &lt; 품질 보증", "right": true },
            { "value": "④ V&V &lt; 테스트 &lt; 품질 보증", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 테스트에 관한 국제 표준은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① ISO/IEC/IEEE 29119", "right": true },
            { "value": "② ISO 25010", "right": false },
            { "value": "③ IEEE 730", "right": false },
            { "value": "④ ISO/IEC 12207", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "<보기>의 요구사항 명세서 기준으로 반드시 수행되어야 할 테스트 유형으로 올바르지 않은것은?",
        "question_sub": "<보기>1. 기능적 요구사항<br>&nbsp;&nbsp;&nbsp;&nbsp;1.1 기능 1<br>&nbsp;&nbsp;&nbsp;&nbsp;1.2 기능 2<br>2. 품질 요구사항<br>&nbsp;&nbsp;&nbsp;&nbsp;2.1 성능 요구사항<br>&nbsp;&nbsp;&nbsp;&nbsp;2.2 보안 요구사항<br>&nbsp;&nbsp;&nbsp;&nbsp;2.3 신뢰성 요구사항",
        "explanation": "",
        "options": [
            { "value": "① 부하 테스트", "right": false },
            { "value": "② 기능 테스트", "right": true },
            { "value": "③ 정적 분석", "right": false },
            { "value": "④ 접근성 테스트", "right": false }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음은 무엇에 대한 설명인가?",
        "question_sub": "<다음>테스트가 테스트 요구사항을 얼마만큼 만족하는지 나타내는 용어로 “테스팅 정도에 대한 양적 평가”를 결정하는 것이다. 이를 근거로 테스트를 얼마나 더 해야 할지 멈추어야 할지 결정할 수 있다.",
        "explanation": "",
        "options": [
            { "value": "① 테스트 효율성", "right": false },
            { "value": "② 테스트 조건", "right": false },
            { "value": "③ 테스트 케이스 실패율", "right": false },
            { "value": "④ 테스트 커버리지", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 테스트 종류 중, 분류 기준이 다른 하나는 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 성능 테스트 (Performance Test)", "right": false },
            { "value": "② 시스템 테스트 (System Test)", "right": true },
            { "value": "③ 보안성 테스트 (Security Test)", "right": false },
            { "value": "④ 신뢰성 테스트 (Reliability Test)", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "인수 테스트에 대한 다음의 설명 중 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 사용자의 입장에서 실제 사용자 환경에서 테스트한다.", "right": false },
            { "value": "② 인수 기준을 만족하는지 확인하는 것이 주된 목적이다.", "right": false },
            { "value": "③ 인수 테스트에 앞서 알파·베타 테스트를 수행할 수 있다.", "right": false },
            { "value": "④ 시스템 테스트에서 사용한 테스트 케이스들을 재사용하면 안 된다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "기능 적합성 테스트의 유형이 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 기능 정확성", "right": false },
            { "value": "② 기능 용이성", "right": true },
            { "value": "③ 기능 완전성", "right": false },
            { "value": "④ 기능 적절성", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": " 아래와 같은 시스템 구성에서 성능 테스트의 단계적 접근 방식 중 ⓑ에 대한 설명으로 올바른 것은?[FL-2402-09.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 단위 성능 테스트로 단위 업무를 개발하여 성능 테스트 수행 및 성능 진단", "right": false },
            { "value": "② 연계 성능 테스트로 단위 업무의 성능이 점검된 시스템을 대상으로 부분 연계 성능 테스트 수행", "right": true },
            { "value": "③ 통합 성능 테스트로 시스템 전체를 연계하여 통합 성능 테스트를 수행", "right": false },
            { "value": "④ 임계 성능 테스트로 임계 부하상황(Peak치 성능)에서의 성능 테스트를 수행", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "보안성 품질 특성에 대한 설명으로 가장 적절한 것은?",
        "explanation": "",
        "options": [
            { "value": "① 보안성의 부특성은 성숙성, 가용성, 접근성이 있다.", "right": false },
            { "value": "② 소프트웨어가 정보 및 데이터를 올바르게 보호하는 능력을 의미한다.", "right": true },
            { "value": "③ 침입 테스트로 소프트웨어의 취약성이 발견되지 않았다면, 시스템의 보안성이 확보되었다고 확신할 수 있다.", "right": false },
            { "value": "④ 부특성인 접근성은 데이터가 인가되지 않은 접근으로부터 보호되는 비율, 암호화 및 복호화가 정확히 구현된 비율 등으로 측정한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음은 어느 회사의 재고 관리 시스템을 테스트하고 있는 상황을 묘사한 것이다. 테스트 용이성(Testability) 관점에서 시스템의 어느 특성을 설명한 것인가?",
        "question_sub": "<다음>테스트 그룹에서는 다양한 재고 상황(예를 들면, 특정 물품의 재고가 없는 경우 등)에 대해 시스템의 반응을 확인하기 위해 물품 데이터베이스나 시스템 일부를 수정 변경하였으며, 시스템을 다양한 모드로 조작하기 위한 테스트 전용 사용자 인터페이스(UI)를 개발하였다. 또한, 시스템의 현재 상태를 알아보기 위해 코드 중간중간에 변수들의 값을 출력하는 문장들을 삽입하였다.",
        "explanation": "",
        "options": [
            { "value": "① 단순성(Simplicity), 관찰 가능성(Observability)", "right": false },
            { "value": "② 단순성(Simplicity), 분할 용이성(Decomposability)", "right": false },
            { "value": "③ 관찰 가능성(Observability), 제어 용이성(Controllability)", "right": true },
            { "value": "④ 분할 용이성(Decomposability), 제어 용이성(Controllability)", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 이식성 테스팅에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 이식성의 부특성으로는 복구성, 무결성, 상호운용성이 있다.", "right": false },
            { "value": "② 제품이 다른 지정된 SW 제품으로 대체할 수 있는지 확인한다.", "right": true },
            { "value": "③ 제품이 장애 없이 효과적이고 효율적으로 변경될 수 있는지 확인한다.", "right": false },
            { "value": "④ 구성요소 간 정보를 교환하고 교환된 정보를 사용할 수 있는지 확인한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음에서 ISO/IEC 25010 품질 특성 중 주특성인 보안성에 대한 부특성으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 부인 방지성 (non-repudiation)", "right": false },
            { "value": "② 책임성 (accountability)", "right": false },
            { "value": "③ 인증성 (authenticity)", "right": false },
            { "value": "④ 접근성 (accessibility)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "<보기>는 소프트웨어 유지보수 활동의 비율을 나타내고 있다. 이에 대한 설명으로 올바르지 않은 것은?[FL-2402-14.jpg]",
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
        "question": "V-모델의 테스트 활동에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 시스템 테스트는 시스템 명세에 맞게 구현되었는지 확인한다.", "right": true },
            { "value": "② 인수 테스트는 사용자 관점에서 결함을 검출하는 것이 중요하다.", "right": false },
            { "value": "③ 통합 테스트는 각 모듈이 올바르게 기능을 수행하는지 판별한다.", "right": false },
            { "value": "④ 단위 테스트는 모듈 간의 의존관계를 보여주는 구조 설계 문서가 필요하다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "나선형 모델에서 나타나는 테스트의 특징으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 매 주기에서 적당한 테스트가 이루어져 개발 과정에서 많은 결함을 해결할 수 있다.", "right": false },
            { "value": "② 나선형 프로세스의 한 주기마다 사용자의 피드백을 받을 수 있다.", "right": false },
            { "value": "③ 개발이 거의 완료된 후에야 심각한 결함을 발견할 수 있다.", "right": true },
            { "value": "④ 이전 개발 주기에서 획득한 고객 평가를 다음 설계나 테스트에 반영할 수 있다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": " 다음은 테스트 케이스를 먼저 작성하고, 이 테스트 케이스로 테스트 되는 실제 프로그램의 코드를 나중에 작성하는 TDD 프로세스이다. TDD 방식을 사용하는 가장 대표적인 소프트웨어 개발 모델은 무엇인가?[FL-2402-17.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 애자일 개발 모델", "right": true },
            { "value": "② 폭포수 모델", "right": false },
            { "value": "③ 진화적 개발 모델", "right": false },
            { "value": "④ 나선형 모델", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 중 인스펙션과 워크쓰루의 차이를 올바르게 설명한 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 인스펙션에서는 훈련된 리더가 회의를 주재하지만 워크쓰루에서는 일반적으로 개발 산출물 작성자가 회의를 주재한다.", "right": true },
            { "value": "② 인스펙션에서는 참가자들의 역할이 명확하게 구분되지 않지만 워크쓰루에서는 참가자들의 역할이 명확하게 구분된다.", "right": false },
            { "value": "③ 인스펙션에서는 개발 산출물 작성자가 회의에 참여하지 않는다.", "right": false },
            { "value": "④ 워크쓰루가 인스펙션보다 형식적인 절차를 요구한다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "기술 리뷰에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 대표 엔지니어가 주재하며, 관리자는 참가할 수 없다.", "right": true },
            { "value": "② 대상 작업물이 계획, 법규, 표준이나 명세를 충실히 지키는지 평가한다.", "right": false },
            { "value": "③ 대상 작업물이 의도된 사용에 적합한지 평가한다.", "right": false },
            { "value": "④ 프로젝트의 기술적 상태를 확인하는 증거로 관리자에게 제공한다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "정적 분석을 통해 식별할 수 있는 결함 유형과 거리가 먼 것은?",
        "explanation": "",
        "options": [
            { "value": "① 초기화하지 않고 사용한 변수", "right": false },
            { "value": "② 선언 후 사용하지 않은 함수", "right": false },
            { "value": "③ 선언 후 사용하지 않은 변수", "right": false },
            { "value": "④ 요구사항과 다른 연산 결과", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중 정적 분석으로 할 수 있는 활동이 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 복잡도 분석", "right": false },
            { "value": "② 자료 흐름 분석", "right": false },
            { "value": "③ 워크쓰루(Walk-through)", "right": true },
            { "value": "④ 코딩 표준을 활용한 분석", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "코딩 표준을 준수하여 얻을 수 있는 장점으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 다른 엔지니어들의 이해도를 높여준다.", "right": false },
            { "value": "② 모든 결함을 사전에 방지할 수 있다.", "right": true },
            { "value": "③ 유지보수 노력을 줄일 수 있다.", "right": false },
            { "value": "④ 팀워크를 향상시킨다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 제어 흐름 그래프(Control Flow Graph)를 이용한 순환 복잡도(Cyclomatic Complexity) 계산에 대한 내용 중 올바르지 않은 것은?[FL-2402-23.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 제공된 McCabe Cyclomatic Complexity에 의한 순환 복잡도 계산 결과는 5이다.", "right": false },
            { "value": "② 순환 복잡도를 낮추더라도 수행해야 하는 테스트 케이스의 수는 그대로 유지된다.", "right": true },
            { "value": "③ 순환 복잡도는 제어 흐름 그래프 내 루프나 조건 분기가 많아지는 경우 증가한다.", "right": false },
            { "value": "④ 순환 복잡도가 일정 수준 이상으로 증가하면 프로그램 내 오류의 확률도 증가한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 보기에서 동일한 유형의 테스트 설계 기법으로만 짝 지어진 것은?",
        "question_sub": "<보기>A. 상태 전이 테스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F. 분류 트리 테스트<br>B. 자료 흐름 테스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;G. 페어와이즈 테스트<br>C. 문장 테스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;H. 경계값 분석 테스트<br>D. 시나리오 테스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I. MC/DC 테스트<br>E. 동등 분할 테스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;J. 결정 테이블 테스트",
        "explanation": "",
        "options": [
            { "value": "① A, B, D, F", "right": false },
            { "value": "② C, E, G, H", "right": false },
            { "value": "③ A, F, G, J", "right": true },
            { "value": "④ B, C, G, I", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 <보기>의 프로그램에 대하여 100% 문장 커버리지를 만족하는 테스트 데이터는 무엇인가?<br>(※ 단, short circuit evaluation은 없다고 가정한다.)",
        "question_sub": "<보기>IF (( X > 1 ) AND ( Y == 1 ))<br>&nbsp;&nbsp;&nbsp;&nbsp;Z = Z / X<br>END<br>IF (( X == 2 ) OR ( Z > 1 ))<br>&nbsp;&nbsp;&nbsp;&nbsp;Z = Z + 1<br>END",
        "explanation": "",
        "options": [
            { "value": "① X=5, Y=1, Z=10", "right": true },
            { "value": "② X=1, Y=1, Z=2", "right": false },
            { "value": "③ X=2, Y=2, Z=5", "right": false },
            { "value": "④ X=3, Y=1, Z=0", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "<보기>와 같은 제어 흐름 그래프에 대해 커버하는 경로가 각기 다른 3개의 테스트 케이스를 실행하였을 때 결정 커버리지 달성에 대한 설명으로 올바른 것은?[FL-2402-26.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 결정 D는 완전히 테스트 되지 않았다.", "right": true },
            { "value": "② 결정 H는 완전히 테스트 되지 않았다.", "right": false },
            { "value": "③ 결정 F는 완전히 테스트 되지 않았다.", "right": false },
            { "value": "④ 100% 결정 커버리지를 달성했다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "커버리지 간의 포용 관계를 도식화한 것 중 올바른 것은?[FL-2402-27.jpg]",
        "explanation": "",
        "options": [
            { "value": "①", "right": false },
            { "value": "②", "right": false },
            { "value": "③", "right": false },
            { "value": "④", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음의 명세를 동등 분할 테스트를 수행하기 위하여 테스트 케이스를 설계할 때 유효한 출력에 바탕을 둔 테스트 입력은 무엇인가?",
        "question_sub": "<다음>공연 티켓을 예매하는 시스템에서 티켓의 수량을 입력하는 필드가 있다. 한 사람이 한 번에 구매할 수 있는 수량은 1장에서 5장까지이다. 1보다 작거나 5보다 큰 숫자가 입력되거나 정수가아닌 값이 입력되면 “invalid input” 메시지가 출력된다.",
        "explanation": "",
        "options": [
            { "value": "① 입력 수량을 –5로 테스트한다.", "right": false },
            { "value": "② 입력 수량을 10으로 테스트한다.", "right": false },
            { "value": "③ 입력 수량을 5.3으로 테스트한다.", "right": false },
            { "value": "④ ①, ②, ③ 모두 유효한 출력에 바탕을 둔 테스트이다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "입력 인자(X)에 대해 10≤X≤20 제약조건이 있는 시스템을 개발 중이다. 개발자 실수로 X≤20 조건을 누락하여 10≤X로 구현하였을 때, 다음 중 경계 누락 오류를 찾을 가능성이 가장 높은 테스트 입력 값은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 9", "right": false },
            { "value": "② 10", "right": false },
            { "value": "③ 20", "right": false },
            { "value": "④ 21", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중 입력 인자와 클래스의 개수가 <보기>와 같을 때, 생성되는 테스트 케이스 개수 순서대로 올바르게 나열한 것은? (적은 것 → 많은 것)[FL-2402-30.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (가) → (나) → (다) → (라)", "right": false },
            { "value": "② (가) → (나) → (라) → (다)", "right": false },
            { "value": "③ (가) → (라) → (나) → (다)", "right": true },
            { "value": "④ (나) → (가) → (라) → (다)", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "아래의 입력 인자 기반으로 IPO 알고리즘을 사용하여 테스트 케이스를 도출하였다. 빈칸에 들어갈 수 있는 테스트 데이터는 무엇인가?[FL-2402-31.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (A1, C1)", "right": false },
            { "value": "② (A1, C2)", "right": false },
            { "value": "③ (A2, C2)", "right": false },
            { "value": "④ (A3, C1)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "자동차 보험료를 산정하는 소프트웨어가 있다. 자동차 보험료는 운전 경력, 사고 횟수, 결혼 여부, 나이 및 성별과 같은 다양한 조건에 따라 산정된다. 자동차 보험료 산정 소프트웨어를 테스트 하는데 가장 적합한 테스트 방법은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 상태 전이 테스트", "right": false },
            { "value": "② 리그레션 테스트", "right": false },
            { "value": "③ 결정표 테스트", "right": true },
            { "value": "④ 성능 테스트", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "시스템의 상태 전이도를 기반으로 테스트 케이스를 도출하는 절차로 올바른 것은?",
        "question_sub": "<보기>(가) 비정상적인 전이를 테스트하는 테스트 케이스를 생성한다.<br>(나) 상태 전이도로부터 전이 트리를 만든다.<br>(다) 대상 시스템의 상태 전이도를 모델링한다.<br>(라) 전이 트리로부터 각 전이 경로를 테스트하는 테스트 케이스를 생성한다.",
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
        "question": "다음 중 탐색적 테스팅에 대한 설명으로 가장 거리가 먼 것은?",
        "explanation": "",
        "options": [
            { "value": "① 탐색적 테스트의 효과는 테스터의 지식에 의존한다.", "right": false },
            { "value": "② 테스트 케이스를 먼저 디자인하지 않는다.", "right": false },
            { "value": "③ 애자일 개발 방법에 적합하지 않다.", "right": true },
            { "value": "④ 다른 테스트 기법의 사용을 포함할 수 있다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "테스트 프로세스의 각 단계에 따라 수행될 작업으로 잘못된 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 계획: 테스트 조직과 작업 및 수행 일정 수립", "right": false },
            { "value": "② 테스트 설계: 테스트 시나리오 및 테스트 케이스 작성", "right": false },
            { "value": "③ 테스트 실행: 테스트 절차 정의", "right": true },
            { "value": "④ 테스트 평가 및 개선: 테스트 활동의 효율성 평가 및 개선 방향 제시", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "테스트 관리를 위해 수행하는 활동이 일어나는 순서대로 올바르게 나열한 것은?",
        "question_sub": "<보기>(가) 테스트 현황을 파악하고 테스트 활동을 적절하게 제어한다.<br>(나) 테스트 대상과 범위를 식별하여 테스트 전략을 수립한다.<br>(다) 생성된 산출물을 관리하고 테스트 환경을 정리한다.",
        "explanation": "",
        "options": [
            { "value": "① (가) - (나) - (다)", "right": false },
            { "value": "② (가) - (다) - (나)", "right": false },
            { "value": "③ (나) - (가) - (다)", "right": true },
            { "value": "④ (나) - (다) - (가)", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중에서 테스트 관리 프로세스에 대한 설명으로서 부적절한 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 대상과 범위를 식별하고 조직 테스트 프로세스를 참고하여 테스트 전략을 수립한다.", "right": false },
            { "value": "② 테스트 실행 결과에 대한 분석을 바탕으로 결함을 식별하고 기록한다.", "right": true },
            { "value": "③ 동적 테스트 프로세스의 수행을 모니터링하여 테스트 상황을 파악하고 필요시 테스트 활동을 제어한다.", "right": false },
            { "value": "④ 테스트가 종료되면 생성된 산출물을 관리하고 테스트 환경을 정리하고 테스트 종료 보고를 한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 계획에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 수행 대상 시스템의 영역을 정의한다.", "right": false },
            { "value": "② 테스트를 진행할 인력과 조직 및 수행 일정을 정의한다.", "right": false },
            { "value": "③ 테스트 케이스 정의가 가능할 정도로 구체적인 테스트 접근 방법이 정의된다.", "right": true },
            { "value": "④ 성능 테스트, 보안 테스트 등과 같은 비기능적 요구사항에 대한 테스트 수행 여부가 결정된다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중에서 테스트 계획을 수립할 때 테스트 컨텍스트를 설정하는 과정에 해당되지 않는 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 대상에 대한 테스트 완료 여부를 결정하는 기준을 정한다.", "right": true },
            { "value": "② 테스트 대상 및 테스트 범위를 바탕을 어떤 개별 테스트를 수행할지 결정하도록 한다.", "right": false },
            { "value": "③ 테스트 대상의 미션 또는 비즈니스 목표 등을 기술한다.", "right": false },
            { "value": "④ 각 테스트 레벨별로 초점을 두는 테스트 범위가 다를 수 있다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 보기의 설명에 부합하는 테스트 설계기법은 무엇인가?",
        "question_sub": "<보기>- 검토할 산출물의 작성자가 아닌 별도의 주재자에 의한 진행되며, 공식적 리뷰 활동임<br>- 요구사항정의 및 설계 산출물, 개발 단계의 소스코드를 대상으로 진행할 수 있음<br>- 소프트웨어 제품 승인에 대한 명확한 시작과 종료 조건을 제시해야 함",
        "explanation": "",
        "options": [
            { "value": "① 워크쓰루(Walk-through)", "right": false },
            { "value": "② 인스펙션(Inspection)", "right": true },
            { "value": "③ 동등 분할(Equivalence partitioning)", "right": false },
            { "value": "④ 결정/조건 테스트(Decision condition test)", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 데이터에 대한 구체적인 요건을 식별할 때 반드시 결정되어야 하는 요소가 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 데이터의 규모", "right": false },
            { "value": "② 데이터의 중요도", "right": true },
            { "value": "③ 데이터의 저장 위치", "right": false },
            { "value": "④ 데이터의 접근 권한", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 담당자 A씨는 고객이 요청한 기능이 충분히 테스트 되었는지 테스트 메트릭을 활용하여 확인하고자 한다. 이를 위한 테스트 메트릭으로 가장 적절한 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 요구사항 커버리지", "right": true },
            { "value": "② 테스트 케이스 수", "right": false },
            { "value": "③ 상태별 결함 수", "right": false },
            { "value": "④ 테스트 진척율", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 보기에서 테스트 분석 및 설계에 대한 올바른 설명을 모두 고른 것은 무엇인가?",
        "question_sub": "<보기>(가) 테스트 수행 시 사용될 테스트 케이스에 대한 생성 및 확보 전략을 수립한다.<br>(나) 테스트 계획서에 기술된 테스트 목적을 달성하기 위한 구체적인 테스트 접근 방법을 정의한다.<br>(다) 테스트 수행에 앞서 테스트에 사용될 테스트 데이터를 준비한다.<br>(라) 테스트를 수행하기 위한 테스트 절차서를 작성한다.<br>(마) 효과적인 커버리지 달성을 위하여 테스트 케이스는 가능한 한 많이 작성한다.",
        "explanation": "",
        "options": [
            { "value": "① (가), (나)", "right": false },
            { "value": "② (나), (다), (라)", "right": false },
            { "value": "③ (가), (나), (라)", "right": true },
            { "value": "④ (가), (나), (다), (마)", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "설계된 테스트 케이스가 상세할수록 나타나는 특징이 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 유지보수가 어렵다.", "right": false },
            { "value": "② 테스터의 창의성을 떨어뜨리는 경우가 많다.", "right": false },
            { "value": "③ 살충제 효과(Pesticide paradox)에 걸리기 쉽다.", "right": false },
            { "value": "④ 효과적으로 결함을 발견한다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트 레벨별 테스트 환경에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 컴포넌트 테스트 레벨은 개발자 환경에서 테스트하는 것이 일반적이다.", "right": false },
            { "value": "② 통합 테스트 레벨은 실제 운영환경에 근접한 환경에서 테스트하는 것을 권장한다.", "right": true },
            { "value": "③ 시스템 테스트 레벨은 실제 운영환경에 근접한 환경에서 테스트하는 것을 권장한다.", "right": false },
            { "value": "④ 인수 테스트 레벨은 실제 사용자 환경에서 테스트하는 것이 바람직하다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트를 실행하는 주체는 테스트 수준에 따라서 달라질 수 있다. 다음 중 수준별 테스트를 실행하는 일반적인 주체가 올바른 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 컴포넌트 테스트는 개발자와 사용자가 수행한다.", "right": false },
            { "value": "② 통합 테스트는 개발자와 테스트 리더가 수행한다.", "right": false },
            { "value": "③ 시스템 테스트는 개발자와 테스터 그리고 사용자가 수행한다.", "right": true },
            { "value": "④ 인수 테스트는 개발자와 테스터가 수행한다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "개발자가 결함수정 요청을 처리한 상태의 결함 생명주기 절차는?",
        "explanation": "",
        "options": [
            { "value": "① Open", "right": false },
            { "value": "② Review", "right": false },
            { "value": "③ Assigned", "right": false },
            { "value": "④ Resolved", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 모니터링 및 제어 활동으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 결함 발견율, 조치율, 수정율 및 결함 추이를 관리한다.", "right": false },
            { "value": "② 계획된 일정 대비 테스트가 정상적으로 수행되는지 확인한다.", "right": false },
            { "value": "③ 테스트를 수행할 인적 자원에 대한 역량 및 역할을 결정한다.", "right": true },
            { "value": "④ 정기적 또는 비정기적으로 회의를 통해 테스트 진행 상태를 확인한다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "<보기>는 테스트가 진행되면서 발생된 결함의 상태별 누적 개수를 보여준다. 이에 대한 설명으로 올바르지 않은 것은?[FL-2402-49.jpg]",
        "explanation": "",
        "options": [
            { "value": "① Open 곡선과 Resolved 곡선 사이의 공간은 해결해야 할 결함을 나타낸다.", "right": false },
            { "value": "② Resolved 곡선과 Verified 곡선 사이의 공간은 검증해야 할 결함을 나타낸다.", "right": true },
            { "value": "③ Open 곡선과 Resolved 곡선 사이의 공간이 클수록 개발자의 잔여 작업량이 많다.", "right": false },
            { "value": "④ Open 곡선과 Verified 곡선 사이의 공간이 클수록 테스터의 작업량은 적어지며, 개발자의 작업량은 많아진다.", "right": false }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트 모니터링 및 제어활동의 주요산출물인 테스트 현황 보고서의 항목으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 계획 대비 진척도", "right": false },
            { "value": "② 테스트 메트릭", "right": false },
            { "value": "③ 결함 상태", "right": true },
            { "value": "④ 이후 테스트 계획", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "SW 테스트 국제 표준인 ISO/IEC 29119 Part 4에서 테스트 설계 기법으로 명세 기반 방법, 구조 기반 방법, 오류추정 기반 방법으로 분류한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 스텁(Test Stub)은 테스트 대상 모듈을 호출하여 모듈을 실행시키는 프로그램이다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "하향식 통합 테스트는 많은 수의 테스트 스텁이 필요하고 만약 테스트 스텁을 구현할 때 비용이 많이 소요되는 경우에는 비효율적이다. 상향식 통합 테스트는 블랙박스 테스트만을 사용하는 경우에는 하위 모듈이 충분하게 테스트가 이루어지지 않을 수 있다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "모델 기반 테스트는 잘 구축된 모델을 통한 테스트 자동화뿐 아니라, 테스트 모델 구축의 자동화도 가능하게 하여 효율적인 테스트를 수행할 수 있다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "Agile 개발 모델에서는 인스펙션 유형의 리뷰는 수행할 수 없다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "<보기>의 프로그램에 x=0, y=1 을 입력하여 테스트한다면, 문장 커버리지 100%를 달성할 수 있다.",
        "question_sub": "<보기>int foo (int x ,int y )<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;int z =0 ;<br>&nbsp;&nbsp;&nbsp;&nbsp;if ((x >0 )&&(y >0 ))<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z =x ;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;return z ;<br>}",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "변형된 조건/결정 테스트(Modified Condition Decision Adequacy Criterion, MCDC)는 프로그램의 결정들에 사용된 모든 조건의 조합을 테스트를 할 수 있는 입력 데이터들을 테스트 데이터 집합으로 선정한다. 따라서 문장 테스트, 결정 테스트, 조건 테스트 및 결정/조건 테스트를 포함한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 계획을 세울 때 테스트 레벨에 따라 중점을 두는 비 기능적 테스트의 범위는 요구사항 명세서를 기준으로 일관되게 적용해야 한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "결함의 심각도 또는 우선순위에 상관없이 모든 결함은 동일한 결함 생명 주기에 따라 처리된다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트를 종료하며 향후 재사용 가능성이 있는 산출물들은 공유 시스템에 저장하고 고유의 식별자를 부여한다. 그리고 조직 내의 형상 항목을 공유하기 위한 시스템에 저장할 수 있지만 형상 통제 항목에 포함시킬 필요는 없다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "text",
        "question": "빈칸에 공통으로 들어갈 알맞은 용어를 작성하시오.",
        "question_sub": "- (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) 테스팅은 프로그램 제어 흐름이나 자료 흐름 정보를 이용하여 테스트 케이스를 설계하는 방법이다.<br>- 가장 이상적인 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) 테스팅은 모든 경로를 최소한 한번은 실행하여 테스트하는 것이다.",
        "explanation": "",
        "correct": [" 구조기반, Structure-based Test"]
    },
    {
        "type": "text",
        "question": "다음 설명에 적절한 테스트 용어를 기재하시오.",
        "question_sub": "테스트가 가능한 최소 단위의 소프트웨어(모듈, 프로그램, 객체, 클래스 등) 내에서 결함을 찾고 검증하는 테스트 단계",
        "explanation": "",
        "correct": ["단위 테스트, 단위 테스팅, Unit Test, Unit Testing, 컴포넌트 테스트, 컴포넌트 테스팅, Component Test, Component Testing"]
    },
    {
        "type": "text",
        "question": "시스템이 1000시간 단위 동안에 982시간 단위 동안 서비스를 제공할 수 있다면 가용성은 몇 인가? (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;% ) ",
        "explanation": "",
        "correct": ["0.982%, 98.2%, 982/1000"]
    },
    {
        "type": "text",
        "question": "다음 빈칸에 알맞은 테스팅 방법은 무엇인가?",
        "question_sub": "개발자가 결함을 제거하기 위해서 코드를 수정하였더라도 실제로 결함이 제거되었는지 확인할 필요가 있다. 이를 위하여 초기에 결함을 검출한 테스트 케이스를 이용하여 테스팅을 다시 수행하는데, 이를 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) 이라고 부른다.",
        "explanation": "",
        "correct": ["재테스팅, retesting, 재테스트, retest"]
    },
    {
        "type": "text",
        "question": "감사는 비준수 사항의 사례를 식별하고 해당팀이 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)을 요구하는 보고서를 작성한다.",
        "explanation": "",
        "correct": ["교정 활동, corrective action"]
    },
    {
        "type": "text",
        "question": "명세 기반 테스트 케이스들은 명세에는 있지만 구현되지 않은 기능이 있는 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)을 검출할 가능성을 높여준다.",
        "explanation": "",
        "correct": ["누락 결함, (요구사항이)구현되지 않은 결함"]
    },
    {
        "type": "text",
        "question": "다음은 명세기반 테스트 기법을 설명한 것이다. 빈칸에 들어갈 알맞은 용어는 무엇인가?",
        "question_sub": "(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) 테스트는 소프트웨어나 시스템 입력의 결과로 입력값 / 출력값 영역을 유한개의 상호 독립적인 집합으로 나누어 수학적인 등가 집합을 만든 후, 각 등가 집합의 원소 중 대표 값을 선택하여 테스트 케이스를 도출하는 기법이다.",
        "explanation": "",
        "correct": ["동등 분할, 동등 분할 클래스, 동치 분할, 동등 클래스 분할, 등가 분할, Equivalence partitioning"]
    },
    {
        "type": "text",
        "question": " (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)은 개발자가 범할 수 있는 실수를 추정하고 이에 따른 결함이 검출되도록 테스트 케이스를 설계하는 경험 기반 테스트 방법 중 하나이다. 즉, 특정 테스트 대상이 주어지면 테스터의 경험과 직관을 바탕으로 개발자가 범할 수 있는 실수를 나열하고, 해당 실수에 따른 결함을 발견한다.",
        "explanation": "",
        "correct": ["오류 추정 , 에러 추정, 에러 추정 테스트, 오류 추정 기반 테스트, 오류 추정 기반 방법"]
    },
    {
        "type": "text",
        "question": "<보기>의 설명에 해당하는 테스트 산출물은 무엇인가?",
        "question_sub": "<보기>- 테스트 대상 및 범위를 기술한다.<br>- 테스트의 가정 및 제약 사항을 포함한다.<br>- 테스트 중단 및 재시작 기준을 결정한다.<br>- 테스트 조직 및 인력 구성에 대해 기술한다.",
        "explanation": "",
        "correct": ["테스트 계획서, 테스트 계획 산출물"]
    },
    {
        "type": "text",
        "question": "<보기>의 그림은 결함이 발생한 테스트1의 상황에 추가적으로 n-1개의 테스트를 수행함으로써 결함을 발생시키는 데이터, 절차 및 환경을 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) 하는 절차를 보여준다.[FL-2402-70.jpg]",
        "explanation": "",
        "correct": ["결함의 일반화"]
    }
];
