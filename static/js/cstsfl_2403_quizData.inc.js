//CSTS FL 2403
var cstsfl_2403_quizData = [
    {
        "type": "radio",
        "question": "다음 중 소프트웨어 테스트 활동에 대한 설명으로 올바른 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 결함의 위치를 파악하고 제거하는 것을 목적으로 한다.", "right": false },
            { "value": "② 결함 검출 및 제거를 목표로 하나, 소프트웨어 품질 개선을 목표로 하지 않는다.", "right": false },
            { "value": "③ 정해진 요구사항을 만족하는지 확인하고, 주어진 표준 등을 준수하는지 검증하는 활동이다.", "right": true },
            { "value": "④ 남아 있는 결함이 장애를 일으키지 않음의 증명을 통해 소프트웨어의 품질을 보증하는 활동이다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "<보기>는 결함(Defect), 오류(Error) 및 장애(Failure)를 발생 순서에 따라 도식화 한 것이다. 순서가 올바른 것은?[FL-2403-02.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (가) 결함, (나) 오류, (다) 장애", "right": false },
            { "value": "② (가) 결함, (나) 장애, (다) 오류", "right": false },
            { "value": "③ (가) 오류, (나) 결함, (다) 장애", "right": true },
            { "value": "④ (가) 오류, (나) 장애, (다) 결함", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 통합 테스트에서 결함이 발견되는 경우의 원인 또는 사례에 대한 설명이 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 개별적인 모듈에 대한 테스트가 충분하지 않았다.", "right": false },
            { "value": "② 제한된 특정 상황만을 반영한 테스트 드라이버 또는 스텁을 사용하여 테스트하였다.", "right": false },
            { "value": "③ 모듈 간 동일한 전역 변수 사용으로 인한 예기치 못한 상호작용 발생을 고려하였다.", "right": true },
            { "value": "④ 임의의 모듈에 대해 예외 사항을 고려하지 않았다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 동적 테스트에 해당하지 않는 것은?",
        "explanation": "",
        "options": [
            { "value": "① 인스펙션(Inspection)", "right": true },
            { "value": "② 오류 추정(Error guessing)", "right": false },
            { "value": "③ 조건 테스트(Condition test)", "right": false },
            { "value": "④ 조합 테스트(Combinatorial test)", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음은 무엇에 대한 설명인가?",
        "question_sub": "<다음>테스트 사전 조건과 입력 데이터 및 테스트 사후 조건과 예상 결과를 작성함",
        "explanation": "",
        "options": [
            { "value": "① 요구사항 (Requirement)", "right": false },
            { "value": "② 테스트 시나리오 (Test Scenario)", "right": false },
            { "value": "③ 테스트 절차서 (Test Procedure)", "right": false },
            { "value": "④ 테스트 케이스 (Test Case)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "<보기>/]에서 설명하는 특징과 테스트 단계를 바르게 연결한 것은?",
        "question_sub": "<보기>(가) 사용자 또는 제3자 테스트, 사용자 환경, 다양한 형태의 테스트 가능(알파, 베타 테스트)<br>(나) 개발자 중심의 개발 환경, 개발자 또는 개발 지식이 있는 테스터가 수행, 테스트 대상 단위  소프트웨어를 독립적으로 실행시킬 환경 필요<br>(다) 개발자 중심의 개발 환경, 개발자 또는 개발 지식이 있는 테스터가 수행, 소프트웨어 통합에 필요한 환경 필요(테스트 드라이버, 테스트 스텁)<br>(라) 제3자 중심의 명세 기반 테스트, 소프트웨어 기능 및 비 기능 요구사항 만족 여부 검증, 사용자 환경 또는 사용자 환경과 최대한 유사한 환경 구성 필요",
        "explanation": "",
        "options": [
            { "value": "① (가) - 인수 테스트, (나) - 컴포넌트 테스트, (다) - 통합 테스트, (라) - 시스템 테스트", "right": true },
            { "value": "② (가) - 인수 테스트, (나) - 통합 테스트, (다) - 컴포넌트 테스트, (라) - 시스템 테스트", "right": false },
            { "value": "③ (가) - 시스템 테스트, (나) - 컴포넌트 테스트, (다) - 통합 테스트, (라) - 인수 테스트", "right": false },
            { "value": "④ (가) - 시스템 테스트, (나) - 통합 테스트, (다) - 컴포넌트 테스트,  (라) - 인수 테스트", "right": false }
        ],
        "correct": 0
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
        "question": "점진적 방식의 통합 테스트가 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 빅뱅 방식", "right": true },
            { "value": "② 상향식 방식", "right": false },
            { "value": "③ 하향식 방식", "right": false },
            { "value": "④ 샌드위치 방식", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "인수 테스트의 일반적인 수행 주체는 누구인가?",
        "explanation": "",
        "options": [
            { "value": "① 개발자", "right": false },
            { "value": "② 테스트 팀", "right": false },
            { "value": "③ 시스템 엔지니어", "right": false },
            { "value": "④ 고객 또는 사용자", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "기능 적합성의 부특성과 그에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 기능 완전성 – 기능 집합이 모든 명시된 요구사항을 포괄하는 정도", "right": true },
            { "value": "② 기능 정확성 – 기능이 목적 달성에 도움을 주는 정도", "right": false },
            { "value": "③ 기능 적절성 – 시스템이 정의된 정밀도로 정확한 결과를 제공하는 정도", "right": false },
            { "value": "④ 시간 반응성 – 기능 수행 시 시스템의 응답 시간 및 처리율이 요구사항을 충족시키는 정도", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 그림에서 스파이크 테스팅에 해당하는 것은?[FL-2403-11.jpg]",
        "explanation": "",
        "options": [
            { "value": "", "right": false },
            { "value": "", "right": false },
            { "value": "", "right": true },
            { "value": "", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 ISO/IEC 25010 품질 특성 중 주특성인 보안성에 대한 부특성으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 부인 방지성 (Non-Repudiation)", "right": false },
            { "value": "② 책임성 (Accountability)", "right": false },
            { "value": "③ 인증성 (Authenticity)", "right": false },
            { "value": "④ 접근성 (Accessibility)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "컴포넌트 구성이 아래 그림과 같을 때 단위 테스트 횟수, 하향식 통합 테스트 횟수, 시스템 테스트 횟수가 모두 올바른 것은?[FL-2403-13.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 13, 11, 1", "right": false },
            { "value": "② 14, 12, 2", "right": true },
            { "value": "③ 13, 12, 2", "right": false },
            { "value": "④ 14, 13, 1", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "부분 리그레션 테스트 방법이 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 선택적 리그레션 테스트", "right": false },
            { "value": "② 테스트 최소화", "right": false },
            { "value": "③ 테스트 우선 순위화", "right": false },
            { "value": "④ 재테스트 올 (Retest-All)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "<보기>와 같은 소프트웨어 시스템을 개발할 때, 적용할 수 있는 소프트웨어 생명 주기 모델로 올바른 것은?",
        "question_sub": "<보기>팩스 전송 시스템은 지난 수십 년 간 개발되어 사용해 왔으며, 새로운 기능이 추가되기보다는 다양한 하드웨어 플랫폼에 맞도록 최적화시키는 일이 빈번히 일어났다.",
        "explanation": "",
        "options": [
            { "value": "① 폭포수 모델", "right": true },
            { "value": "② 프로토타이핑 모델", "right": false },
            { "value": "③ 나선형 모델", "right": false },
            { "value": "④ 애자일 모델", "right": false }
        ],
        "correct": 0
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
        "question": "모델 기반 테스트 수행 순서를 올바르게 나열한 것은?",
        "question_sub": "<보기>(가) 테스트 케이스 실행<br>(나) 테스트 케이스 생성<br>(다) 모델 생성<br>(라) 테스트 결과 판단",
        "explanation": "",
        "options": [
            { "value": "① (가) → (나) → (다) → (라)", "right": false },
            { "value": "② (나) → (다) → (라) → (가)", "right": false },
            { "value": "③ (다) → (나) → (가) → (라)", "right": true },
            { "value": "④ (라) → (다) → (나) → (가)", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "기술 리뷰(Technical review) 수행 시 포함되는 활동으로 올바르지 않은 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 프로젝트의 진행 상황을 모니터하고 계획과 현재 일정 상태를 평가하여 필요 시 변경한다.", "right": true },
            { "value": "② 대상 작업물이 계획, 법규, 표준이나 명세를 충실히 지키는지 평가한다.", "right": false },
            { "value": "③ 요구사항을 만족하기 위한 여러 대안을 추천하거나 대안들을 검토한다.", "right": false },
            { "value": "④ 대상 작업물이 의도된 사용에 적합한지 평가한다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "인스펙션 참여자들이 담당하는 역할로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 주재자", "right": false },
            { "value": "② 낭독자", "right": false },
            { "value": "③ 기록자", "right": false },
            { "value": "④ 개시자", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음에서 설명하는 리뷰 방법은 무엇인가?",
        "question_sub": "<다음>이 리뷰방법에서는 작성자 본인이 보통 회의를 주재하며 기록자 역할도 담당할 수 있고, 절차 및 작업물에 대한 개요 설명 단계를 회의의 한 부분으로 다룰 수 있다. 이 리뷰 방법으로 결함을 검출할 뿐만 아니라 참가자들의 교육이나 지식 공유를 위해 수행되기도 한다.",
        "explanation": "",
        "options": [
            { "value": "① 관리 리뷰(Management review)", "right": false },
            { "value": "② 워크쓰루(Walkthrough)", "right": true },
            { "value": "③ 인스펙션(Inspection)", "right": false },
            { "value": "④ 감사(Audit)", "right": false }
        ],
        "correct": 1
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
        "question": "다음 CFG(Control Flow Graph)를 보고 사이클로매틱 복잡도(Cyclomatic Complexity)를 계산한 값은 무엇인가?[FL-2403-22.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 5", "right": false },
            { "value": "② 6", "right": true },
            { "value": "③ 7", "right": false },
            { "value": "④ 8", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "명세기반 테스트와 구조기반 테스트에 대한 설명으로 올바른 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 명세기반 테스트는 구현 프로그래밍 언어에 따라 다른 테스트 케이스를 도출하게 된다.", "right": false },
            { "value": "② 명세기반 테스트와 구조기반 테스트는 같은 종류의 오류를 검출한다.", "right": false },
            { "value": "③ 명세기반 테스트와 구조기반 테스트는 상호 보완적이므로 함께 적용하는 것이 효과적이다.", "right": true },
            { "value": "④ 명세기반 테스트와 구조기반 테스트는 테스트 목적의 유형이 기능인지 아니면 비기능인지에 따라서 구분된다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "구조 기반 테스트에서 사용하는 커버리지에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 강도가 가장 낮은 것은 조건 커버리지이다.", "right": false },
            { "value": "② 테스트 강도가 가장 높은 것은 MCDC 커버리지이다.", "right": false },
            { "value": "③ 테스트 커버리지가 높을수록 감지하는 결함이 다양해진다.", "right": true },
            { "value": "④ 테스트 커버리지가 낮을수록 테스트 설계 시간이 길어진다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 설명의 테스트 케이스 설계 기법은 무엇인가?",
        "question_sub": "<다음>소스 코드뿐 아니라 설계 다이어그램의 구조를 분석하여 테스트 케이스를 설계하며, 소프트웨어의 내부 구조를 이용한다.",
        "explanation": "",
        "options": [
            { "value": "① 명세기반 테스트 케이스 설계", "right": false },
            { "value": "② 구조기반 테스트 케이스 설계", "right": true },
            { "value": "③ 경험기반 테스트 케이스 설계", "right": false },
            { "value": "④ 요구사항기반 테스트 케이스 설계", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "<보기>의 진리표를 이용하여 (A or B)에 대한 결정 커버리지를 100% 달성하고자 한다. 결정 커버리지를 100%달성할 수 있는 테스트 케이스 조합은?[FL-2403-26.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (가), (나)", "right": false },
            { "value": "② (가), (다)", "right": false },
            { "value": "③ (나), (다)", "right": false },
            { "value": "④ (다), (라)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 프로그램에 (X=10, Y=5), (X=15, Y=0)의 테스트 케이스를 실행하였을 때 조건 커버리지는? (※단, short circuit evaluation은 없다고 가정) ",
        "question_sub": "IF ((X≥6) || (Y>14))<br>&nbsp;&nbsp;&nbsp;&nbsp;Z=X+Y<br>IF ((X<Z) && (Y>14))<br>&nbsp;&nbsp;&nbsp;&nbsp;Z=X<br>IF (X≤Z)<br>&nbsp;&nbsp;&nbsp;&nbsp;RETURN 0",
        "explanation": "",
        "options": [
            { "value": "① 50%", "right": false },
            { "value": "② 60%", "right": true },
            { "value": "③ 66%", "right": false },
            { "value": "④ 83%", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 프로그램에 대하여 (X=15, Y=2, Z=0), (X=10, Y=20, Z=0)의 테스트 케이스를 실행 하였을 때, 조건/결정 커버리지는 몇 %인가? (※ 단, 소수점 첫째 자리에서 반올림)",
        "question_sub": "IF ((X > 10) OR (Y == 2))<br>&nbsp;&nbsp;&nbsp;&nbsp;Z = X + Y<br>IF ((X < Z) AND (Y > 15))<br>&nbsp;&nbsp;&nbsp;&nbsp;Z = X<br>IF (X <= Z)<br>&nbsp;&nbsp;&nbsp;&nbsp;PRINT(Z)",
        "explanation": "",
        "options": [
            { "value": "① 64%", "right": false },
            { "value": "② 75%", "right": false },
            { "value": "③ 93%", "right": true },
            { "value": "④ 100%", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 소스 코드에 대하여 100% 다중 조건 커버리지를 만족하는 최소의 테스트 케이스 개수는 몇 개인가?",
        "question_sub": "IF ((impact>90 OR date>5) AND (severity==‘Major’))<br>&nbsp;&nbsp;&nbsp;&nbsp;handling = 24<br>ELSE<br>&nbsp;&nbsp;&nbsp;&nbsp;handling = 48<br>END",
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
        "question": "다음 보기 중 명세기반 테스트를 사용하는 이점에 해당하지 않는 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 서브 시스템이나 전체 시스템과 같이 규모가 큰 단위에도 효과적으로 적용할 수 있다.", "right": false },
            { "value": "② 사용자 관점에서 테스트를 수행하기 때문에 효과적으로 결함을 검출할 수 있다.", "right": false },
            { "value": "③ 요구사항 및 명세서가 부족한 경우 효과적으로 테스트할 수 있다.", "right": true },
            { "value": "④ 명세서의 결함(일관성이나 모호한 점)을 드러낼 기회를 제공한다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "<보기>에서 명세 기반 테스트 기법으로 짝지어진 것은?",
        "question_sub": "<보기>(가) 경곗값 분석<br>(나) 조합 테스트<br>(다) 다중 조건 테스트<br>(라) 기본 경로 테스트<br>(마) 시나리오 테스트<br>(바) 오류 추정",
        "explanation": "",
        "options": [
            { "value": "① (가), (나), (다)", "right": false },
            { "value": "② (가), (나), (라)", "right": false },
            { "value": "③ (가), (나), (마)", "right": true },
            { "value": "④ (가), (나), (바)", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "입력값의 유효범위로 0에서 100을 갖는 성적 처리 프로그램을 고려했을 때 이 프로그램을 경계값 분석 테스트를 수행하기 위해 테스트 케이스를 도출하였다. 이 중 가장 적합하지 않은 테스트 케이스는 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 0", "right": false },
            { "value": "② 75", "right": true },
            { "value": "③ 100", "right": false },
            { "value": "④ 101", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "어떤 기업에서 Client-Server 기반 제품을 개발한 후 제품의 호환성을 테스트하려고 한다. 서버 운영체제는 Linux와 Cent OS를 지원하고, 클라이언트 운영체제는 Windows 10과 Windows 11을 지원한다. 또한, 관리자용 웹 콘솔은 Edge와 Chrome을 지원한다. 이 제품의 호환성 시험을 위해 어떤 테스트 케이스 설계 기법이 가장 적절한가?",
        "explanation": "",
        "options": [
            { "value": "① 조합 테스트", "right": true },
            { "value": "② 경곗값 분석", "right": false },
            { "value": "③ 결정표 테스트", "right": false },
            { "value": "④ 상태 전이 테스트", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "<보기>는 4가지 모드를 가지는 전자시계의 상태 전이도이다. 이를 바탕으로 루트 노트에서 단말 노드까지를 묶어 하나의 테스트 케이스로 만들어 단일 전이 테스트 방식으로 테스트하는 경우, 수행되는 테스트 케이스의 수는 몇 개인가?(단. 유효하지 않은 전이는 고려하지 않는다.)[FL-2403-34.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 3개", "right": true },
            { "value": "② 4개", "right": false },
            { "value": "③ 5개", "right": false },
            { "value": "④ 6개", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "경험기반 테스트에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 베이시스의 의존도가 높고, 오랜 시간 테스트를 실행한다.", "right": false },
            { "value": "② 테스터의 역량과 상관없이 테스트 품질이 일정한 테스트 방법이다.", "right": false },
            { "value": "③ 유사한 분야의 SW 테스트 경험이나 관련분야의 지식을 가진 테스터가 경험을 바탕으로 테스트 하는 방법이다.", "right": true },
            { "value": "④ 공식적인 기법으로 다루어지는 일반적인 케이스를 실행하는데 유용하며, 테스트 베이시스가 잘 갖추어져 있어야 한다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 중 경험 기반 테스트 기법에 해당하는 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 결정 테스트", "right": false },
            { "value": "② 모델 기반 테스트", "right": false },
            { "value": "③ 탐색적 테스트", "right": true },
            { "value": "④ 다중 조건 테스트", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "테스트 프로세스가 필요한 이유로 올바르지 않은 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 소프트웨어 개발 시 테스트 비중의 증가로 다양한 테스트 설계 기법, 수행 시기, 유형 등이 고려되어야 하기 때문이다.", "right": false },
            { "value": "② 소프트웨어 품질 목표 달성에 테스트 프로세스가 중요한 역할을 하기 때문이다.", "right": false },
            { "value": "③ 효과적으로 테스트를 수행하기 위해서는 충분한 비용을 투자하여 체계적으로 수행하는 것이 중요하기 때문이다.", "right": true },
            { "value": "④ 테스트 활동은 효과성 및 효율성 등 정량적 평가를 바탕으로 지속적으로 개선해야 하기 때문이다.", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "<보기>는 테스트 프로세스를 도식화한 것이다. 이 중 빈칸에 해당 되는 단계에서 수행해야 하는 세부 항목으로 올바른 것은?[FL-2403-38.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 테스트 실행을 위한 환경과 데이터를 준비한다.", "right": true },
            { "value": "② 테스트 범위와 전략에 따라 테스트 케이스를 개발한다.", "right": false },
            { "value": "③ 테스트 절차를 실행하고 결과를 기록한다.", "right": false },
            { "value": "④ 테스트 실행 결과 분석을 바탕으로 결함을 기록한다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "“테스트 계획”을 수립할 때 고려해야 할 주요 이슈로 가장 적절하지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 언제 테스트를 종료하는 것이 좋을까?", "right": false },
            { "value": "② 단위 테스트를 수행하는 것이 효과적일까?", "right": false },
            { "value": "③ 테스트 케이스를 생성할 때 소스 코드를 바탕으로 할까?", "right": false },
            { "value": "④ 어떤 코딩 스타일을 사용할까?", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트를 계획할 때, 구체적인 테스트 전략을 수립하기에 앞서 테스트 수행의 배경이 되는 다양한 요소들을 테스트 컨텍스트로 식별하고 명세한다. 다음 보기에서 테스트 컨텍스트 항목들로만 구성된 것으로 올바른 것은?",
        "question_sub": "<보기>(가) 테스트 대상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(나) 테스트 계획 유형<br>(다) 이해관계자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(라) 위험분석",
        "explanation": "",
        "options": [
            { "value": "① (가), (나), (다)", "right": true },
            { "value": "② (가), (나), (라)", "right": false },
            { "value": "③ (가), (다), (라)", "right": false },
            { "value": "④ (나), (다), (라)", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 중 리그레션 테스팅 전략에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① Retest-all 전략은 기존에 개발된 모든 테스트 절차를 수행한다.", "right": false },
            { "value": "② 테스트 최소화 전략은 테스트 교차 검증을 통해 테스트 품질을 극대화 한다.", "right": true },
            { "value": "③ 테스트 우선순위화 전략은 우선순위가 높은 테스트 절차를 선정하여 수행한다.", "right": false },
            { "value": "④ 선택적 리그레션 테스트 전략은 기존의 테스트 전략 중에서 일부를 선택하여 수행한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 계획서에 포함되지 않는 항목은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 범위", "right": false },
            { "value": "② 가정 및 제약 사항", "right": true },
            { "value": "③ 프로젝트 위험", "right": false },
            { "value": "④ 피처 집합별 피처 목록", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트 계획서에 대한 설명으로 올바르지 않은 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 대상을 결정하고 이를 명시한다.", "right": false },
            { "value": "② 테스트 대상에 대하여 검증/확인하고자 하는 테스트 목적을 명시한다.", "right": false },
            { "value": "③ 앞으로 수행될 테스트 분석 및 설계와 실행 활동 등에 대한 일정이 명시된다.", "right": false },
            { "value": "④ 선정된 테스트 케이스를 테스트 대상에 입력하여 실행시키는 절차가 기록된다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트 일정 수립 시 고려해야 할 요소로 가장 거리가 먼 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 대상 시스템 규모", "right": false },
            { "value": "② 테스트 설계 수준", "right": false },
            { "value": "③ 투입 예정 테스트 자원", "right": false },
            { "value": "④ 사내 필수 교육 일정", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트 실행 시 단계별 활동으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 리그레션 테스트 케이스 선택 시, 영향받을 부분이 작은 대상부터 실행", "right": true },
            { "value": "② 테스트 케이스 실행 시, 사전에 정의된 테스트 환경을 대상으로 테스트 절차에 따라 실행", "right": false },
            { "value": "③ 테스트 케이스 실행 시, 오류를 기록하고 필요 시 테스트 재연이 가능하도록 작성", "right": false },
            { "value": "④ 테스트 결함분석 시, 발견된 결함을 분석하고 각 결함을 구체적으로 정의하여 개발자에게 통보", "right": false }
        ],
        "correct": 
    },
    {
        "type": "radio",
        "question": "테스트 실행 로그를 작성할 때 기록되는 테스트 작업이 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 대상 실행 작업", "right": false },
            { "value": "② 테스트 환경 준비 작업", "right": true },
            { "value": "③ 테스트 케이스를 입력하는 작업", "right": false },
            { "value": "④ 테스트 결과 관찰 작업", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "결함 생명 주기에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 결함관리는 결함 해결 과정 전반을 모니터링 한다.", "right": true },
            { "value": "② 종료(Closed) 처리한 결함은 이후 다시 결함으로 등록할 수 없다.", "right": false },
            { "value": "③ 결함 생명 주기는 조직 및 프로젝트의 특성에 상관없이 동일하게 정의한다.", "right": false },
            { "value": "④ 결함을 해결하는 과정은 개발 업무이므로 결함 생명 주기에 해당하지 않는다.", "right": false }
        ],
        "correct": 0
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
        "question": "테스트 프로세스에서 테스트 실행에 대한 모니터링을 위해 사용하는 메트릭은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 실행된 테스트 절차 수, 실패한 테스트 절차 수", "right": true },
            { "value": "② 발견한 결함 수, 검출 결함 밀도", "right": false },
            { "value": "③ 미해결 결함 수, 결함 나이", "right": false },
            { "value": "④ 요구사항 커버리지, 코드 커버리지", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 종료에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트에서 생성된 결과물이 재사용될 수 있도록 자산으로 관리한다.", "right": false },
            { "value": "② 테스트 환경과 테스트 데이터에 대한 요건을 정의한다.", "right": true },
            { "value": "③ 수행된 다양한 테스트 환경 요소들을 사용하기 이전의 상태로 복구시킨다.", "right": false },
            { "value": "④ 미해소된 위험에 대하여 해소되지 않은 이유와 품질에 미치는 영향을 분석한다.", "right": false }
        ],
        "correct": 1
    },   
    {
        "type": "radio",
        "question": "테스트 대상은 시스템을 구성하는 전체 소프트웨어가 될 수도 있고, 전체 소프트웨어의 일부분만이 테스트 대상이 될 수도 있다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "FIRST 원칙은 통합 테스트를 잘 수행하기 위한 원칙이다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "인수 테스트는 통합 테스트가 완료된 후에 전체 시스템이 시스템 명세에 따라 개발되었는지 검증하기 위해 수행하는 방법이다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 주도 개발인 TDD(Test-Driven Development)는 테스트 되는 실제 프로그램의 코드를 먼저 작성하고 프로그램에 대한 테스트 케이스를 나중에 작성하는 방식이다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "소프트웨어 개발 모델에 따라 개발 단계별로 적용할 수 있는 리뷰의 유형은 달라진다.",
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
        "question": "소프트웨어 제품의 품질은 제품을 개발하고 운영하는 조직 규모에 의해 결정된다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "명세기반 테스트 설계 기법 선택 시 테스트 대상의 동작이 상태 의존적인 경우에는 시나리오 테스트, 분류트리 기법, 인과 그래프 테스트가 적용된다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 레벨에 따라 테스트 실행에 참여하는 주체(개발자, 테스터, 사용자 등)는 달라지더라도 테스터는 항상 테스트 실행에 참여해야 한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "아래 그래프는 “상태별 누적 결함 수”를 보여 준다. 그래프에서 Open 곡선과 Resolved 곡선 사이의 공간은 개발자가 수정한 사항을 다시 재테스팅하여 검증해야 하는 작업을 의미한다.[FL-2403-60.jpg]",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "text",
        "question": "테스트 절차를 문서로 기록하는 대신에 자동화 도구가 해석하고 실행하는 언어로 작성한 것을 무엇이라 부르는가?",
        "explanation": "테스트 스크립트|test script|스크립트(부분점수 0.7)",
        "correct": ["테스트 스크립트", "test script", "스크립트"]
    },
    {
        "type": "text",
        "question": "다음은 호환성(Compatibility)의 어떤 부특성을 설명한 것인가?",
        "question_sub": "<다음>다른 SW에 영향 없이 자원을 공유하면서 기능을 작동할 수 있는 정도<br>예) 보안 프로그램을 여러 곳에서 다운로드받아 설치할 때 기존의 애플리케이션이 정상적으로 동작하지 않는 경우→ 설치된 보안프로그램들이 메모리와 같은 자원을 사용하여 충돌이 일어나거나 자원을 독점적으로 사용할 때 발생",
        "explanation": "공존성, Co-existence",
        "correct": ["공존성", "Co-existence"]
    },
    {
        "type": "text",
        "question": "다음은 ISO/IEC 25010 제품 품질 모델의 8가지 품질 주특성 중 하나에 대한 설명이다. 어떤 품질 특성을 설명한 것인지 기술하시오.",
        "question_sub": "<다음>- 시스템, 제품 또는 컴포넌트가 지정된 기간 동안 명시된 조건에서 명시된 기능을 수행하는 정도<br>- 부특성은 성숙성 (Maturity), 가용성 (Availability), 결함 허용성 (Fault tolerance), 복구성 (Recoverability)으로 구성됨",
        "explanation": "신뢰성|Reliability",
        "correct": ["신뢰성", "Reliability", "reliability"]
    },
    {
        "type": "text",
        "question": "아래의 보기에서 설명하는 모델은 무엇인지 기술하시오.",
        "question_sub": "<보기>- 개발자 관점의 검증(verification)과 사용자 관점의 확인(validation)을 기반으로 한 개발모델<br>- 소프트웨어 개발방법론 중 폭포수 개발모델(waterfall)에 근간을 두고 있는 모델<br>- 소프트웨어 개발 단계별 테스트 유형이 대응하여 정의함",
        "explanation": " V&V, 브이모델",
        "correct": [" V&V", "V 모델", "브이모델"]
    },
    {
        "type": "text",
        "question": " 다음의 설명 중 밑줄 친 부분의 활동에 적절한 리뷰 종류를 기술하시오.",
        "question_sub": "<다음>소프트웨어에 의해 제어되는 자동차 전자제어장치(ECU; Electronic Control Unit)의 오류는 차량 운전자 및 탑승자의 안전에 큰 위험을 초래할 수 있다. 자동차 기능 안정성 국제 표준인 ISO 26262는 사고방지를 위해 개발 프로세스 및 각 개발 단계에 적용 가능한 기능 안전을 정의한다. 이러한 '표준 준수 여부를 독립적으로 평가하고 교정활동을 요구하는 보고서'를 산출하게 한다.",
        "explanation": "",
        "correct": ["감사", "Audit"]
    },
    {
        "type": "text",
        "question": "다음은 명세기반 테스트 기법을 설명한 것이다. 빈칸에 들어갈 알맞은 용어는 무엇인가?",
        "question_sub": "<다음>(         ) 테스트는 소프트웨어나 시스템 입력의 결과로 입력값 / 출력값 영역을 유한 개의 상호 독립적인 집합으로 나누어 수학적인 등가 집합을 만든 후, 각 등가 집합의 원소 중 대표 값을 선택하여 테스트 케이스를 도출하는 기법이다.",
        "explanation": "",
        "correct": ["동등 분할", "동등 분할 클래스", "Equivalence partitioning", "equivalence partitioning"]
    },
    {
        "type": "text",
        "question": "명세기반 테스트 설계 기법 중 (            ) 테스트는 모든 조건들과 그에 대한 모든 가능한 조합으로 인한 행위를 분석하여 테스트 케이스를 설계하면서 요구사항 등 테스트 베이시스의 누락을 발견하는데 가장 효과적이다.",
        "explanation": "",
        "correct": ["결정표", "decision table", "결정 테이블"]
    },
    {
        "type": "text",
        "question": "다음의 정보를 바탕으로 결함 나이를 구하시오.",
        "question_sub": "<다음>∙ Open Date: 1월 1일<br>∙ Assigned Date: 1월 3일<br>∙ Resolved Date: 1월 10일<br>∙ Verified Date: 1월 15일<br>∙ Closed Date: 1월 17일",
        "explanation": "",
        "correct": ["17일"]
    },
    {
        "type": "text",
        "question": "아래 빈칸①에 공통으로 들어갈 알맞은 용어는 무엇인가?[FL-2403-69.jpg]",
        "explanation": "",
        "correct": ["테스트 환경"]
    },
    {
        "type": "text",
        "question": "다음 <보기>는 테스트 실행 절차를 나타내고 있다. 빈칸 ③에 들어갈 테스트 작업은 무엇인가?[FL-2403-70.jpg]",
        "explanation": "",
        "correct": ["결함 분석", "결함 판단", "테스트 결과 분석", "결과 분석", "테스트 실행 결과 분석"]
    }

];


