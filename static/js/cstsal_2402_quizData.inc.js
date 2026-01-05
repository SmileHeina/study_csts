//CSTS AL 2402
var cstsal_2402_quizData = [
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
        "question": "프로그램의 특정 액션을 수행하기 위해 문서에 기록하는 대신 자동화 도구가 해석하고 실행하는 언어로 작성된 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 자동화", "right": false },
            { "value": "② 테스트 스크립트", "right": true },
            { "value": "③ 테스트 스텝", "right": false },
            { "value": "④ 테스트 베이시스", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "소프트웨어 품질 관련 표준(ISO/IEC 25010)에서 정의하고 있는 8가지 품질 주 특성(Quality Characteristics)에 속하지 않는 것은?",
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
        "question": "다음 중 시스템 테스트와 인수 테스트를 위한 테스트 계획에서 가장 큰 차이를 보이는 요소는 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 주체", "right": true },
            { "value": "② 테스트 대상", "right": false },
            { "value": "③ 테스트 절차", "right": false },
            { "value": "④ 결함 기록 및 추적 방법", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "인수 테스트에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 알파 테스트는 일정 수의 실제 사용자들이 사용하고 피드백을 받는 것이다.", "right": false },
            { "value": "② 베타 테스트는 개발자 환경에서 통제된 상태로 사용자가 테스트하는 것이다.", "right": false },
            { "value": "③ 인수 테스트는 시스템 테스트에서 사용한 테스트 케이스를 사용할 수 있다.", "right": true },
            { "value": "④ 인수 테스트 종료 후 알파 및 베타 테스트를 수행한다", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 그림에서 스파이크 테스팅에 해당하는 것은?<br>[AL-2402-07.jpg]",
        "explanation": "",
        "options": [
            { "value": "①", "right": false },
            { "value": "②", "right": false },
            { "value": "③", "right": true },
            { "value": "④", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "테스트 기법 중, 시스템이 주어진 기간 동안 서비스를 제공할 수 있는지를 통계적으로 계산 및 확인하는 기법은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 인수 테스트", "right": false },
            { "value": "② 성능 테스트", "right": false },
            { "value": "③ 신뢰성 테스트", "right": true },
            { "value": "④ 견고성 테스트", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "<보기>의 평가 방법을 통해 확인할 수 있는 품질 특성은 무엇인가?",
        "question_sub": "<보기>- 접근 통제가 필요한 데이터 항목 개수 대비 비인가자가 접근 가능한 데이터 항목의 개수를 비교하여 평가<br>- 암호화/복호화가 필요한 데이터 항목 개수 대비 정확히 암호화/복호화한 데이터 항목의 개수를 비교하여 평가<br>- 암호화 알고리즘 사용 개수 대비 손상 및 수용 불가능한 사용 위험 암호화 알고리즘의 개수를 비교하여 평가",
        "explanation": "",
        "options": [
            { "value": "① 기밀성", "right": true },
            { "value": "② 무결성", "right": false },
            { "value": "③ 부인 방지성", "right": false },
            { "value": "④ 인증성", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "프로그램이 얼마나 손쉽게 테스트 가능한지를 나타내는 특성과 가장 거리가 먼 것은?",
        "explanation": "",
        "options": [
            { "value": "① 단순성(Simplicity)", "right": false },
            { "value": "② 관찰 가능성(Observability)", "right": false },
            { "value": "③ 운용 용이성(Operability)", "right": false },
            { "value": "④ 견고성(Robustness)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "<보기>의 요구사항을 확인하기 위해 수행되어야할 비기능 테스트로 올바른 것은?",
        "question_sub": "<보기>NON-ActiveX 기반으로 최소 상이한 3종 이상(IE, Firefox, Opera, Chrome, safari 등)의 웹브라우저를 지원하여야 함",
        "explanation": "",
        "options": [
            { "value": "① 이식성 테스트", "right": true },
            { "value": "② 유지보수성 테스트", "right": false },
            { "value": "③ 성능 테스트", "right": false },
            { "value": "④ 호환성 테스트", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음의 평가 방법들은 어떤 품질 특성의 평가를 위한 방법인가?",
        "question_sub": "<다음>∙인지적 워크쓰루(Cognitive Walkthrough)<br>∙ FGI(Focus Group Interview)<br>∙휴리스틱 평가(Heuristic Evaluation)",
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
        "question": "컴포넌트 구성이 아래 그림과 같을 때 단위 테스트 횟수, 하향식 통합 테스트 횟수, 시스템 테스트 횟수가 모두 올바른 것은?<br>[AL-2402-13.jpg]",
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
        "question": "다음 위험도를 산정하기 위해 필요한 항목과 그에 대한 설명으로 잘못된 것은?",
        "explanation": "",
        "options": [
            { "value": "① 발생 가능성(Likelihood) : 해당 피처와 관련된 장애가 실행 시에 발생할 가능성", "right": false },
            { "value": "② 취약성(Vulnerability) : 외부 요소로부터 시스템의 안전도를 낮추는 데 사용되는 정도", "right": true },
            { "value": "③ 긴급성(Urgency) : 관련 장애가 발생하였을 때 얼마나 시급한 수정이 필요한지의 정도", "right": false },
            { "value": "④ 심각성(Severity) : 시스템의 기능 요소가 기대한 대로 동작하지 않을 때 미치는 영향의 정도", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "위험도 기반의 테스트 계획 수립에서 위험도 값에 따른 테스트 강도를 결정하고자 한다. 다음 도표에서 발생 가능성, 심각성, 긴급성을 바탕으로 결정된 테스트 강도를 (가)~(라)에 순서대로 올바르게 표시한 것은 무엇인가?<br>[AL-2402-15.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (가) 결함 보고, (나) 균형적 테스트, (다) 부가적 테스트, (라) 고강도 테스트", "right": false },
            { "value": "② (가) 결함 보고, (나) 부가적 테스트, (다) 균형적 테스트, (라) 고강도 테스트", "right": false },
            { "value": "③ (가) 고강도 테스트, (나) 균형적 테스트, (다) 부가적 테스트, (라) 결함 보고", "right": true },
            { "value": "④ (가) 고강도 테스트, (나) 부가적 테스트, (다) 균형적 테스트, (라) 결함 보고", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "코드의 내부구조를 개선하는 리팩토링을 진행한 이후 수행하는 테스트는?",
        "explanation": "",
        "options": [
            { "value": "① 리그레션 테스트(Regression test)", "right": true },
            { "value": "② 재테스트(Retest)", "right": false },
            { "value": "③ 인수 테스트(Acceptance test", "right": false },
            { "value": "④ 벤치마크 테스트(Benchmark test)", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음 빈칸에 들어갈 말로 적절한 것은?",
        "question_sub": "<다음>(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)의 개념은 코드 통합 작업뿐만 아니라 코드 품질을 평가하는 테스트와 같은 여러 품질관리 활동이 포함되어 있다. (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)은 통합이 빈번하게 이루어질 뿐 아니라 통합되었을 때 즉시 잠재적인 문제가 있는지 바로 결과를 알 수 있기 때문에 소프트웨어 품질을 높이고 통합의 위험을 줄이는 대표적인 방법이다.",
        "explanation": "",
        "options": [
            { "value": "① 리팩토링(Refactoring)", "right": false },
            { "value": "② 짝 프로그래밍(Pair Programming)", "right": false },
            { "value": "③ 이터레이션(Iteration)", "right": false },
            { "value": "④ 지속적 통합(CI)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트 대상의 동작을 표현한 모델링 방법 중 테스트에 활용하기 어려운 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① UML 다이어그램", "right": false },
            { "value": "② 객체 다이어그램", "right": true },
            { "value": "③ 상태 전이도", "right": false },
            { "value": "④ 의사 결정표", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "반드시 관리자가 참여하지 않아야 하는 리뷰를 모두 고른 것은?",
        "question_sub": "<보기>(가) 워크쓰루<br>(나) 관리 리뷰<br>(다) 인스펙션<br>(라) 기술 리뷰",
        "explanation": "",
        "options": [
            { "value": "① (가), (나)", "right": false },
            { "value": "② (가), (다)", "right": true },
            { "value": "③ (나), (다)", "right": false },
            { "value": "④ (다), (라)", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "인스펙션에 대한 다음의 설명 중 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 4 ~ 8 명으로 팀을 구성한다.", "right": false },
            { "value": "② 인사평가를 담당하는 경영자는 팀 구성에서 제외하는 것이 좋다.", "right": false },
            { "value": "③ 주재자(Moderator)는 오류를 발견하는 과정이 비판의 장이 되지 않도록 조절해야 한다.", "right": false },
            { "value": "④ 주로 작성자의 요청으로 이루어지며, 완성도나 결과물이 아닌 중간 산출물을 대상으로 한다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 테스트 설계 기법 분류에 대한 설명으로 올바른 것은?",
        "explanation": "",
        "options": [
            { "value": "① 정적분석은 정적 테스트에 포함되며, 정적 분석 종류로는 기본 경로 테스트, 시나리오 테스트, 문장 커버리지 테스트가 있다.", "right": false },
            { "value": "② 구조기반 테스트는 동적 테스트에 포함되며, 구조기반 테스트로는 탐색적 테스트, 페어와이즈 테스트, 결정 테스트가 있다.", "right": false },
            { "value": "③ 명세기반 테스트는 정적 테스트에 포함되며, 명세기반 테스트로는 코딩 표준, 복잡도 분석, 자료 흐름 분석이 있다.", "right": false },
            { "value": "④ 리뷰는 정적 테스트에 포함되며, 리뷰 종류로는 인스펙션, 워크쓰루, 감사가 있다.", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "<보기>의 제어 흐름 그래프에서 문장 커버리지 100%를 만족시키는 테스트 케이스는?<br>[AL-2402-22.jpg]",
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
        "question": "<보기>의 프로그램 코드에서 {(x=1, y=2, z=2), (x=15, y=1, z=5)} 의 테스트 케이스가 실행될 때 결정 커버리지는 몇 인가? (소수점 둘째 자리에서 반올림)",
        "question_sub": "<보기>If ((x>10) and (y==1)){<br>&nbsp;&nbsp;&nbsp;&nbsp;z = x + y;<br>}<br>If ((x<z) or (y>8)){<br>&nbsp;&nbsp;&nbsp;&nbsp;z = x;<br>}<br>If (x <= z){<br>&nbsp;&nbsp;&nbsp;&nbsp;return z;<br>}",
        "explanation": "",
        "options": [
            { "value": "① 50%", "right": false },
            { "value": "② 66.7%", "right": true },
            { "value": "③ 83.3%", "right": false },
            { "value": "④ 100%", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "<보기>의 진리표를 이용하여 (A or B)에 대한 결정 커버리지를 100% 달성하고자 한다. 결정 커버리지를 100%달성할 수 있는 테스트 케이스 조합은?<br>[AL-2402-24.jpg]",
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
        "question": "<보기>의 프로그램 코드를 시험하기 위해 2개의 테스트 케이스가 도출되었다. 결정/조건 커버리지를 100% 달성하기 위해 실행되어야 할 결정과 조건의 결과로 올바르지 않은 것은?<br>[AL-2402-25.jpg]",
        "explanation": "",
        "options": [
            { "value": "① (X &lt; Z) : False", "right": false },
            { "value": "② (Y &gt; 8) : True", "right": false },
            { "value": "③ (X &lt;= Z) : True", "right": true },
            { "value": "④ (X &lt; Z) or (Y &gt; 8): False", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "다음 코드에 대해 MC/DC 커버리지 100%를 만족하는 최소 테스트 케이스 수와 테스트 데이터는?",
        "question_sub": "<다음>1&nbsp;&nbsp;&nbsp;&nbsp;READ X, Y, Z<br>2&nbsp;&nbsp;&nbsp;R = 0<br>3&nbsp;&nbsp;&nbsp;&nbsp;IF ((X>0) AND (Y>0) AND (Z>0))<br>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R = X+Y+Z<br>&nbsp;&nbsp;&nbsp;&nbsp;ENDIF",
        "explanation": "",
        "options": [
            { "value": "① 4개 (X=1, Y=1, Z=1), (X=1, Y=1, Z=-1), (X=1, Y=-1, Z=1), (X=-1, Y=1, Z=1)", "right": true },
            { "value": "② 4개 (X=1, Y=1, Z=1), (X=-1, Y=-1, Z=-1), (X=-1, Y=1, Z=1), (X=1, Y=-1, Z=1)", "right": false },
            { "value": "③ 3개 (X=1, Y=1, Z=-1), (X=1, Y=-1, Z=1), (X=-1, Y=1, Z=1)", "right": false },
            { "value": "④ 3개 (X=1, Y=1, Z=1), (X=-1, Y=-1, Z=-1), (X=-1, Y=1, Z=1)", "right": false }
        ],
        "correct": 0
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
        "question": "다음과 같이 동등분할의 클래스를 식별하고 대푯값을 선정하여 테스트를 진행하였다. 클래스 커버리지는 몇 퍼센트인가?<br>[AL-2402-28.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 100%", "right": false },
            { "value": "② 90%", "right": false },
            { "value": "③ 80%", "right": true },
            { "value": "④ 70%", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "<보기>의 프로그램은 0에서부터 100점까지의 점수 중 70점 이상이면 “pass”를 70점 미만이면 “fail”을 반환한다. 다음 중 결함을 가장 효율적으로 발견할 수 있는 테스트 설계 기법과 입력값을 짝지은 것으로 올바른 것은?",
        "question_sub": "<보기>int checkScore(int score) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if ((score > 100) || (score < 0))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return “error”;<br>&nbsp;&nbsp;&nbsp;&nbsp;if (score > 70)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return “pass”;<br>&nbsp;&nbsp;&nbsp;&nbsp;else<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return “fail”;<br>}",
        "explanation": "",
        "options": [
            { "value": "① 경계 값 분석 기법, 70", "right": true },
            { "value": "② 경계 값 분석 기법, 100", "right": false },
            { "value": "③ 동등 분할 기법, 50", "right": false },
            { "value": "④ 동등 분할 기법, 8", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "<보기>는 4가지 모드를 가지는 전자시계의 상태 전이도이다. 이를 바탕으로 루트 노트에서 단말 노드까지를 묶어 하나의 테스트 케이스로 만들어 단일 전이 테스트 방식으로 테스트하는 경우, 수행되는 테스트 케이스의 수는 몇 개인가?(단. 유효하지 않은 전이는 고려하지 않는다.)<br>[AL-2402-30.jpg]",
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
        "question": "다음 중 분류 트리 기법의 절차를 올바르게 정리한 것은?",
        "question_sub": "<보기>(가) 각 클래스에 대해서 애스펙트 식별과 분할을 반복한다.<br>(나) 명세를 분석하여 대상 클래스에 적용할 수 있는 애스펙트를 식별한다.<br>(다) 분류 트리의 단말 노드들을 조합하여 테스트 케이스를 설계한다.<br>(라) 애스펙트에 대해서 클래스를 여러 클래스로 분할한다.",
        "explanation": "",
        "options": [
            { "value": "① (나) - (가) - (라) - (다)", "right": false },
            { "value": "② (나) - (라) - (가) - (다)", "right": true },
            { "value": "③ (가) - (라) - (나) - (다)", "right": false },
            { "value": "④ (가) - (나) - (라) - (다)", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "휴대폰 번호 10자리를 입력 받는 입력 항목에 대해 오류 추정을 적용하여 테스트하려고 한다. 이 때 테스트할 수 있는 항목을 모두 고른 것은?",
        "question_sub": "<보기>(가) 입력값이 숫자가 아닌 경우<br>(나) 입력값이 10자리 미만인 경우<br>(다) 입력값이 10자리 이상인 경우<br>(라) 입력 항목에 아무것도 입력하지 않는 경우",
        "explanation": "",
        "options": [
            { "value": "① (가)", "right": false },
            { "value": "② (가), (나)", "right": false },
            { "value": "③ (가), (나), (다)", "right": false },
            { "value": "④ (가), (나), (다), (라)", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "탐색적 테스트의 단점으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 탐색적 테스트 수행에 과도한 시간을 사용할 수 있다.", "right": false },
            { "value": "② 테스트 대상에 지식이 없는 사람은 테스트하기 어렵다.", "right": true },
            { "value": "③ 동일한 기능을 중복해서 반복적으로 수행할 수 있다.", "right": false },
            { "value": "④ 테스트의 커버리지를 측정하기가 어렵다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 프로세스를 구성하는 활동에 대한 설명으로 적절한 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 계획에서는 테스트 대상, 목적 그리고 테스트 대상에 대한 테스트 통과 기준 등을 결정한다.", "right": true },
            { "value": "② 테스트 설계 및 구현활동에서는 테스트 범위를 구체화하고 테스트 활동에 대한 개선 방향을 결정한다.", "right": false },
            { "value": "③ 테스트 실행 활동에서는 테스트 케이스를 생성하여 테스트 케이스 명세서에 기록하고 이에 대한 실행 절차를 테스트 절차서에 기록한다.", "right": false },
            { "value": "④ 테스트 활동 평가를 통하여 개발팀과 테스트 팀의 능력을 상호 비교하도록 한다.", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "테스트 활동의 독립성을 구분하는 기준으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 기술적 독립성", "right": false },
            { "value": "② 조직적 독립성", "right": true },
            { "value": "③ 관리적 독립성", "right": false },
            { "value": "④ 재정적 독립성", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 관리 산출물과 산출물에 포함될 주요 항목으로 가장 거리가 먼 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 현황 보고서 - 계획 대비 진척도", "right": false },
            { "value": "② 테스트 현황 보고서 - 이후 테스트 계획", "right": false },
            { "value": "③ 테스트 종료 보고서 - 테스트 방해 요인", "right": false },
            { "value": "④ 테스트 종료 보고서 - 위험 분석", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "테스트를 계획할 때, 구체적인 테스트 전략을 수립하기에 앞서 테스트 수행의 배경이 되는 다양한 요소들을 테스트 컨텍스트로 식별하고 명세한다. 다음 보기에서 테스트 컨텍스트 항목들로만 구성된 것으로 올바른 것은?",
        "question_sub": "<보기>(가)테스트 대상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(나) 테스트 계획 유형<br>(다)이해관계자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(라) 위험분석",
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
        "question": "다음 중 테스트 레벨별 테스트 범위가 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 컴포넌트 테스트 레벨에서는 각 컴포넌트의 기능적 요구사항 테스트를 포함한다.", "right": false },
            { "value": "② 통합 테스트 레벨에서는 각 컴포넌트에 대한 기능과 신뢰성 테스트를 포함한다.", "right": true },
            { "value": "③ 시스템 테스트 레벨에서는 시스템에 대한 기능 요구사항 전체의 테스트를 포함한다.", "right": false },
            { "value": "④ 인수 테스트 레벨에서는 시스템에 대한 비기능 요구사항 전체의 테스트를 포함한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "이해관계자에게 반드시 공유되지 않아도 되는 테스트 관련 문서는?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 종료 보고서", "right": false },
            { "value": "② 테스트 현황 보고서", "right": false },
            { "value": "③ 테스트 계획서", "right": false },
            { "value": "④ 테스트 케이스", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중에서 테스트 완료 기준으로 사용되는 예를 모두 고른 것은?",
        "question_sub": "<다음>(가) 95%의 문장 커버리지가 충족되어야 한다.<br>(나) 90%의 테스트 케이스(테스트 절차)가 통과되어야 한다.<br>(다) 발견된 결함의 수가 2개 이하이어야 한다.",
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
        "question": "세부 피처의 테스트할 사항을 구체적으로 설명하는 표현법으로 올바르지 않은 것은? ",
        "explanation": "",
        "options": [
            { "value": "① 자연어", "right": false },
            { "value": "② 음성", "right": true },
            { "value": "③ 다이어그램", "right": false },
            { "value": "④ 표", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 중 시스템 테스트에서 중요한 테스트 환경이 아닌 것은?",
        "explanation": "",
        "options": [
            { "value": "① 외부 연동 시스템에 대한 시뮬레이터", "right": false },
            { "value": "② 드라이버/스텁", "right": true },
            { "value": "③ 미들웨어", "right": false },
            { "value": "④ 운영체제", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음의 설명에 해당하는 테스트 산출물은 무엇인가?",
        "question_sub": "<다음>- 테스트 계획서에 명시된 테스트 컨텍스트, 위험 요소, 테스트 전략과 테스트 수행 계획을 바탕으로 테스트 범위와 전략을 구체화하여 작성<br>- 테스트 설계 기법, 커버리지 명시",
        "explanation": "",
        "options": [
            { "value": "① 테스트 로그", "right": false },
            { "value": "② 테스트 설계 명세서", "right": true },
            { "value": "③ 테스트 케이스 명세서", "right": false },
            { "value": "④ 테스트 데이터 요건 명세서", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 환경 요건 명세서에 기재되는 내용과 가장 거리가 먼 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 해당 테스트 환경 항목이 어떤 목적으로 활용되는지 기술한다.", "right": false },
            { "value": "② 해당 테스트 환경 항목의 중요도와 우선 순위를 기술한다.", "right": true },
            { "value": "③ 해당 테스트 환경이 필요한 시점과 사용되는 기간을 기술한다.", "right": false },
            { "value": "④ 해당 테스트 환경을 준비하여 필요시기에 사용될 수 있도록 책임을 지는 담당자를 기술한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "<보기>는 시스템을 구성하는 서브시스템별로 발견된 결함의 수를 보여준다. 이를 바탕으로 테스트 관리자가 취한 조치로 가장 올바르지 않은 것은?<br>[AL-2402-45.jpg]",
        "explanation": "",
        "options": [
            { "value": "① 서브 시스템 3에 정적 테스트를 수행하였다.", "right": false },
            { "value": "② 서브 시스템 3에 개발자를 추가로 투입하였다.", "right": true },
            { "value": "③ 서브 시스템 3에 테스터를 추가로 투입하였다.", "right": false },
            { "value": "④ 서브 시스템 4는 조기에 테스트를 종료하였다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 활동 모니터링을 바탕으로 수행되는 활동으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 동적 테스트 활동의 시작", "right": false },
            { "value": "② 테스트 계획과의 차이 해결", "right": false },
            { "value": "③ 새로운 위험 식별 및 대응", "right": false },
            { "value": "④ 테스트 결함 보고서 수정", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 종료에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 테스트에서 생성된 결과물이 재사용될 수 있도록 자산으로 관리한다.", "right": false },
            { "value": "② 테스트 환경과 테스트 데이터에 대한 요건을 정의한다. ", "right": true },
            { "value": "③ 수행된 다양한 테스트 환경 요소들을 사용하기 이전의 상태로 복구시킨다.", "right": false },
            { "value": "④ 미해소된 위험에 대하여 해소되지 않은 이유와 품질에 미치는 영향을 분석한다.", "right": false }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 평가 및 개선 활동에 대한 설명으로 올바르지 않은 것은?",
        "explanation": "",
        "options": [
            { "value": "① 적용된 테스트 프로세스의 효율성에 대한 평가를 테스트 활동 중 지속적으로 수행한다.", "right": true },
            { "value": "② 향후 수정되어야 할 테스트 프로세스 활동에 대한 검토·분석 의견을 제시한다.", "right": false },
            { "value": "③ 새롭게 적용된 활동 및 도구·기법에 대한 평가를 수행한다.", "right": false },
            { "value": "④ 발견된 오류 유형을 통해 각 단계별 테스트 기법을 평가한다. ", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "다음과 같이 테스트가 수행되었다. 테스트 케이스 효율성은 얼마인가?",
        "question_sub": "<다음>∙ 개발된 테스트 케이스 수 = 10개<br>∙ 예상 결과와 동일한 결과가 산출된 테스트 케이스 수 = 4<br>∙ 디버깅을 통해서 확인된 결함 수 = 1",
        "explanation": "",
        "options": [
            { "value": "① 1.0", "right": false },
            { "value": "② 0.5", "right": false },
            { "value": "③ 0.4", "right": false },
            { "value": "④ 0.1", "right": true }
        ],
        "correct": 3
    },
    {
        "type": "radio",
        "question": "다음 중 테스트 실행 활동의 개선을 설명하고 있는 것은 무엇인가?",
        "explanation": "",
        "options": [
            { "value": "① 테스트 실행에 소요되는 시간을 줄이면 전체 테스트에 소요되는 시간을 줄일 수 있다.", "right": true },
            { "value": "② 강한 수준의 테스트 기법을 사용하여 강도 높은 테스트를 실행할 수 있다.", "right": false },
            { "value": "③ 가장 중요한 테스트 대상 및 피쳐를 선택하기 위한 분석이 이뤄질 수 있다.", "right": false },
            { "value": "④ 결함 분석 및 추정 방법을 조정하여 결함의 수정 비용을 줄일 수 있다.", "right": false }
        ],
        "correct": 0
    },   
    {
        "type": "radio",
        "question": "단위 테스트 중에 테스트 스텁을 이용하면, 실제 모듈에서 발생하기 어려운 다양한 상황을 만들어 테스트할 수 있다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "나선형 개발 모델은 한 가지 모델만 채택하여 개발을 종료하는 대신, 여러 개의 생명 주기 모델들을 혼합하여 개발할 수 있다. 이러한 점 때문에 나선형 모델을 메타 생명 주기 모델이라고도 한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "정적테스트 자동화 도구의 종류로는 리뷰 프로세스 지원도구, 정적 분석도구, 모델링 도구 등이 있다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "일부 컴포넌트를 외주 업체를 통해서 개발하여 소스 코드를 제공받지 못하더라도 실행 가능한 컴포넌트만 있다면 정적 분석을 수행할 수 있다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "기본 경로 테스트(Basis Path Test)는 프로그램 경로 중에서 기본경로를 테스트하도록 요구하는데, 이 때 기본경로의 개수는 순환복잡도와 같다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "축약된 결정표에서 테스트 케이스를 생성하기 위해서는 각 규칙이 최소한 한번은 테스트 되도록 테스트 케이스들을 생성해야 한다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "시나리오 테스트에서 테스트 케이스는 요구사항 명세서를 기반으로 추출되며, 하나의 요구사항은 하나의 시나리오로 정의된다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": false },
            { "value": "❌", "right": true }
        ],
        "correct": 1
    },
    {
        "type": "radio",
        "question": "테스트 환경은 하드웨어, 시스템소프트웨어, 외부 연동 시스템, 테스트 도구 등 테스트 대상의 실행 환경을 의미한다. 그러므로, 테스트의 내용이 구체화 되는 “테스트 설계 단계”에서 테스트 환경을 식별하는 것이 바람직하다.",
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
        "question": "테스트 프로세스를 구성하는 활동 중에서 일반적으로 테스트 실행이 가장 많은 시간이 소요된다.",
        "explanation": "",
        "options": [
            { "value": "⭕", "right": true },
            { "value": "❌", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "text",
        "question": "다음 설명에 적절한 테스트 용어를 기재하시오.",
        "question_sub": "<다음>테스트 대상 단위 소프트웨어 모듈간 연동 결함 식별 및 연동 기능을 검증하는 테스트 레벨",
        "explanation": "통합 테스트",
        "correct": ["통합 테스트"]
    },
    {
        "type": "text",
        "question": "다음 사례의 내용 중 밑줄 친 부분은 어떤 테스트에 대한 설명인가?",
        "question_sub": "<다음>최근 릴리즈된 버전에 대해 테스트 팀에서 시스템 테스트를 했는데 꽤 많은 결함이 발견되었다. 특히 기본 기능 관련 동작에서 많은 결함이 발견되었다. 테스트팀은 발견한 결함으로 시스템에 등록하고 개발자에게 할당했다.<br>개발자는 원인을 분석한 후 소스를 수정하여 이를 새로운 버전에 반영하였다. 테스트 팀에서는 개발자의 결함이 제대로 수정되었는지 확인하기 위해 <u>동일한 테스트 케이스를 사용하여 새로운 버전을 테스트</u> 하였다.",
        "explanation": "재테스팅, Re-testing, 재테스트",
        "correct": ["재테스팅", "Re-testing" , "재테스트", "re-testing"]
    },
    {
        "type": "text",
        "question": "<보기>는 인스펙션 실행 순서이다. 빈칸에 들어갈 절차는 무엇인가?<br>[AL-2402-63.jpg]",
        "explanation": "재작업, Rework",
        "correct": ["재작업", "Rework", "rework"]
    },
    {
        "type": "text",
        "question": "다음 괄호 안에 들어갈 알맞은 단어를 기술하시오.",
        "question_sub": "<다음>IEEE 1028-2008에서는 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)의 목적을 소프트웨어 제품 및 프로세스가 규제, 표준, 가이드라인, 계획, 절차를 준수하고 있는지를 독립적으로 평가하는 것으로 규정하고 있다.",
        "explanation": "감사, Audit",
        "correct": ["감사", "Audit", "audit"]
    },
    {
        "type": "text",
        "question": "<보기>에서 설명 하는 테스트 기법은 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) 테스트이다.",
        "question_sub": "<보기>프로그램 코드에 나타나는 결정들과 관계 없이 조건들의 참 한번, 거짓 한번을 모두 확인하도록 테스트 케이스를 조합하여 수행 한다.",
        "explanation": "조건, Condition",
        "correct": ["조건", "Condition", "condition"]
    },
    {
        "type": "text",
        "question": "다음의 빈칸에 공통적으로 들어갈 알맞은 용어는 무엇인가?",
        "question_sub": "<다음>MCDC는 (  가  ) 테스트와 (  나  ) 테스트 요건을 모두 만족해야한다. (  나  )을 구성하는 각 (  가   )이 독립적으로 (  나  )의 결과에 영향을 미쳐야한다. ",
        "explanation": "가: 조건(condition), 나: 결정(decision)",
        "correct": ["가:조건, 나:결정", "가:condition, 나:decision"]
    },
    {
        "type": "text",
        "question": "다음은 상태 전이 테스트를 수행하는 절차를 무작위로 나열한 것이다. 테스트 수행 절차를 순서대로 쓰시오.",
        "question_sub": "<다음>가. 상태 전이도에서 전이 트리(Transition Tree)를 만든다.<br>나. 유효하지 않은 전이를 테스트하기 위한 테스트 케이스들을 생성한다.<br>다. 전이 트리에서 각 전이 경로를 테스트하는 테스트 케이스들을 생성한다.<br>라. 테스트하려고 하는 프로그램의 명세를 상태 전이도를 사용하여 모델링한다.",
        "explanation": "라→가→다→나",
        "correct": ["라-가-다-나"]
    },
    {
        "type": "text",
        "question": "다음 괄호 안에 들어갈 알맞은 단어 하나를 기술하시오.",
        "question_sub": "<다음>- 테스트 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)은/는 테스트 현황을 정량적으로 파악하여 테스트의 진척도 및 시스템의 품질을 객관적로 판단하기 위해 수집되는 측정 항목을 말한다.<br>- 테스트 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)은/는 테스트 완료 기준으로도 사용된다.",
        "explanation": "메트릭(metric) | 측정지표",
        "correct": ["메트릭", "metric", "측정지표"]
    },
    {
        "type": "text",
        "question": "<보기>의 설명에 해당하는 테스트 산출물은 무엇인가?",
        "question_sub": "<보기>- 테스트 대상 및 범위를 기술한다.<br>- 테스트의 가정 및 제약 사항을 포함한다.<br>- 테스트 중단 및 재시작 기준을 결정한다.<br>- 테스트 조직 및 인력 구성에 대해 기술한다.",
        "explanation": "",
        "correct": ["테스트 계획서"]
    },
    {
        "type": "text",
        "question": "다음 표에서 설계 단계의 결함 구속 효율성을 구하시오. ※ 소수점 첫째 자리까지 기술한다.<br>[AL-2402-70.jpg]",
        "explanation": "20 / 70 = 28.6% , 28.5%",
        "correct": ["28.6%", "28.5%"]
    },
    {
        "type": "text",
        "question": "V-모델은 소프트웨어 생명 주기를 개발에 관련된 단계들과 테스트에 관련된 단계들로 명확히 구분하고 그들 간의 관계를 명시적으로 나타낸 모델이다. V-모델에 맞도록 각 개발단계와 테스트 단계를 나타내고(상응하는 관계를 선으로 표시), 각 테스트 레벨에 적합성 기준이 되는 문서가 무엇인지 기술하시오.",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "<보기>의 프로그램 코드를 다중 조건 커버리지를 만족시키기 위해 <보기> 우측에 3개의 테스트 케이스를 도출하였다. 1개의 테스트 케이스를 추가하여 다중 조건 커버리지 100%를 만족시키려고 한다. 추가된 테스트 케이스의 x, y, z의 값을 구하시오.<br>[AL-2402-72.jpg]",
        "explanation": "",
        "correct": [""]
    },
    {
        "type": "text",
        "question": "아래 작성된 내용은 자율 주행의 모터 제어 프로그램 명세이다. 이를 분류 트리 기법으로 분석하여 페어와이즈(pair-wise)로 조합할 경우 발생하는 테스트 케이스를 모두 기술하시오.",
        "question_sub": "<다음>자율 주행 자동차는 속도에 따라 회전 모터를 제어한다. 저속(30km 이하)일 경우에는 회전 모터를 30rpm으로 제어하고, 중속(30km 이상, 80km 이하)일 경우에는 20rpm, 고속(80km 이상)일 경우에는 10rpm으로 제어한다. 또한 낮(08 ~ 18시)일 경우에는 회전 모터를 기존의 속도에 5rpm을 높여서 제어하고 밤(18 ~ 08시)일 경우에는 5rpm을 낮춰서 제어한다. ",
        "explanation": "[AL-2402-73_ex.jpg]",
        "correct": ["."]
    },
    {
        "type": "text",
        "question": "아래 <보기>를 읽고, 다음 질문에 답하시오.<br>(1) 테스트 팀 A 또는 B가 발견하지 못한 결함의 수는?<br>(2) 테스트 팀 A 또는 B가 발견하지 못한 결함의 비율은?",
        "question_sub": "<보기>테스트팀 A와 B로 두 개의 팀이 테스트를 진행하였다.<br>A팀은 95개의 결함을 발견하고 B팀은 80개의 결함을 발견하였으며,<br>공통 조사를 통하여 두 팀에서 공통으로 발견된 결함은 76개라고 한다.<br>(단, 테스트팀의 독립성과 결함의 독립성을 가정한다.)",
        "explanation": "[AL-2402-74_ex.jpg]",
        "correct": ["."]
    },
    {
        "type": "text",
        "question": " 테스트 결함 보고 단계에서는 결함 추적이 필수적이다. 발견된 결함 관점에서 보면 발견(Open)된 후 종결(Closed)될 때까지 여러 가지 상황에 놓인다. 다음 나열된 결함 생명 주기 상태에서 결함 생명 주기의 결함처리 시나리오 중 “차후에 결함을 처리하는 경우”에 해당되는 상태의 변화 프로세스를 시작부터 종료까지 화살표(→)로 그리시오.<br>[AL-2402-75.jpg]",
        "explanation": "",
        "correct": ["."]
    }
];




