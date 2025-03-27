//CSTS FL 2501
var cstsfl_2501_quizData = [
{ 
    "type": "radio",
    "question": "<보기>는 글꼴 변경 기능이 개발 완료 된 후, 품질 특성을 고려한 테스팅을 통해 수정 전과 수정 후의 모습이다. 이 때 고려된 품질 특성으로 가장 적절한 것은?[FL-2501-01.jpg]",
    "explanation": "",
    "options": [
           {"value": "사용성",  "right": true}, 
           {"value": "호환성",  "right": false}, 
           {"value": "유지보수성",  "right": false}, 
           {"value": "신뢰성",  "right": false}
           ],
    "correct": 0
},
{
    "type": "radio",
    "question": "소프트웨어 개발 단계별 테스트에 대한 설명으로 올바르지 않은 것은 무엇인가?",
    "explanation": "",
    "options": [
           {"value": "단위 테스트에서는 모듈 간의 인터페이스 테스트에 초점을 둔다.",  "right": true}, 
           {"value": "통합 테스트에서는 구조 설계 명세서에 바탕을 두고 진행된다.",  "right": false},
           {"value": "시스템 테스트는 기능적 측면뿐만 아니라 비기능적 측면도 테스트한다.",  "right": false}, 
           {"value": "인수 테스트는 시스템의 실제 운영환경에서 수행한다.",  "right": false}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "정적 분석 도구가 “실제로 결함이 존재하지 않지만 결함”이라고 보고하는 경우를 무엇이라 하는가?",
    "explanation": "",
    "options": [
           {"value": "false positive",  "right": true}, 
           {"value": "true negative",  "right": false},
           {"value": "false negative",  "right": false}, 
           {"value": "true positive",  "right": false}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "테스트 케이스에 대한 설명으로 올바르지 않은 것은 무엇인가?",
    "explanation": "",
    "options": [
           {"value": "테스트가 커버해야 할 부분을 실행하기 위한 값과 그 값으로 인해 의도되는 결과로 구성된다.",  "right": false}, 
           {"value": "결함을 발견해 낼 수 있도록 설계해야 한다.",  "right": false},
           {"value": "테스트 목적에 따라 테스트 케이스를 다르게 선택해야 한다.",  "right": false}, 
           {"value": "많은 테스트 케이스로 넓은 커버리지를 수행해야 정상적으로 테스트했다고 볼 수 있다.",  "right": true}
    ],
    "correct": 3
},
{
    "type": "radio",
    "question": "다음은 테스터가 근본적으로 어떤 활동을 제대로 하지 않았기 때문에 발생한 문제인가?[FL-2501-05.jpg]",
    "explanation": "",
    "options": [
           {"value": "테스트 대상인 피처 분석을 제대로 하지 않았다.",  "right": false}, 
           {"value": "테스트 설계 기법을 제대로 적용하지 않았다.",  "right": false},
           {"value": "테스트 절차를 정확하게 기술하지 않았다.",  "right": true}, 
           {"value": "결함 등록을 제대로 하지 않았다.",  "right": false}
    ],
    "correct": 2
},
{
    "type": "radio",
    "question": "단위 테스트 수행 시 각 모듈을 단독으로 실행하기 위한 환경 구성에 관한 설명 중 올바르지 않은 것은 무엇인가?",
    "explanation": "",
    "options": [
           {"value": "테스트 스텁(Test Stub): 테스트 중인 컴포넌트가 상호작용하는 다른 모듈 대신 사용하는 소프트웨어이다.",  "right": false}, 
           {"value": "테스트 스텁(Test Stub): 경우에 따라서 실행 결과가 원하는 결과인지 판별하여 프로그램에 오류가 검출되었는지 판별하는 기능을 수행할 수 있다.",  "right": true},
           {"value": "테스트 드라이버(Test Driver): 테스트 대상이 되는 모듈을 호출하여 준비한 테스트 데이터를 제공하고 모듈의 실행 결과를 받는 모듈이다.",  "right": false}, 
           {"value": "테스트 드라이버(Test Driver): 일반적으로 상향식 테스트에서 아직 통합되지 않은 상위 컴포넌트의 동작을 시뮬레이션하기 위해 사용한다.",  "right": false}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "단위 모듈들의 인터페이스와 단위 모듈들 사이에 존재하는 결함을 발견하는데 가장 적절한 테스트 수준은 무엇인가?",
    "explanation": "",
    "options": [
           {"value": "통합 테스트",  "right": true}, 
           {"value": "단위 테스트",  "right": false},
           {"value": "시스템 테스트",  "right": false}, 
           {"value": "인수 테스트",  "right": false}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "다음 시스템 테스트에 대한 설명으로 올바르지 않은 것은 무엇인가?",
    "explanation": "",
    "options": [
           {"value": "시스템 테스트는 기능 및 비기능 요구 사항을 모두 검증해야 한다.",  "right": false}, 
           {"value": "기능 요구 사항 테스트에는 블랙박스 테스트 기법을 주로 적용한다.",  "right": false},
           {"value": "시스템 테스트는 개발 환경에서 테스트를 수행하는 것이 더 효과적이다.",  "right": true}, 
           {"value": "비기능 요구 사항 테스트에서는 소프트웨어의 기능 품질특성 외에 성능 테스트, 가용성 테스트, 보안성 테스트 등을 수행한다.",  "right": false}
    ],
    "correct": 2
},
{
    "type": "radio",
    "question": "개발된 시스템을 사용자에게 전달하기 전에 최종적으로 수행하는 테스트는 무엇인가?",
    "explanation": "",
    "options": [
           {"value": "인수 테스트",  "right": true}, 
           {"value": "시스템 테스트",  "right": false},
           {"value": "보안 테스트",  "right": false}, 
           {"value": "성능 테스트",  "right": false}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "다음 중 사용자의 요구사항을 시스템이 얼마나 만족하는지에 대한 정보를 제공하는 기능 적합성 테스트의 부특성에 대한 설명으로 올바른 것은?",
    "explanation": "",
    "options": [
           {"value": "완전성: 모든 명시된 기능을 시스템이 제공하는 정도",  "right": true}, 
           {"value": "적절성: 기능 수행 시 사용되는 자원이 요구사항을 만족시키는 정도",  "right": false},
           {"value": "정확성: 사용자의 목적 달성에 소프트웨어가 도움을 주는 정도",  "right": false}, 
           {"value": "가용성: 사용자가 원하는 시간에 사용 및 접근이 가능한 정도",  "right": false}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "다음 중 다른 소프트웨어와 환경 및 자원을 공유하면서 요구된 기능을 효율적으로 수행할 수 있는 정도를 부특성으로 갖는 테스트 방법은 무엇인가?",
    "explanation": "",
    "options": [
           {"value": "호환성 테스트",  "right": true}, 
           {"value": "효율성 테스트",  "right": false},
           {"value": "공유성 테스트",  "right": false}, 
           {"value": "가용성 테스트",  "right": false}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "<보기>는 시간의 흐름에 따른 시스템 A의 동작 및 고장 발생을 도식화한 것이다. 이를 기준으로 MTTF를 나타내고 있는 것은?[FL-2501-12.jpg]",
    "explanation": "",
    "options": [
           {"value": "①",  "right": false}, 
           {"value": "②",  "right": true},
           {"value": "③",  "right": false}, 
           {"value": "④",  "right": false}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "다음은 어떤 품질 특성을 설명한 것인가?[FL-2501-13.jpg]",
    "explanation": "",
    "options": [
           {"value": "보안성",  "right": false}, 
           {"value": "사용성",  "right": false},
           {"value": "이식성",  "right": true}, 
           {"value": "유지보수성",  "right": false}
    ],
    "correct": 2
},
{
    "type": "radio",
    "question": "다음 중 테스트 방법에 대한 설명으로 올바른 것은?",
    "explanation": "",
    "options": [
           {"value": "진화형 모델과 애자일 모델과 같이 반복적이고 점진적인 모델에서도 테스트는 1회만 수행된다.",  "right": false}, 
           {"value": "폭포수 모델은 구현이 완료된 후에 테스트가 시작되어, 결함을 해결하는 데 적은 비용과 시간이 소요될 가능성이 크다.",  "right": false},
           {"value": "테스트 대상과 범위를 결정할 때에는 테스트 미수행에 따른 위험은 고려할 필요 없이 테스트 예상 비용만을 최우선적으로 고려해야 한다.",  "right": false}, 
           {"value": "리그레션 테스트는 소프트웨어 변경 후에 수행되는 테스트로, 소프트웨어에 가해진 변경이 의도하지 않은 결함을 만들지는 않았는지, 기존 요구사항을 충족하는지 검증하기 위하여 수행한다.",  "right": true}
    ],
    "correct": 3
},
{
    "type": "radio",
    "question": "소프트웨어 생명 주기 모델 중 소프트웨어에 관해 문서와 정보가 많아 테스트 설계가 용이하고, 개발이 완료된 후에 테스트를 수행하는 모델은 무엇인가?",
    "explanation": "",
    "options": [
           {"value": "V-모델",  "right": false}, 
           {"value": "폭포수 모델",  "right": true},
           {"value": "진화적 개발 모델",  "right": false}, 
           {"value": "애자일 개발 모델",  "right": false}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "나선형 모델에 대한 설명으로 올바른 것은?",
    "explanation": "",
    "options": [
           {"value": "동적 테스트 이외에도 각 레벨의 산출물에 대한 정적 테스트를 수행하여 결함을 도출하고 수정한 후 다음 레벨을 시작한다.",  "right": false}, 
           {"value": "새로운 개발주기가 시작될 때마다, 위험분석, 프로토타입, 테스트 및 사용자의 평가를 거쳐 개발한다.",  "right": true},
           {"value": "소프트웨어 개발을 1주에서 4주로 단위의 주기로 나누어 각 주기 별로 새로운 요구사항을 개발하고 테스트 및 릴리즈한다.",  "right": false}, 
           {"value": "요구사항 변경이 도중에 빈번하게 이루어지지 않는 경우의 개발 모델로 개발 대상을 여러 단계로 나누어 개발한다.",  "right": false}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "다음은 테스트 주도 개발(Test-Driven Development, TDD) 프로세스를 나타낸다. 다음 중에서 (가) 단계에 해당하는 테스트 방법은 무엇인가?[FL-2501-17.jpg]",
    "explanation": "",
    "options": [
           {"value": "리그레션 테스트(Regression Test)",  "right": true}, 
           {"value": "인수 테스트(Acceptance Test)",  "right": false},
           {"value": "재사용 테스트(Reuse Test)",  "right": false}, 
           {"value": "베타 테스트(Beta Test)",  "right": false}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "모델 기반 테스팅에 대한 설명으로 올바르지 않은 것은?",
    "explanation": "",
    "options": [
           {"value": "개발 단계 산출물의 결함을 이른 시점에 검출할 수 있다.",  "right": false}, 
           {"value": "시스템의 요구 사항과 동작에 대한 모델을 활용한다.",  "right": false},
           {"value": "정형화된 모델을 구축하는 데 비용이 소요된다.",  "right": false}, 
           {"value": "코드로부터 테스트 모델을 자동으로 생성한다.",  "right": true}
    ],
    "correct": 3
},
{
    "type": "radio",
    "question": "나머지 셋과 성격이 다른 테스트는 무엇인가?",
    "explanation": "",
    "options": [
           {"value": "조합 테스트",  "right": false}, 
           {"value": "경계값 분석 테스트",  "right": false},
           {"value": "정적 테스트",  "right": true}, 
           {"value": "결정 테스트",  "right": false}
    ],
    "correct": 2
},
{
    "type": "radio",
    "question": "다음의 보기 중 리뷰의 대상이 될 수 있는 것을 모두 고른 것은?[FL-2501-20.jpg]",
    "explanation": "",
    "options": [
           {"value": "(가)",  "right": false}, 
           {"value": "(가), (나)",  "right": false},
           {"value": "(가), (나), (다)",  "right": false}, 
           {"value": "(가), (나), (다), (라)",  "right": true}
    ],
    "correct": 3
},
{
    "type": "radio",
    "question": "다음은 무엇에 대한 내용인가?[FL-2501-21.jpg]",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": true}, 
           {"value": "",  "right": false}
    ],
    "correct": 2
},
{
    "type": "radio",
    "question": "인스펙션 참가자의 역할 중 검토대상의 내부설계나 문서의 주요 요소에 관해 부연 설명을 할 수 있으며, 회의 진행속도를 조절하는 사람은 누구인가?",
    "explanation": "",
    "options": [
           {"value": "검토자(Inspector)",  "right": false}, 
           {"value": "기록자(Recorder)",  "right": false},
           {"value": "낭독자(Reader)",  "right": true}, 
           {"value": "테스터(Tester)",  "right": false}
    ],
    "correct": 2
},
{
    "type": "radio",
    "question": "다음 중 코딩 표준에 대해서 바르게 설명한 것은?",
    "explanation": "",
    "options": [
           {"value": "프로그램을 작성할 때 지켜야 하는 규약이다.",  "right": true}, 
           {"value": "프로그램의 복잡도를 계산하기 위함이다.",  "right": false},
           {"value": "프로그램의 성공, 실패 여부를 확인하기 위함이다.",  "right": false}, 
           {"value": "프로그램의 패턴을 분석하기 위함이다.",  "right": false}
    ],
    "correct": 0
},
        {
    "type": "radio",
    "question": "다음 중 테스트 커버리지의 포함관계가 올바르게 표현된 것은 무엇인가?[FL-2501-24.jpg]",
    "explanation": "",
    "options": [
           {"value": "①",  "right": false}, 
           {"value": "②",  "right": false},
           {"value": "③",  "right": false}, 
           {"value": "④",  "right": true}
    ],
    "correct": 3
},
{
    "type": "radio",
    "question": "<보기>의 제어 흐름 그래프에서 문장 커버리지 100%를 달성하기 위해 필요한 테스트 케이스의 최소 개수는 몇 개인가?[FL-2501-25.jpg]",
    "explanation": "",
    "options": [
           {"value": "1",  "right": false}, 
           {"value": "2",  "right": false},
           {"value": "3",  "right": true}, 
           {"value": "4",  "right": false}
    ],
    "correct": 2
},
{
    "type": "radio",
    "question": "다음의 제어 흐름도를 이용해 테스트 케이스를 설계하고자 한다. 결정 커버리지 50%를 달성하는 테스트 케이스 세트를 고르시오.",
    "explanation": "",
    "options": [
           {"value": "테스트 케이스 1: A → B → C → E → F → H → I → K / 테스트 케이스 2: A → B → C → E → G → H → J → K / 테스트 케이스 3: A → B → D → K",  "right": false}, 
           {"value": "테스트 케이스 1: A → B → C → E → F → H → I → K",  "right": true},
           {"value": "테스트 케이스 1: A → B → C → E → F → H → I → K / 테스트 케이스 2: A → B → C → E → G → H → J → K",  "right": false}, 
           {"value": "테스트 케이스 1: A → B → C → E → F → H → I → K / 테스트 케이스 3: A → B → D → K",  "right": false}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
    {
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
}
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "",
    "explanation": "",
    "options": [
           {"value": "",  "right": false}, 
           {"value": "",  "right": false},
           {"value": "",  "right": false}, 
           {"value": "",  "right": false}
    ],
    "correct": 
},
{
    "type": "radio",
    "question": "51. 명세 기반 테스트와 구조 기반 테스트 방법은 대표적인 정적 테스트 방법이다.",
    "explanation": "",
    "options": [
           {"value": "○",  "right": false}, 
           {"value": "X",  "right": true}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "52. 소프트웨어 생명주기 모델 중 폭포수 모델은 사용자의 요구사항이 개발자에게 익숙한 경우나 요구사항 변경이 개발도중에 빈번하게 이루어 질 경우에 적합한 개발 모형이다.",
    "explanation": "",
    "options": [
        {"value": "○",  "right": false}, 
        {"value": "X",  "right": true}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "53. 기술 리뷰(Technical review)에서는 체크리스트를 필수적으로 사용하여야 한다.",
    "explanation": "",
    "options": [
        {"value": "○",  "right": false}, 
        {"value": "X",  "right": true}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "54. 명세기반 테스트는 소프트웨어를 실행하면서 테스트하고, 구조기반 테스트는 소프트웨어를 실행하지 않고 테스트를 수행한다.",
    "explanation": "",
    "options": [
        {"value": "○",  "right": false}, 
        {"value": "X",  "right": true}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "55. 조건/분기 커버리지는 각 개별 조건식 및 전체 조건식의 결과 값이 참(True)과 거짓(False)을 적어도 한 번 이상 실행시키는 것을 기준으로 하는 테스트 방법이다.",
    "explanation": "",
    "options": [
        {"value": "○",  "right": true}, 
        {"value": "X",  "right": false}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "56. 명세 기반 테스트 기법 중에서 경곗값 분석은 동등분할 테스트보다 테스트 강도가 높다.",
    "explanation": "",
    "options": [
        {"value": "○",  "right": true}, 
        {"value": "X",  "right": false}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "57. 테스트 프로세스는 개발 프로세스가 종료된 후에 시작되며, 한번 정립된 프로세스는 변경하지 않는 것이 효율적이다.",
    "explanation": "",
    "options": [
        {"value": "○",  "right": false}, 
        {"value": "X",  "right": true}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "58. 테스트 계획 수립 시에는 테스트 절차 실행 시 테스트 대상에 입력되는 테스트 데이터만 식별한다.",
    "explanation": "",
    "options": [
        {"value": "○",  "right": false}, 
        {"value": "X",  "right": true}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "59. 테스트 설계 및 구현 단계에서 피처 집합을 구성하는 하나의 세부 피처마다 테스트 케이스는 하나씩만 개발해야한다.",
    "explanation": "",
    "options": [
        {"value": "○",  "right": false}, 
        {"value": "X",  "right": true}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "60. 결함 나이(defect age)는 수정(resolved)된 이후 검증(verified)이 될 때까지의 시간을 말한다.",
    "explanation": "",
    "options": [
        {"value": "○",  "right": false}, 
        {"value": "X",  "right": true}
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "61. 규정된 조건에서 규정된 기간 동안 오동작 없이 의도된 기능을 수행하는 소프트웨어의 품질 특성을 무엇이라 하는가?",
    "explanation": "신뢰성, reliability",
    "options": [
        {"value": "정답 확인", "right": true}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "62. 다음은 무엇에 대한 설명인지 기재하시오.[FL-2405-62.jpg]",
    "explanation": "인수 테스트 사용자 인수 테스트",
    "options": [
        {"value": "정답 확인", "right": true}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "63. 다음 사례의 내용 중 밑줄 친 부분은 어떤 테스트에 대한 설명인가?[FL-2405-63.jpg]",
    "explanation": "재테스팅(Re-testing)",
    "options": [
        {"value": "정답 확인", "right": true}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "64. <보기>의 프로그램을 제어 흐름 그래프로 작성했을 때 최소 기본 블록은 몇 개인가?[FL-2405-64.jpg]",
    "explanation": "5개",
    "options": [
        {"value": "정답 확인", "right": true}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "65. 다음은 구조기반 테스트 커버리지에 대한 설명이다. 어떤 테스트 커버리지에 대한 설명인지 기재하시오.[FL-2405-65.jpg]",
    "explanation": "결정/조건, 조건/분기 및 / 기준 좌우가 바뀌어도 정답",
    "options": [
        {"value": "정답 확인", "right": true}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "66. <보기>의 단계들을 나열하여, 동등 분할을 하는 절차로 구성하시오.[FL-2405-66.jpg]",
    "explanation": "나 → 라 → 가 → 다",
    "options": [
        {"value": "정답 확인", "right": true}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "67. <보기>의 명세를 기반으로 동등분할과 경계값 분석을 적용하여 테스트 케이스를 설계하였다. 이때 설계된 테스트 케이스 수는 각각 몇 개 인가? (단. 경계값 분석은 2-value를 적용한다.)[FL-2405-67.jpg]",
    "explanation": "동등분할: 4개, 경계값 분석: 7개",
    "options": [
        {"value": "정답 확인", "right": true}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "68. 다음의 설명에서 빈칸에 들어갈 알맞은 테스팅은 무엇인가?[FL-2405-68.jpg]",
    "explanation": "리그레션 또는 회귀",
    "options": [
        {"value": "정답 확인", "right": true}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "69. 다음은 결함 분석 방법에 대한 설명이다. 빈칸에 들어갈 알맞은 용어는 무엇인가?[FL-2405-69.jpg]",
    "explanation": "고립화 또는 Isolation",
    "options": [
        {"value": "정답 확인", "right": true}
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "70. 다음의 보기에서 설명하는 활동은 테스트 프로세스의 어느 단계에 해당하는가?[FL-2405-70.jpg]",
    "explanation": "테스트 종료",
    "options": [
            {"value": "정답 확인", "right": true}
        ],
        "correct": 0
}
];

