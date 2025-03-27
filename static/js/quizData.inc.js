var quizData = [{
    "type": "radio",
    "question": "회사는 고객 서비스 에이전트 팀을 고용하여 고객에게 전화 및 이메일 지원을 제공합니다. 이 회사는 일반적인 고객 쿼리에 자동화된 답변을 제공하는 웹챗 봇을 개발합니다. 웹챗 봇 솔루션을 만든 결과 기업이 기대해야 하는 비즈니스 이점은 무엇입니까?",
    "explanation": "",
    "options": [
           {"value": "매출 증가",  "right": false}, 
           {"value": "고객 서비스 에이전트의 작업량 감소",  "right": true}, 
           {"value": "제품 신뢰성 향상",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "기계 학습(머신러닝) 진행을 위해 학습 및 평가를 위해 데이터를 어떻게 분할해야 합니까?",
    "explanation": "",
    "options": [
           {"value": "교육용 기능과 평가용 레이블을 사용합니다.",  "right": false}, 
           {"value": "데이터를 학습용 행과 평가용 행으로 무작위로 분할합니다.",  "right": true}, 
           {"value": "교육에는 레이블을 사용하고 평가에는 기능을 사용합니다.",  "right": false}, 
           {"value": "데이터를 학습용 열과 평가용 열로 무작위로 분할합니다.",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "분류(Classification)를 사용하여 이벤트를 예측하는 모델을 개발하고 있습니다. 다음 예시와 같이 테스트 데이터에 대한 모델의 혼동 행렬(Confusion Matrix)을 가지고 있습니다.[0000300001.png]",
    "explanation": "0000400001.png,0000500001.png",
    "options": [{"value": "정답확인눌러서 그냥 외우기", "right": true}],
    "correct": 0
}, {
    "type": "radio",
    "question": "자동화된 기계 학습 사용자 인터페이스(UI)를 사용하여 기계 학습 모델을 빌드합니다. 모델이 책임 있는 AI에 대한 Microsoft 투명성 원칙을 충족하는지 확인해야 합니다. 당신은 무엇을 해야 합니까?",
    "explanation": "대부분의 기업은 신뢰를 기반으로 운영되며 ML 의 '블랙박스'를 열 수 있으면 투명성과 신뢰를구축하는 데 도움이 됩니다. 의료 및 은행과 같이 규제가 심한 산업에서는 규정과 모범 사례를준수하는 것이 중요합니다. 이에 대한 주요 측면 중 하나는 입력 변수(특성)와 모델 출력 간의관계를 이해하는 것입니다. 각 특성(특성 중요도)이 예측 값에 미치는 영향의 크기와 방향을 모두 알면 모델을 더 잘 이해하고 설명하는 데 도움이 됩니다. 모델 설명 기능을 통해 자동화된 ML 실행의 일부로 기능 중요성을 이해할 수 있습니다.",
    "options": [
           {"value": "유효성 검사 유형을 자동으로 설정합니다.",  "right": false}, 
           {"value": "최상의 모델 설명을 활성화합니다. (Enable Explain best model)",  "right": true}, 
           {"value": "기본 메트릭을 정확도로 설정합니다.",  "right": false}, 
           {"value": "최대 동시 반복을 0으로 설정합니다.",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "과거 데이터를 기반으로 주택 가격을 예측하는 것은 이상 탐지(Anomaly Detection)의 한 예입니다. (Y/N)",
    "explanation": "",
    "options": [
        { "value": "Yes", "right": false },
        { "value": "No", "right": true }
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "일반적인 패턴에서 벗어난 것을 찾아 의심스러운 로그인을 식별하는 것이 이상 탐지(Anomaly Detection)의 한 예입니다. (Y/N)",
    "explanation": "",
    "options": [
        { "value": "Yes", "right": true },
        { "value": "No", "right": false }
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "환자의 병력 등을 토대로 당뇨병 발병 여부를 예측하는 것이 이상 탐지(Anomaly Detection)의 한 예입니다. (Y/N)",
    "explanation": "",
    "options": [
        { "value": "Yes", "right": false },
        { "value": "No", "right": true }
    ],
    "correct": 1
}, {
    "type": "radio",
    "question": "AI 시스템에 제공되는 비정상적이거나 결측값의 처리는 Microsoft _____ 원칙을 고려하여 AI를 담당합니다.",
    "explanation": "AI 시스템이 신뢰를 받으려면 신뢰할 수 있고 안전해야 합니다. 시스템이 원래 설계된 대로작동하고 새로운 상황에 안전하게 대응하는 것이 중요합니다. 고유한 탄력성은 의도했거나의도하지 않은 조작에 저항해야 합니다. 시스템이 엣지 케이스에 안전하게 대응할 수 있도록운영 조건에 대한 엄격한 테스트 및 검증을 수립해야 하며, A/B 테스트 및 챔피언/챌린저 방법을평가 프로세스에 통합해야 합니다.AI 시스템의 성능은 시간이 지남에 따라 저하될 수 있으므로 모델의 성능을 사전에 대응적으로측정하고 필요에 따라 재교육하여 현대화하려면 강력한 모니터링 및 모델 추적 프로세스를구축해야 합니다.",
    "options": [
           {"value": "포괄성 (Inclusiveness)",  "right": false}, 
           {"value": "개인정보 보호 및 보안 (Privacy and Security)",  "right": false}, 
           {"value": "신뢰성과 안전성 (Reliability and Safety)",  "right": true}, 
           {"value": "투명성 (Transparency)",  "right": false}
           ],
    "correct": 2
}, {
    "type": "radio",
    "question": "청각, 시각 및 기타 장애가 있는 사람을 포함하여 모든 사람에게 권한을 부여하는 AI 시스템을 설계하고 있습니다. 이것은 어떤 책임 있는 AI에 대한 Microsoft의 지침 원칙의 예입니까?",
    "explanation": "“포용성”에 대해 Microsoft는 모든 사람이 지능형 기술의 혜택을 누릴 수 있어야 하며, 이는 다양한 인간의 필요와 경험을 반영해야 한다고 강조합니다. 전 세계적으로 10억 명이 넘는 사람들이 장애를 가지고 있기 때문에, AI 기술이 이들에게 큰 전환점이 될 수 있다는 점을 주목하고 있습니다.",
    "options": [
           {"value": "공정성",  "right": false}, 
           {"value": "포괄성/포용성 (inclusiveness)",  "right": true}, 
           {"value": "신뢰성과 안전성",  "right": false}, 
           {"value": "책임",  "right": false}
    ],
    "correct": 1
}, {
    "type": "radio",
    "question": "[Drag Drop 문제] 책임 있는 AI(인공지능) 원칙 중 (_____________) ->AI 시스템이 설계 의도대로 작동하고, 예기치 않은 상황에도 대응하며, 악의적인 조작을 막도록 보장한다.[0001200001.png]",
    "explanation": "0001300001.png<br>신뢰 구축을 위해서는 AI 시스템이 정상적인 상황과 예상치 못한 상황에서도 신뢰할 수 있고 안전하며 일관되게 동작하는 것이 매우 중요합니다. 이러한 시스템은 원래 설계된 대로 작동하고, 예기치 못한 상황에도 안전하게 대응하며, 악의적인 조작을 방어할 수 있어야 합니다.",
    "options": [
           {"value": "신뢰성 및 안전성(Reliability and Safety)", "right": true},
            { "value": "책임(Accountability)", "right": false },
            { "value": "프라이버시와 보안(Privacy and Security)", "right": false },
            { "value": "포괄성/포용성 (inclusiveness)", "right": false }
    ],
    "correct": 0
}
    , {
    "type": "radio",
    "question": "[Drag Drop 문제] 책임 있는 AI(인공지능) 원칙 중 (_____________) -> 소비자에게 자신의 데이터 수집, 사용, 저장 방식에 관한 정보와 통제권을 제공한다.[0001200001.png]",
    "explanation": "0001300001.png<br>AI가 보편화됨에 따라 개인정보와 중요한 개인·기업 정보를 보호하고 보안하는 일이 더욱 중요하고 복잡해졌습니다. AI 시스템이 사람들에 대한 정확하고 적절한 예측·결정을 내리려면 데이터 접근이 필수적이기 때문에, 개인정보 및 데이터 보안 이슈에 특히 주의를 기울여야 합니다. AI 시스템은 데이터의 수집, 사용, 저장에 대한 투명성을 요구하는 개인정보 보호법을 준수해야 하며, 소비자가 자신의 데이터 사용 방식을 직접 선택할 수 있는 적절한 통제권을 가져야 합니다.",
    "options": [
                { "value": "신뢰성 및 안전성(Reliability and Safety)", "right": false },
            { "value": "책임(Accountability)", "right": false },
            { "value": "프라이버시와 보안(Privacy and Security)", "right": true },
            { "value": "포괄성/포용성 (inclusiveness)", "right": false }
    ],
    "correct": 2
}, {
    "type": "radio",
    "question": " [Drag Drop 문제] 책임 있는 AI(인공지능) 원칙 중 (_____________) ->AI 시스템이 내린 결정을 사람이 무효화할 수 있는 절차를 구현한다.[0001200001.png]",
    "explanation": "0001300001.png <br>AI 시스템을 설계하고 배포하는 사람들은 해당 시스템이 어떻게 작동하는지에 대해 책임을 져야 합니다. 조직은 업계 표준을 참고하여 책임성 규범을 마련해야 합니다. 이러한 규범은 AI 시스템이 사람들의 삶에 영향을 주는 결정에서 최종 권위가 되지 않도록 하며, 사람이 매우 자율적인 AI 시스템에 대해서도 의미 있는 통제권을 유지하도록 해줍니다.",
    "options": [
        { "value": "신뢰성 및 안전성(Reliability and Safety)", "right": false },
    { "value": "책임(Accountability)", "right": true },
    { "value": "프라이버시와 보안(Privacy and Security)", "right": false },
    { "value": "포괄성/포용성 (inclusiveness)", "right": false }
    ],
    "correct": 1
}
    , {
    "type": "radio",
    "question": "자율 주행 차량용 AI 시스템을 개발할 때, 예기치 않은 상황에서도 일관된 시스템 운영을 보장하기 위해 Microsoft의 _______ 원칙(책임 있는 AI 원칙)이 적용되어야 합니다.[0001400001.jpg]",
    "explanation": "0001400002.jpg<br>신뢰를 구축하기 위해서는 AI 시스템이 정상적인 상황과 예기치 않은 조건에서도 안정적이고, 안전하며, 일관되게 작동하는 것이 매우 중요합니다. 이러한 시스템은 원래 설계된 대로 작동하고, 예상치 못한 상황에도 안전하게 대응하며, 유해한 조작에 저항할 수 있어야 합니다.",
    "options": [
           {"value": "포용성",  "right": false}, 
           {"value": "책임",  "right": false}, 
           {"value": "신뢰성과 안전성",  "right": true}, 
           {"value": "공정성",  "right": false}
           ],
    "correct": 2
}, {
    "type": "radio",
    "question": "AI 시스템을 구축하고 있습니다. 서비스가 책임 있는 AI에 대한 Microsoft 투명성 원칙을 충족하도록 하려면 어떤 작업을 포함해야 합니까?",
    "explanation": "",
    "options": [
           {"value": "모든 시각적 개체에 스크린 리더가 읽을 수 있는 관련 텍스트가 있는지 확인합니다.",  "right": false}, 
           {"value": "서비스가 수요에 따라 확장되도록 자동 크기 조정을 활성화합니다.",  "right": false}, 
           {"value": "개발자가 코드를 디버그하는 데 도움이 되는 문서를 제공합니다.",  "right": true}, 
           {"value": "훈련 데이터 세트가 모집단을 대표하는지 확인하십시오.",  "right": false}
           ],
    "correct": 2
}, {
    "type": "radio",
    "question": "[Drag drop](_____________) -> 손으로 쓴 글자를 인식합니다.[0003000001.jpg]",
    "explanation": "0003000001_1.jpg",
    "options": [
        { "value": "컴퓨터 비전", "right": true },
        { "value": "자연어 처리", "right": false },
        { "value": "이상 탐지", "right": false },
        { "value": "기계 학습 (회귀)", "right": false }
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "[Drag drop](_____________) -> 사기 신용카드 결제를 식별합니다.[0003000001.jpg]",
    "explanation": "0003000001_1.jpg",
    "options": [
        { "value": "컴퓨터 비전", "right": false },
        { "value": "자연어 처리", "right": false },
        { "value": "이상 탐지", "right": true },
        { "value": "기계 학습 (회귀)", "right": false }
    ],
    "correct": 2
},
{
    "type": "radio",
    "question": "[Drag drop](_____________) -> 소셜 미디어 게시글의 감성을 예측합니다.[0003000001.jpg]",
    "explanation": "0003000001_1.jpg",
    "options": [
        { "value": "컴퓨터 비전", "right": false },
        { "value": "자연어 처리", "right": true },
        { "value": "이상 탐지", "right": false },
        { "value": "기계 학습 (회귀)", "right": false }
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "[Drag drop](_____________) -> 다음 달의 장난감 판매량을 예측합니다.[0003000001.jpg]",
    "explanation": "0003000001_1.jpg",
    "options": [
        { "value": "컴퓨터 비전", "right": false },
        { "value": "자연어 처리", "right": false },
        { "value": "이상 탐지", "right": false },
        { "value": "기계 학습 (회귀)", "right": true }
    ],
    "correct": 3
}, {
    "type": "radio",
    "question": "<_______?________> 텍스트에서 날짜, 수량 및 위치를 추출하는 데 사용됩니다.[ai900Q13.jpg]",
    "explanation": "ai900Q13A.jpg<br>NER(명명된 엔터티 인식)은 Azure AI 언어에서 제공하는 기능으로, 작성된 언어와 관련된 지능형 애플리케이션을 개발하기 위한 클라우드의 기계 학습 및 AI 알고리즘 모음입니다. NER 기능은 비정형 텍스트에서 엔터티를 식별하고 분류할 수 있습니다. 예: 사람, 장소, 조직 및 수량. 미리 빌드된 NER 기능에는 인식된 엔터티의 사전 설정된 목록이 있습니다. 사용자 지정 NER 기능을 사용하면 사용 사례에 특정한 특수 엔터티를 인식하도록 모델을 학습할 수있습니다..",
    "options": [
        { "value": "주요 구문 추출 (Key Phrase Extraction)", "right": false },
        { "value": "언어 감지 (Language Detection)", "right": false },
        { "value": "명명된 개체 인식 (NER, Named Entity Recognition)", "right": true },
        { "value": "감성 분석 (Sentiment Analysis)", "right": false }
    ],
    "correct": 2
},
{
    "type": "radio",
    "question": "귀사는 스마트 홈 장치에서 음성 인식 기술을 활용하는 방안을 연구하고 있습니다. 회사는 특정 사용자 그룹이 의도치 않게 배제되지 않도록 장벽을 식별하고자 합니다. 이는 Microsoft 책임 있는 AI 원칙 중 어떤 원칙의 예입니까?",
    "explanation": "포용성(Inclusiveness)은 모든 사용자(예: 장애인, 다양한 억양과 언어 사용자)를 고려하여 AI가 공정하게 작동하도록 보장하는 원칙입니다.",
    "options": [
        { "value": "책임(Accountability)", "right": false },
        { "value": "공정성(Fairness)", "right": false },
        { "value": "포용성(Inclusiveness)", "right": true },
        { "value": "개인정보 보호 및 보안(Privacy and Security)", "right": false }
    ],
    "correct": 2
}, {
    "type": "checkbox",
    "question": "Microsoft가 제시한 책임 있는 AI를 위한 3가지 주요 원칙은 무엇입니까? 각1점 .",
    "explanation": "",
    "options": [
           {"value": "지식성",  "right": false}, 
{"value": "결단력",  "right": false}, 
           {"value": "포괄성",  "right": true}, 
           {"value": "공정성",  "right": true}, 
           {"value": "단호한 태도",  "right": false}, 
           {"value": "신뢰성과 안전성",  "right": true}
           ],
    "correct": [2, 3, 5]
}, {
    "type": "radio",
    "question": "이미지에서 차량의 위치를 나타내는 바운딩 박스(Bounding Box,경계상자)를 반환하는 것은 다음 중 어떤 예시에 해당하나요[ai900Q15.jpg]",
    "explanation": "ai900Q15A.jpg",
    "options": [
           {"value": "이미지 분류",  "right": false}, 
           {"value": "객체 감지",  "right": true}, 
           {"value": "OCR",  "right": false}, 
           {"value": "semantic segmentation(시맨틱 분할)",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "_________ 추가 기능(특징)을 생성하는 데 사용됩니다.[ai900Q16.jpg]",
    "explanation": "ai900Q16A.jpg<br>많은 원시 데이터 필드를 사용하여 모델을 직접 학습시킬 수 있지만 데이터의 패턴을 더 잘 구별하는 정보를 제공하는 추가(엔지니어링된) 기능을 만들어야 하는 경우가 많습니다. 이 프로세스를 기능 엔지니어링이라고 하며, 여기서 데이터의 도메인 지식을 사용하여 기계 학습 알고리즘이 더 잘 학습하는 데 도움이 되는 기능을 만듭니다.",
    "options": [
           {"value": "특징 엔지니어링 (Feature Engineering)",  "right": true}, 
           {"value": "특징 선택 (Feature Selection)",  "right": false}, 
           {"value": "모델 평가 (Model Evaluation)",  "right": false}, 
           {"value": "모델 학습 (Model Training)",  "right": false}
           ],
    "correct": 0
}, {
    "type": "radio",
    "question": "트위터에 선글라스를 쓴 사람들의 사진을 게시하는 자선 이벤트를 진행 중입니다. 다음 조건을 충족하는 사진만 리트윗해야 합니다.<br>o하나 이상의 얼굴이 포함되어야 합니다.<br>o선글라스를 쓴 사람이 최소 한 명 이상 포함되어야 합니다.",
    "explanation": "the Detect operation in the Face service)",
    "options": [
           {"value": "Face 서비스에서 확인(Verify) 작업",  "right": false}, 
           {"value": "Face 서비스의 감지(Detect) 작업",  "right": true}, 
           {"value": "Computer Vision 서비스의 이미지 설명 작업",  "right": false}, 
           {"value": "Computer Vision 서비스의 이미지 분석 작업",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "⭐ 대출 승인 여부를 평가하기 위해 AI 시스템을 설계할 때 결정을 내리는 데 사용된 요소를 설명할 수 있어야 합니다. 이것은 책임 있는 AI에 대한 Microsoft의 지침 원칙의 예입니다.",
    "explanation": "투명성을 달성하면 팀이 모델 교육에 사용되는 데이터와 알고리즘, 데이터에 적용된 변환 논리, 생성된 최종 모델 및 관련 자산을 이해하는 데 도움이 됩니다. 이 정보는 모델이 어떻게 생성되었는지에 대한 통찰력을 제공하므로 모델을 투명한 방식으로 재현할 수 있습니다.",
    "options": [
        {"value": "투명성",  "right": true}, 
           {"value": "포괄성",  "right": false}, 
           {"value": "공정성",  "right": false}, 
           {"value": "개인 정보 및 보안",  "right": false}
],
    "correct": 0
},

{
    "type": "radio",
    "question": "[DragDrop](_____________) -> 시스템은 성별, 인종 등을 기반으로 차별해서는 안 됩니다.[ai900Q20.jpg]",
    "explanation": "0002300001.jpg",
    "options": [
        { "value": "공정성 (Fairness)", "right": true },
        { "value": "프라이버시 및 보안 (Privacy and Security)", "right": false },
        { "value": "투명성 (Transparency)", "right": false }
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "[DragDrop](_____________) -> 개인 데이터는 승인된 경우에만 볼 수 있어야 합니다.[ai900Q20.jpg]",
    "explanation": "0002300001.jpg",
    "options": [
        { "value": "공정성 (Fairness)", "right": false },
        { "value": "프라이버시 및 보안 (Privacy and Security)", "right": true },
        { "value": "투명성 (Transparency)", "right": false }
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "[DragDrop](_____________) -> 자동화된 의사 결정 프로세스는 기록되어야 하며, 승인된 사용자가 결정이 왜 내려졌는지 식별할 수 있어야 합니다.[ai900Q20.jpg]",
    "explanation": "0002300001.jpg",
    "options": [
        { "value": "공정성 (Fairness)", "right": false },
        { "value": "프라이버시 및 보안 (Privacy and Security)", "right": false },
        { "value": "투명성 (Transparency)", "right": true }
    ],
    "correct": 2
}
    , {
    "type": "radio",
    "question": "Azure Machine Learning 모델을 클라이언트 애플리케이션에서 사용할 서비스로 배포할 계획입니다. 모델을 배포하기 전에 어떤 세 가지 프로세스를 순서대로 수행해야 합니까?[ai900Q21.jpg]",
    "explanation": "0002500001.png",
    "options": [
        {"value": "데이터 준비 - 모델 평가 - 데이터 암호화",  "right": false}, 
           {"value": "모델 학습 - 데이터 준비 - 모델 평가",  "right": false}, 
           {"value": "데이터 준비 - 모델 평가 - 모델 학습",  "right": false}, 
           {"value": "데이터 준비 - 모델 학습 - 모델 평가",  "right": true}
           ],
    "correct": 3
}, {
    "type": "checkbox",
    "question": "AI 기반 앱을 구축 중입니다. 앱이 책임 있는 AI에 대한 원칙을 사용하는지 확인해야 합니다. 어떤 두 가지 원칙을 따라야 합니까?",
    "explanation": "",
    "options": [
           {"value": "애자일 소프트웨어 개발 방법론 구현",  "right": false}, 
           {"value": "소프트웨어 검토 프로세스의 일부로 AI 모델 검증 프로세스 구현",  "right": true}, 
           {"value": "법무팀 구성원, 위험관리팀 구성원, 개인정보 보호책임자를 포함하는 위험 관리 위원회 구성",  "right": true}, 
           {"value": "자동화된 의사결정을 위한 AI 기반 알고리즘 사용의 공개 방지",  "right": false}
           ],
    "correct": [1, 2]
}, {
    "type": "radio",
    "question": "⭐Microsoft의 ______ 책임 있는 AI 원칙에 따르면, AI 시스템은 학습에 사용되는 데이터 세트에서 비롯된 편향을 반영해서는 안 됩니다..[ai900Q23.jpg]",
    "explanation": "ai900Q23A.jpg<br>공정성은 모든 사람이 이해하고 적용하는 것을 목표로 하는 핵심 윤리 원칙입니다. 이 원칙은 AI 시스템을 개발할 때 더욱 중요합니다. 주요 견제와 균형은 시스템의 결정이 성별, 인종, 성적 지향 또는 종교에 따라 그룹이나 개인을 차별하거나 편견을 표현하지 않도록 해야 합니다.",
    "options": [
           {"value": "책임",  "right": false}, 
           {"value": "공정성",  "right": true}, 
           {"value": "포용성",  "right": false}, 
           {"value": "투명성",  "right": false}
    ],
    "correct": 1
}, {
    "type": "radio",
    "question": "[DragDrop](_____________) -> 혼동 행렬(confusion matrix)의 값을 확인하기.[ai900Q26.jpg]",
    "explanation": "ai900Q26A.jpg<br>모델 평가 모듈은 참양성, 거짓음성, 거짓양성, 참음성의 수를 보여주는 혼동 행렬을 출력합니다.ROC, 정밀도/재현율 및 리프트 곡선",
    "options": [
        { "value": "특징 엔지니어링(Feature engineering)", "right": false },
        { "value": "특징 선택(Feature selection)", "right": false },
        { "value": "모델 배포(Model deployment)", "right": false },
        { "value": "모델 평가(Model evaluation)", "right": true },
        { "value": "모델 학습(Model training)", "right": false }
    ],
    "correct": 3
},
{
    "type": "radio",
    "question": "[DragDrop](_____________) -> 날짜(date)를 월, 일, 연도 필드로 분할하기.[ai900Q26.jpg]",
    "explanation": "ai900Q26A.jpg<br>특성 엔지니어링은 데이터에 대한 도메인 지식을 사용하여 ML 알고리즘이 더 잘 학습하는 데 도움이 되는 특성을 만드는 프로세스입니다. Azure Machine Learning 에서는 기능 엔지니어링을 용이하게 하기 위해 크기 조정 및 정규화 기술이 적용됩니다. 이러한 기술과 기능 엔지니어링을 종합적으로 기능화라고 합니다.<br>참고: 기능 엔지니어링 프로세스를 통해 원시 데이터에서 기능이 생성되는 경우가 많습니다. 예를 들어, 타임스탬프 자체는 정보가 휴일 대 근무일 등 문제와 관련된 일, 월 또는 범주 단위로 변환될 때까지 모델링에 유용하지 않을 수 있습니다.",
    "options": [
        { "value": "특징 엔지니어링(Feature engineering)", "right": true },
        { "value": "특징 선택(Feature selection)", "right": false },
        { "value": "모델 배포(Model deployment)", "right": false },
        { "value": "모델 평가(Model evaluation)", "right": false },
        { "value": "모델 학습(Model training)", "right": false }
    ],
    "correct": 0
},
{
    "type": "radio",
    "question": "[DragDrop](_____________) -> 날씨 모델을 학습하기 위해 온도와 기압을 선택하기.[ai900Q26.jpg]",
    "explanation": "ai900Q26A.jpg<br>기계 학습 및 통계에서 기능 선택은 분석 모델을 구축하는 데 사용할 관련 있고 유용한 기능의 하위 집합을 선택하는 프로세스입니다. 기능 선택은 데이터 필드를 가장 가치 있는 입력으로 좁히는 데 도움이 됩니다. 데이터 범위를 좁히면 노이즈를 줄이고 훈련 성능을 향상시키는 데 도움이 됩니다.",
    "options": [
        { "value": "특징 엔지니어링(Feature engineering)", "right": false },
        { "value": "특징 선택(Feature selection)", "right": true },
        { "value": "모델 배포(Model deployment)", "right": false },
        { "value": "모델 평가(Model evaluation)", "right": false },
        { "value": "모델 학습(Model training)", "right": false }
    ],
    "correct": 1
}, {
    "type": "radio",
    "question": "모델의 예측에 영향을 미치는 데이터 값을 ______ 라고 합니다[ai900Q27.jpg]",
    "explanation": "ai900Q27A.jpg",
    "options": [
           {"value": "종속 변수 (Dependent variables)",  "right": false}, 
           {"value": "특징 (Features)",  "right": true}, 
           {"value": "식별자 (Identifiers)",  "right": false}, 
           {"value": "레이블 (Labels)",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "선형을 그리며 실제 데이터를 예측하는 모델을 만들려고 합니다. 어떤 타입의 모델을 생성해야 합니까?[0003400001.jpg]",
    "explanation": "예측 대 실제는 회귀 문제에 대한 예측 값과 관련 실제 값 사이의 관계를 보여줍니다. 이 그래프는 예측 값이 y=x 선에 가까울수록 예측 모델의 정확도가 높아지므로 모델의 성능을측정하는 데 사용할 수 있습니다",
    "options": [
           {"value": "분류(classification)",  "right": false}, 
           {"value": "회귀 (regression)",  "right": true}, 
           {"value": "클러스터링(clustering)",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "다음 달에 판매될 기프트 카드의 수를 예측하려면 어떤 유형의 머신 러닝을 사용해야 합니까?",
    "explanation": "가장 기본적인 의미에서 회귀는 숫자 목표를 예측하는 것을 의미합니다. 선형 회귀는 하나 이상의 독립 변수와 수치 결과 또는 종속 변수 간의 선형 관계를 설정하려고 시도합니다.이 모듈을 사용하여 선형 회귀 방법을 정의한 다음 레이블이 지정된 데이터 세트를 사용하여 모델을 교육합니다. 그런 다음 훈련된 모델을 사용하여 예측을 수행할 수 있습니다.",
    "options": [
           {"value": "분류",  "right": false}, 
           {"value": "회귀",  "right": true}, 
           {"value": "클러스터링",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "주어진 기간 동안 발생한 택시 여행에 대한 정보가 포함된 데이터 세트가 있습니다. 택시 요금을 예측하려면 모델을 훈련시켜야 합니다. 기능으로 무엇을 사용해야합니까?",
    "explanation": "레이블은 예측하려는 열입니다. 식별된 특징은 라벨을 예측하기 위해 모델에 제공하는 입력입니다.",
    "options": [
           {"value": "데이터 세트의 택시 여행 횟수",  "right": false}, 
           {"value": "개별 택시 여행의 여행 거리",  "right": true}, 
           {"value": "개인 택시 여행 요금",  "right": false}, 
           {"value": "개별 택시 여행의 여행 ID",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "향후 10년 동안의 해수면을 미터 단위로 예측해야 합니다. 어떤 유형의 기계 학습을 사용해야 합니까?",
    "explanation": "가장 기본적인 의미에서 회귀는 숫자 목표를 예측하는 것을 의미합니다. 선형 회귀는 하나 이상의 독립 변수와 수치 결과 또는 종속 변수 간의 선형 관계를 설정하려고 시도합니다. 이 모듈을 사용하여 선형 회귀 방법을 정의한 다음 레이블이 지정된 데이터 세트를 사용하여 모델을 교육합니다. 그런 다음 훈련된 모델을 사용하여 예측을 수행할 수 있습니다.",
    "options": [
           {"value": "분류",  "right": false}, 
           {"value": "회귀",  "right": true}, 
           {"value": "클러스터링",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "자동화된 기계 학습(AutoML)은 기계 학습 모델 개발의 반복적이고 시간이 많이 걸리는 작업을 자동화하는 과정이다. (Y/N)[0003800001.jpg]",
    "explanation": "0003800001_1.jpg",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "자동화된 기계 학습(AutoML)은 제공된 사용 사례에서 훈련 데이터를 자동으로 추론할 수 있다. (Y/N)[0003800001.jpg]",
    "explanation": "0003800001_2.jpg",
    "options": [ {"value": "Yes",  "right": false},  { "value": "No",  "right": true }],
    "correct": 1
}, {
    "type": "radio",
    "question": "자동화된 기계 학습(AutoML)은 여러 훈련 반복을 실행하고 지정한 지표를 기준으로 점수화 및 순위 지정하여 작동한다. (Y/N)[0003800001.jpg]",
    "explanation": "0003800001_3.jpg",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "자동화된 기계 학습(AutoML)은 사용자가 데이터 세트를 지정하면 자동으로 예측할 레이블을 이해할 수 있다다. (Y/N)[0003800001.jpg]",
    "explanation": "0003800001_4.jpg<br>Azure Machine Learning 이 지정한 대상 메트릭을 사용하여 모델을 학습하고 조정하도록 하려는 경우 자동화된 ML 을 적용합니다. 레이블은 예측하려는 열입니다.",
    "options": [ {"value": "Yes",  "right": false},  { "value": "No",  "right": true }],
    "correct": 1
}, {
    "type": "radio",
    "question": "대출금의 상환 여부를 예측하는 은행 시스템은 머신 러닝의 ______ 유형의 예이다.[ai900Q33.jpg]",
    "explanation": "ai900Q33A.jpg<br>분류는 항목이 속한 범주 또는 클래스를 예측하는 데 사용되는 기계 학습의 한 형태입니다. 이 기계 학습 기술은 이진 및 다중 클래스 시나리오에 적용할 수 있습니다. 예를 들어 의료 클리닉에서는 환자의 특성(예: 나이, 체중, 혈압 등)을 사용하여 환자가 당뇨병에 걸릴 위험이 있는지 여부를 예측할 수 있습니다. 이 경우 환자의 특성은 특징이며 레이블은 0 또는 1 의 이진 분류로 비당뇨병 또는 당뇨병을 나타냅니다. 대출 상환 여부를 예측하는 은행 시스템은 회귀 유형의 머신 러닝의 예가 아닙니다. 회귀는 특징과 목표 변수 간의 관계를 기반으로 연속적인 결과를 예측하는 기법입니다. 대출 상환 여부를 예측하는 경우 결과는 연속적이지 않고 이분법적(상환 여부)입니다. 따라서 이 작업에는 분류가 더 적합한 머신러닝 유형입니다.",
    "options": [
           {"value": "분류",  "right": true}, 
           {"value": "회귀",  "right": false}, 
           {"value": "클러스터링",  "right": false}
           ],
    "correct": 0
}, {
    "type": "radio",
    "question": "라벨링은 알려진 값을 사용하여 훈련 데이터를 태그하는 과정이다. (Y/N)[ai900Q34.jpg]",
    "explanation": "ai900Q34_1.jpg",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "모델을 평가할 때, 훈련에 사용한 동일한 데이터를 사용해야 한다. (Y/N)[ai900Q34.jpg]",
    "explanation": "ai900Q34_2.jpg<br>모델을 평가할 때는 별도의 검증 데이터(validation set) 또는 테스트 데이터(test set) 를 사용해야 합니다. 훈련 데이터와 동일한 데이터를 사용하면 과적합(overfitting)을 유발할 수 있습니다.",
    "options": [ {"value": "Yes",  "right": false},  { "value": "No",  "right": true }],
    "correct": 1
}, {
    "type": "radio",
    "question": "정확도(Accuracy)는 항상 모델 성능을 측정하는 주요 지표이다.(Y/N)[ai900Q34.jpg]",
    "explanation": "ai900Q34_3.jpg<br>정확도(Accuracy)가 중요한 경우도 있지만, 데이터 불균형(imbalanced data)이 심한 경우 정밀도(Precision), 재현율(Recall), F1-score 등의 지표가 더 적절할 수 있습니다. 예를 들어, 의료 진단에서는 재현율(Recall)이 더 중요할 수 있습니다.",
    "options": [ {"value": "Yes",  "right": false},  { "value": "No",  "right": true }],
    "correct": 1
}, {
    "type": "radio",
    "question": "스캔한 문서에서 텍스트, 키/값 쌍 및 테이블 데이터를 자동으로 추출하려면 어떤 서비스를 사용해야 합니까?",
    "explanation": "정보 추출을 자동화하여 비즈니스 프로세스를 가속화하세요. Form Recognizer 는 고급 기계 학습을 적용하여 문서에서 텍스트, 키/값 쌍 및 테이블을 정확하게 추출합니다. 몇 가지 샘플만으로 Form Recognizer 는 온프레미스와 클라우드 모두에서 문서에 대한 이해를 맞춤화합니다. 짧은 시간과 비용으로 양식을 사용 가능한 데이터로 변환할 수 있으므로 정보를 컴파일하는 것보다 작업에 더 많은 시간을 집중할 수 있습니다",
    "options": [
           {"value": "Form Recognizer (양식 인식기)",  "right": true}, 
           {"value": "Text Analytics (텍스트 분석)",  "right": false}, 
           {"value": "Language Understanding (언어 이해)",  "right": false}, 
           {"value": "Custom Vision (맞춤형 비전)",  "right": false}
           ],
    "correct": 0
}, {
    "type": "radio",
    "question": "영수증의 중간합계와 총계를 추출하는 능력은 _______ 용역의 능력입니다.[ai900Q36.jpg]",
    "explanation": "ai900Q36A.jpg",
    "options": [
           {"value": "Form Recognizer (양식 인식기)",  "right": true}, 
           {"value": "Text Analytics (텍스트 분석)",  "right": false}, 
           {"value": "Language Understanding (언어 이해)",  "right": false}, 
           {"value": "Custom Vision (커스텀 비전)",  "right": false}
           ],
    "correct": 0
}, {
    "type": "checkbox",
    "question": "⭐Azure Machine Learning Designer를 사용하여 추론 파이프라인을 게시합니다. 파이프라인을 사용하려면 어떤 두 매개변수를 사용해야 합니까?",
    "explanation": "",
    "options": [
           {"value": "the model name (모델명)",  "right": false}, 
           {"value": "the training endpoint (학습 엔드포인트)",  "right": false}, 
           {"value": "the authentication key (인증키)",  "right": true}, 
           {"value": "the REST endpoint (REST 엔드포인트)",  "right": true}
           ],
    "correct": [2, 3]
}, {
    "type": "radio",
    "question": "Azure Machine Learning 디자이너가 실시간 추론 파이프라인을 다른 사용자가 사용할 수 있도록 서비스로 배포하려면 모델을 ______에 배포해야 합니다.[ai900Q38.jpg]",
    "explanation": "ai900Q38A.jpg<br>실시간 추론을 수행하려면 실시간 엔드포인트에 파이프라인을 배포해야 합니다.이를 위해서는 Azure Kubernetes Service (AKS) 클러스터에 모델을 배포해야 합니다.",
    "options": [
        {"value": "로컬 웹 서비스 (a local web service)","right": false}, 
        {"value": "Azure 컨테이너 인스턴스 (Azure Container Instances)","right": false}, 
        { "value": "Azure 쿠버네티스 서비스 (Azure Kubernetes Service, AKS)","right": true }, 
        {"value": "Azure Machine Learning 컴퓨트 (Azure Machine Learning compute)","right": false }
    ],
    "correct": 2
}, {
    "type": "radio",
    "question": "배달원이 받은 주문의 수를 기준으로 초과 근무 시간을 예측하는 것은 _______의 예입니다.[ai900Q39.jpg]",
    "explanation": "ai900Q39A.jpg",
    "options": [
           {"value": "분류",  "right": false}, 
           {"value": "클러스터링",  "right": false}, 
           {"value": "회귀",  "right": true}
           ],
    "correct": 2
}, {
    "type": "radio",
    "question": "⭐Azure Machine Learning 디자이너는 드래그 앤 드롭 방식의 비주얼 캔버스를 제공하여 머신러닝 모델을 제작, 테스트 및 배치할 수 있습니다. (Y/N)",
    "explanation": "Azure Machine Learning 디자이너를 사용하면 대화형 캔버스에서 데이터 세트와 모듈을 시각적으로 연결하여 기계 학습 모델을 만들 수 있습니다",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "⭐Azure Machine Learning 디자이너는 진행 상황을 파이프라인 초안(draft)으로 저장할 수 있습니다. (Y/N)",
    "explanation": "디자이너를 사용하면 모듈을 연결하여 파이프라인 초안을 생성할 수 있습니다. 디자이너에서 파이프라인을 편집하면 진행 상황이 파이프라인 초안으로 저장됩니다.",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "⭐Azure Machine Learning 디자이너를 사용하면 사용자 정의 JavaScript 함수를 포함할 수 있습니다.",
    "explanation": "Azure Machine Learning Designer는 기본적으로 Python 및 머신 러닝 모델 학습을 위한 다양한 기능을 제공하지만, JavaScript 기능을 포함하는 것은 지원하지 않습니다.",
    "options": [ {"value": "Yes",  "right": false},  { "value": "No",  "right": true }],
    "correct": 1
}, {
    "type": "checkbox",
    "question": "다음 데이터 세트가 있습니다. <br>[0004900001.png]<br>이 데이터 세트를 사용하여 주택의 주택 가격 범주를 예측하는 모델을 학습할 계획입니다. 가계 소득과 주택 가격 범주는 무엇입니까? 답하려면 답변 영역에서 적절한 옵션을 선택하십시오. 각1점[ai900Q41.jpg]",
    "explanation": "ai900Q41A.jpg",
    "options": [
           {"value": "Household Income (가계 소득)은 feature (특징)이다.",  "right": true}, 
           {"value": "Household Income (가계 소득)은 label (레이블, 목표 변수)이다.",  "right": false}, 
           {"value": "House Price Category (주택 가격 범주)는 feature (특징)이다.",  "right": false}, 
           {"value": "House Price Category (주택 가격 범주)는 label (레이블, 목표 변수)이다.",  "right": true}
           ],
    "correct": [0, 3]
}, {
    "type": "radio",
    "question": "Azure Machine Learning 디자이너는 머신 러닝 모델을 생성할 수 있도록 합니다. 그 방법은 다음 중 ______ [ai900Q42.jpg]",
    "explanation": "ai900Q42A.jpg",
    "options": [
           {"value": "시각적 캔버스에서 모듈을 추가하고 연결하는 방식 (adding and connecting modules on a visual canvas).",  "right": true}, 
           {"value": "일반적인 데이터 준비 작업을 자동으로 수행하는 방식 (automatically performing common data preparation tasks).",  "right": false}, 
           {"value": "가장 정확한 모델을 구축하기 위해 알고리즘을 자동으로 선택하는 방식 (automatically selecting an algorithm to build the most accurate model).",  "right": false}, 
           {"value": "코드 중심의 노트북 환경을 사용하는 방식 (using a code-first notebook experience).",  "right": false}
           ],
    "correct": 0
}, {
    "type": "radio",
    "question": "의학 연구 프로젝트는 사전 정의된 뇌출혈 유형으로 분류되는 뇌 스캔 이미지의 대규모 익명화된 데이터 세트를 사용합니다. 사람이 이미지를 검토하기 전에 이미지에서 다양한 뇌출혈 유형의 조기 감지를 지원하려면 기계 학습을 사용해야 합니다. 이것은 어떤 유형의 기계 학습의 예입니까?",
    "explanation": "",
    "options": [
           {"value": "클러스터링",  "right": false}, 
           {"value": "회귀",  "right": false}, 
           {"value": "분류",  "right": true}
           ],
    "correct": 2
}, {
    "type": "radio",
    "question": "자동화된 머신 러닝(AutoML)은 훈련 파이프라인에서 사용자 지정 Python 스크립트를 포함할 수 있도록 지원합니다.",
    "explanation": "",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "자동화된 머신 러닝(AutoML)은 대화형 캔버스에서 데이터 세트와 모듈을 시각적으로 연결할 수 있도록 지원합니다.",
    "explanation": "",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "자동화된 기계 학습은 데이터 세트와 모듈을 대화형 캔버스에서 시각적으로 연결할 수 있는 기능을 제공합니다.",
    "explanation": "",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "모델을 훈련할 때 왜 행을 무작위로 여러 개의 하위 집합으로 나누어야 합니까?",
    "explanation": "",
    "options": [
           {"value": "더 나은 정확도를 얻기 위해 모델을 두 번 훈련",  "right": false}, 
           {"value": "더 나은 성능을 얻기 위해 여러 모델을 동시에 훈련",  "right": false}, 
           {"value": "모델 학습에 사용되지 않은 데이터를 사용하여 모델 테스트",  "right": true}
           ],
    "correct": 2
}, {
    "type": "checkbox",
    "question": "⭐다음 데이터 세트를 사용하여 특정 고객의 소득 범위를 예측해야 합니다. 어떤 두 필드를 기능으로 사용해야 합니까? [0005500001.png]",
    "explanation": "",
    "options": [
           {"value": " 교육 수준(학력)",  "right": true}, 
           {"value": "성(Last Name)",  "right": false}, 
           {"value": "연령",  "right": true}, 
           {"value": "소득 범위",  "right": false}, 
           {"value": "이름",  "right": false}
           ],
    "correct": [0, 2]
}, {
    "type": "radio",
    "question": "소매점의 이미지를 처리하고 경쟁사의 제품을 식별하는 도구를 구축하고 있습니다. 솔루션은 사용자 지정 모델을 사용합니다. 어떤 Azure Cognitive Services 서비스를 사용해야 하나요?",
    "explanation": "",
    "options": [
           {"value": "Custom Vision (커스텀 비전)",  "right": true}, 
           {"value": "Form Recognizer (형태 인식기)",  "right": false}, 
           {"value": "Face (얼굴)",  "right": false}, 
           {"value": "Computer Vision (컴퓨터 비전)",  "right": false}
           ],
    "correct": 0
}, {
    "type": "radio",
    "question": "문서에 포함된 텍스트의 유사성에 따라 문서를 그룹으로 구성하는 것이 클러스터링의 예입니다.",
    "explanation": "문서에 담긴 텍스트의 유사도에 따라 자동으로 그룹을 형성한다면, 이는 **비지도 학습(unsupervised learning)**의 한 유형인 **클러스터링(clustering)**에 해당합니다",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "증상 및 진단 테스트 결과에 따라 유사 환자를 그룹화하는 것이 클러스터링의 예입니다.",
    "explanation": "비슷한 증상과 진단 검사 결과를 기준으로 환자들을 여러 그룹으로 분류하는 것도 역시 클러스터링 기법의 전형적인 예시입니다.",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "꽃가루 수를 기반으로, 개인이 경도(mild), 중등도(moderate), 또는 심각한(severe) 알레르기 증상을 나타낼지를 예측하는 것은 클러스터링의 예입니까",
    "explanation": "꽃가루 수를 기반으로 해서 ‘경도, 중등도, 혹은 심각한 알레르기 증상’을 예측하는 것은 레이블(라벨)이 이미 정해져 있는 지도 학습(supervised learning), 구체적으로 분류(classification) 문제에 해당합니다. 이 경우는 클러스터링이 아니라 모델이 입력(꽃가루 수)을 받고 특정 범주(알레르기 증상의 수준)를 예측하므로, 클러스터링과는 다른 접근 방식입니다.",
    "options": [ {"value": "Yes",  "right": false},  { "value": "No",  "right": true }],
    "correct": 1
}, {
    "type": "checkbox",
    "question": "회귀 모델을 평가하는 데 사용할 수 있는 두 가지 측정항목은 무엇입니까? 각 정답은 완전한 솔루션을 제공합니다.",
    "explanation": "",
    "options": [
           {"value": "결정계수(R2)",  "right": true}, 
           {"value": "F1 점수",  "right": false}, 
           {"value": "평균 제곱근 오차(RMSE)",  "right": true}, 
           {"value": "선 아래 면적(AUC)",  "right": false}, 
           {"value": "균형 잡힌 정확도",  "right": false}
           ],
    "correct": [0, 2]
}, {
    "type": "radio",
    "question": "검증 집합에는 모델을 교육하는 데 사용될 입력 예제 집합이 포함됩니다.",
    "explanation": "검증 세트는 모델 학습(Training)에 직접 사용되지 않습니다. 모델을 학습할 때 사용하는 데이터는 ‘훈련 세트(Training set)’이고, 검증 세트는 모델이 학습된 후 평가 및 하이퍼파라미터 조정 등에 사용됩니다.",
    "options": [ {"value": "Yes",  "right": false},  { "value": "No",  "right": true }],
    "correct": 1
}, {
    "type": "radio",
    "question": "검증 집합을 사용하여 모형이 레이블을 얼마나 잘 예측하는지 확인할 수 있습니다.",
    "explanation": "검증 세트는 모델이 예측을 얼마나 정확히 수행하는지, 즉 일반화(generalization) 성능을 파악하는 용도로 사용됩니다.",
    "options": [ {"value": "Yes",  "right": true}, {"value": "No",  "right": false} ],
    "correct": 0
}, {
    "type": "radio",
    "question": "검증 세트를 사용하여 모든 훈련 데이터가 모델 훈련에 사용되었는지 확인할 수 있습니다.",
    "explanation": "검증 세트는 모델이 “모든” 학습 데이터를 사용했는지를 확인하기 위한 것이 아닙니다. 검증 세트의 주 목적은 모델이 새로운 데이터에 대해 얼마나 잘 예측하는지를 평가·조정하는 데 있습니다.",
    "options": [ {"value": "Yes",  "right": false},  { "value": "No",  "right": true }],
    "correct": 1
}, {
    "type": "radio",
    "question": "주어진 날에 다리를 건너는 차량의 수를 예측하는 것은 ______의 예입니다.",
    "explanation": "",
    "options": [
           {"value": "분류",  "right": false}, 
           {"value": "클러스터링",  "right": false}, 
           {"value": "회귀",  "right": true}
    ],
    "correct": 2
}, {
    "type": "radio",
    "question": "분류 모델을 학습하기 전에 이미지에 클래스를 지정하는 것은 ______의 예입니다.",
    "explanation": "",
    "options": [
        { "value": "평가 (Evaluation)", "right": false },
        { "value": "특징 엔지니어링 (Feature Engineering)", "right": false },
        { "value": "하이퍼파라미터 튜닝 (Hyperparameter Tuning)", "right": false },
        { "value": "레이블링 (Labeling)", "right": true }
    ],
    "correct": 3
}, {
    "type": "radio",
    "question": "Azure Machine Learning 모델이 제품 품질을 예측하도록 학습되었습니다. 이 모델은 50,000개의 데이터 레코드를 포함하는 학습 데이터 세트를 사용합니다. 아래는 데이터 샘플입니다.[ai900Q64.jpg]<br>문장이 참이면 Yes를 선택하고, 그렇지 않으면 No를 선택하세요.<br>질량(Mass, kg)은 특징(feature)이다.",
    "explanation": "",
    "options": [ { "value": "Yes", "right": true},  {"value": "No", "right": false}],
    "correct": 0
}, {
    "type": "radio",
    "question": "Azure Machine Learning 모델이 제품 품질을 예측하도록 학습되었습니다. 이 모델은 50,000개의 데이터 레코드를 포함하는 학습 데이터 세트를 사용합니다. 아래는 데이터 샘플입니다.[ai900Q64.jpg]<br>문장이 참이면 Yes를 선택하고, 그렇지 않으면 No를 선택하세요.<br>품질 테스트(Quality Test)는 라벨(label)이다.",
    "explanation": "",
    "options": [ { "value": "Yes", "right": true},  {"value": "No", "right": false}],
    "correct": 0
}, {
    "type": "radio",
    "question": "Azure Machine Learning 모델이 제품 품질을 예측하도록 학습되었습니다. 이 모델은 50,000개의 데이터 레코드를 포함하는 학습 데이터 세트를 사용합니다. 아래는 데이터 샘플입니다.[ai900Q64.jpg]<br>문장이 참이면 Yes를 선택하고, 그렇지 않으면 No를 선택하세요.<br>온도(Temperature, °C)는 라벨(label)이다.",
    "explanation": "",
    "options": [{ "value": "Yes", "right": false}, { "value": "No", "right": true }],
    "correct": 1
}
    , {
    "type": "radio",
    "question": "유사한 구매 습관을 가진 사람들을 식별하려면 어떤 유형의 머신 러닝을 사용해야 합니까?",
    "explanation": "",
    "options": [
           {"value": "분류",  "right": false}, 
           {"value": "회귀",  "right": false}, 
           {"value": "클러스터링",  "right": true}
    ],
    "correct": 2
}, {
    "type": "radio",
    "question": "자동차 가격을 예측하는 모델을 빌드하려면 Azure Machine Learning Designer를 사용해야 합니다.모델을 완성하려면 어떤 유형의 모듈을 사용해야 합니까? <br><br><div><center>자동차 가격 데이터 (원본)<br>⬇<br>(빈 슬롯 1)<br>누락된 데이터 정리 (결측값 제거 완료)<br>⬇<br>(빈 슬롯 2)<br>⬇<br>(빈 슬롯 3) <b>→</b> Train Model (모델 학습)<br>⬇<br>Score Model (모델 평가)</center></div>[ai900Q53.jpg]",
    "explanation": "[0006300001.png]",
    "options": [
           {"value": "Convert to CSV (CSV로 변환),Split Data (데이터 분할),Summarize Data (데이터 요약)", "right": false}, 
           {"value": "Select Columns in Dataset (데이터셋에서 열 선택),K-Means Clustering (K-평균 클러스터링),Linear Regression (선형 회귀)", "right": false}, 
           {"value": "Split Data (데이터 분할),K-Means Clustering (K-평균 클러스터링),Summarize Data (데이터 요약),", "right": false}, 
           {"value": "Select Columns in Dataset (데이터셋에서 열 선택),Split Data (데이터 분할),Linear Regression (선형 회귀)", "right": true}
    ],
    "correct": 3
}, {
    "type": "radio",
    "question": "분류 모델을 평가하는 데 사용할 수 있는 메트릭은 무엇입니까?",
    "explanation": "참양성률 100%, 거짓양성률 0%로 왼쪽 상단에 접근하는 ROC 곡선이 가장 좋은 모델이 됩니다. 임의 모델은 왼쪽 하단에서 오른쪽 상단까지 평평한 선으로 표시됩니다. 무작위보다 더 나쁜것은 y=x 선 아래로 떨어지는 것입니다",
    "options": [
           {"value": "참 양성 비율 (True Positive Rate, TPR)",  "right": true}, 
           {"value": "평균 절대 오차 (MAE)",  "right": false}, 
           {"value": "결정 계수 (R²)",  "right": false}, 
           {"value": "평균 제곱근 오차 (RMSE)",  "right": false}
    ],
    "correct": 0
}, {
    "type": "radio",
    "question": " (____?____) 모델은 경매된 품목의 판매 가격을 예측하는 데 사용할 수 있습니다",
    "explanation": "",
    "options": [
           {"value": "Classification (분류)", "right": false}, 
           {"value": "clustering (클러스터링)", "right": false}, 
           {"value": "Regression (회귀)", "right": true}
           ],
    "correct": 2
}, {
    "type": "checkbox",
    "question": "Azure Machine Learning 디자이너에서 캔버스로 끌어올 수 있는 두 가지 구성 요소는 무엇인가요? 각 정답은 1점입니다.",
    "explanation": "",
    "options": [
           {"value": "데이터세트",  "right": true}, 
           {"value": "계산",  "right": false}, 
           {"value": "파이프라인",  "right": false}, 
           {"value": "모듈",  "right": true}
           ],
    "correct": [0, 3]
}, {
    "type": "radio",
    "question": "기존 데이터 세트에서 훈련 데이터 세트와 검증 데이터 세트를 생성해야 합니다. Azure Machine Learning 디자이너에서 어떤 모듈을 사용해야 하나요?",
    "explanation": "",
    "options": [
           {"value": "데이터 세트에서 열 선택",  "right": false}, 
           {"value": "행 추가",  "right": false}, 
           {"value": "데이터 분할",  "right": true}, 
           {"value": "데이터 조인(결합)",  "right": false}
           ],
    "correct": 2
}, {
    "type": "radio",
    "question": "(_____?___)은(는) 올바른 이미지 분류의 계산된 확률입니다.",
    "explanation": "",
    "options": [
           {"value": "정확도 (Accuracy)",  "right": false}, 
           {"value": "신뢰도 (Confidence)",  "right": true}, 
           {"value": "평균 제곱근 오차 (Root Mean Square Error, RMSE)",  "right": false}, 
           {"value": "감정 (Sentiment)",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "공항에서 내리는 눈의 양을 기준으로 항공기가 몇 분 늦게 도착할지 예측하는 머신러닝 유형은?",
    "explanation": "[0006800002.jpg]",
    "options": [
           {"value": "Classification (분류)", "right": false}, 
           {"value": "clustering (클러스터링)", "right": false}, 
           {"value": "Regression (회귀)", "right": true}
           ],
    "correct": 2
}, {
    "type": "radio",
    "question": "'고객을 서로 다른 그룹으로 세분화하여 마케팅 부서를 지원합니다' 이에 적합한 머신러닝 유형은?",
    "explanation": "[0006800002.jpg]",
    "options": [
           {"value": "Classification (분류)", "right": false}, 
           {"value": "clustering (클러스터링)", "right": true}, 
           {"value": "Regression (회귀)", "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "학생이 대학 과정을 완료할지 여부를 예측하는 머신러닝 유형은?",
    "explanation": "[0006800002.jpg]",
    "options": [
           {"value": "Classification (분류)", "right": true}, 
           {"value": "clustering (클러스터링)", "right": false}, 
           {"value": "Regression (회귀)", "right": false}
           ],
    "correct": 0
}
    , {
    "type": "radio",
    "question": "중요한 필드에 비정상적이거나 결측값이 포함되어 있을 때 AI 시스템이 예측을 제공하지 않도록 하는 것이 _____의 원칙이다.AI 원칙 (윤리, 신뢰성, 투명성 관련 문제)",
    "explanation": "",
    "options": [
           {"value": "포괄성 (Inclusiveness)",  "right": false}, 
           {"value": "개인 정보 보호 및 보안 (Privacy and Security)",  "right": false}, 
           {"value": "신뢰성과 안전 (Reliability and Safety)",  "right": true}, 
           {"value": "투명성 (Transparency)",  "right": false}
           ],
    "correct": 2
}, {
    "type": "radio",
    "question": "중요한 필드에 비정상적이거나 결측값이 포함되어 있을 때 AI 시스템이 예측을 제공하지 않도록 하는 것이 _____의 원칙이다. 머신러닝 프로세스 (데이터 처리 과정 관련 문제)",
    "explanation": "",
    "options": [
           {"value": "데이터 수집 (Data Ingestion)",  "right": false}, 
           {"value": "특징 공학 (Feature Engineering)",  "right": true}, 
           {"value": "특징 선택 (Feature Selection)",  "right": false}, 
           {"value": "모델 훈련 (Model Training)",  "right": false}
           ],
    "correct": 1
}, {
    "type": "radio",
    "question": "당신은 레이블이 없는 데이터를 사용하여 회귀(regression) 모델을 학습합니다.",
    "explanation": "회귀(regression) 모델은 지도 학습(supervised learning) 기법으로, 입력 데이터에 정답(레이블, label)이 포함되어 있어야 합니다. 레이블이 없는 데이터는 비지도 학습(unsupervised learning)에 해당하며, 클러스터링(clustering)과 같은 기법에서 사용됩니다.",
    "options": [
        { "value": "Yes", "right": false },
        { "value": "No", "right": true }
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "분류(classification) 기법은 시간에 따라 연속적인 수치 데이터를 예측하는 데 사용됩니다.",
    "explanation": "분류(classification)는 데이터를 특정 카테고리(label)로 구분하는 기법입니다. 시간에 따른 연속적인 수치 데이터 예측은 회귀(regression) 또는 시계열 분석(time series forecasting)에서 사용됩니다.",
    "options": [
        { "value": "Yes", "right": false },
        { "value": "No", "right": true }
    ],
    "correct": 1
},
{
    "type": "radio",
    "question": "항목들을 공통적인 특성에 따라 그룹화하는 것은 클러스터링(clustering)의 예입니다.",
    "explanation": "클러스터링(clustering)은 비지도 학습 기법으로, 데이터의 공통적인 특징을 기반으로 자동으로 그룹을 만드는 방법입니다.",
    "options": [
        { "value": "Yes", "right": true },
        { "value": "No", "right": false }
    ],
    "correct": 0
},
{
    "type": "checkbox",
    "question": "Azure Machine Learning 프로세스에서 데이터 수집(Data Ingestion) 및 데이터 준비(Data Preparation) 단계에서 수행되는 작업은 무엇입니까?",
    "explanation": "데이터 준비 단계에서는 데이터를 정리하고 전처리하여 모델 학습에 적합한 형태로 만드는 작업을 수행합니다. 모델 평가나 배포는 해당 단계에서 이루어지지 않습니다.",
    "options": [
        { "value" : "모델의 정확도를 계산한다.","right": false },
        { "value" : "테스트 데이터를 모델을 사용하여 점수화(Score)한다.","right": false},
        {"value" : "여러 개의 데이터 세트를 결합한다.","right": true},
        {"value" : "모델을 실시간 예측(Real-time prediction)하는 데 사용한다.","right": false},
        {"value" : "결측값(Missing values)이 있는 레코드를 제거한다.","right": true }
    ],
    "correct": [2, 4]
}

];


const ai900DumptopQuestions = [
    {
        type: "checkbox",
        question: "⭐전화 상담원의 부담을 줄이기 위해, 미리 정의된 답변을 사용하여 간단한 질문에 응답하는 챗봇을 구현해야 합니다.이 목표를 달성하기 위해 어떤 두 개의 AI 서비스를 사용해야 합니까?",
        explanation: "Azure Bot 서비스와 QnA 메이커는 간단한 질문에 대한 답변을 제공하는 데 사용됩니다.",
        options: [
            { value: "Azure Bot Service", right: true },  // A
            { value: "QnA Maker", right: true },
            { value: "Translator Text", right: false },
            { value: "Text Analytics", right: false }  // D
        ],
        correct: [0, 1]},
    {
        type: "radio",
        question: "당신은 트위터에 선글라스를 착용한 사람들의 사진을 게시하는 자선 행사를 운영하고 있습니다.다음 조건을 충족하는 사진만 리트윗하도록 보장해야 합니다<br>하나 이상의 얼굴이 포함될 것.<br>최소 한 명 이상이 선글라스를 착용하고 있을 것.",
        explanation: "Face 서비스의 Detect 작업은 이미지에서 얼굴을 검출하는 데 사용됩니다.",
        options: [
            { value: "Face 서비스의 Verify(검증) 연산", right: false },  // A
            { value: "Computer Vision 서비스의 Analyze Image(이미지 분석) 연산", right: false },
            { value: "Computer Vision 서비스의 Describe Image(이미지 설명) 연산", right: false },
            { value: "Face 서비스의 Detect(탐지) 연산", right: true }  // D
        ],
        correct: 3}, {
        "type": "radio",
        "question": "Translator 서비스를 사용하여 텍스트를 여러 언어로 번역할 수 있습니다. (Y/N)",
        "explanation": "",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
}, {
        "type": "radio",
        "question": "Translator 서비스를 사용하여 주어진 텍스트의 언어를 감지할 수 있습니다. (Y/N)",
        "explanation": "",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
}, {
        "type": "radio",
        "question": "Translator 서비스를 사용하여 들리는 음성을 텍스트로 전사할 수 있습니다. (Y/N)",
        "explanation": "",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 1
},
    // {
    //     type: "checkbox",
    //     question: "당신은 자연어 처리를 사용하여 사용자가 지식 베이스를 질의할 수 있도록 하는 **봇(bot)**을 개발하려고 합니다. 이 솔루션에 포함해야 할 두 가지 AI 서비스는 무엇입니까?<br>각1점점",
    //     explanation: "언어 서비스와 이상 탐지기는 자연어 처리를 통해 사용자의 입력을 분석하는 데 도움을 줍니다.",
    //     options: [
    //         { value: "Azure Bot Service", right: false },  // A
    //         { value: "Form Recognizer", right: false },  
    //         { value: "Anomaly Detector", right: true },  
    //         { value: "Language Service", right: true }  // D
    //     ],
    //     correct: [2, 3]
    // },
    {
        type: "radio",
        question: "다음과 같은 사용자 입력\"나중에 다시 전화해 주세요\"의 의미를 해석하는 데 사용할 수 있는 AI 서비스는 무엇입니까?",
        explanation: "언어 이해(LUIS)는 자연어를 처리하여 입력의 의미를 해석하는 데 도움을 줍니다.",
        options: [
            { value: "Language Understanding (LUIS)", right: true },  // A
            { value: "Speech", right: false },  // 나
            { value: "Translator Text", right: false },
            { value: "Text Analytics", right: false }  // D
        ],
        correct: 0
    },
    {
        type: "radio",
        question: "최신성(Recency), 빈도(Frequency), 금액(Monetary, RFM) 값을 사용하여 고객 기반의 세그먼트를 식별하는 것은 다음 중 어떤 기법의 예입니까?",
        explanation: "",
        options: [
            { value: "클러스터링 (clustering)", right: true },  // A
            { value: "회귀 (regression)", right: false },  // 나
            { value: "분류 (classification)", right: false },
            { value: "정규화 (regularization)", right: false }  // D
        ],
        correct: 0
    }, 
    {
        "type": "radio",
        "question": "Azure OpenAI DALL·E 모델은 업로드된 이미지에 대한 캡션을 생성할 수 있습니다. (Y/N)",
        "explanation": "",
        "options": [{ "value": "Yes", "right": false }, { "value": "No", "right": true }],
        "correct": 1
}, {
        "type": "radio",
        "question": "Azure OpenAI DALL·E 모델은 사용자 입력을 기반으로 기술적으로 정확한 다이어그램을 신뢰할 수 있게 생성할 수 있습니다.(Y/N)",
        "explanation": "",
        "options": [{ "value": "Yes", "right": false }, { "value": "No", "right": true }],
        "correct": 1
}, {
        "type": "radio",
        "question": "Azure OpenAI DALL·E 모델은 학습 자료를 향상시키기 위해 장식적인 이미지를 생성하는 데 사용할 수 있습니다.(Y/N)",
        "explanation": "",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
    },
    {
        type: "radio",
        question: "이상 탐지(Anomaly Detection)에 사용할 수 있는 머신러닝 기술은 무엇입니까?",
        explanation: "시간 경과에 따른 데이터를 분석하고 비정상적인 변화를 식별하는 것은 이상 탐지에 사용되는 머신러닝 기술입니다.",
        options: [
            { value: "문자 및 음성 언어를 이해하는 머신 러닝 기술", right: false },  // A
            { value: "사용자 제공 이미지 기반으로 객체를 분류하는 머신 러닝 기술", right: false },
            { value: "데이터를 시간에 따라 분석하고 비정상적인 변화를 식별하는 머신 러닝 기술", right: true },
            { value: "이미지의 내용을 기반으로 이미지를 분류하는 머신 러닝 기술", right: false }  // D
        ],
        correct: 2
    },
    {
        type: "radio",
        question: "생성형 AI 솔루션의 응답 품질을 향상시키기 위해 맥락 정보를 제공하는 것은 어떤 프롬프트 엔지니어링 기법의 예입니까?",
        explanation: "그라운딩 데이터는 생성적 AI의 응답 품질을 개선하기 위한 기법입니다.",
        options: [
            { value: "시스템 메시지 (system messages)", right: false },  // A
            { value: "미세 조정 (fine-tuning)", right: false },
            { value: "기반 데이터 제공 (grounding data)", right: true },
            { value: "예제 제공 (providing examples)", right: false }  // D
        ],
        correct: 2
    },
    {
        type: "checkbox",
        question: "⭐비즈니스 챗봇에 사용할 콘텐츠를 제공해야 합니다. 이 챗봇은 간단한 사용자 질문에 응답하는 역할을 합니다.<br>Azure AI Language Service의 질문 답변(question answering) 기능을 사용하여 질문과 답변 텍스트를 생성하는 방법 세 가지를 선택하십시오.<br>각 1점.",
        explanation: "Azure AI Language Service는 질문과 답변을 수집하고 생성하는 다양한 방법을 제공합니다.",
        options: [
            { value: "질문과 답변을 수동으로 입력합니다.", right: true },  // A
            { value: "미리 정의된 데이터 소스에서 잡담(chit-chat) 콘텐츠를 가져옵니다.", right: true },
            { value: "기존 웹페이지에서 질문과 답변을 생성합니다.", right: true },
            { value: "Cortana를 사용하여 봇을 Cortana 채널에 연결합니다.", right: false },  // D
            { value: "질문과 답변 쌍을 포함하는 파일을 기반으로 모델을 학습시키기 위해 Azure Machine Learning Automated ML을 사용합니다.", right: false }  // E
        ],
        correct: [0, 1, 2]
    },
    {
        type: "checkbox",
        question: "회귀(regression) 모델을 평가하는 데 사용할 수 있는 두 가지 지표(metrics)는 무엇입니까?",
        explanation: "회귀 모델은 예측값과 실제값 간의 차이를 평가하기 위한 지표를 사용합니다.",
        options: [
            { value: "균형 정확도 (balanced accuracy)", right: false },  // A
            { value: "곡선 아래 면적 (area under curve, AUC)", right: false },
            { value: "결정 계수 (coefficient of determination, R²)", right: true },
            { value: "F1 점수 (F1 score)", right: false },  // D
            { value: "평균 제곱근 오차 (root mean squared error, RMSE)", right: true }  // E
        ],
        correct: [2, 4]
    },
    {
        type: "radio",
        question: "차량의 무게, 엔진 출력 및 기타 요소를 기반으로 1갤런당 예상 주행 거리를 예측하는 것은 다음 중 어떤 기법의 예입니까?",
        explanation: "",
        options: [
            { value: "이상 탐지 (anomaly detection)", right: false },
            { value: "분류 (classification)", right: false },
            { value: "군집화 (clustering)", right: false },
            { value: "회귀 (regression)", right: true }  // D
        ],
        correct: 3
    },
    {
        type: "radio",
        question: "AI 시스템에 제공된 비정상적이거나 누락된 값의 처리는 Microsoft의 책임 있는 AI 원칙 중 (_____?______)",
        explanation: "",
        options: [
            { value: "포용성 (inclusiveness)", right: false },
            { value: "개인정보 보호 및 보안 (privacy and security)", right: false },
            { value: "신뢰성과 안전성 (reliability and safety)", right: true },
            { value: "투명성 (transparency)", right: false }  // D
        ],
        correct: 2
    },
    {
        type: "radio",
        question: " (_______?_______) 이미지에서 유명인을 식별하는 데 사용하는 기술",
        explanation: "",
        options: [
            { value: "얼굴 인식 (Facial recognition)", right: true },
            { value: "이미지 분류 (Image classification)", right: false },
            { value: "객체 탐지 (Object detection)", right: false },
            { value: "광학 문자 인식 (OCR) (Optical character recognition)", right: false }  // D
        ],
        correct: 0
    },
    {
        type: "radio",
        question: " (_______?_______) 영화 포스터 이미지에서 영화 제목을 추출하는 데 사용하는 기술",
        explanation: "",
        options: [
            { value: "얼굴 인식 (Facial recognition)", right: false },
            { value: "이미지 분류 (Image classification)", right: false },
            { value: "객체 탐지 (Object detection)", right: false },
            { value: "광학 문자 인식 (OCR) (Optical character recognition)", right: true }  // D
        ],
        correct: 3
    },
    {
        type: "radio",
        question: " (_______?_______)이미지에서 차량을 찾는 데 사용하는 기술",
        explanation: "",
        options: [
            { value: "얼굴 인식 (Facial recognition)", right: false },
            { value: "이미지 분류 (Image classification)", right: false },
            { value: "객체 탐지 (Object detection)", right: true },
            { value: "광학 문자 인식 (OCR) (Optical character recognition)", right: false }  // D
        ],
        correct: 2
    },
    {
        type: "radio",
        question: "⭐ 특정 지역의 특정 동물 종의 개체 수를 예측해야 합니다. 어떤 Azure Machine Learning 유형을 사용해야 합니까?",
        explanation: "",
        options: [
            { value: "분류 (classification)", right: false },
            { value: "회귀 (regression) ", right: true },
            { value: "군집화 (clustering)", right: false }
        ],
        correct: 1
    },
    {
        type: "radio",
        question: "사용자 지정 질문 답변 솔루션을 보유하고 있습니다.<br>이 솔루션은 지식 베이스를 사용하여 고객 요청에 응답하는 챗봇(bot)을 생성합니다.<br>추가적인 기능을 추가하지 않고 봇이 수행할 수 있는 작업을 식별해야 합니다.<br>무엇을 식별해야 합니까?",
        explanation: "봇은 기본적으로 여러 사용자의 질문에 동시에 답변할 수 있습니다.",
        options: [
            { value: "고객에게 반품 자재 승인(RMA) 번호를 제공하기.", right: false },  // A
            { value: "고객 구매 등록하기", right: false },
            { value: "고객 불만 등록하기", right: false },
            { value: "여러 사용자의 질문에 동시에 응답하기", right: true }  // D
        ],
        correct: 3

},
    {
        type: "radio",
        question: "혼동 행렬(confusion matrix)의 값을 검토하는 작업은 _________________ 입니다",
        explanation: "",
        options: [
            { value: "특성 엔지니어링 (Feature engineering)", right: false },
            { value: "특성 선택(Feature selection)", right: false },
            { value: "모델 배포(Model deployment)", right: false },
            { value: "모델 평가(Model evaluation)", right: true },  // D
            { value: "모델 훈련(Model training)", right: false }  // E
        ],
        correct: 3
    },
    {
        type: "radio",
        question: "날짜를 월, 일, 연도 필드로 분할하는 작업은 _________________ 입니다.",
        explanation: "",
        options: [
            { value: "특성 엔지니어링 (Feature engineering)", right: true },
            { value: "특성 선택(Feature selection)", right: false },
            { value: "모델 배포(Model deployment)", right: false },
            { value: "모델 평가(Model evaluation)", right: false },  // D
            { value: "모델 훈련(Model training)", right: false }  // E
        ],
        correct: 0
    },
    {
        type: "radio",
        question: "기상 모델을 훈련시키기 위해 온도와 기압을 선택하는 작업은 _________________ 입니다",
        explanation: "",
        options: [
            { value: "특성 엔지니어링 (Feature engineering)", right: false },
            { value: "특성 선택(Feature selection)", right: true },
            { value: "모델 배포(Model deployment)", right: false },
            { value: "모델 평가(Model evaluation)", right: false },  // D
            { value: "모델 훈련(Model training)", right: false }  // E
        ],
        correct: 1
    },
    {
        type: "radio",
        question: "객체 감지(object detection) 모델을 학습시키기 위해 직접 촬영한 이미지를 사용할 때 사용할 수 있는 서비스는?",
        explanation: "",
        options: [
            { value: "Azure AI Custom Vision", right: true },
            { value: "Azure AI Computer Vision ", right: false },
            { value: "Azure AI Document Intelligence", right: false },
            { value: "Azure Video Analyzer for Media", right: false }
        ],
        correct: 0
    },
    {
        type: "radio",
        question: "Azure AI Language 기능 중 소셜 미디어 게시물에서 날짜 및 사람의 이름과 같은 데이터를 검색하는 데 사용할 수 있는 기능은 무엇입니까?",
        explanation: "",
        options: [
            { value: "언어 감지 (language detection)", right: false },
            { value: "개체 인식 (entity recognition)", right: true },
            { value: "음성 인식 (speech recognition)", right: false },
            { value: "핵심 구문 추출 (key phrase extraction", right: false }
        ],
        correct: 1
    },
    {
        type: "radio",
        question: "⭐ 당신은 이미지에서 유명인을 식별하는 앱을 구축해야 합니다.어떤 서비스를 사용해야 합니까?",
        explanation: "",
        options: [
            { value: "Azure Machine Learning", right: false },
            { value: "대화형 언어 이해(CL, Conversational Language Understanding)", right: false },
            { value: "Azure OpenAI 서비스", right: false },
            { value: "Azure AI Vision", right: true }
        ],
        correct: 3
    },
    {
        type: "radio",
        question: "다음 문장을 올바르게 완성하는 답을 선택하세요.<br>Microsoft의 책임 있는 AI 원칙의 일환으로, 고객은 Azure OpenAI를 사용하기 전에 (옵션 중 선택)",
        explanation: "",
        options: [
            { value: "사용 목적에 따라 승인을 받아야 합니다.", right: true },
            { value: "최소 지출 수준을 준수해야 합니다", right: false },
            { value: "선불 요금을 지불해야 합니다.", right: false },  // 
            { value: "신용카드 정보를 제공해야 합니다.", right: false }
        ],
        correct: 0
    },
    {
        type: "radio",
        question: "당신은 음악 축제를 지원하기 위해 Language Understanding (LUIS) 애플리케이션을 작성하고 있습니다.사용자가 \"메인 무대에서 어떤 공연이 진행되나요?\"와 같은 질문을 할 수 있도록 만들고자 합니다.<br>\"메인 무대에서 어떤 공연이 진행되나요?\"라는 질문은 어떤 유형의 요소에 해당합니까?",
        explanation: "**발화(utterance)**란 사용자가 실제로 입력하거나 말하는 자연어 문장을 의미합니다.예시로 제공된 \"메인 무대에서 어떤 공연이 진행되나요?\"와 같은 문장은 사용자가 챗봇이나 LUIS 애플리케이션에 실제로 말하거나 입력하는 표현이므로 **발화(utterance)**에 해당합니다.<br>의도(intent):",
        options: [
            { value: "의도 (intent)", right: false },
            { value: "발화 (utterance)", right: true },
            { value: "도메인 (domain)", right: false },
            { value: "엔터티 (entity)", right: false }
        ],
        correct: 1
    },
    {
        type: "radio",
        question: "⭐당신은 (_________________________) 서비스를 사용하여 자신의 이미지로 객체 감지 모델을 훈련할 수 있습니다.",
        explanation: "",
        options: [
            { value: "Azure AI Custom Vision", right: true },
            { value: "Azure AI Computer Vision", right: false },
            { value: "Azure AI Document Intelligence", right: false },
            { value: "Azure Video Analyzer for Media)", right: false }
        ],
        correct: 0
    },
    {
        type: "radio",
        question: "음성 녹음의 텍스트 필사본을 생성하는 것은 _________________.",
        explanation: "",
        options: [
            { value: "컴퓨터 비전 작업 (computer vision workload)", right: false },
            { value: "지식 마이닝 작업 (knowledge mining workload)", right: false },
            { value: "자연어 처리 (NLP) 작업 (natural language processing (NLP) workload)", right: true },
            { value: "이상 탐지 작업 (anomaly detection workload)", right: false }
        ],
        correct: 2
    },
    {
        type: "radio",
        question: "________________________은 음성 인식의 한 예입니다.",
        explanation: "",
        options: [
            { value: "음성 활성화 보안 키 시스템 (A voice-activated security key system)", right: true },
            { value: "비디오 녹화에 대한 오디오 해설 생성 (Creating an audio commentary for a video recording)", right: false },
            { value: "비디오 녹화의 자막 생성 (Creating captions for a video recording)", right: false },
            { value: "비디오 필사본에서 주요 구문 식별 (Identifying key phrases in a video transcript)", right: false }
        ],
        correct: 0
    },
    {
        type: "radio",
        question: "운전면허증에서 정보를 추출하여 데이터베이스를 채우는 데 사용할 수 있는 서비스는 (______________________) 입니다.",
        explanation: "",
        options: [
            { value: "Form Recognizer", right: true },
            { value: "Computer Vision", right: false },
            { value: "Conversational Language Understanding", right: false },
            { value: "Custom Vision", right: false }
        ],
        correct: 0
    }, 
    {
        "type": "radio",
        "question": "내부 사용자의 질의에 응답하는 챗봇은 자연어 처리(NLP) 작업의 한 예입니다.(Y/N)",
        "explanation": "",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
}, {
        "type": "radio",
        "question": "입력된 검색어와 관련된 이미지를 표시하는 모바일 애플리케이션은 자연어 처리(NLP) 작업의 한 예입니다.(Y/N)",
        "explanation": "",
        "options": [{ "value": "Yes", "right": false }, { "value": "No", "right": true }],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "비밀번호 재설정을 요청하는 웹 양식은 자연어 처리(NLP) 작업의 한 예입니다.(Y/N)",
        "explanation": "",
        "options": [{ "value": "Yes", "right": false }, { "value": "No", "right": true }],
        "correct": 1
}, {
        "type": "radio",
        "question": "⭐Azure Machine Learning Designer를 사용하면 머신 러닝 모델을 __________ 방법으로 생성할 수 있습니다.",
        "explanation": "",
        "options": [
            { value: "시각적 캔버스에서 모듈을 추가하고 연결함", right: true },
            { value: " 일반적인 데이터 준비 작업을 자동으로 수행함", right: false },
            { value: "가장 정확한 모델을 구축하기 위해 알고리즘을 자동으로 선택함", right: false },
            { value: "코드 우선 노트북 환경을 사용함", right: false }
        ],
        "correct": 0
    }, 
        {
        "type": "radio",
        "question": "자동으로 보험 견적을 생성하는 시스템을 설계하고 있습니다.Microsoft의 책임 있는 AI 원칙을 적절한 요구 사항에 맞게 연결하세요.<br>의사 결정 프로세스는 기록되어야 하며, 직원이 특정 견적의 이유를 식별할 수 있어야 합니다.→ (__________)",
        "explanation": "",
        "options": [
            { value: "Accountability (책임성)", right: false },
            { value: "Fairness (공정성)", right: false },
            { value: "Inclusiveness (포용성)", right: false },
            { value: "Privacy and security (개인정보 보호 및 보안)", right: false },
            { value: "Reliability and safety (신뢰성 및 안전성)", right: false },
            { value: "Transparency (투명성)", right: true }

        ],
        "correct": 5
    }, {
        "type": "radio",
        "question": "자동으로 보험 견적을 생성하는 시스템을 설계하고 있습니다.Microsoft의 책임 있는 AI 원칙을 적절한 요구 사항에 맞게 연결하세요.<br>고객의 개인 정보는 의사 결정 과정에 관여하는 직원에게만 표시되어야 합니다.→ (__________)",
        "explanation": "",
        "options": [
            { value: "Accountability (책임성)", right: false },
            { value: "Fairness (공정성)", right: false },
            { value: "Inclusiveness (포용성)", right: false },
            { value: "Privacy and security (개인정보 보호 및 보안)", right: true },
            { value: "Reliability and safety (신뢰성 및 안전성)", right: false },
            { value: "Transparency (투명성)", right: false }

        ],
        "correct": 3
    }, {
        "type": "radio",
        "question": "자동으로 보험 견적을 생성하는 시스템을 설계하고 있습니다.Microsoft의 책임 있는 AI 원칙을 적절한 요구 사항에 맞게 연결하세요.<br>이 시스템은 화면 읽기기 또는 기타 보조 기술을 사용하는 고객이 접근할 수 있어야 합니다.→ (__________)",
        "explanation": "",
        "options": [
            { value: "Accountability (책임성)", right: false },
            { value: "Fairness (공정성)", right: false },
            { value: "Inclusiveness (포용성)", right: true },
            { value: "Privacy and security (개인정보 보호 및 보안)", right: false },
            { value: "Reliability and safety (신뢰성 및 안전성)", right: false },
            { value: "Transparency (투명성)", right: false }

        ],
        "correct": 2
    }, {
        "type": "radio",
        "question": "Azure OpenAI의 REST API 엔드포인트에 요청을 보내기 위해 어떤 형식을 사용해야 합니까?",
        "explanation": "",
        "options": [
            { value: "CSV", right: false },
            { value: "JSON", right: true },
            { value: "YAML", right: false },
            { value: "XML", right: false }

        ],
        "correct": 1
    }, {
        "type": "radio",
        "question": "신용 대출 신청 결과에 대한 설명을 제공하는 것은 Microsoft의 책임 있는 AI 원칙 중 투명성(Transparency)의 예입니다.",
        "explanation": "0002200001.jpg<br>투명성을 달성하면 팀이 모델 교육에 사용되는 데이터와 알고리즘, 데이터에 적용된 변환 논리,  생성된 최종 모델 및 관련 자산을 이해하는 데 도움이 됩니다. 이 정보는 모델이 어떻게 생성되었는지에 대한 통찰력을 제공하므로 모델을 투명한 방식으로 재현할 수 있습니다.",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
    }, {
        "type": "radio",
        "question": "부상 정도를 기준으로 보험 청구를 우선순위화하는 분류 시스템은 Microsoft의 책임 있는 AI 원칙 중 신뢰성과 안전성(Reliability and Safety)의 예입니다.<br>",
        "explanation": "데이터 보유자는 AI 시스템의 데이터를 보호할 의무가 있으며 개인 정보 보호 및 보안은 이 시스템의 필수적인 부분입니다. 개인은 보호되어야 하며 개인의 개인정보를 침해하지 않는방식으로 액세스되어야 합니다",
        "options": [{ "value": "Yes", "right": false }, { "value": "No", "right": true }],
        "correct": 1
    }, {
        "type": "radio",
        "question": "AI 솔루션이 서로 다른 영업 지역에 따라 다르게 제공되는 것은 Microsoft의 책임 있는 AI 원칙 중 포용성(Inclusiveness)의 예입니다.<br>",
        "explanation": "포용성은 AI 가 모든 인류와 경험을 고려해야 함을 요구하며, 포용적인 디자인 관행은 개발자가 의도치 않게 사람들을 배제할 수 있는 잠재적인 장벽을 이해하고 해결하는 데 도움이 될 수 있습니다. 가능한 경우 청각, 시각 및 기타 장애가 있는 사람들의 역량을 강화하기 위해 음성-텍스트, 텍스트-음성 및 시각적 인식 기술을 사용해야 합니다.",
        "options": [{ "value": "Yes", "right": false }, { "value": "No", "right": true }],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "다음 그림에서 보여주는 프로세스를 확인하세요.<br>다이어그램에서 보여주는 AI 솔루션의 유형은 무엇입니까?[img_5.jpg]",
        "explanation": "",
        "options": [
            { value: "감정 분석 솔루션 (a sentiment analysis solution)", right: false },
            { value: "컴퓨터 비전 애플리케이션 (a computer vision application)", right: false },
            { value: "머신 러닝 모델 (a machine learning model)", right: false },
            { value: "챗봇 (a chatbot)", right: true }

        ],
        "correct": 3
    }, {
        "type": "checkbox",
        "question": "Azure OpenAI 서비스를 호출하는 데 사용할 수 있는 두 가지 도구는 무엇입니까? 각1점",
        "explanation": "",
        "options": [
            { value: "Azure SDK for JavaScript", right: false },
            { value: "Azure Command-Line Interface (CLI)", right: false },
            { value: "Azure SDK for Python", right: true },
            { value: "Azure REST API", right: true }

        ],
        "correct": [2, 3]
    }, {
        "type": "radio",
        "question": "Azure OpenAI GPT-3.5 모델을 사용하는 챗 솔루션에서 더 다양한 범위의 토큰을 생성하도록 구성해야 하는 매개변수는 무엇입니까?",
        "explanation": "",
        "options": [
            { value: "Presence penalty (존재 패널티)", right: true },
            { value: "Past messages included (이전 메시지 포함)", right: false },
            { value: "Stop sequence (중지 시퀀스)", right: false },
            { value: " Max response (최대 응답 길이)", right: false }

        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "Azure OpenAI 모델을 사용자 데이터로 맞춤 설정하는 것을 설명하는 용어는 무엇입니까?",
        "explanation": "",
        "options": [
            { value: "completion (완료)", right: false },
            { value: "grounding (그라운딩)", right: false },
            { value: "prompt engineering (프롬프트 엔지니어링)", right: false },
            { value: "fine-tuning (파인 튜닝, 미세 조정)", right: true }

        ],
        "correct": 3
    }, {
        "type": "radio",
        "question": "Azure Cognitive Services를 사용하여 음성 제어 개인 비서 앱을 개발하려고 합니다.Azure Cognitive Services를 적절한 작업과 매칭하세요.<br>사용자의 음성을 텍스트로 변환 (Convert a user's speech to text).→ (__________)",
        "explanation": "",
        "options": [
            { value: "Azure AI Speech (Azure AI 음성 서비스)", right: true },
            { value: "Azure AI Language service (Azure AI 언어 서비스)", right: false },
            { value: "Azure AI Translator Text (Azure AI 번역 텍스트 서비스)", right: false }

        ],
        "correct": 0
    }, {
        "type": "radio",
        "question": "Azure Cognitive Services를 사용하여 음성 제어 개인 비서 앱을 개발하려고 합니다.Azure Cognitive Services를 적절한 작업과 매칭하세요.<br>사용자의 의도를 식별 (Identify a user's intent).→ (__________)",
        "explanation": "",
        "options": [
            { value: "Azure AI Speech (Azure AI 음성 서비스)", right: false },
            { value: "Azure AI Language service (Azure AI 언어 서비스)", right: true },
            { value: "Azure AI Translator Text (Azure AI 번역 텍스트 서비스)", right: false }

        ],
        "correct": 1
    }, {
        "type": "radio",
        "question": "Azure Cognitive Services를 사용하여 음성 제어 개인 비서 앱을 개발하려고 합니다.Azure Cognitive Services를 적절한 작업과 매칭하세요.<br>사용자에게 음성 응답 제공 (Provide a spoken response to the user).→ (__________)",
        "explanation": "",
        "options": [
            { value: "Azure AI Speech (Azure AI 음성 서비스)", right: true },
            { value: "Azure AI Language service (Azure AI 언어 서비스)", right: false },
            { value: "Azure AI Translator Text (Azure AI 번역 텍스트 서비스)", right: false }

        ],
        "correct": 0
    }, {
        "type": "radio",
        "question": "Speech 서비스를 사용하여 통화를 텍스트로 변환할 수 있습니다.",
        "explanation": "",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
    }, {
        "type": "radio",
        "question": "Text Analytics 서비스를 사용하여 통화 필사본에서 주요 엔터티를 추출할 수 있습니다.",
        "explanation": "",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
    }, {
        "type": "radio",
        "question": "Speech 서비스를 사용하여 통화 오디오를 다른 언어로 번역할 수 있습니다.",
        "explanation": "",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
    }, {
        "type": "radio",
        "question": "Azure Machine Learning 파이프라인에서 \"Split Data\" 모듈을 포함하고 있습니다.\"Split Data\" 모듈은 \"Train Model\" 모듈과 \"Score Model\" 모듈로 출력을 전달합니다.\"Split Data\" 모듈의 기능은 무엇입니까?",
        "explanation": "",
        "options": [
            { value: "훈련 및 검증 데이터셋 생성 (creating training and validation datasets)", right: true },
            { value: "모델에 포함해야 할 열 선택 (selecting columns that must be included in the model)", right: false },
            { value: "숫자 변수를 일정한 숫자 범위로 조정 (scaling numeric variables so that they are within a consistent numeric range)", right: false },
            { value: "누락된 데이터를 포함한 레코드를 제외 (diverting records that have missing data)", right: false }

        ],
        "correct": 0
    }, {
        "type": "radio",
        "question": "Microsoft의 책임 있는 AI 원칙(Responsible AI Principle)의 예로 적절한 것은 무엇입니까?",
        "explanation": "Microsoft의 책임 있는 AI 원칙(Responsible AI Principles) 중 하나는 \"이해 가능성(투명성,Transparency)\"",
        "options": [
            { value: "AI 시스템은 공개적으로 사용 가능한 데이터만 사용해야 합니다.", right: false },
            { value: "AI 시스템은 회사의 이익을 보호해야 합니다.", right: false },
            { value: "AI 시스템은 이해 가능해야 합니다.", right: true },
            { value: "AI 시스템은 개인 정보를 공개해야 합니다.", right: false }

        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "Azure OpenAI 대형 언어 모델(LLM) 프로세스를 적절한 작업과 매칭하세요. (__________) → 소설 작품의 장르를 감지 (Detect the genre of a work of fiction)",
        "explanation": "",
        "options": [
            { "value": "Classifying (분류하기)", "right": true },
            { "value": "Generating (생성하기)", "right": false },
            { "value": "Summarizing (요약하기)", "right": false },
            { "value": "Translating (번역하기)", "right": false }
        ],
        "correct": 0
    },
    {
        "type": "radio",
        "question": "Azure OpenAI 대형 언어 모델(LLM) 프로세스를 적절한 작업과 매칭하세요. (__________) → 텍스트 입력을 기반으로 개요 목록을 생성 (Create a list of bullet points based on text input)",
        "explanation": "",
        "options": [
            { "value": "Classifying (분류하기)", "right": false },
            { "value": "Generating (생성하기)", "right": false },
            { "value": "Summarizing (요약하기)", "right": true },
            { "value": "Translating (번역하기)", "right": false }
        ],
        "correct": 2
    },
    {
        "type": "radio",
        "question": "Azure OpenAI 대형 언어 모델(LLM) 프로세스를 적절한 작업과 매칭하세요. (__________) → 제품 설명을 기반으로 광고 슬로건 생성 (Create advertising slogans from a product description)",
        "explanation": "",
        "options": [
            { "value": "Classifying (분류하기)", "right": false },
            { "value": "Generating (생성하기)", "right": true },
            { "value": "Summarizing (요약하기)", "right": false },
            { "value": "Translating (번역하기)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "⭐ 머신 러닝 모델에서 입력 데이터는 무엇이라고 불립니까? (_________)",
        "explanation": "",
        "options": [
            { "value": "특성 (Features)", "right": true },
            { "value": "함수 (Functions)", "right": false },
            { "value": "레이블 (Labels)", "right": false },
            { "value": "인스턴스 (Instances)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "⭐Language Service의 질문 응답 기능을 사용하여 Azure SQL 데이터베이스를 쿼리할 수 있습니다.",
        "explanation": "Language Service의 질문 응답(Question Answering) 기능은 지식 기반(Knowledge Base)에서 사전 정의된 답변을 검색하는 데 사용되지만, SQL 데이터베이스를 직접 쿼리하는 기능은 없습니다.",
        "options": [
            { "value": "예 (Yes)", "right": false },
            { "value": "아니요 (No)", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "⭐질문 응답(Question Answering) 기능을 사용하면, 지식 기반(Knowledge Base)이 유사한 질문을 제출한 여러 사용자에게 동일한 답변을 제공할 수 있습니다.",
        "explanation": "질문 응답 기능은 사전에 정의된 지식 기반(KB)에서 일치하는 질문을 찾아 동일한 답변을 제공하는 데 사용됩니다.",
        "options": [
            { "value": "예 (Yes)", "right": true },
            { "value": "아니요 (No)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐Language Service의 질문 응답 기능을 사용하여 사용자의 의도(Intent)를 결정할 수 있습니다.",
        "explanation": "질문 응답(Question Answering) 기능은 특정 질문에 대한 답변을 제공하는 기능이며, 자연어 처리(NLP) 기반으로 사용자의 의도를 분석하는 것은 '언어 이해(Language Understanding, LUIS)' 기능을 사용해야 합니다.",
        "options": [
            { "value": "예 (Yes)", "right": false },
            { "value": "아니요 (No)", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "Azure에서 챗봇(Chatbot) 솔루션을 개발하고 있습니다. 사용자의 의도를 결정하기 위해 어떤 서비스를 사용해야 합니까?",
        "explanation": "사용자의 의도를 파악하려면 Azure AI Language 서비스의 '자연어 이해(NLU, Natural Language Understanding)' 기능을 사용해야 합니다.",
        "options": [
            { "value": "Translator (번역기)", "right": false },
            { "value": "Azure Cognitive Search (Azure 인지 검색)", "right": false },
            { "value": "Speech (음성 서비스)", "right": false },
            { "value": "Language (언어 서비스)", "right": true }
        ],
        "correct": 3
}, {
        "type": "checkbox",
        "question": "⭐Azure Machine Learning 디자이너를 사용하여 추론 파이프라인(Inference Pipeline)을 게시했습니다. 파이프라인을 사용하려면 어떤 두 가지 매개변수를 사용해야 합니까?",
        "explanation": "Azure ML 모델을 추론 서비스로 사용할 때 REST 엔드포인트를 호출해야 하며, API 요청을 인증하기 위한 인증 키가 필요합니다.",
        "options": [
            { "value": "모델 이름 (the model name)", "right": false },
            { "value": "학습 엔드포인트 (the training endpoint)", "right": false },
            { "value": "인증 키 (the authentication key)", "right": true },
            { "value": "REST 엔드포인트 (the REST endpoint)", "right": true }
        ],
        "correct": [2, 3]
}, {
        "type": "radio",
        "question": "⭐대화형 AI(Conversational AI) 솔루션을 개발하고 있습니다. 이 솔루션은 이메일, Microsoft Teams, 웹챗을 포함한 여러 채널을 통해 사용자와 통신할 것입니다. 어떤 서비스를 사용해야 합니까?",
        "explanation": "Azure Bot Service는 다양한 채널을 통해 대화형 AI 솔루션을 구축하는 데 사용됩니다.",
        "options": [
            { "value": "Text Analytics (텍스트 분석)", "right": false },
            { "value": "Azure Bot Service (Azure 봇 서비스)", "right": true },
            { "value": "Translator (번역기)", "right": false },
            { "value": "Form Recognizer (양식 인식기)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "기존 데이터셋에서 학습 데이터셋(training dataset)과 검증 데이터셋(validation dataset)을 생성해야 합니다. Azure Machine Learning 디자이너에서 어떤 모듈을 사용해야 합니까?",
        "explanation": "Split Data 모듈은 데이터를 학습용과 검증용으로 분할하는 역할을 합니다.",
        "options": [
            { "value": "Select Columns in Dataset (데이터셋에서 열 선택)", "right": false },
            { "value": "Add Rows (행 추가)", "right": false },
            { "value": "Split Data (데이터 분할)", "right": true },
            { "value": "Join Data (데이터 결합)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "자신의 데이터를 사용하여 일부 Azure OpenAI 모델을 파인튜닝할 수 있습니다.",
        "explanation": "Azure OpenAI에서는 일부 모델(예: GPT 계열 모델)에 대해 파인튜닝이 가능합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "사전 훈련된 생성형 AI 모델(Pretrained Generative AI models)은 Azure OpenAI의 구성 요소입니다.",
        "explanation": "Azure OpenAI는 사전 훈련된 GPT 계열 모델과 같은 생성형 AI 모델을 제공합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Microsoft의 책임 있는 AI 원칙에 따라 솔루션을 구축하려면 직접 모델을 만들고 훈련해야 합니다.",
        "explanation": "Microsoft의 책임 있는 AI 원칙을 준수하는 솔루션을 구축하는 데 자체 모델 학습이 필수 사항은 아닙니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "⭐고속도로에서 차량의 이미지를 분석하고 차량 간 거리를 측정해야 합니다. 어떤 유형의 컴퓨터 비전 모델을 사용해야 합니까?",
        "explanation": "객체 감지(Object Detection) 모델은 이미지에서 개별 객체(예: 차량)를 감지하고 좌표를 제공하여 거리 측정이 가능합니다.",
        "options": [
            { "value": "광학 문자 인식(OCR)", "right": false },
            { "value": "객체 감지(Object Detection)", "right": true },
            { "value": "얼굴 인식(Facial Recognition)", "right": false },
            { "value": "이미지 분류(Image Classification)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "Azure OpenAI GPT-3.5 모델을 사용하는 챗 솔루션에서 더 결정론적인(deterministic) 응답을 생성하려면 (__________) 매개변수를 수정할 수 있습니다.",
        "explanation": "Temperature 값이 낮을수록 모델의 출력을 더 결정론적으로 만들 수 있습니다. 값이 높을수록 더 창의적인 응답이 생성됩니다.",
        "options": [
            { "value": "Temperature (온도)", "right": true },
            { "value": "Frequency penalty (빈도 페널티)", "right": false },
            { "value": "Max response (최대 응답 길이)", "right": false },
            { "value": "Stop sequence (중지 시퀀스)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "⭐자연어 처리(NLP)는 (__________)에 사용할 수 있습니다.",
        "explanation": "자연어 처리(NLP)는 텍스트 데이터를 분석하고 분류하는 데 사용되며, 이메일을 업무 관련/개인용으로 자동 분류하는 데 활용될 수 있습니다.",
        "options": [
            { "value": "이메일 메시지를 업무 관련 또는 개인용으로 분류", "right": true },
            { "value": "향후 자동차 대여 수 예측", "right": false },
            { "value": "웹사이트 방문자가 거래를 수행할지 예측", "right": false },
            { "value": "공장에서 높은 온도가 감지되었을 때 프로세스 중지", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "전자상거래 비즈니스를 위한 언어 이해(Language Understanding) 모델을 구축하고 있습니다. 모델이 예상 범위를 벗어난 발화를 감지하도록 보장해야 합니다. 어떻게 해야 합니까?",
        "explanation": "None 인텐트(None intent)는 모델이 처리할 수 없는 문장을 식별하는 데 사용됩니다. 이를 활용하면 모델이 범위를 벗어난 발화를 감지할 수 있습니다.",
        "options": [
            { "value": "새로운 발화를 사용하여 모델을 테스트", "right": false },
            { "value": "None 인텐트(None intent)에 발화 추가", "right": true },
            { "value": "미리 구축된 작업 엔터티 생성", "right": false },
            { "value": "새 모델 생성", "right": false }
        ],
        "correct": 1
}, {
        "type": "checkbox",
        "question": "AI 기반 애플리케이션을 구축하고 있습니다. 이 애플리케이션이 책임 있는 AI 원칙을 따르도록 보장해야 합니다. 어떤 두 가지 원칙을 따라야 합니까?",
        "explanation": "책임 있는 AI 원칙을 준수하려면 AI 모델 검증 프로세스를 포함하고, 법률 및 리스크 관리 팀이 포함된 위험 관리 위원회를 구성해야 합니다.",
        "options": [
            { "value": "애자일(Agile) 소프트웨어 개발 방법론 구현", "right": false },
            { "value": "소프트웨어 검토 프로세스의 일부로 AI 모델 검증 프로세스 구현", "right": true },
            { "value": "법무팀, 리스크 관리팀, 개인정보 보호 담당자로 구성된 위험 관리 위원회 설립", "right": true },
            { "value": "AI 기반 알고리즘 사용의 공개 방지", "right": false }
        ],
        "correct": [1, 2]}, {
        "type": "radio",
        "question": "⭐이메일을 사용하여 봇과 통신할 수 있습니다.",
        "explanation": "이메일은 일반적으로 봇과의 직접적인 상호 작용 방식으로 사용되지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "⭐Microsoft Teams를 사용하여 봇과 통신할 수 있습니다.",
        "explanation": "Microsoft Teams는 봇과의 상호 작용을 지원하는 일반적인 플랫폼입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐웹챗 인터페이스를 사용하여 봇과 통신할 수 있습니다.",
        "explanation": "웹챗 인터페이스는 봇과의 주요 상호 작용 방법 중 하나입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "자동화된 머신러닝 사용자 인터페이스(UI)를 사용하여 머신러닝 모델을 구축하고 있습니다. Microsoft의 책임 있는 AI 원칙 중 '투명성(Transparency)'을 충족하도록 보장해야 합니다. 어떤 조치를 취해야 합니까?",
        "explanation": "Microsoft의 책임 있는 AI 원칙 중 '투명성'을 충족하려면, 모델이 의사 결정을 내리는 방식을 이해할 수 있어야 합니다. 'Enable Explain best model' 기능을 활성화하면 모델이 예측을 내리는 이유를 분석하고 설명할 수 있습니다.",
        "options": [
            { "value": "검증 유형(Validation type)을 '자동(Auto)'으로 설정한다.", "right": false },
            { "value": "'최적 모델 설명 활성화(Enable Explain best model)' 옵션을 활성화한다.", "right": true },
            { "value": "주요 평가 지표(Primary metric)를 정확도(Accuracy)로 설정한다.", "right": false },
            { "value": "최대 동시 반복 횟수(Max concurrent iterations)를 0으로 설정한다.", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "머신러닝 분류 모델에서 발생하는 'False Positive(거짓 양성)'을 줄이기 위해 해야 할 일은 무엇입니까?",
        "explanation": "False Positive를 줄이려면 모델이 '양성(positive)'으로 예측하는 기준을 더 엄격하게 만들어야 합니다. 임계값(threshold)을 높이면 False Positive가 줄어들고, 대신 False Negative가 늘어날 수 있습니다.",
        "options": [
            { "value": "훈련 반복 횟수를 증가시킨다.", "right": false },
            { "value": "임계값을 거짓 음성(false negative) 쪽으로 조정한다.", "right": true },
            { "value": "테스트 데이터를 훈련 데이터에 포함한다.", "right": false },
            { "value": "임계값을 거짓 양성(false positive) 쪽으로 조정한다.", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "⭐회귀 모델(Regression)은 라벨이 없는 데이터(unlabeled data)를 사용하여 학습할 수 있다.",
        "explanation": "회귀 모델은 지도 학습(supervised learning) 방법이며, 정답(label)이 있는 데이터를 사용해야 합니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "⭐분류(Classification) 기법은 순차적인 숫자 데이터를 예측하는 데 사용된다.",
        "explanation": "분류는 이산적(discrete) 클래스 예측을 위한 기법입니다. 순차적인 숫자 예측은 회귀 또는 시계열 분석이 적절합니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "⭐공통적인 특성을 기준으로 데이터를 그룹화하는 것은 군집화(Clustering)의 예이다.",
        "explanation": "군집화(Clustering)는 데이터를 비슷한 특성을 기준으로 그룹화하는 비지도 학습 방법입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "두 개의 얼굴 이미지가 같은 사람인지 확인하는 것은 어떤 얼굴 인식 작업에 해당합니까?",
        "explanation": "Verification(검증)은 두 개의 이미지가 같은 사람인지 확인하는 작업입니다.",
        "options": [
            { "value": "Grouping (그룹화)", "right": false },
            { "value": "Identification (식별)", "right": false },
            { "value": "Similarity (유사도 측정)", "right": false },
            { "value": "Verification (검증)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "이 사람이 다른 사람과 닮았는지 확인하는 것은 어떤 얼굴 인식 작업에 해당합니까?",
        "explanation": "Similarity(유사도 측정)는 얼굴이 다른 사람들과 얼마나 닮았는지를 분석하는 작업입니다.",
        "options": [
            { "value": "Grouping (그룹화)", "right": false },
            { "value": "Identification (식별)", "right": false },
            { "value": "Similarity (유사도 측정)", "right": true },
            { "value": "Verification (검증)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "모든 얼굴이 같은 그룹에 속하는지 확인하는 것은 어떤 얼굴 인식 작업에 해당합니까?",
        "explanation": "Grouping(그룹화)은 여러 얼굴을 특정 기준에 따라 같은 그룹으로 묶는 작업입니다.",
        "options": [
            { "value": "Grouping (그룹화)", "right": true },
            { "value": "Identification (식별)", "right": false },
            { "value": "Similarity (유사도 측정)", "right": false },
            { "value": "Verification (검증)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "이 그룹에서 특정 인물이 누구인지 확인하는 것은 어떤 얼굴 인식 작업에 해당합니까?",
        "explanation": "Identification(식별)은 여러 사람 중 특정한 개인을 찾아내는 작업입니다.",
        "options": [
            { "value": "Grouping (그룹화)", "right": false },
            { "value": "Identification (식별)", "right": true },
            { "value": "Similarity (유사도 측정)", "right": false },
            { "value": "Verification (검증)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "분류 모델(Classification Model)을 평가하는 데 사용할 수 있는 평가지표는 무엇입니까?",
        "explanation": "참양성 비율(True Positive Rate, TPR)은 분류 모델의 성능을 평가하는 중요한 지표 중 하나로, 분류된 양성 샘플 중 실제 양성 샘플의 비율을 나타냅니다. 다른 선택지인 MAE, R², RMSE는 회귀 모델 평가에 사용됩니다.",
        "options": [
            { "value": "true positive rate (TPR)", "right": true },
            { "value": "mean absolute error (MAE)", "right": false },
            { "value": "coefficient of determination (R²)", "right": false },
            { "value": "root mean squared error (RMSE)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐웹사이트용 챗봇을 개발해야 합니다. 챗봇은 다음 문서의 정보를 바탕으로 사용자의 질문에 답변해야 합니다:<br>- Microsoft Word 문서에 있는 제품 문제 해결 가이드<br>- 웹페이지에 게시된 자주 묻는 질문(FAQ) 리스트 <br>문서를 처리하기 위해 어떤 서비스를 사용해야 합니까? ",
        "explanation": "QnA 메이커는 FAQ와 제품 문제 해결 가이드와 같은 문서에서 질문과 답변 쌍을 추출하여 챗봇이 사용자의 질문에 효과적으로 답변할 수 있도록 합니다.",
        "options": [
            { "value": "언어 이해 (Language Understanding)", "right": false },
            { "value": "Azure 봇 서비스 (Azure Bot Service)", "right": false },
            { "value": "QnA 메이커 (QnA Maker)", "right": true },
            { "value": "텍스트 분석 (Text Analytics)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "사진에서 거리 표지판을 기반으로 거리 이름을 식별해야 합니다. 어떤 유형의 컴퓨터 비전을 사용해야 합니까? (Which type of computer vision should you use?)",
        "explanation": "OCR(광학 문자 인식)은 이미지에서 텍스트를 추출하는 데 사용되므로, 거리 표지판에서 문자(예: 거리 이름)를 읽는 데 가장 적합합니다.",
        "options": [
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": true },
            { "value": "객체 감지 (Object Detection)", "right": false },
            { "value": "얼굴 인식 (Facial Recognition)", "right": false },
            { "value": "이미지 분류 (Image Classification)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "컴퓨터 비전 기능은  _______________ 배포될 수 있습니다. ",
        "explanation": "컴퓨터 비전은 이미지나 비디오에서 얼굴을 감지하고 인식하는 데 사용됩니다. 다른 선택지는 컴퓨터 비전보다는 자연어 처리 또는 데이터 분석에 해당합니다.",
        "options": [
            { "value": "텍스트 기반 챗봇을 개발하기 위해 (develop a text-based chatbot)", "right": false },
            { "value": "비정상적인 고객 행동을 식별하기 위해 (identify anomalous customer behavior)", "right": false },
            { "value": "얼굴 감지 기능을 통합하기 위해 (integrate a face detection feature)", "right": true },
            { "value": "수신 이메일에 대한 자동 응답을 제안하기 위해 (suggest automated responses to incoming email)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "웹 채팅 봇은 웹사이트를 방문하는 사용자와 상호 작용할 수 있다.",
        "explanation": "웹 채팅 봇은 웹사이트에서 사용자와 실시간 대화를 통해 질문에 답하거나 고객 지원을 제공합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "녹화된 비디오에 대한 자막을 자동으로 생성하는 것은 대화형 인공지능의 예이다.",
        "explanation": "자막 생성은 음성 인식 및 자연어 처리를 사용하지만 실시간 대화가 포함되지 않으므로 대화형 인공지능에 해당하지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "\"오늘 날씨가 어떨까?\"와 같은 질문에 답하는 스마트 홈 기기는 대화형 인공지능의 예이다.",
        "explanation": "이러한 스마트 기기는 음성 인식 및 자연어 처리를 사용하여 사용자와 실시간 대화를 하기 때문에 대화형 인공지능의 예입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "드론을 사용하여 작물 줄 사이에 자라는 잡초의 위치를 식별하고, 해당 잡초를 제거하기 위한 지시를 보내려 합니다. 이는 어떤 유형의 컴퓨터 비전 예시에 해당합니까?",
        "explanation": "객체 감지는 이미지나 영상에서 특정 물체(예: 잡초)를 식별하고 위치를 파악하는 기술입니다. 장면 분할은 이미지의 각 픽셀을 분류하고, OCR은 이미지에서 텍스트를 추출하기 위한 기술이므로 해당 사례에는 적합하지 않습니다.",
        "options": [
            { "value": "장면 분할 (Scene Segmentation)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false },
            { "value": "객체 감지 (Object Detection)", "right": true }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "전화번호를 식별하는 데 사용되는 자연어 처리(NLP) 엔터티 유형은 무엇입니까?",
        "explanation": "정규 표현식 (Regular Expression)은 전화번호처럼 일정한 패턴을 가진 문자열을 인식하고 추출하는 데 사용됩니다. 전화번호는 다양한 조합이 가능하지만 일정한 형식을 따르기 때문에 정규 표현식으로 식별하는 것이 가장 효율적입니다.",
        "options": [
            { "value": "기계 학습 (Machine-learned)", "right": false },
            { "value": "목록 (List)", "right": false },
            { "value": "정규 표현식 (Regular Expression)", "right": true },
            { "value": "패턴-아무거나 (Pattern-any)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "AI 작업 유형을 적절한 시나리오와 매칭하세요. (__________) → 손으로 쓴 글자를 식별하기 (Identify handwritten letters)",
        "explanation": "컴퓨터 비전은 이미지나 영상에서 객체를 식별하고 분류하는 데 사용되며, 손글자를 인식하는 작업에도 사용됩니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer vision)", "right": true },
            { "value": "머신러닝 (회귀) (Machine Learning (Regression))", "right": false },
            { "value": "자연어 처리 (Natural language processing)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "AI 작업 유형을 적절한 시나리오와 매칭하세요. (__________) → 소셜 미디어 게시물의 감정 예측 (Predict the sentiment of a social media post)",
        "explanation": "자연어 처리는 텍스트에서 감정(긍정, 부정 등)을 분석하고 예측하는 데 사용됩니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer vision)", "right": false },
            { "value": "머신러닝 (회귀) (Machine Learning (Regression))", "right": false },
            { "value": "자연어 처리 (Natural language processing)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "AI 작업 유형을 적절한 시나리오와 매칭하세요. (__________) → 사기성 신용카드 결제 식별 (Identify a fraudulent credit card payment)",
        "explanation": "이상 탐지는 정상적인 패턴에서 벗어난 데이터를 식별하는 데 사용되며, 사기 감지에 효과적입니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly detection)", "right": true },
            { "value": "컴퓨터 비전 (Computer vision)", "right": false },
            { "value": "머신러닝 (회귀) (Machine Learning (Regression))", "right": false },
            { "value": "자연어 처리 (Natural language processing)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "AI 작업 유형을 적절한 시나리오와 매칭하세요. (__________) → 다음 달 장난감 판매 예측 (Predict next month's toy sales)",
        "explanation": "회귀 모델은 과거 데이터를 기반으로 연속적인 수치를 예측하는 데 사용되므로, 판매량 예측에 적합합니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer vision)", "right": false },
            { "value": "머신러닝 (회귀) (Machine Learning (Regression))", "right": true },
            { "value": "자연어 처리 (Natural language processing)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "사진에서 동물의 수를 세야 합니다. 어떤 유형의 컴퓨터 비전을 사용해야 합니까?",
        "explanation": "객체 감지는 이미지나 비디오에서 특정 물체(예: 동물)를 식별하고 위치 및 수량을 파악하는 데 사용됩니다. 이미지 분류는 이미지가 무엇인지 분류하지만 개수를 세는 데는 적합하지 않습니다.",
        "options": [
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false },
            { "value": "객체 감지 (Object Detection)", "right": true },
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "얼굴 감지 (Facial Detection)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "한 회사가 고객에게 전화 및 이메일 지원을 제공하기 위해 고객 서비스 상담원을 고용하고 있습니다. 이 회사는 일반적인 고객 문의에 대해 자동화된 답변을 제공하기 위해 웹챗 봇을 개발했습니다. 이 웹챗 봇 솔루션의 도입으로 기대할 수 있는 비즈니스 혜택은 무엇입니까?",
        "explanation": "웹챗 봇은 자주 묻는 질문에 대해 자동화된 응답을 제공하여 상담원의 업무량을 줄이고 더 복잡한 문제에 집중할 수 있도록 도와줍니다.",
        "options": [
            { "value": "매출 증가 (Increased sales)", "right": false },
            { "value": "제품 신뢰성 향상 (Improved product reliability)", "right": false },
            { "value": "고객 서비스 상담원의 업무 부담 감소 (Reduced workload for the customer service agents)", "right": true }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "머신러닝 유형을 적절한 시나리오와 매칭하세요. (__________) → 북극곰과 갈색곰의 이미지를 분류하기 (Separate images of polar bears and brown bears)",
        "explanation": "이미지 분류는 이미지 전체를 분석하여 해당 이미지가 어떤 클래스(예: 북극곰 또는 갈색곰)에 속하는지 분류합니다.",
        "options": [
            { "value": "얼굴 감지 (Facial detection)", "right": false },
            { "value": "얼굴 인식 (Facial recognition)", "right": false },
            { "value": "이미지 분류 (Image classification)", "right": true },
            { "value": "객체 감지 (Object detection)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false },
            { "value": "장면 분할 (Semantic segmentation)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "머신러닝 유형을 적절한 시나리오와 매칭하세요. (__________) → 사진에서 곰의 위치를 식별하기 (Determine the location of a bear in a photo)",
        "explanation": "객체 감지는 이미지 또는 비디오에서 특정 물체(예: 곰)의 위치와 크기를 식별하고 바운딩 박스로 표시합니다.",
        "options": [
            { "value": "얼굴 감지 (Facial detection)", "right": false },
            { "value": "얼굴 인식 (Facial recognition)", "right": false },
            { "value": "이미지 분류 (Image classification)", "right": false },
            { "value": "객체 감지 (Object detection)", "right": true },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false },
            { "value": "장면 분할 (Semantic segmentation)", "right": false }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "머신러닝 유형을 적절한 시나리오와 매칭하세요. (__________) → 이미지에서 곰의 일부인 픽셀 식별하기 (Determine which pixels in an image are part of a bear)",
        "explanation": "장면 분할은 이미지 내의 각 픽셀을 클래스별로 구분하여, 곰의 모든 픽셀을 식별하고 시맨틱적으로 연결합니다.",
        "options": [
            { "value": "얼굴 감지 (Facial detection)", "right": false },
            { "value": "얼굴 인식 (Facial recognition)", "right": false },
            { "value": "이미지 분류 (Image classification)", "right": false },
            { "value": "객체 감지 (Object detection)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false },
            { "value": "장면 분할 (Semantic segmentation)", "right": true }
        ],
        "correct": 5},
    {
        "type": "radio",
        "question": "다음 중 어떤 시나리오에서 주요 구문 추출(Key Phrase Extraction)을 사용해야 합니까?",
        "explanation": "주요 구문 추출(Key Phrase Extraction)은 문서 내에서 중요한 단어나 구문을 추출하여 주제를 요약하는 데 사용됩니다. 이를 통해 문서 간 유사성을 비교하고 동일한 주제를 다루는 문서를 쉽게 식별할 수 있습니다.",
        "options": [
            { "value": "동일한 주제에 대한 정보를 제공하는 문서 식별하기", "right": true },
            { "value": "오디오 트랙을 기반으로 비디오 자막 생성하기", "right": false },
            { "value": "식당 리뷰가 긍정적인지 부정적인지 식별하기", "right": false },
            { "value": "문서 집합을 영어에서 독일어로 번역하기", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "트랜스포머 모델 아키텍처는 Self-Attention을 사용합니다.",
        "explanation": "트랜스포머 모델은 Self-Attention 메커니즘을 사용하여 각 단어가 문맥 내에서 다른 단어와의 관계를 이해하도록 설계되었습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "트랜스포머 모델 아키텍처에는 인코더 블록과 디코더 블록이 포함됩니다.",
        "explanation": "트랜스포머 모델은 인코더-디코더 구조로 구성되어 있으며, 인코더는 입력 시퀀스를 인코딩하고 디코더는 이를 기반으로 출력 시퀀스를 생성합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "트랜스포머 모델 아키텍처에는 암호화 블록 또는 복호화 블록이 포함됩니다.",
        "explanation": "트랜스포머 모델은 자연어 처리 및 시퀀스 예측을 위한 모델이며, 암호화 또는 복호화와는 관련이 없습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "⭐Azure Machine Learning Designer는 드래그 앤 드롭 방식의 비주얼 캔버스를 제공하여 머신러닝 모델을 구축, 테스트 및 배포할 수 있습니다.",
        "explanation": "Azure Machine Learning Designer는 비주얼 캔버스를 통해 드래그 앤 드롭 방식으로 모델을 구축하고 배포할 수 있는 기능을 제공합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐Azure Machine Learning Designer는 진행 상황을 파이프라인 초안으로 저장할 수 있습니다.",
        "explanation": "파이프라인 초안으로 저장하면 작업 진행 상황을 유지하고 나중에 이어서 작업할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐Azure Machine Learning Designer는 사용자 정의 JavaScript 함수를 포함할 수 있습니다.",
        "explanation": "Azure Machine Learning Designer는 Python 및 R 스크립트를 지원하지만 JavaScript는 지원하지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio", "question": "직원이 출장 중에 경비를 스캔하고 저장할 수 있는 모바일 앱을 개발해야 합니다. 어떤 유형의 컴퓨터 비전을 사용해야 합니까?", "explanation": "OCR은 이미지에서 텍스트를 추출하여 디지털 형식으로 저장할 수 있습니다. 영수증 또는 경비 내역을 스캔하여 저장할 때 적합한 기술입니다.",
        "options": [
            { "value": "시맨틱 분할 (Semantic segmentation)", "right": false },
            { "value": "이미지 분류 (Image classification)", "right": false },
            { "value": "객체 감지 (Object detection)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "소매점에서 이미지를 처리하고 경쟁사의 제품을 식별할 수 있는 도구를 개발하고 있습니다. 해당 솔루션은 회사에서 제공한 이미지를 기반으로 학습해야 합니다. 어떤 Azure AI 서비스를 사용해야 합니까?",
        "explanation": "Azure AI Custom Vision은 사용자가 제공한 데이터를 기반으로 모델을 학습시키고 커스터마이징할 수 있습니다. 경쟁사의 제품을 식별하려면 회사에서 제공한 이미지로 모델을 학습시키는 기능이 필요합니다.",
        "options": [
            { "value": "얼굴 인식 (Face)", "right": false },
            { "value": "Azure AI 사용자 정의 비전 (Azure AI Custom Vision)", "right": true },
            { "value": "Azure AI 문서 인텔리전스 (Azure AI Document Intelligence)", "right": false },
            { "value": "Azure AI 컴퓨터 비전 (Azure AI Computer Vision)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "FAQ 문서에서 봇을 만들기 위해 어떤 AI 서비스를 사용해야 합니까?",
        "explanation": "QnA Maker는 FAQ 문서나 지식베이스에서 질문과 답변 쌍을 추출하여 사용자 질문에 자동으로 응답할 수 있는 봇을 만드는 데 사용됩니다. 다른 서비스는 자연어 이해 또는 음성 인식에 사용되며, FAQ 문서 기반의 QnA 봇 생성에는 적합하지 않습니다.",
        "options": [
            { "value": "Language Understanding (LUIS)", "right": false },
            { "value": "QnA Maker", "right": true },
            { "value": "Speech", "right": false },
            { "value": "Text Analytics", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "귀사의 제품 위젯의 디지털 사진이 1,000장 있습니다. 사진 내에서 위젯의 위치를 식별해야 합니다. 어떤 서비스를 사용해야 합니까?",
        "explanation": "Custom Vision 객체 감지 (Object Detection)은 이미지에서 객체의 위치와 크기를 식별하고 바운딩 박스로 표시하는 기능을 제공합니다. '위치를 식별'해야 하므로 Object Detection이 적합합니다.",
        "options": [
            { "value": "Computer Vision 이미지 분석 (Computer Vision Image Analysis)", "right": false },
            { "value": "Computer Vision 공간 분석 (Computer Vision Spatial Analysis)", "right": false },
            { "value": "Custom Vision 객체 감지 (Custom Vision Object Detection)", "right": true },
            { "value": "Custom Vision 분류 (Custom Vision Classification)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "Azure Bot Service와 Azure Cognitive Services는 통합될 수 있습니다.",
        "explanation": "Azure Bot Service는 Azure Cognitive Services(LUIS, Speech, Text Analytics 등)와 통합하여 자연어 처리 및 음성 인식 기능을 강화할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Azure Bot Service는 고객과 대화 방식으로 상호작용합니다.",
        "explanation": "Azure Bot Service는 자연어 처리를 사용하여 사용자와 대화 방식으로 상호작용할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Azure Bot Service는 FAQ 문서를 질문 및 답변 세트로 가져올 수 있습니다.",
        "explanation": "Azure Bot Service 자체에는 FAQ 문서를 직접 가져오는 기능이 없습니다. QnA Maker 또는 Azure Cognitive Search와 통합해야 질문-답변 세트를 구성하고 사용할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Microsoft의 책임 있는 AI 원칙을 적절한 설명과 매칭하세요.<br> (__________) → AI 시스템이 원래 설계된 대로 작동하고 예상치 못한 상황에 대응하며 악의적인 조작을 방지하도록 보장하기",
        "explanation": "신뢰성 및 안전성 (Reliability and safety)은 AI 시스템이 안정적이고 안전하게 작동하며, 악의적인 조작이나 오류를 방지하도록 보장하는 원칙입니다.",
        "options": [
            { "value": "책임 (Accountability)", "right": false },
            { "value": "공정성 (Fairness)", "right": false },
            { "value": "포용성 (Inclusiveness)", "right": false },
            { "value": "개인정보 및 보안 (Privacy and security)", "right": false },
            { "value": "신뢰성 및 안전성 (Reliability and safety)", "right": true }
        ],
        "correct": 4},
    {
        "type": "radio",
        "question": "Microsoft의 책임 있는 AI 원칙을 적절한 설명과 매칭하세요. <br>(__________) → AI 시스템이 내린 결정을 사람이 변경할 수 있도록 하는 프로세스 구현하기 ",
        "explanation": "책임 (Accountability)은 AI 시스템의 결정에 대해 사람이 통제하고 책임질 수 있도록 보장하는 원칙입니다.",
        "options": [
            { "value": "책임 (Accountability)", "right": true },
            { "value": "공정성 (Fairness)", "right": false },
            { "value": "포용성 (Inclusiveness)", "right": false },
            { "value": "개인정보 및 보안 (Privacy and security)", "right": false },
            { "value": "신뢰성 및 안전성 (Reliability and safety)", "right": false }
        ],
        "correct": 0
}, 
{
    "type": "radio",
    "question": "Microsoft의 책임 있는 AI 원칙을 적절한 설명과 매칭하세요.<br> (__________) → AI 시스템이 원래 설계된 대로 작동하고 예상치 못한 상황에 대응하며 악의적인 조작을 방지하도록 보장하기",
    "explanation": "신뢰성 및 안전성 (Reliability and safety)은 AI 시스템이 안정적이고 예측 가능하게 작동하도록 보장하며, 악의적인 공격이나 오류를 방지합니다.",
    "options": [
        { "value": "책임 (Accountability)", "right": false },
        { "value": "공정성 (Fairness)", "right": false },
        { "value": "포용성 (Inclusiveness)", "right": false },
        { "value": "개인정보 및 보안 (Privacy and security)", "right": false },
        { "value": "신뢰성 및 안전성 (Reliability and safety)", "right": true }
    ],
    "correct": 4},
{
    "type": "radio",
    "question": "Microsoft의 책임 있는 AI 원칙을 적절한 설명과 매칭하세요.<br>(__________) → 소비자가 데이터의 수집, 사용 및 저장에 대해 정보 및 제어권을 갖도록 보장하기 ",
    "explanation": "개인정보 및 보안 (Privacy and security)은 데이터 수집 및 저장에 대해 소비자가 정보와 통제권을 가질 수 있도록 보장하는 것을 의미합니다.",
    "options": [
        { "value": "책임 (Accountability)", "right": false },
        { "value": "공정성 (Fairness)", "right": false },
        { "value": "포용성 (Inclusiveness)", "right": false },
        { "value": "개인정보 및 보안 (Privacy and security)", "right": true },
        { "value": "신뢰성 및 안전성 (Reliability and safety)", "right": false }
    ],
    "correct": 3
}, {
        "type": "radio",
        "question": "신용 대출 신청 결과에 대한 설명을 제공하는 것은 Microsoft의 책임 있는 AI 투명성 원칙의 예입니다.",
        "explanation": "투명성 원칙(Transparency)은 AI의 결정 이유를 설명하고 사용자가 이해할 수 있도록 하는 것을 의미합니다. 신용 대출 승인 또는 거절 이유를 설명하면 AI 모델이 어떤 기준을 사용했는지에 대한 투명성을 제공합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "부상 정도에 따라 보험 청구를 우선 처리하는 분류 봇은 Microsoft의 신뢰성 및 안전성 원칙의 예입니다.",
        "explanation": "부상 정도에 따라 청구 우선순위를 정하는 것은 공정성(Fairness) 원칙에 해당하며, 신뢰성 및 안전성 원칙과는 거리가 있습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "다른 판매 지역에 대해 서로 다른 가격으로 제공되는 AI 솔루션은 Microsoft의 포용성 원칙의 예입니다.",
        "explanation": "포용성(Inclusiveness)은 모든 사용자에게 공평한 접근성을 제공하는 것을 의미합니다. 지역에 따른 가격 차별은 포용성이 아닌 공정성(Fairness) 문제에 더 가깝습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "청각, 시각 또는 기타 장애가 있는 사람들을 포함한 모든 사람이 접근할 수 있는 AI 시스템을 설계하고 있습니다. 이것은 Microsoft 책임 있는 AI 원칙 중 어떤 것의 예입니까?",
        "explanation": "포용성(Inclusiveness)은 장애가 있거나 접근성에 제한이 있는 사용자도 포함하여 모든 사람이 공평하게 접근할 수 있는 AI 시스템을 설계하는 것을 의미합니다.",
        "options": [
            { "value": "공정성 (Fairness)", "right": false },
            { "value": "포용성 (Inclusiveness)", "right": true },
            { "value": "신뢰성 및 안전성 (Reliability and safety)", "right": false },
            { "value": "책임 (Accountability)", "right": false }
        ],
        "correct": 1
}, {
        "type": "checkbox",
        "question": "GPT-3.5를 사용하는 생성형 AI 솔루션에서 반환되는 응답의 품질을 개선하는 세 가지 방법은 무엇입니까?",
        "explanation": "GPT-3.5의 응답 품질을 개선하기 위해 프롬프트에 학습 데이터를 추가하고, 시스템 메시지를 수정하며, 추가 예시를 제공하는 것이 효과적입니다. 토크나이저 수정은 불가능하며, 그라운딩 데이터는 실시간 정보 접근이 불가능한 GPT-3.5에는 적용되지 않습니다.",
        "options": [
            { "value": "프롬프트에 학습 데이터를 추가하기 (Add training data to prompts)", "right": true },
            { "value": "시스템 메시지 수정하기 (Modify system messages)", "right": true },
            { "value": "토크나이징 수정하기 (Modify tokenization)", "right": false },
            { "value": "프롬프트에 추가 예시 제공하기 (Provide additional examples to prompts)", "right": true },
            { "value": "프롬프트에 그라운딩 데이터 추가하기 (Add grounding data to prompts)", "right": false }
        ],
        "correct": [0, 1, 3]}, {
        "type": "radio",
        "question": "Face 서비스는 유사한 얼굴 특징을 가진 모든 직원을 그룹화하는 데 사용할 수 있습니다.",
        "explanation": "Face 서비스는 얼굴 특징 벡터를 사용하여 유사한 얼굴을 그룹화할 수 있습니다. 이는 얼굴 인식 시스템에서 얼굴의 특징점(landmarks)을 분석하고 비슷한 특징을 가진 사람들을 클러스터링(Clustering)하는 방식으로 이루어집니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Face 서비스는 각 직원의 다양한 각도에서 찍은 여러 장의 샘플 사진을 제공하면 더 정확해집니다.",
        "explanation": "얼굴 인식 시스템은 다양한 각도에서 찍은 사진을 학습할수록 인식 정확도가 높아집니다. 특히, 정면뿐만 아니라 측면, 위, 아래 등 여러 각도에서 얼굴 특징을 학습하면 더 높은 인식률을 보입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "직원이 선글라스를 착용한 경우 Face 서비스는 항상 그 직원을 인식하지 못합니다.",
        "explanation": "선글라스는 눈 주위의 특징을 가릴 수 있지만, 얼굴 인식 시스템은 코, 입, 얼굴 윤곽 등 다른 특징을 사용해 인식할 수 있습니다. 따라서 항상 인식에 실패하지는 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "다음과 같은 데이터셋이 있습니다.<br><br><div> <table style='border: 1px solid black;'> <tr> <th style='border: 1px solid black;'>Household Income</th> <th style='border: 1px solid black;'>Postal Code</th> <th style='border: 1px solid black;'>House Price Category</th> </tr> <tr> <td style='border: 1px solid black;'>20,000</td> <td style='border: 1px solid black;'>55555</td> <td style='border: 1px solid black;'>Low</td> </tr> <tr> <td style='border: 1px solid black;'>23,000</td> <td style='border: 1px solid black;'>20541</td> <td style='border: 1px solid black;'>Middle</td> </tr> <tr> <td style='border: 1px solid black;'>80,000</td> <td style='border: 1px solid black;'>87960</td> <td style='border: 1px solid black;'>High</td> </tr> </table> </div><br><br>당신은 이 데이터셋을 사용하여 주택 가격 범주를 예측하는 모델을 훈련시키려고 합니다.<br><br>Household Income은 무엇인가요?",
        "explanation": "가구 소득은 주택 가격을 예측하는 데 사용되는 입력 변수입니다. 즉, 소득에 따라 주택 가격 범주가 결정되므로 모델의 Feature가 됩니다.",
        "options": [
            { "value": "A feature", "right": true },
            { "value": "A label", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "다음과 같은 데이터셋이 있습니다.<br><br><div> <table style='border: 1px solid black;'> <tr> <th style='border: 1px solid black;'>Household Income</th> <th style='border: 1px solid black;'>Postal Code</th> <th style='border: 1px solid black;'>House Price Category</th> </tr> <tr> <td style='border: 1px solid black;'>20,000</td> <td style='border: 1px solid black;'>55555</td> <td style='border: 1px solid black;'>Low</td> </tr> <tr> <td style='border: 1px solid black;'>23,000</td> <td style='border: 1px solid black;'>20541</td> <td style='border: 1px solid black;'>Middle</td> </tr> <tr> <td style='border: 1px solid black;'>80,000</td> <td style='border: 1px solid black;'>87960</td> <td style='border: 1px solid black;'>High</td> </tr> </table> </div><br><br>당신은 이 데이터셋을 사용하여 주택 가격 범주를 예측하는 모델을 훈련시키려고 합니다.<br><br>House Price Category는 무엇인가요?",
        "explanation": "주택 가격 범주는 모델이 예측해야 하는 대상 값이므로 Label입니다.",
        "options": [
            { "value": "A feature", "right": false },
            { "value": "A label", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "Machine Learning 과정 중 언제 평가 지표(evaluation metrics)를 검토해야 합니까?",
        "explanation": "평가 지표는 모델의 성능을 측정하는 기준으로, 모델을 검증 데이터(validation data)에서 테스트한 후 검토해야 합니다. 모델이 예측한 결과와 실제 정답을 비교하여 정확도, 정밀도, 재현율 등 다양한 지표를 확인하는 과정이 필요합니다.",
        "options": [
            { "value": "모델을 학습하기 전에", "right": false },
            { "value": "데이터를 정리한 후.", "right": false },
            { "value": "모델 유형을 선택하기 전에.", "right": false },
            { "value": "검증 데이터에서 모델을 테스트한 후.", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "주어진 작업을 적절한 머신러닝 모델과 매칭하세요. (__________) → 승객의 인구통계 데이터를 기반으로 카테고리를 할당합니다. (Assign categories to passengers based on demographic data.)",
        "explanation": "Classification(분류)은 승객을 특정 그룹(예: VIP, 일반 승객)으로 나누는 데 적합합니다.",
        "options": [
            { "value": "Classification (분류)", "right": true },
            { "value": "Clustering (군집화)", "right": false },
            { "value": "Regression (회귀)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "주어진 작업을 적절한 머신러닝 모델과 매칭하세요. (__________) → 비행 거리(flight distance)에 따른 연료 소비량을 예측합니다. (Predict the amount of consumed fuel based on flight distance.)",
        "explanation": "Regression(회귀)은 연속형 데이터를 예측하는 데 사용되며, 비행 거리와 연료 소비량처럼 수치적 관계를 예측할 때 적합합니다.",
        "options": [
            { "value": "Classification (분류)", "right": false },
            { "value": "Clustering (군집화)", "right": false },
            { "value": "Regression (회귀)", "right": true }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "주어진 작업을 적절한 머신러닝 모델과 매칭하세요. (__________) → 승객이 인구통계 데이터를 기반으로 비행을 놓칠지를 예측합니다. (Predict whether a passenger will miss their flight based on demographic data.)",
        "explanation": "Classification(분류)은 비행을 놓칠 가능성이 높은 승객을 예측하는 데 사용됩니다. 이는 범주형 데이터를 예측하는 문제이기 때문입니다.",
        "options": [
            { "value": "Classification (분류)", "right": true },
            { "value": "Clustering (군집화)", "right": false },
            { "value": "Regression (회귀)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "스마트 장치가 다음 질문에 응답합니다: \"Contoso, Ltd.의 주가는 얼마인가요?\"<br>이것은 어떤 AI 작업(AI workload)의 예입니까?",
        "explanation": "질문에 응답하기 위해서는 자연어를 이해하고 처리하는 기능이 필요합니다. 이는 Natural Language Processing (NLP)의 대표적인 사용 사례입니다. NLP는 질문 의도를 파악하고, 관련 정보를 검색한 뒤, 자연어로 응답을 생성합니다.",
        "options": [
            { "value": "지식 탐색 (Knowledge mining)", "right": false },
            { "value": "컴퓨터 비전 (Computer vision)", "right": false },
            { "value": "자연어 처리 (Natural language processing)", "right": true },
            { "value": "이상 탐지 (Anomaly detection)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "비정상적인 값 또는 누락된 값을 올바르게 처리하는 것은 책임 있는 AI의 _______ 원칙 적용 사례입니다.",
        "explanation": "비정상적인 값 또는 누락된 값을 올바르게 처리하면 시스템의 신뢰성과 안전성이 유지됩니다. 이는 AI 모델이 예측의 정확성과 안정성을 확보하도록 하여 '신뢰성 및 안전 (Reliability and safety)' 원칙을 적용한 사례입니다.",
        "options": [
            { "value": "포용성 (Inclusiveness)", "right": false },
            { "value": "개인 정보 및 보안 (Privacy and security)", "right": false },
            { "value": "신뢰성 및 안전 (Reliability and safety)", "right": true },
            { "value": "투명성 (Transparency)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "사용자 프롬프트를 기반으로 이미지를 생성해야 합니다. 어떤 Azure OpenAI 모델을 사용해야 합니까?",
        "explanation": "DALL-E는 텍스트 입력을 기반으로 이미지를 생성하는 데 특화된 모델입니다. GPT-4 및 GPT-3는 텍스트 생성용 언어 모델이고, Whisper는 음성 인식에 사용됩니다.",
        "options": [
            { "value": "GPT-4", "right": false },
            { "value": "GPT-3", "right": false },
            { "value": "Whisper", "right": false },
            { "value": "DALL-E", "right": true }
        ],
        "correct": 3
}, {
        "type": "checkbox",
        "question": "⭐책임 있는 AI를 위한 Microsoft의 세 가지 주요 원칙은 무엇입니까?",
        "explanation": "Microsoft의 책임 있는 AI 원칙에는 '포용성 (Inclusiveness)', '공정성 (Fairness)', '신뢰성 및 안전 (Reliability and safety)'이 포함됩니다.",
        "options": [
            { "value": "지식 (Knowledgeability)", "right": false },
            { "value": "결정력 (Decisiveness)", "right": false },
            { "value": "포용성 (Inclusiveness)", "right": true },
            { "value": "공정성 (Fairness)", "right": true },
            { "value": "편향성 (Opinionatedness)", "right": false },
            { "value": "신뢰성 및 안전 (Reliability and safety)", "right": true }
        ],
        "correct": [2, 3, 5]},
    {
        "type": "radio",
        "question": "⭐온라인 서비스 리뷰에서 욕설을 모니터링하는 것은 자연어 처리(NLP)의 예입니다.",
        "explanation": "리뷰에서 욕설을 감지하는 것은 텍스트 분석에 해당하며, 이는 자연어 처리(NLP)의 예입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐이미지에서 브랜드 로고를 식별하는 것은 자연어 처리(NLP)의 예입니다.",
        "explanation": "이미지에서 브랜드 로고를 식별하는 것은 컴퓨터 비전 (Computer Vision)의 예입니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "⭐공공 뉴스 사이트에서 제품에 대한 부정적인 언급을 모니터링하는 것은 자연어 처리(NLP)의 예입니다.",
        "explanation": "뉴스 기사에서 부정적인 언급을 찾는 것은 감성 분석(Sentiment Analysis)이며, 이는 자연어 처리(NLP)의 예입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "컨베이어 벨트 위의 제품 위치를 식별하는 데 _______ 을(를) 사용할 수 있습니다.",
        "explanation": "객체 감지 (Object detection)는 이미지나 비디오에서 객체의 위치와 클래스를 식별합니다. 이는 Bounding Box를 사용해 객체의 위치를 정확히 표시하기 때문에 제품 위치 식별에 적합합니다.",
        "options": [
            { "value": "객체 감지 (Object detection)", "right": true },
            { "value": "이미지 분류 (Image classification)", "right": false },
            { "value": "이미지 처리 (Image processing)", "right": false },
            { "value": "광학 문자 인식 (Optical character recognition, OCR)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "법률 문서에서 당사자(Parties)와 관할권(Jurisdictions)을 추출하려면 어떤 Azure AI Document Intelligence 미리 구성된 모델을 사용해야 합니까?",
        "explanation": "General document 모델은 다양한 형식의 문서를 처리할 수 있으며, 법적 문서에서 당사자 및 관할권과 같은 특정 정보를 유연하게 추출할 수 있습니다. 특히 계약서에 국한되지 않고 일반적인 법률 문서에도 적용 가능합니다.",
        "options": [
            { "value": "일반 문서 (General document)", "right": true },
            { "value": "읽기 (Read)", "right": false },
            { "value": "계약서 (Contract)", "right": false },
            { "value": "레이아웃 (Layout)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "IoT 장치가 엔진 온도를 모니터링하고, 예상 범위를 벗어나면 경고를 생성합니다. 이 장치는 어떤 유형의 AI 작업(AI workload)을 나타냅니까?",
        "explanation": "이상 탐지 (Anomaly detection)는 예상 범위를 벗어난 비정상적인 데이터를 감지합니다. 이 문제에서는 엔진 온도가 정상 범위를 벗어나면 경고를 생성하므로 이상 탐지에 해당합니다.",
        "options": [
            { "value": "자연어 처리 (Natural language processing, NLP)", "right": false },
            { "value": "지식 탐색 (Knowledge mining)", "right": false },
            { "value": "컴퓨터 비전 (Computer vision)", "right": false },
            { "value": "이상 탐지 (Anomaly detection)", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "회귀 모델을 구축할 때, 라벨은 _______ 데이터 유형이어야 합니다.",
        "explanation": "회귀 모델은 연속형 숫자 값을 예측하는 모델입니다. 따라서 라벨(Label)은 숫자 (Numeric) 형식이어야 합니다.",
        "options": [
            { "value": "불리언 (Boolean)", "right": false },
            { "value": "날짜/시간 (Datetime)", "right": false },
            { "value": "숫자 (Numeric)", "right": true },
            { "value": "텍스트 (Text)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "Language 서비스는 텍스트가 작성된 언어를 식별할 수 있습니다.",
        "explanation": "Language 서비스의 언어 감지 (Language Detection) 기능을 사용하면 텍스트가 어떤 언어로 작성되었는지 식별할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Language 서비스는 문서에서 손글씨 서명을 감지할 수 있습니다.",
        "explanation": "손글씨 서명 감지는 Language 서비스의 기능이 아닙니다. 이는 Computer Vision 또는 OCR (Optical Character Recognition) 기술이 필요합니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Language 서비스는 문서에서 언급된 회사 및 조직을 식별할 수 있습니다.",
        "explanation": "Language 서비스는 개체 인식 (Entity Recognition) 기능을 통해 문서 내에서 회사, 조직, 인물, 장소 등의 고유 명사를 식별할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
    }
    //110
    , {
        "type": "radio",
        "question": "경매된 상품의 판매 가격을 예측하는 데 사용할 수 있는 모델은 무엇입니까?",
        "explanation": "회귀 (Regression) 모델은 연속형 숫자 값을 예측하는 데 사용됩니다. 경매된 상품의 판매 가격은 연속적인 숫자 데이터이므로 회귀 모델이 적합합니다.",
        "options": [
            { "value": "분류 (Classification)", "right": false },
            { "value": "군집화 (Clustering)", "right": false },
            { "value": "회귀 (Regression)", "right": true }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "모델의 예측에 영향을 미치는 데이터 값을 _______ 라고 합니다.",
        "explanation": "특징 (Features)은 모델의 입력 데이터로, 예측에 영향을 미치는 변수입니다. 예를 들어, 판매 가격을 예측할 때 상품의 크기, 무게, 브랜드, 상태 등이 특징 (Features)입니다.",
        "options": [
            { "value": "종속 변수 (Dependent variables)", "right": false },
            { "value": "특징 (Features)", "right": true },
            { "value": "식별자 (Identifiers)", "right": false },
            { "value": "라벨 (Labels)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "대형 기계의 비정상적인 온도 변동을 감지하는 것은 무엇의 예입니까?",
        "explanation": "비정상적인 온도 변동을 감지하는 것은 예상 범위를 벗어난 비정상적인 데이터를 감지하는 '이상 탐지 (Anomaly detection)'에 해당합니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly detection)", "right": true },
            { "value": "컴퓨터 비전 (Computer vision)", "right": false },
            { "value": "지식 탐색 (Knowledge mining)", "right": false },
            { "value": "자연어 처리 (NLP)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "자신의 이미지를 사용하여 객체 감지 모델(Object Detection Model)을 학습시키려면 어떤 서비스를 사용해야 합니까?",
        "explanation": "Custom Vision은 사용자가 자신의 이미지를 업로드하여 객체 감지 모델을 맞춤형으로 학습시킬 수 있는 서비스입니다.",
        "options": [
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "커스텀 비전 (Custom Vision)", "right": true },
            { "value": "폼 리코그니저 (Form Recognizer)", "right": false },
            { "value": "비디오 인덱서 (Video Indexer)", "right": false }
        ],
        "correct": 1
}, {
        "type": "checkbox",
        "question": "사전에 정의된 답변으로 간단한 질문에 답하는 챗봇(Chatbot)을 구현하여 전화 상담원의 부담을 줄이려고 합니다. 이 목표를 달성하기 위해 두 가지 AI 서비스를 사용해야 합니다. 어떤 것을 선택해야 합니까?",
        "explanation": "Azure Bot Service는 챗봇을 구현하기 위한 대화형 인터페이스를 제공하며, Language Service는 자연어 처리를 통해 질문 의도를 파악하고 답변을 매칭합니다.",
        "options": [
            { "value": "Azure Machine Learning", "right": false },
            { "value": "Translator", "right": false },
            { "value": "Azure Bot Service", "right": true },
            { "value": "Language Service", "right": true }
        ],
        "correct": [2, 3]
},
    {
        "type": "radio",
        "question": "보험 청구 보고서에서 핵심 용어(Key Terms)를 추출하여 요약을 생성해야 합니다. 어떤 유형의 AI 작업(AI workload)을 사용해야 합니까?",
        "explanation": "자연어 처리 (NLP)는 텍스트 분석 및 요약 생성에 사용되며, 핵심 용어 추출 및 문서 요약(Summarization)은 NLP의 주요 기능입니다.",
        "options": [
            { "value": "대화형 AI (Conversational AI)", "right": false },
            { "value": "이상 탐지 (Anomaly detection)", "right": false },
            { "value": "자연어 처리 (Natural language processing, NLP)", "right": true },
            { "value": "컴퓨터 비전 (Computer vision)", "right": false }
        ],
        "correct": 2
}, {
        "type": "checkbox",
        "question": "⭐QnA Maker를 사용하여 질문과 답변 텍스트를 생성할 수 있는 세 가지 방법은 무엇입니까?",
        "explanation": "QnA Maker는 기존 웹페이지에서 질문과 답변을 자동 생성할 수 있으며, 포털에서 수동으로 입력할 수도 있습니다. 또한 미리 정의된 데이터 소스에서 chit-chat 콘텐츠를 가져와 기본 대화 응답을 추가할 수 있습니다.",
        "options": [
            { "value": "기존 웹페이지에서 질문과 답변을 자동 생성 (A)", "right": true },
            { "value": "질문과 답변을 수동으로 입력 (B)", "right": true },
            { "value": "Cortana를 통해 질문하기 (C)", "right": false },
            { "value": "미리 정의된 데이터 소스에서 chit-chat 콘텐츠 가져오기 (D)", "right": true },
            { "value": "자동화된 기계 학습을 사용하여 모델 학습 (E)", "right": false }
        ],
        "correct": [0, 1, 3]},
    {
        "type": "radio",
        "question": "Custom Vision 서비스는 이미지에서 객체를 감지하는 데 사용할 수 있습니다.",
        "explanation": "Custom Vision은 이미지에서 객체(Object Detection)를 감지하고 분류(Classification)할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Custom Vision 서비스는 모델 학습을 위해 사용자가 자신의 데이터를 제공해야 합니다.",
        "explanation": "Custom Vision은 사용자가 직접 업로드한 데이터를 사용하여 맞춤형 모델을 학습시킵니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Custom Vision 서비스는 비디오 파일을 분석하는 데 사용할 수 있습니다.",
        "explanation": "비디오 파일 분석은 Video Indexer 또는 Computer Vision을 사용해야 하며, Custom Vision은 이미지 분석에 특화되어 있습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "Azure Machine Learning 작업에서 (__________) → 머신러닝 작업 공간(Machine Learning workspace)을 생성합니다.",
        "explanation": "Azure 포털(The Azure portal)은 Machine Learning 작업 공간을 생성하고 관리하는 데 사용됩니다. 여기에서 리소스를 설정하고 사용자 권한을 관리할 수 있습니다.",
        "options": [
            { "value": "자동화된 기계 학습 (Automated machine learning, Automated ML)", "right": false },
            { "value": "Azure 포털 (The Azure portal)", "right": true },
            { "value": "머신러닝 디자이너 (Machine Learning designer)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Azure Machine Learning 작업에서 (__________) → 모델 학습 및 배포를 위한 드래그 앤 드롭 인터페이스를 사용합니다.",
        "explanation": "머신러닝 디자이너 (Machine Learning designer)는 드래그 앤 드롭 방식으로 머신러닝 파이프라인을 설계하고 모델을 학습 및 배포할 수 있는 시각적 인터페이스를 제공합니다.",
        "options": [
            { "value": "자동화된 기계 학습 (Automated machine learning, Automated ML)", "right": false },
            { "value": "Azure 포털 (The Azure portal)", "right": false },
            { "value": "머신러닝 디자이너 (Machine Learning designer)", "right": true }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "Azure Machine Learning 작업에서 (__________) → 기계 학습 실행을 위한 구성 선택 마법사를 사용합니다.",
        "explanation": "자동화된 기계 학습 (Automated ML)은 마법사를 사용하여 모델 학습 및 하이퍼파라미터 튜닝을 자동화할 수 있습니다. 이는 구성 선택을 간편하게 만들어줍니다.",
        "options": [
            { "value": "자동화된 기계 학습 (Automated machine learning, Automated ML)", "right": true },
            { "value": "Azure 포털 (The Azure portal)", "right": false },
            { "value": "머신러닝 디자이너 (Machine Learning designer)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "귀사는 병(Bottle)을 재활용하는 기계를 만들고자 합니다. 이 재활용 기계는 올바른 모양의 병을 자동으로 식별하고 나머지 물체는 거부해야 합니다. 이 경우 어떤 유형의 AI 작업(AI workload)을 사용해야 합니까?",
        "explanation": "컴퓨터 비전 (Computer Vision)은 이미지나 비디오 분석에 사용되며, 모양과 형태를 식별하고 객체 감지(Object Detection) 기능을 제공합니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly detection)", "right": false },
            { "value": "대화형 AI (Conversational AI)", "right": false },
            { "value": "컴퓨터 비전 (Computer vision)", "right": true },
            { "value": "자연어 처리 (Natural language processing, NLP)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "신용 대출 신청 결과에 대한 설명을 제공하는 것은 Microsoft의 투명성(Transparency) 원칙의 예입니다.",
        "explanation": "Microsoft의 투명성(Transparency) 원칙은 AI 모델의 결정 과정을 설명하고 결과를 이해할 수 있도록 돕는 것을 포함합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
//     {
//         "type": "radio",
//         "question": "부상 정도에 따라 보험 청구를 우선 순위로 처리하는 트리아지 봇(Triage bot)은 Microsoft의 신뢰성 및 안전(Reliability and safety) 원칙의 예입니다.",
//         "explanation": "Microsoft의 신뢰성 및 안전(Reliability and safety) 원칙은 AI 시스템이 일관되고 예측 가능한 방식으로 안전하게 동작하도록 설계하는 것을 포함합니다.",
//         "options": [
//             { "value": "Yes", "right": true },
//             { "value": "No", "right": false }
//         ],
//         "correct": 0
// },
    {
        "type": "radio",
        "question": "다른 판매 지역에 대해 서로 다른 가격으로 제공되는 AI 솔루션은 Microsoft의 포용성(Inclusiveness) 원칙의 예입니다.",
        "explanation": "포용성(Inclusiveness) 원칙은 모든 사용자 집단에 공정하고 차별 없이 AI가 적용되는 것을 목표로 하며, 지역별 가격 차별과는 관련이 없습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "⭐당신은 경주에 참가한 주자들의 사진을 처리하고 있습니다. 사진에서 주자들을 식별하기 위해 주자들의 셔츠에 적힌 번호를 읽어야 합니다. 어떤 유형의 컴퓨터 비전(Computer Vision)을 사용해야 합니까?",
        "explanation": "광학 문자 인식 (OCR)은 이미지에서 텍스트를 추출하는 기술입니다. 주자의 셔츠에 적힌 번호(숫자)를 읽어야 하므로 OCR을 사용해야 합니다.",
        "options": [
            { "value": "얼굴 인식 (Facial recognition)", "right": false },
            { "value": "광학 문자 인식 (Optical character recognition, OCR)", "right": true },
            { "value": "시맨틱 세그멘테이션 (Semantic segmentation)", "right": false },
            { "value": "객체 감지 (Object detection)", "right": false }
        ],
        "correct": 1
}, {
        "type": "checkbox",
        "question": "⭐ 다음 중 컴퓨터 비전(Computer Vision)을 사용할 수 있는 두 가지 작업은 무엇입니까?각1점",
        "explanation": "컴퓨터 비전은 이미지 캡션 생성(Image Captioning)을 사용하여 이미지의 내용을 설명할 수 있으며, 시맨틱 세그멘테이션(Semantic Segmentation)을 사용하여 각 픽셀을 클래스(객체) 이름으로 분류합니다.",
        "options": [
            { "value": "이미지 내용 설명 (Describing the contents of an image)", "right": true },
            { "value": "숫자 데이터의 시각적 표현 생성 (Creating visual representations of numerical data)", "right": false },
            { "value": "데이터 스트림에서 불일치 및 이상 감지 (Detecting inconsistencies and anomalies in a stream of data)", "right": false },
            { "value": "3D 모델을 사용한 사실적인 이미지 생성 (Creating photorealistic images by using three-dimensional models)", "right": false },
            { "value": "이미지의 색상 픽셀을 객체 이름으로 할당 (Assigning the color pixels in an image to object names)", "right": true }
        ],
        "correct": [0, 4]}, {
        "type": "radio",
        "question": "⭐Microsoft Teams, Microsoft Cortana, Amazon Alexa에서 사용할 수 있는 대화형 AI 솔루션을 구축하려고 합니다. 어떤 서비스를 사용해야 합니까?",
        "explanation": "Azure Bot Service는 Microsoft Teams, Cortana, Alexa 등 여러 플랫폼과 통합할 수 있는 대화형 AI를 구축할 수 있습니다.",
        "options": [
            { "value": "Azure Bot Service", "right": true },
            { "value": "Language Service", "right": false },
            { "value": "Speech", "right": false },
            { "value": "Azure Cognitive Search", "right": false }
        ],
        "correct": 0
}, {
        "type": "checkbox",
        "question": "Azure Machine Learning Designer에서 사용자 정의 코드를 작성할 때 사용할 수 있는 두 가지 언어는 무엇입니까?각1점 ",
        "explanation": "Azure Machine Learning Designer에서는 Python과 R을 사용하여 사용자 정의 코드를 작성할 수 있습니다. Python은 데이터 분석 및 모델 학습에 널리 사용되고, R은 통계 분석과 데이터 시각화에 강력한 기능을 제공합니다.",
        "options": [
            { "value": "Scala", "right": false },
            { "value": "R", "right": true },
            { "value": "Python", "right": true },
            { "value": "C#", "right": false }
        ],
        "correct": [1, 2]},
    {
        "type": "radio",
        "question": "회귀(Regression) 모델에서 라벨(Label)은 숫자여야 합니다.",
        "explanation": "회귀 모델은 연속적인 숫자 값을 예측하는 것이 목표이므로, 라벨은 항상 숫자여야 합니다.",
        "options": [
            {
                "value": "Yes", "right": true
            },
            {
                "value": "No", "right": false
            }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "클러스터링(Clustering) 모델에서는 라벨이 사용되어야 합니다.",
        "explanation": "클러스터링은 비지도 학습(Unsupervised Learning) 방식이며, 라벨이 필요하지 않습니다.",
        "options": [
            {
                "value": "Yes", "right": false
            },
            {
                "value": "No", "right": true
            }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "분류(Classification) 모델에서 라벨은 숫자여야 합니다.",
        "explanation": "분류 모델에서는 라벨이 텍스트일 수도 있으며, 숫자로 변환할 수도 있지만 필수는 아닙니다.",
        "options": [
            {
                "value": "Yes", "right": false
            },
            {
                "value": "No", "right": true
            }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "귀사는 병(Bottle)을 재활용하는 기계를 만들고자 합니다. 이 재활용 기계는 올바른 모양의 병을 자동으로 식별하고, 다른 모든 물체는 거부해야 합니다. 회사는 어떤 유형의 AI 워크로드(AI workload)를 사용해야 합니까?",
        "explanation": "컴퓨터 비전(Computer Vision)은 이미지를 분석하고 객체를 인식하는 AI 기술입니다. 병의 모양을 인식하고, 올바른 병인지 아닌지를 판단하는 문제이므로 적절한 솔루션입니다. 대화형 AI, 자연어 처리, 이상 탐지는 해당 문제와 관련이 없습니다.",
        "options": [
            {
                "value": "이상 탐지 (Anomaly Detection)", "right": false
            },
            {
                "value": "대화형 AI (Conversational AI)", "right": false
            },
            {
                "value": "컴퓨터 비전 (Computer Vision)", "right": true
            },
            {
                "value": "자연어 처리 (Natural Language Processing, NLP)", "right": false
            }
        ],
        "correct": 2
    }
    , {
        "type": "radio",
        "question": "Custom Vision 서비스에서 객체 탐지(Object Detection) 모델을 만들 때, Multilabel(다중 레이블) 또는 Multiclass(다중 클래스) 분류 유형을 선택해야 합니다.",
        "explanation": "Multilabel 및 Multiclass는 이미지 분류 모델에 해당하며, 객체 탐지 모델에서는 필수가 아닙니다.",
        "options": [
            {
                "value": "Yes", "right": false
            },
            {
                "value": "No", "right": true
            }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Custom Vision 서비스에서 객체 탐지 모델을 생성하여 이미지 내 콘텐츠의 위치를 찾을 수 있습니다.",
        "explanation": "객체 탐지 모델은 이미지 내 객체의 위치를 찾는 데 사용되며, Custom Vision을 활용하여 학습할 수 있습니다.",
        "options": [
            {
                "value": "Yes", "right": true
            },
            {
                "value": "No", "right": false
            }
        ],
        "correct": 0
}, {
        "type": "checkbox",
        "question": "⭐다음 중 Form Recognizer 서비스를 사용할 수 있는 두 가지 시나리오는 무엇입니까?",
        "explanation": "Form Recognizer는 문서에서 정보를 추출하는 AI 서비스입니다. 청구서에서 번호를 추출하거나 영수증에서 소매업체를 식별하는 데 활용할 수 있습니다. 번역 및 이미지 검색은 다른 AI 서비스가 필요합니다.",
        "options": [
            {
                "value": "청구서(Invoice)에서 청구서 번호를 추출한다.", "right": true
            },
            {
                "value": "양식을 프랑스어에서 영어로 번역한다.", "right": false
            },
            {
                "value": "카탈로그에서 제품의 이미지를 찾는다.", "right": false
            },
            {
                "value": "영수증에서 소매업체(Retailer)를 식별한다.", "right": true
            }
        ],
        "correct": [0, 3]
}, {
        "type": "radio",
        "question": "비디오 피드를 기반으로 특정 지역의 동물 개체 수를 계산하는 것은 다음 중 어떤 AI 기술의 예시입니까?",
        "explanation": "ai900Q73A.jpg<br>컴퓨터 비전(Computer Vision)은 이미지 및 비디오에서 객체를 감지하고 분석하는 AI 기술입니다. 특정 지역의 동물 개체 수를 세기 위해서는 비디오에서 동물을 감지하고 개수를 측정해야 하므로, 컴퓨터 비전이 적절한 솔루션입니다.",
        "options": [
            {
                "value": "Forecasting (예측 분석)", "right": false
            },
            {
                "value": "Computer Vision (컴퓨터 비전)", "right": true
            },
            {
                "value": "Conversational AI (대화형 AI)", "right": false
            },
            {
                "value": "Anomaly Detection (이상 탐지)", "right": false
            }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "Face 서비스는 직원의 얼굴 인식을 수행하는 데 사용할 수 있습니다.",
        "explanation": "Azure Face 서비스는 얼굴 인식을 수행할 수 있는 AI 서비스로, 출입 관리 시스템 등에 활용할 수 있습니다.",
        "options": [
            {
                "value": "Yes", "right": true
            },
            {
                "value": "No", "right": false
            }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "각 직원의 다양한 각도에서 찍은 더 많은 샘플 사진을 제공하면 Face 서비스의 정확도가 더 높아집니다.",
        "explanation": "얼굴 인식 모델은 다양한 조건(조명, 얼굴 방향, 표정 등)에서 학습할수록 인식 정확도가 향상됩니다.",
        "options": [
            {
                "value": "Yes", "right": true
            },
            {
                "value": "No", "right": false
            }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "직원이 선글라스를 착용하면 Face 서비스는 항상 해당 직원을 인식하지 못합니다.",
        "explanation": "선글라스를 착용하면 인식률이 낮아질 수 있지만, 항상 실패하는 것은 아닙니다. Face 서비스는 얼굴 특징을 종합적으로 분석하여 인식할 수 있습니다.",
        "options": [
            {
                "value": "Yes", "right": false
            },
            {
                "value": "No", "right": true
            }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Custom Vision 서비스에서 객체 탐지 모델을 만들 때, 미리 정의된 도메인(Predefined domains) 중에서 선택할 수 있습니다.",
        "explanation": "Custom Vision 서비스에서는 특정 사용 사례에 맞춘 미리 정의된 도메인(예: 일반, 소매, 음식, 랜드마크 등)을 제공합니다.",
        "options": [
            {
                "value": "Yes", "right": true
            },
            {
                "value": "No", "right": false
            }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "직원들이 출장 중에 영수증을 스캔하고 저장할 수 있는 모바일 앱을 개발해야 합니다. 어떤 유형의 컴퓨터 비전 기술을 사용해야 합니까?",
        "explanation": "OCR (Optical Character Recognition) 기술은 이미지에서 문자를 인식하고 추출하는 데 사용됩니다. 영수증에서 날짜, 금액, 상점 이름 등을 자동으로 인식하고 저장할 수 있어야 하므로 OCR이 적절한 솔루션입니다.",
        "options": [
            {
                "value": "Semantic Segmentation (의미론적 분할)", "right": false
            },
            {
                "value": "Image Classification (이미지 분류)", "right": false
            },
            {
                "value": "Object Detection (객체 탐지)", "right": false
            },
            {
                "value": "Optical Character Recognition (OCR, 광학 문자 인식)", "right": true
            }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "Custom Vision 서비스는 이미지에서 객체를 감지하는 데 사용할 수 있습니다.",
        "explanation": "Custom Vision은 객체 탐지(Object Detection) 기능을 제공하여 이미지에서 특정 객체를 감지하고 위치를 식별할 수 있습니다.",
        "options": [
            {
                "value": "Yes", "right": true
            },
            {
                "value": "No", "right": false
            }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Custom Vision 서비스를 사용하려면 사용자가 직접 데이터를 제공하여 모델을 학습해야 합니다.",
        "explanation": "Custom Vision 모델을 학습하려면 사용자가 직접 이미지 데이터셋과 레이블을 업로드하여 모델을 학습시켜야 합니다.",
        "options": [
            {
                "value": "Yes", "right": true
            },
            {
                "value": "No", "right": false
            }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Custom Vision 서비스는 비디오 파일을 분석하는 데 사용할 수 있습니다.",
        "explanation": "Custom Vision은 정적 이미지 분석을 위한 서비스이며, 비디오 파일 분석을 직접 지원하지 않습니다. 비디오 분석을 원할 경우 Azure Video Indexer 등의 서비스를 사용해야 합니다.",
        "options": [
            {
                "value": "Yes", "right": false
            },
            {
                "value": "No", "right": true
            }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "경주 중인 러너(주자)의 사진을 처리하고 있습니다. 러너들의 셔츠에 적힌 번호를 읽어 러너를 식별해야 합니다. 어떤 유형의 컴퓨터 비전 기술을 사용해야 합니까?",
        "explanation": "OCR (Optical Character Recognition) 기술은 이미지에서 문자를 감지하고 읽는 데 사용됩니다. 러너의 셔츠에서 번호를 인식하는 것이 목표이므로, OCR이 적절한 솔루션입니다.",
        "options": [
            { "value": "Facial Recognition (얼굴 인식)", "right": false },
            { "value": "Optical Character Recognition (OCR, 광학 문자 인식)", "right": true },
            { "value": "Image Classification (이미지 분류)", "right": false },
            { "value": "Object Detection (객체 탐지)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "북극곰과 갈색곰을 구분하기 위해 어떤 컴퓨터 비전 기술을 사용해야 합니까?",
        "explanation": "이미지 분류(Image Classification)는 이미지를 특정 카테고리에 속하는지 판단하는 모델입니다. 북극곰과 갈색곰을 분류하는 작업이므로 이미지 분류가 적절합니다.",
        "options": [
            { "value": "Facial detection (얼굴 탐지)", "right": false },
            { "value": "Facial recognition (얼굴 인식)", "right": false },
            { "value": "Image classification (이미지 분류)", "right": true },
            { "value": "Object detection (객체 탐지)", "right": false },
            { "value": "Optical character recognition (OCR)", "right": false },
            { "value": "Semantic segmentation (의미론적 분할)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "사진 속에서 곰의 위치를 찾기 위해 어떤 컴퓨터 비전 기술을 사용해야 합니까?",
        "explanation": "객체 탐지(Object Detection)는 이미지에서 특정 객체(곰)의 위치를 찾고, 경계 상자(Bounding Box)로 표시하는 기술입니다. 사진 속 곰의 위치를 찾는 작업이므로 객체 탐지가 적절합니다.",
        "options": [
            { "value": "Facial detection (얼굴 탐지)", "right": false },
            { "value": "Facial recognition (얼굴 인식)", "right": false },
            { "value": "Image classification (이미지 분류)", "right": false },
            { "value": "Object detection (객체 탐지)", "right": true },
            { "value": "Optical character recognition (OCR)", "right": false },
            { "value": "Semantic segmentation (의미론적 분할)", "right": false }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "이미지에서 곰이 포함된 픽셀을 정확하게 식별하기 위해 어떤 컴퓨터 비전 기술을 사용해야 합니까?",
        "explanation": "의미론적 분할(Semantic Segmentation)은 이미지의 각 픽셀이 특정 객체에 속하는지 판단하는 기술입니다. 곰이 있는 픽셀을 정확히 식별해야 하므로 의미론적 분할이 적절합니다.",
        "options": [
            { "value": "Facial detection (얼굴 탐지)", "right": false },
            { "value": "Facial recognition (얼굴 인식)", "right": false },
            { "value": "Image classification (이미지 분류)", "right": false },
            { "value": "Object detection (객체 탐지)", "right": false },
            { "value": "Optical character recognition (OCR)", "right": false },
            { "value": "Semantic segmentation (의미론적 분할)", "right": true }
        ],
        "correct": 5},
    {
        "type": "radio",
        "question": "두 개의 얼굴 이미지가 동일한 사람의 얼굴인지 확인하는 작업은 무엇인가요?",
        "explanation": "검증(Verification)은 두 개의 얼굴 이미지를 비교하여 동일한 인물인지 확인하는 작업입니다.",
        "options": [
            { "value": "Grouping (그룹화)", "right": false },
            { "value": "Identification (식별)", "right": false },
            { "value": "Similarity (유사성)", "right": false },
            { "value": "Verification (검증)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "이 사람은 다른 사람들과 닮았는가?",
        "explanation": "유사성(Similarity)은 얼굴 특징을 비교하여 두 명 이상의 사람이 서로 닮았는지를 평가하는 작업입니다.",
        "options": [
            { "value": " Grouping (그룹화)", "right": false },
            { "value": "Identification (식별)", "right": false },
            { "value": "Similarity (유사성)", "right": true },
            { "value": "Verification (검증)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "모든 얼굴이 같은 그룹에 속하는가?",
        "explanation": "그룹화(Grouping)은 여러 개의 얼굴 이미지를 분석하여 유사한 얼굴들을 자동으로 하나의 그룹으로 묶는 작업입니다.",
        "options": [
            { "value": "Grouping (그룹화)", "right": true },
            { "value": "Identification (식별)", "right": false },
            { "value": "Similarity (유사성)", "right": false },
            { "value": "Verification (검증)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "이 그룹 내에서 특정 사람이 누구인지 식별하는 작업은 무엇인가요?",
        "explanation": "식별(Identification)은 얼굴을 인식하고 미리 등록된 데이터베이스와 비교하여 해당 인물이 누구인지 판별하는 작업입니다.",
        "options": [
            { "value": "Grouping (그룹화)", "right": false },
            { "value": "Identification (식별)", "right": true },
            { "value": "Similarity (유사성)", "right": false },
            { "value": "Verification (검증)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "이미지에서 유명인을 식별하는 작업은 무엇인가요?",
        "explanation": "얼굴 인식(Facial Recognition)은 이미지에서 얼굴을 감지하고, 데이터베이스와 비교하여 특정 인물을 식별하는 기술입니다.",
        "options": [
            { "value": "Facial recognition", "right": true },
            { "value": "Image classification", "right": false },
            { "value": "Object detection", "right": false },
            { "value": "Optical character recognition (OCR)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "영화 포스터 이미지에서 영화 제목을 추출하는 작업은 무엇인가요?",
        "explanation": "OCR(Optical Character Recognition)은 이미지에서 텍스트(문자 및 숫자)를 감지하고 읽는 기술입니다. 영화 포스터에서 제목을 추출하는 작업은 OCR이 적절합니다.",
        "options": [
            { "value": "Facial recognition", "right": false },
            { "value": "Image classification", "right": false },
            { "value": "Object detection", "right": false },
            { "value": "Optical character recognition (OCR)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "이미지에서 차량의 위치를 찾는 작업은 무엇인가요?",
        "explanation": "객체 탐지(Object Detection)는 이미지에서 특정 객체(차량)를 감지하고, 해당 객체의 위치를 경계 상자로 표시하는 기술입니다.",
        "options": [
            { "value": "Facial recognition", "right": false },
            { "value": "Image classification", "right": false },
            { "value": "Object detection", "right": true },
            { "value": "Optical character recognition (OCR)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "사용자가 직접 제공한 이미지를 이용하여 객체 탐지(Object Detection) 모델을 학습하려면 어떤 서비스를 사용해야 합니까?",
        "explanation": "Custom Vision은 사용자가 직접 이미지를 업로드하여 객체 탐지 모델을 학습할 수 있는 서비스입니다. Computer Vision, Form Recognizer, Video Indexer는 객체 탐지 모델 학습에 적합하지 않습니다.",
        "options": [
            { "value": "Computer Vision", "right": false },
            { "value": "Custom Vision", "right": true },
            { "value": "Form Recognizer", "right": false },
            { "value": "Video Indexer", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "이미지를 Computer Vision API로 전송한 후, 주석이 추가된 이미지(annotated image)를 받았습니다.[ai900Q84.jpg] 사용된 컴퓨터 비전 기술은 무엇입니까?",
        "explanation": "객체 탐지(Object Detection)는 이미지 내 특정 객체를 감지하고, 경계 상자(Bounding Box)를 사용하여 해당 객체를 시각적으로 표시하는 기술입니다. 주석이 추가된 이미지는 일반적으로 객체 탐지를 통해 생성됩니다.",
        "options": [
            { "value": "객체 탐지 (Object Detection)", "right": true },
            { "value": "얼굴 탐지 (Face Detection)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false },
            { "value": "이미지 분류 (Image Classification)", "right": false }
        ],
        "correct": 0
}, {
        "type": "checkbox",
        "question": "Computer Vision 서비스를 사용하여 수행할 수 있는 두 가지 작업은 무엇입니까?",
        "explanation": "Computer Vision 서비스는 이미지에서 얼굴을 감지할 수 있으며, OCR을 사용하여 손글씨 텍스트를 인식할 수 있습니다. 하지만 사용자 지정 이미지 분류 모델을 학습하려면 Custom Vision이 필요하며, 이미지 속 텍스트를 번역하려면 Translator 서비스가 필요합니다.",
        "options": [
            { "value": "사용자 지정 이미지 분류 모델을 학습한다.", "right": false },
            { "value": "이미지에서 얼굴을 감지한다.", "right": true },
            { "value": "손글씨 텍스트를 인식한다.", "right": true },
            { "value": "이미지 속 텍스트를 번역한다.", "right": false }
        ],
        "correct": [1, 2]}, {
        "type": "radio",
        "question": "분류(Classification)의 활용 사례로 적절한 것은 무엇입니까?",
        "explanation": "분류(Classification)는 데이터를 특정 범주(예: 'Yes' 또는 'No')로 분류하는 데 사용됩니다. 자전거 이용 여부를 예측하는 문제는 이진 분류(Binary Classification)에 해당합니다.",
        "options": [
            { "value": "전날 몇 시간 잤는지를 기반으로 사람이 몇 잔의 커피를 마실지 예측하기", "right": false },
            { "value": "이미지의 내용을 분석하고 유사한 색상을 가진 이미지를 그룹화하기", "right": false },
            { "value": "집에서 직장까지의 거리를 기준으로 해당 사람이 자전거를 이용하는지 여부를 예측하기", "right": true },
            { "value": "과거 경주 기록을 기반으로 사람이 경주를 완주하는 데 걸리는 시간을 예측하기", "right": false }
        ],
        "correct": 2
}, {
        "type": "checkbox",
        "question": "⭐컴퓨터 비전(Computer Vision)을 사용하여 수행할 수 있는 두 가지 작업은 무엇입니까?",
        "explanation": "컴퓨터 비전은 이미지에서 브랜드 로고를 감지할 수 있으며, 색상 분석을 통해 주요 색상 팔레트를 감지할 수도 있습니다. 그러나 주식 예측, 언어 번역, 주요 문구 추출과 같은 작업은 다른 AI 기술이 필요합니다.",
        "options": [
            { "value": "주식 가격 예측", "right": false },
            { "value": "이미지에서 브랜드 감지", "right": true },
            { "value": "이미지의 색상 구성 감지", "right": true },
            { "value": "언어 간 텍스트 번역", "right": false },
            { "value": "주요 문구(Key Phrases) 추출", "right": false }
        ],
        "correct": [1, 2]}, {
        "type": "radio",
        "question": "소셜 미디어용 이미지 태깅 솔루션을 구축하려고 합니다. 이 솔루션은 자동으로 친구들의 얼굴을 태깅해야 합니다. 어떤 Azure Cognitive Services 서비스를 사용해야 합니까?",
        "explanation": "Azure Face 서비스는 얼굴 감지 및 인식을 제공하여 특정 사람을 자동으로 인식하고 태깅할 수 있습니다. 다른 서비스는 이미지 태깅과 관련이 없습니다.",
        "options": [
            { "value": "Face (얼굴 인식)", "right": true },
            { "value": "Form Recognizer (폼 인식기)", "right": false },
            { "value": "Text Analytics (텍스트 분석)", "right": false },
            { "value": "Computer Vision (컴퓨터 비전)", "right": false }
        ],
        "correct": 0
}, {
        "type": "checkbox",
        "question": "⭐Form Recognizer 서비스를 사용할 수 있는 두 가지 시나리오는 무엇입니까?",
        "explanation": "Form Recognizer는 영수증에서 소매업체 정보를 식별할 수 있으며, 청구서에서 청구서 번호를 자동으로 추출할 수 있습니다. 번역과 제품 이미지 검색은 다른 AI 서비스가 필요합니다.",
        "options": [
            { "value": "영수증에서 소매업체(Retailer) 식별하기", "right": true },
            { "value": "프랑스어에서 영어로 번역하기", "right": false },
            { "value": "청구서(Invoice)에서 청구서 번호 추출하기", "right": true },
            { "value": "카탈로그에서 제품 이미지 찾기", "right": false }
        ],
        "correct": [0, 2]
    }
    , {
        "type": "radio",
        "question": "디지털 사진에 대한 자동 캡션을 생성하는 데 사용할 수 있는 컴퓨터 비전 기능은 무엇입니까?",
        "explanation": "이미지 설명(Describe the images) 기능은 사진의 내용을 분석하고 해당 내용을 자연어로 설명하는 기능을 제공합니다. 따라서 자동 캡션 생성과 관련이 있습니다.",
        "options": [
            { "value": "텍스트 인식 (Recognize text)", "right": false },
            { "value": "관심 영역 식별 (Identify the areas of interest)", "right": false },
            { "value": "객체 감지 (Detect objects)", "right": false },
            { "value": "이미지 설명 (Describe the images)", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "스캔된 문서에서 텍스트, 키/값 쌍(Key/Value pairs), 표(Table data)를 자동으로 추출하려면 어떤 서비스를 사용해야 합니까?",
        "explanation": "Form Recognizer는 문서에서 텍스트, 키/값 쌍, 표 데이터를 자동으로 추출하는 서비스입니다. 영수증, 청구서, 계약서 등의 문서에서 데이터를 구조화된 형식으로 변환할 수 있습니다.",
        "options": [
            { "value": "Custom Vision (사용자 지정 비전)", "right": false },
            { "value": "Face (얼굴 인식)", "right": false },
            { "value": "Form Recognizer (폼 인식기)", "right": true },
            { "value": "Language (언어 서비스)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "손으로 작성된 문서에서 텍스트를 추출하는 기술은 무엇인가요?",
        "explanation": "OCR(광학 문자 인식)은 손글씨 또는 인쇄된 문서에서 텍스트를 감지하고 디지털 텍스트로 변환하는 기술입니다.",
        "options": [
            { "value": "객체 탐지 (Object detection)", "right": false },
            { "value": "얼굴 인식 (Facial recognition)", "right": false },
            { "value": "이미지 분류 (Image classification)", "right": false },
            { "value": "광학 문자 인식 (Optical character recognition, OCR)", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "Text Analytics 서비스를 사용하여 문서 모음에서 주요 논점을 식별해야 합니다. 어떤 유형의 자연어 처리를 사용해야 합니까?",
        "explanation": "Key Phrase Extraction(주요 문구 추출)은 문서에서 중요한 개념과 핵심 키워드를 자동으로 감지하는 기술입니다. 따라서 문서 내 주요 논점을 식별하는 데 가장 적절한 솔루션입니다.",
        "options": [
            { "value": "개체 인식 (Entity Recognition)", "right": false },
            { "value": "주요 문구 추출 (Key Phrase Extraction)", "right": true },
            { "value": "감정 분석 (Sentiment Analysis)", "right": false },
            { "value": "언어 감지 (Language Detection)", "right": false }
        ],
        "correct": 1
}, {
        "type": "checkbox",
        "question": "음성 인식(Speech Recognition)을 사용할 수 있는 두 가지 시나리오는 무엇입니까?",
        "explanation": "음성 인식(Speech Recognition)은 오디오에서 텍스트를 추출하는 기술입니다. 라이브 및 녹화된 영상의 자막 생성과 전화 통화 또는 회의 내용을 텍스트로 변환하는 작업에 적합합니다. 하지만, 자동차에서 문자 메시지를 읽어주는 기능과 기차역에서 자동 안내 방송을 제공하는 기능은 텍스트 음성 변환(Text-to-Speech, TTS)이 필요하므로 적절하지 않습니다.",
        "options": [
            { "value": "자동차 내 시스템이 문자 메시지를 소리 내어 읽어주는 기능", "right": false },
            { "value": "녹화된 영상 또는 라이브 비디오에 자막을 제공하는 기능", "right": true },
            { "value": "기차역에서 자동 안내 방송 시스템을 만드는 기능", "right": false },
            { "value": "전화 통화 또는 회의 내용을 텍스트로 변환하는 기능", "right": true }
        ],
        "correct": [1, 3]
    }
    , {
        "type": "radio",
        "question": "Text Analytics 서비스를 사용하여 문서 모음에서 주요 논점을 식별해야 합니다. 어떤 유형의 자연어 처리를 사용해야 합니까?",
        "explanation": "ai900Q96A.jpg,Key Phrase Extraction(주요 문구 추출)은 문서에서 중요한 개념과 핵심 키워드를 자동으로 감지하는 기술입니다. 따라서 문서 내 주요 논점을 식별하는 데 가장 적절한 솔루션입니다.",
        "options": [
            { "value": "개체 인식 (Entity Recognition)", "right": false },
            { "value": "주요 문구 추출 (Key Phrase Extraction)", "right": true },
            { "value": "감정 분석 (Sentiment Analysis)", "right": false },
            { "value": "언어 감지 (Language Detection)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "시각이 불편한 사용자를 지원하기 위해 레시피 지침을 소리 내어 읽어주는 앱을 개발해야 합니다. 어떤 버전의 서비스를 사용해야 합니까?",
        "explanation": "Speech 서비스는 텍스트를 음성으로 변환하는 TTS(Text-to-Speech) 기능을 제공하여, 레시피 지침을 소리 내어 읽어주는 데 적합합니다.",
        "options": [
            { "value": "Text Analytics (텍스트 분석)", "right": false },
            { "value": "Translator (번역기)", "right": false },
            { "value": "Speech (음성 서비스)", "right": true },
            { "value": "Language Understanding (LUIS)", "right": false }
        ],
        "correct": 2
    }
    ,
    {
        "type": "radio",
        "question": "Speech 서비스를 사용하여 통화를 텍스트로 변환할 수 있습니다.",
        "explanation": "Speech 서비스의 Speech to Text(STT) 기능을 사용하면 통화 내용을 텍스트로 변환할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Text Analytics 서비스를 사용하여 통화 기록에서 주요 엔터티를 추출할 수 있습니다.",
        "explanation": "Text Analytics 서비스의 개체 인식(Entity Recognition) 기능을 사용하면 통화 기록에서 주요 엔터티를 추출할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Speech 서비스를 사용하여 통화 오디오를 다른 언어로 번역할 수 있습니다.",
        "explanation": "Speech Translator 기능을 사용하면 통화 오디오를 실시간으로 번역하여 다른 언어로 변환할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "⭐귀하의 웹사이트에는 고객을 지원하는 챗봇이 있습니다. 고객이 챗봇에 입력하는 내용을 기반으로 고객이 화가 났는지 감지해야 합니다. 어떤 유형의 AI 워크로드를 사용해야 합니까?",
        "explanation": "자연어 처리(Natural Language Processing, NLP)는 텍스트 데이터를 분석하고 감정을 감지하는 기술입니다. 감정 분석(Sentiment Analysis)을 통해 고객이 화가 났는지 감지할 수 있습니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "회귀 분석 (Regression)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "checkbox",
        "question": "사용자가 자연어 처리를 사용하여 지식 베이스를 조회할 수 있는 봇을 개발할 계획입니다. 해결책에 포함해야 하는 두 가지 서비스를 선택하세요.",
        "explanation": "QnA Maker는 지식 베이스 기반의 챗봇을 생성하는 서비스이며, Azure Bot Service는 챗봇을 구축하고 배포할 수 있는 플랫폼입니다. 이 두 서비스를 결합하면 자연어 처리를 활용한 지식 조회 봇을 개발할 수 있습니다.",
        "options": [
            { "value": "QnA Maker", "right": true },
            { "value": "Azure Bot Service", "right": true },
            { "value": "Form Recognizer", "right": false },
            { "value": "Anomaly Detector", "right": false }
        ],
        "correct": [0,1]
},
    {
        "type": "checkbox",
        "question": "다음 두 가지 시나리오에서 음성 합성(Speech Synthesis) 솔루션을 사용할 수 있습니다.",
        "explanation": "음성 합성(Speech Synthesis, TTS)은 텍스트를 음성으로 변환하는 기술입니다. 전화 키패드 입력 내용을 자동 음성으로 읽어주거나, AI 게임 캐릭터가 말하는 기능은 TTS의 대표적인 사용 사례입니다.",
        "options": [
            { "value": "전화에서 숫자 키패드를 사용하여 입력한 신용카드 번호를 자동 음성으로 읽어주는 기능", "right": true },
            { "value": "뉴스 방송을 위한 실시간 자막 생성", "right": false },
            { "value": "회의 오디오 녹음에서 주요 문구를 추출하는 기능", "right": false },
            { "value": "컴퓨터 게임에서 플레이어에게 들리는 AI 캐릭터의 음성 생성", "right": true }
        ],
        "correct": [0, 3]
    }
    , {
        "type": "radio",
        "question": "Translator 서비스를 사용하여 텍스트를 다른 언어로 번역할 수 있습니다.",
        "explanation": "Translator 서비스는 다양한 언어 간의 텍스트 번역 기능을 제공합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Translator 서비스를 사용하여 주어진 텍스트의 언어를 감지할 수 있습니다.",
        "explanation": "Translator 서비스에는 텍스트의 언어를 자동 감지하는 Language Detection 기능이 포함되어 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Translator 서비스를 사용하여 들리는 음성을 텍스트로 변환할 수 있습니다.",
        "explanation": "음성을 텍스트로 변환하는 기능은 Speech 서비스에서 제공되며, Translator 서비스는 이 기능을 지원하지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
    }
    ,
    {
        "type": "checkbox",
        "question": "[DragDrop]뉴스에서 고객에 대한 기사를 검색하고, 부정적인 기사가 있으면 직원에게 알림을 보내야 합니다. 긍정적인 기사는 보도자료(press book)에 추가해야 합니다. 이 프로세스를 완료하려면 어떤 자연어 처리(NLP) 작업을 사용해야 하나요? [ai900Q103.jpg]",
        "explanation": "ai900Q103A.jpg<br>",
        "options": [
            { "value": "개체 인식 (Entity Recognition)", "right": true },
            { "value": "감정 분석 (Sentiment Analysis)", "right": true },
            { "value": "음성 합성 (Speech Synthesis)", "right": false },
            { "value": "번역 (Translation)", "right": false }
        ],
        "correct": [0, 1]
    }
    , {
        "type": "radio",
        "question": "QnA Maker를 사용하여 지식 베이스를 구축하고 있습니다. 지식 베이스를 채우는 데 사용할 수 있는 파일 형식은 무엇인가요?",
        "explanation": "QnA Maker는 PDF 파일을 직접 업로드하여 지식 베이스를 구축할 수 있습니다. PPTX, XML, ZIP 파일은 지원되지 않습니다.",
        "options": [
            { "value": "PPTX (파워포인트 파일)", "right": false },
            { "value": "XML (XML 데이터 파일)", "right": false },
            { "value": "ZIP (압축 파일)", "right": false },
            { "value": "PDF (PDF 문서)", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "어떤 시나리오에서 주요 문구 추출(Key Phrase Extraction)을 사용해야 하나요?",
        "explanation": "주요 문구 추출(Key Phrase Extraction)은 문서에서 중요한 개념과 핵심 키워드를 자동으로 감지하는 기능입니다. 이를 활용하면 동일한 주제의 문서를 그룹화하는 데 유용합니다.",
        "options": [
            { "value": "식당 리뷰가 긍정적인지 부정적인지 식별하기", "right": false },
            { "value": "오디오 트랙을 기반으로 동영상 캡션 생성하기", "right": false },
            { "value": "동일한 주제에 대한 정보를 제공하는 문서 식별하기", "right": true },
            { "value": "영어 문서를 독일어로 번역하기", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "보험 청구 보고서가 텍스트 형식으로 저장되어 있습니다. 보고서에서 핵심 용어를 추출하여 요약을 생성해야 합니다. 어떤 유형의 AI 워크로드를 사용해야 합니까?",
        "explanation": "자연어 처리(Natural Language Processing, NLP)는 텍스트 데이터를 분석하고 주요 용어를 추출하는 기능을 제공합니다. 보고서 요약을 생성하는 데 적합한 솔루션입니다.",
        "options": [
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": true },
            { "value": "대화형 AI (Conversational AI)", "right": false },
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐자연어 처리는 ______에 사용할 수 있습니다.",
        "explanation": "ai900Q107A.jpg<br>자연어 처리(NLP)는 텍스트를 분석하고 분류하는 데 사용됩니다. 예를 들어, 이메일의 내용을 분석하여 업무 관련 메시지인지 개인 메시지인지 자동으로 분류할 수 있습니다.",
        "options": [
            { "value": "이메일 메시지를 업무 관련 또는 개인적인 것으로 분류하기", "right": true },
            { "value": "미래 자동차 대여 수를 예측하기", "right": false },
            { "value": "어떤 웹사이트 방문자가 거래를 할 것인지 예측하기", "right": false },
            { "value": "공장에서 극도로 높은 온도가 감지되었을 때 프로세스를 중지하기", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "사용자의 입력(예: 'Call me back later')의 의미를 해석하는 데 사용할 수 있는 AI 서비스는 무엇인가요?",
        "explanation": "Language Understanding (LUIS)은 자연어 이해(NLU)를 통해 사용자의 입력을 분석하고 의도를 파악하는 기능을 제공합니다.",
        "options": [
            { "value": "Translator (번역 서비스)", "right": false },
            { "value": "Text Analytics (텍스트 분석 서비스)", "right": false },
            { "value": "Speech (음성 서비스)", "right": false },
            { "value": "Language Understanding (LUIS, 언어 이해 서비스)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "Azure에서 챗봇 솔루션을 개발하고 있습니다. 사용자의 의도를 파악하는 데 사용할 수 있는 서비스는 무엇인가요?",
        "explanation": "Language Understanding (LUIS)는 자연어 이해(NLU)를 통해 사용자의 입력을 분석하고 의도를 파악하는 기능을 제공합니다.",
        "options": [
            { "value": "Translator (번역 서비스)", "right": false },
            { "value": "QnA Maker (질문-응답 자동 생성 서비스)", "right": false },
            { "value": "Speech (음성 서비스)", "right": false },
            { "value": "Language Understanding (LUIS, 언어 이해 서비스)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "귀사의 보도자료(Press Releases)를 다양한 언어로 제공해야 합니다. 어떤 서비스를 사용해야 합니까?",
        "explanation": "Translator 서비스는 텍스트를 여러 언어로 자동 번역하는 기능을 제공하므로, 보도자료를 다양한 언어로 변환하는 데 적합한 솔루션입니다.",
        "options": [
            { "value": "Translator (번역 서비스)", "right": true },
            { "value": "Text Analytics (텍스트 분석 서비스)", "right": false },
            { "value": "Speech (음성 서비스)", "right": false },
            { "value": "Language Understanding (LUIS, 언어 이해 서비스)", "right": false }
        ],
        "correct": 0
},

    {
        "type": "radio",
        "question": "Text Analytics 서비스는 텍스트가 작성된 언어를 식별할 수 있다.",
        "explanation": "Text Analytics 서비스에는 '언어 감지(Language Detection)' 기능이 포함되어 있어 입력된 텍스트의 언어를 자동으로 감지할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Text Analytics 서비스는 문서에서 필기된 서명을 감지할 수 있다.",
        "explanation": "필기된 서명 감지는 OCR(광학 문자 인식) 및 Computer Vision 기술이 필요합니다. Text Analytics 서비스는 이를 지원하지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Text Analytics 서비스는 문서에서 회사 및 조직을 식별할 수 있다.",
        "explanation": "Text Analytics 서비스의 '개체 인식(Entity Recognition)' 기능을 사용하면 문서에서 기업, 조직, 인물 등의 개체를 자동으로 추출할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "다음 중 텍스트에서 사람, 위치 및 조직을 추출하는 작업 유형은 무엇입니까?",
        "explanation": "ai900Q112A.jpg<br>개체 인식(Entity Recognition)은 텍스트에서 인물, 장소, 조직 등의 개체를 자동으로 감지하는 기술입니다.",
        "options": [
            { "value": "Entity recognition (개체 인식)", "right": true },
            { "value": "Key phrase extraction (주요 문구 추출)", "right": false },
            { "value": "Language modeling (언어 모델링)", "right": false },
            { "value": "Sentiment analysis (감정 분석)", "right": false },
            { "value": "Translation (번역)", "right": false },
            { "value": "Speech recognition and speech synthesis (음성 인식 및 음성 합성)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "다음 중 텍스트를 긍정-부정 척도로 평가하는 작업 유형은 무엇입니까?",
        "explanation": "ai900Q112A.jpg<br>감정 분석(Sentiment Analysis)은 텍스트의 감정을 분석하여 긍정, 부정 또는 중립으로 평가하는 기술입니다.",
        "options": [
            { "value": "Entity recognition (개체 인식)", "right": false },
            { "value": "Key phrase extraction (주요 문구 추출)", "right": false },
            { "value": "Language modeling (언어 모델링)", "right": false },
            { "value": "Sentiment analysis (감정 분석)", "right": true },
            { "value": "Translation (번역)", "right": false },
            { "value": "Speech recognition and speech synthesis (음성 인식 및 음성 합성)", "right": false }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "다음 중 텍스트를 다른 언어로 변환하는 작업 유형은 무엇입니까?",
        "explanation": "ai900Q112A.jpg<br>번역(Translation) 서비스는 한 언어의 텍스트를 다른 언어로 변환하는 기능을 제공합니다.",
        "options": [
            { "value": "Entity recognition (개체 인식)", "right": false },
            { "value": "Key phrase extraction (주요 문구 추출)", "right": false },
            { "value": "Language modeling (언어 모델링)", "right": false },
            { "value": "Sentiment analysis (감정 분석)", "right": false },
            { "value": "Translation (번역)", "right": true },
            { "value": "Speech recognition and speech synthesis (음성 인식 및 음성 합성)", "right": false }
        ],
        "correct": 4
    }
    , {
        "type": "radio",
        "question": "⭐온라인 서비스 리뷰에서 욕설을 감지하는 것은 자연어 처리의 예시인가?",
        "explanation": "욕설 감지는 텍스트 분석과 감정 분석을 활용하여 수행되며, 자연어 처리(NLP)의 대표적인 사용 사례입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐이미지에서 브랜드 로고를 식별하는 것은 자연어 처리의 예시인가?",
        "explanation": "이미지에서 브랜드 로고를 식별하는 것은 컴퓨터 비전(Computer Vision) 기술을 사용하며, 자연어 처리(NLP)와 관련이 없습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "⭐공개된 뉴스 사이트에서 제품에 대한 부정적인 언급을 모니터링하는 것은 자연어 처리의 예시인가?",
        "explanation": "뉴스 사이트에서 제품 리뷰를 수집하고 감정 분석(Sentiment Analysis)을 수행하여 부정적인 언급을 감지하는 것은 NLP의 중요한 활용 사례입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Azure에서 자연어 처리(NLP) 솔루션을 개발하고 있습니다. 이 솔루션은 고객 리뷰를 분석하고 각 리뷰가 긍정적인지 또는 부정적인지 판단해야 합니다. 이것은 어떤 유형의 자연어 처리 작업에 해당하나요?",
        "explanation": "감정 분석(Sentiment Analysis)은 텍스트의 감정을 분석하여 긍정, 부정 또는 중립으로 평가하는 기능을 제공합니다. 고객 리뷰의 감정을 분석하는 것은 감정 분석의 대표적인 사례입니다.",
        "options": [
            { "value": "언어 감지 (Language Detection)", "right": false },
            { "value": "감정 분석 (Sentiment Analysis)", "right": true },
            { "value": "주요 문구 추출 (Key Phrase Extraction)", "right": false },
            { "value": "개체 인식 (Entity Recognition)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "⭐다음 유형의 자연어 처리(NLP)가 수행되었습니다. 어떤 유형의 NLP 작업이 적용되었나요?[ai900Q115.jpg]",
        "explanation": "개체 인식(Entity Recognition)은 텍스트에서 특정 개체(예: 인물, 조직, 위치, 숫자)를 자동으로 식별하는 기능입니다. 이미지에서 단어들이 'PersonType', 'Organization', 'Location' 등으로 태깅된 것이 확인되므로, 이는 개체 인식의 예시입니다.",
        "options": [
            { "value": "개체 인식 (Entity Recognition)", "right": true },
            { "value": "주요 문구 추출 (Key Phrase Extraction)", "right": false },
            { "value": "감정 분석 (Sentiment Analysis)", "right": false },
            { "value": "번역 (Translation)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "[DragDrop]기술 지원 티켓 시스템에 Text Analytics API 기능을 적용하려고 합니다.자연어 처리(NLP) 시나리오에 적합한 API 기능을 매칭하세요.<br>고객이 지원 티켓에서 얼마나 화가 났는지를 이해하는 데 사용할 API 기능은 무엇입니까?",
        "explanation": "ai900Q116A.jpg<br>감정 분석(Sentiment Analysis)은 텍스트의 감정을 분석하여 긍정, 부정 또는 중립을 평가하는 기능입니다. 지원 티켓에서 사용자의 불만 여부를 분석하는 데 적합합니다.",
        "options": [
            { "value": "Entity recognition (개체 인식)", "right": false },
            { "value": "Key phrase extraction (주요 문구 추출)", "right": false },
            { "value": "Language detection (언어 감지)", "right": false },
            { "value": "Sentiment analysis (감정 분석)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "[DragDrop]기술 지원 티켓 시스템에 Text Analytics API 기능을 적용하려고 합니다.자연어 처리(NLP) 시나리오에 적합한 API 기능을 매칭하세요.<br>지원 티켓에서 중요한 정보를 요약하는 데 사용할 API 기능은 무엇입니까?",
        "explanation": "ai900Q116A.jpg<br>주요 문구 추출(Key Phrase Extraction)은 텍스트에서 핵심 단어나 문구를 추출하는 기능입니다. 지원 티켓에서 문제의 주요 내용을 빠르게 요약하는 데 사용할 수 있습니다.",
        "options": [
            { "value": "Entity recognition (개체 인식)", "right": false },
            { "value": "Key phrase extraction (주요 문구 추출)", "right": true },
            { "value": "Language detection (언어 감지)", "right": false },
            { "value": "Sentiment analysis (감정 분석)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "[DragDrop]기술 지원 티켓 시스템에 Text Analytics API 기능을 적용하려고 합니다.자연어 처리(NLP) 시나리오에 적합한 API 기능을 매칭하세요.<br>지원 티켓에서 주요 날짜를 추출하는 데 사용할 API 기능은 무엇입니까?",
        "explanation": "ai900Q116A.jpg<br>개체 인식(Entity Recognition)은 텍스트에서 날짜, 인물, 장소, 조직 등의 개체를 자동으로 감지하는 기능입니다. 지원 티켓에서 날짜 정보를 추출하는 데 적합합니다.",
        "options": [
            { "value": "Entity recognition (개체 인식)", "right": true },
            { "value": "Key phrase extraction (주요 문구 추출)", "right": false },
            { "value": "Language detection (언어 감지)", "right": false },
            { "value": "Sentiment analysis (감정 분석)", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "음악 페스티벌을 지원하는 Language Understanding (LUIS) 애플리케이션을 제작하고 있습니다. 사용자가 공연 일정에 대해 질문할 수 있도록 하려 합니다. 예제 질문: 'Which act is playing on the main stage?' 이 질문은 LUIS의 어떤 요소 유형에 해당하나요?",
        "explanation": "발화(Utterance)는 사용자가 입력하는 실제 문장을 의미합니다. 'Which act is playing on the main stage?' 는 LUIS가 학습하는 예제 문장 중 하나이므로, 이는 발화(Utterance)에 해당합니다.",
        "options": [
            { "value": "의도 (Intent)", "right": false },
            { "value": "발화 (Utterance)", "right": true },
            { "value": "도메인 (Domain)", "right": false },
            { "value": "엔터티 (Entity)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "FAQ 페이지를 사용하여 QnA Maker 봇을 구축했습니다. 이제 전문적인 인사말 및 기타 응답을 추가하여 봇을 더 사용자 친화적으로 만들려 합니다. 이 작업을 수행하려면 무엇을 해야 하나요?",
        "explanation": "Chit-chat(잡담) 기능을 추가하면, 인사말, 친절한 응답, 일반적인 대화를 포함할 수 있습니다. 이를 통해 봇이 보다 인간적인 대화를 제공할 수 있습니다.",
        "options": [
            { "value": "응답의 신뢰도 임계값을 증가시키기", "right": false },
            { "value": "능동 학습(Active Learning) 활성화", "right": false },
            { "value": "다중 턴 질문(Multi-turn Questions) 생성", "right": false },
            { "value": "잡담(Chit-chat) 추가", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "웹사이트용 챗봇(Chatbot)을 개발해야 합니다. 이 챗봇은 다음 문서의 정보를 기반으로 사용자의 질문에 답해야 합니다.\n\n- Microsoft Word 문서로 된 제품 문제 해결 가이드\n- 웹페이지에 있는 자주 묻는 질문(FAQ) 목록\n\n이 문서를 처리하는 데 사용할 서비스는 무엇입니까?",
        "explanation": "QnA Maker는 FAQ 및 문서를 기반으로 자동으로 질문과 답변을 생성하는 서비스입니다. 제품 가이드 및 FAQ 문서를 업로드하면 챗봇이 자동으로 응답을 생성할 수 있습니다.",
        "options": [
            { "value": "Azure Bot Service", "right": false },
            { "value": "Language Understanding (LUIS)", "right": false },
            { "value": "Text Analytics", "right": false },
            { "value": "QnA Maker", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "전자상거래(e-commerce) 비즈니스를 위한 Language Understanding (LUIS) 모델을 구축하고 있습니다. 이 모델이 의도(Intent) 범위를 벗어나는 발화(Utterance)를 감지할 수 있도록 해야 합니다. 이를 위해 무엇을 해야 하나요?",
        "explanation": "None 인텐트(None Intent)는 LUIS 모델이 처리할 수 없는 발화를 감지하는 기본 인텐트입니다. 범위 밖의 질문을 효과적으로 분류하고 적절한 응답을 제공하기 위해, None 인텐트에 발화를 추가해야 합니다.",
        "options": [
            { "value": "새로운 발화를 사용하여 모델을 테스트하기", "right": false },
            { "value": "None 인텐트(None Intent)에 발화를 추가하기", "right": true },
            { "value": "사전 구축된 태스크 엔터티(Prebuilt Task Entity) 생성하기", "right": false },
            { "value": "새로운 모델을 생성하기", "right": false }
        ],
        "correct": 1
    }
    ,
    {
        "type": "checkbox",
        "question": "다음 중 자연어 처리(NLP) 작업의 예시에 해당하는 두 가지 시나리오는 무엇인가요?",
        "explanation": "자연어 처리는 텍스트 또는 음성을 분석하여 의미를 이해하는 AI 기술입니다. 사용자의 질문에 답변하는 스마트 기기와 지식 기반을 활용한 웹사이트는 NLP의 대표적인 활용 사례입니다.",
        "options": [
            { "value": "기계의 온도를 모니터링하여 특정 임계값에 도달하면 팬을 켜는 작업", "right": false },
            { "value": "스마트 홈 기기가 '오늘 날씨는 어때?'와 같은 질문에 응답하는 기능", "right": true },
            { "value": "지식 기반을 사용하여 사용자 질문에 대화형으로 응답하는 웹사이트", "right": true },
            { "value": "자동으로 자동차에 헤드램프를 삽입하는 조립 라인 기계", "right": false }
        ],
        "correct": [1, 2]
    }
    , {
        "type": "checkbox",
        "question": "스마트 기기를 음성 명령(verbal commands)으로 제어할 수 있는 AI 솔루션이 있습니다. 이 솔루션에서 사용되는 두 가지 자연어 처리(NLP) 작업 유형은 무엇인가요?",
        "explanation": "음성 명령을 처리하려면 Speech-to-Text(STT) 기능이 필요하며, 기기가 응답할 때는 Text-to-Speech(TTS)가 사용됩니다. 따라서 STT와 TTS가 정답입니다.",
        "options": [
            { "value": "텍스트를 음성으로 변환 (Text-to-Speech, TTS)", "right": true },
            { "value": "주요 문구 추출 (Key Phrase Extraction)", "right": false },
            { "value": "음성을 텍스트로 변환 (Speech-to-Text, STT)", "right": true },
            { "value": "언어 모델링 (Language Modeling)", "right": false },
            { "value": "번역 (Translation)", "right": false }
        ],
        "correct": [0, 2]},
    {
        "type": "radio",
        "question": "사용자의 음성을 텍스트로 변환하는 데 적절한 Azure Cognitive Service는 무엇입니까?",
        "explanation": "Speech 서비스의 Speech-to-Text(STT) 기능은 음성을 텍스트로 변환하는 기능을 제공합니다.",
        "options": [
            { "value": "Speech", "right": true },
            { "value": "Language service", "right": false },
            { "value": "Translator Text", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "사용자의 의도를 식별하는 데 적절한 Azure Cognitive Service는 무엇입니까?",
        "explanation": "Language service (LUIS)는 사용자의 입력을 분석하여 의도를 분류하는 기능을 제공합니다.",
        "options": [
            { "value": "Speech", "right": false },
            { "value": "Language service", "right": true },
            { "value": "Translator Text", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "사용자에게 음성으로 응답을 제공하는 데 적절한 Azure Cognitive Service는 무엇입니까?",
        "explanation": "Speech 서비스의 Text-to-Speech(TTS) 기능은 텍스트를 음성으로 변환하여 사용자에게 응답하는 기능을 제공합니다.",
        "options": [
            { "value": "Speech", "right": true },
            { "value": "Language service", "right": false },
            { "value": "Translator Text", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "[DragDrop]사용자의 음성을 텍스트로 변환하는 데 적절한 Azure Cognitive Service는 무엇입니까?",
        "explanation": "ai900Q124A.jpg<br>음성 (Speech) 서비스의 Speech-to-Text(STT) 기능은 음성을 텍스트로 변환하는 기능을 제공합니다.",
        "options": [
            { "value": "음성 (Speech)", "right": true },
            { "value": "언어 서비스 (Language service)", "right": false },
            { "value": "번역기 (Translator Text)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "[DragDrop]사용자의 의도를 식별하는 데 적절한 Azure Cognitive Service는 무엇입니까?",
        "explanation": "ai900Q124A.jpg<br>언어 서비스 (Language service, LUIS)는 사용자의 입력을 분석하여 의도를 분류하는 기능을 제공합니다.",
        "options": [
            { "value": "음성 (Speech)", "right": false },
            { "value": "언어 서비스 (Language service)", "right": true },
            { "value": "번역기 (Translator Text)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "[DragDrop]사용자에게 음성으로 응답을 제공하는 데 적절한 Azure Cognitive Service는 무엇입니까?",
        "explanation": "ai900Q124A.jpg<br>음성 (Speech) 서비스의 Text-to-Speech(TTS) 기능은 텍스트를 음성으로 변환하여 사용자에게 응답하는 기능을 제공합니다.",
        "options": [
            { "value": "음성 (Speech)", "right": true },
            { "value": "언어 서비스 (Language service)", "right": false },
            { "value": "번역기 (Translator Text)", "right": false }
        ],
        "correct": 0
    }

    , {
        "type": "radio",
        "question": "귀사의 보도자료(Press Releases)를 다양한 언어로 제공해야 합니다. 어떤 서비스를 사용해야 합니까?",
        "explanation": "Azure Translator 서비스는 텍스트를 여러 언어로 자동 번역하는 기능을 제공하므로, 보도자료를 다양한 언어로 변환하는 데 적합한 솔루션입니다.",
        "options": [
            { "value": "음성 (Speech)", "right": false },
            { "value": "언어 (Language)", "right": false },
            { "value": "번역기 (Translator)", "right": true },
            { "value": "개인화 서비스 (Personalizer)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "보험 청구 보고서가 텍스트 형식으로 저장되어 있습니다. 이 보고서에서 핵심 용어를 추출하여 요약을 생성해야 합니다. 어떤 유형의 AI 워크로드를 사용해야 합니까?",
        "explanation": "자연어 처리(Natural Language Processing, NLP)는 텍스트 데이터를 분석하고 주요 용어를 추출하는 기능을 제공합니다. 보험 보고서를 분석하여 요약을 생성하는 데 적합한 솔루션입니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": true },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "지식 마이닝 (Knowledge Mining)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "시각이 불편한 사용자를 지원하기 위해 레시피 지침을 음성으로 읽어주는 앱을 개발해야 합니다. 어떤 Azure Cognitive Services를 사용해야 합니까?",
        "explanation": "Azure Speech 서비스는 Text-to-Speech (TTS) 기능을 제공하여 텍스트를 자연스러운 음성으로 변환할 수 있습니다. 이는 시각이 불편한 사용자를 지원하는 데 적합한 솔루션입니다.",
        "options": [
            { "value": "언어 서비스 (Language Service)", "right": false },
            { "value": "번역기 (Translator)", "right": false },
            { "value": "음성 (Speech)", "right": true },
            { "value": "개인화 서비스 (Personalizer)", "right": false }
        ],
        "correct": 2
    }
    , {
        "type": "radio",
        "question": "QnA Maker 지식 기반(Knowledge Base)을 사용하는 웹 채팅 봇(Webchat Bot)이 있습니다. 이 봇이 사용자 피드백을 활용하여 시간이 지나면서 응답의 정확도를 개선하도록 해야 합니다. 이를 위해 어떤 기능을 사용해야 합니까?",
        "explanation": "Active Learning(능동 학습)은 QnA Maker에서 사용자 피드백을 활용하여 자동으로 응답을 개선하는 기능입니다. 이를 통해 시간이 지나면서 더 적절한 응답을 제공할 수 있습니다.",
        "options": [
            { "value": "주요 문구 추출 (Key Phrase Extraction)", "right": false },
            { "value": "감정 분석 (Sentiment Analysis)", "right": false },
            { "value": "비즈니스 로직 (Business Logic)", "right": false },
            { "value": "능동 학습 (Active Learning)", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "⭐여러 채널(이메일, Microsoft Teams, 웹채팅)에서 사용자와 대화하는 AI 솔루션을 개발하고 있습니다. 이 솔루션을 구축하는 데 적합한 서비스는 무엇입니까?",
        "explanation": "Azure Bot Service는 여러 채널(Microsoft Teams, 이메일, 웹채팅 등)에서 작동하는 AI 기반 챗봇을 구축할 수 있도록 지원하는 서비스입니다. 다양한 플랫폼과 연동할 수 있는 기능을 제공하므로, 대화형 AI 솔루션 구축에 적합합니다.",
        "options": [
            { "value": "텍스트 분석 (Text Analytics)", "right": false },
            { "value": "Azure 봇 서비스 (Azure Bot Service)", "right": true },
            { "value": "번역기 (Translator)", "right": false },
            { "value": "양식 인식기 (Form Recognizer)", "right": false }
        ],
        "correct": 1
    }
    ,
    {
        "type": "radio",
        "question": "내부 사용자의 질문에 응답하는 봇은 대화형 AI 워크로드의 예시입니까?",
        "explanation": "대화형 AI(Conversational AI)는 사용자의 질문을 이해하고 응답을 제공하는 AI 기술입니다. 내부 사용자 질문에 응답하는 봇은 대화형 AI의 대표적인 예시입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "입력된 검색어와 관련된 이미지를 표시하는 애플리케이션은 대화형 AI 워크로드의 예시입니까?",
        "explanation": "이미지 검색 시스템은 정보 검색(Information Retrieval) 및 컴퓨터 비전과 관련이 있으며, 대화형 AI와 직접적인 연관이 없습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "비밀번호 재설정을 요청하는 웹 양식은 대화형 AI 워크로드의 예시입니까?",
        "explanation": "비밀번호 재설정 요청 양식은 단순한 입력/출력 프로세스로, AI 기반 대화형 기능이 포함되지 않으므로 대화형 AI 워크로드에 해당하지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "FAQ PDF 파일이 있습니다. 이를 기반으로 대화형 지원 시스템(Conversational Support System)을 만들어야 합니다. 어떤 서비스를 사용해야 합니까?",
        "explanation": "QnA Maker는 기존의 FAQ 문서를 기반으로 챗봇을 생성하는 서비스입니다. PDF, 웹페이지, SharePoint 문서 등에서 자동으로 질문과 답변을 추출하여 챗봇을 구성할 수 있습니다.",
        "options": [
            { "value": "QnA Maker", "right": true },
            { "value": "텍스트 분석 (Text Analytics)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "언어 이해 (Language Understanding, LUIS)", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "checkbox",
        "question": "전화 상담원의 부담을 줄이기 위해 사전 정의된 답변을 제공하는 챗봇을 구현해야 합니다. 이를 위해 어떤 두 가지 AI 서비스를 사용해야 합니까?",
        "explanation": "QnA Maker는 미리 정의된 질문과 답변을 기반으로 챗봇을 구축할 수 있는 서비스이며, Azure Bot Service는 이를 실제 챗봇으로 구현하고 다양한 플랫폼에 배포하는 기능을 제공합니다.",
        "options": [
            { "value": "텍스트 분석 (Text Analytics)", "right": false },
            { "value": "QnA Maker", "right": true },
            { "value": "Azure Bot Service", "right": true },
            { "value": "번역기 (Translator)", "right": false }
        ],
        "correct": [1, 2]}, {
        "type": "radio",
        "question": "웹 기반 AI 솔루션을 사용하여 고객 지원 시스템을 개발해야 합니다. 사용자는 웹 애플리케이션과 상호작용하며 최적의 정보 또는 답변을 찾을 수 있어야 합니다. 이를 위해 어떤 서비스를 사용해야 합니까?",
        "explanation": "QnA Maker는 미리 정의된 질문과 답변을 활용하여 챗봇을 구축하는 AI 서비스입니다. FAQ 페이지, 고객 지원 문서 등을 기반으로 자동 응답 시스템을 구축할 수 있어 고객 지원 시스템에 적합합니다.",
        "options": [
            { "value": "맞춤형 비전 (Custom Vision)", "right": false },
            { "value": "QnA Maker", "right": true },
            { "value": "번역기 (Translator Text)", "right": false },
            { "value": "얼굴 인식 (Face)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "사용자가 애플리케이션에 입력한 질문에 대해 대화형으로 응답하는 기능은 무엇의 예입니까?",
        "explanation": "ai900Q138A.jpg<br>대화형 AI(Conversational AI)는 사용자의 질문을 이해하고 실시간으로 응답하는 AI 시스템입니다. 챗봇이나 가상 비서가 이러한 기능을 제공합니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "대화형 AI (Conversational AI)", "right": true },
            { "value": "예측 (Forecasting)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "다음 중 웹챗 봇(Webchat Bot)의 예시는 무엇입니까?",
        "explanation": "웹챗 봇은 웹사이트 인터페이스에서 사용자의 질문에 실시간으로 응답하는 대화형 AI 서비스입니다. 음악 축제의 일정 및 티켓 구매 관련 질문에 응답하는 기능이 웹챗 봇의 대표적인 예시입니다.",
        "options": [
            { "value": "콘서트 리뷰가 긍정적인지 또는 부정적인지를 분석한 후, 리뷰에 엄지손가락 위/아래 이모지를 추가하는 기능", "right": false },
            { "value": "키오스크에서 고객이 입력한 질문을 영어로 번역하여 적절한 담당자가 고객에게 전화를 걸 수 있도록 하는 기능", "right": false },
            { "value": "이메일을 통해 질문을 받고, 메시지 내용을 기반으로 적절한 담당자에게 이메일을 라우팅하는 기능", "right": false },
            { "value": "웹사이트 인터페이스에서 음악 축제의 일정 및 티켓 구매 관련 일반적인 질문에 답변하는 기능", "right": true }
        ],
        "correct": 3
    }
    ,
    {
        "type": "radio",
        "question": "QnA Maker를 사용하여 Azure SQL 데이터베이스를 조회할 수 있습니까?",
        "explanation": "QnA Maker는 사전 정의된 Q&A 목록을 기반으로 응답하는 서비스이며, SQL 데이터베이스에서 직접 정보를 조회하는 기능은 제공하지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "유사한 질문을 제출한 여러 사용자에게 동일한 답변을 제공하는 지식 기반이 필요할 때 QnA Maker를 사용해야 합니까?",
        "explanation": "QnA Maker는 자주 묻는 질문(FAQ) 및 문서 기반 지식 기반을 사용하여 동일한 질문에 대해 자동으로 일관된 응답을 제공할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "QnA Maker 서비스는 사용자의 발화에서 의도를(Intent) 파악할 수 있습니까?",
        "explanation": "사용자의 의도를 분석하는 기능은 QnA Maker가 아닌 LUIS(Language Understanding) 서비스에서 제공됩니다. QnA Maker는 단순한 질문과 답변 매칭을 수행합니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "레스토랑은 웹사이트 또는 앱을 통해 고객이 예약을 할 수 있도록 챗봇을 사용할 수 있습니까?",
        "explanation": "Azure Bot Service 및 QnA Maker를 사용하여 예약 관련 자동 응답 시스템을 구축할 수 있으며, 웹사이트 또는 모바일 앱과 통합하여 예약 기능을 제공할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "레스토랑은 웹페이지에서 영업 시간에 대한 문의에 응답하기 위해 챗봇을 사용할 수 있습니까?",
        "explanation": "웹사이트 내 챗봇을 활용하여 영업 시간과 같은 자주 묻는 질문(FAQ)에 대한 자동 응답을 제공할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "레스토랑은 외부 웹사이트에서 고객 리뷰에 대한 응답을 자동화하기 위해 챗봇을 사용할 수 있습니까?",
        "explanation": "대부분의 외부 웹사이트(예: Yelp, Google 리뷰)에서는 AI 챗봇이 직접 응답하는 기능을 공식적으로 제공하지 않습니다. 일부 API를 활용하여 감정 분석 후 응답 추천은 가능하지만, 챗봇이 직접 댓글을 게시하는 기능은 제한적입니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "checkbox",
        "question": "다음 중 대화형 AI(Conversational AI) 워크로드의 예시에 해당하는 두 가지 시나리오는 무엇인가요?",
        "explanation": "대화형 AI는 사용자의 입력을 분석하고 실시간으로 응답하는 시스템입니다. 웹챗을 제공하는 챗봇(B)과 전화 음성 메뉴를 통한 AI 서비스(C)는 대화형 AI의 대표적인 사례입니다.",
        "options": [
            { "value": "사전 녹음된 메시지를 제공하는 전화 응답 서비스", "right": false },
            { "value": "사용자가 웹사이트에서 스스로 답변을 찾을 수 있도록 돕는 챗봇", "right": true },
            { "value": "전화 음성 메뉴를 통해 인간 상담원의 부담을 줄이는 서비스", "right": true },
            { "value": "공개 웹사이트를 크롤링하여 FAQ 문서를 자동 생성하는 서비스", "right": false }
        ],
        "correct": [1, 2]
    }
    , {
        "type": "radio",
        "question": "Azure Bot Service와 Azure Cognitive Services는 통합될 수 있습니까?",
        "explanation": "Azure Bot Service는 Azure Cognitive Services와 통합하여 LUIS(Language Understanding) 및 기타 AI 기능을 추가할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Azure Bot Service는 고객과 대화형 방식으로 상호작용합니까?",
        "explanation": "Azure Bot Service는 대화형 AI를 위한 서비스로, 사용자와 실시간으로 상호작용하며 다양한 응답을 제공할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Azure Bot Service는 자주 묻는 질문(FAQ) 문서를 가져와 질문 및 답변(Q&A) 세트를 생성할 수 있습니까?",
        "explanation": "FAQ 문서를 가져와 Q&A 세트를 자동으로 생성하는 기능은 QnA Maker에서 제공하며, Azure Bot Service 자체에서는 지원되지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "웹챗 봇(Webchat bot)은 웹사이트 방문자와 상호작용할 수 있습니까?",
        "explanation": "웹챗 봇은 대화형 AI의 한 형태로, 사용자가 웹사이트에서 질문을 입력하면 자동으로 응답할 수 있습니다. Azure Bot Service 및 QnA Maker를 활용하여 구현할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "사전 녹화된 비디오에 대한 자막을 자동 생성하는 것은 대화형 AI(Conversational AI)의 예시입니까?",
        "explanation": "자동 자막 생성은 음성 인식(Speech-to-Text, STT) 기술을 활용하는 AI 기능이지만, 대화형 AI(Conversational AI)와는 다릅니다. 대화형 AI는 사용자와의 실시간 상호작용이 포함되어야 합니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "가정용 스마트 기기가 '오늘 날씨는 어때?'와 같은 질문에 응답하는 것은 대화형 AI(Conversational AI)의 예시입니까?",
        "explanation": "음성 기반 가상 비서(Alexa, Google Assistant, Siri 등)는 대화형 AI의 대표적인 사례입니다. 사용자의 음성을 인식하고 자연어 처리를 통해 질문을 이해한 후 적절한 응답을 제공합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "FAQ(자주 묻는 질문) 지식 기반을 사용하여 고객 요청에 응답하는 챗봇을 만들었습니다. 이 챗봇이 추가적인 기능(스킬) 없이 수행할 수 있는 작업은 무엇입니까?",
        "explanation": "QnA Maker 및 Azure Bot Service 기반 챗봇은 다중 사용자 지원이 가능하며, 여러 사용자의 질문에 동시에 응답할 수 있습니다. 그러나 고객 구매 등록, 불만 접수, RMA 번호 제공과 같은 기능은 별도의 데이터베이스 및 백엔드 연동이 필요합니다.",
        "options": [
            { "value": "고객 구매 등록", "right": false },
            { "value": "고객 불만 접수", "right": false },
            { "value": "여러 사용자의 질문에 동시에 응답", "right": true },
            { "value": "고객에게 반품 승인(RMA) 번호 제공", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "챗봇은 사용자 지정 코드(Custom Code)를 사용해야만 만들 수 있습니까?",
        "explanation": "Azure Bot Service 및 QnA Maker를 사용하면 코드 없이(No-Code) 챗봇을 생성할 수 있습니다. 따라서 사용자 지정 코드가 필수 조건은 아닙니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Azure Bot Service는 대화형 봇을 호스팅하는 데 사용할 수 있는 서비스를 제공합니까?",
        "explanation": "Azure Bot Service는 챗봇을 개발, 배포 및 관리할 수 있는 클라우드 기반 서비스입니다. LUIS, QnA Maker 등의 AI 서비스와 통합할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Azure Bot Service를 사용하여 만든 봇은 Microsoft Teams 사용자와 통신할 수 있습니까?",
        "explanation": "Azure Bot Service는 Microsoft Teams와 통합할 수 있으며, Teams에서 챗봇과 상호작용이 가능합니다. 다양한 채널에 배포할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "컴퓨터 비전(Computer Vision) 기능을 배포할 수 있는 시나리오는 무엇입니까?",
        "explanation": "ai900Q149A.jpg<br>컴퓨터 비전은 이미지 및 비디오 데이터를 분석하는 기술로, 얼굴 인식(Facial Recognition) 기능을 앱에 통합하는 것이 대표적인 활용 사례입니다.",
        "options": [
            { "value": "웹사이트용 텍스트 기반 챗봇을 개발", "right": false },
            { "value": "온라인 스토어에서 고객의 비정상적인 행동을 감지", "right": false },
            { "value": "앱에 얼굴 인식 기능을 통합", "right": true },
            { "value": "수신 이메일에 대한 자동 응답을 제안", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "Azure Machine Learning 파이프라인에 Split Data 모듈이 포함되어 있습니다. 이 모듈은 Train Model 모듈과 Score Model 모듈에 출력을 전달합니다. Split Data 모듈의 기능은 무엇입니까?",
        "explanation": "Split Data 모듈은 데이터셋을 훈련(Training) 및 검증(Validation) 또는 테스트(Test) 데이터셋으로 분할하는 역할을 합니다. 이를 통해 모델 훈련과 평가를 효과적으로 수행할 수 있습니다.",
        "options": [
            { "value": "숫자 변수를 일정한 숫자 범위 내에서 스케일링하는 기능", "right": false },
            { "value": "훈련(Training) 및 검증(Validation) 데이터셋을 생성하는 기능", "right": true },
            { "value": "누락된 데이터가 있는 레코드를 분리하는 기능", "right": false },
            { "value": "모델에 포함될 열(Column)을 선택하는 기능", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "다음 중 Microsoft의 책임 있는 AI 원칙(Microsoft Responsible AI Principle)의 예시는 무엇입니까?",
        "explanation": "Microsoft의 책임 있는 AI 원칙에는 투명성(Transparency)과 포용성(Inclusiveness)이 포함됩니다. AI 시스템은 신뢰할 수 있고 다양한 사용자에게 유익해야 합니다.",
        "options": [
            { "value": "AI 시스템은 공개적으로 사용 가능한 데이터만 사용해야 한다.", "right": false },
            { "value": "AI 시스템은 투명하고 포용적이어야 한다.", "right": true },
            { "value": "AI 시스템은 개인 정보를 공개해야 한다.", "right": false },
            { "value": "AI 시스템은 회사의 이익을 보호해야 한다.", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "텍스트에서 사람, 위치, 조직을 추출합니다.",
        "explanation": "Entity Recognition(개체 인식)은 문서에서 사람(Person), 위치(Location), 조직(Organization) 등의 정보를 추출하는 기능을 수행합니다.",
        "options": [
            { "value": "개체 인식 (Entity recognition)", "right": true },
            { "value": "핵심 구문 추출 (Key phrase extraction)", "right": false },
            { "value": "언어 모델링 (Language modeling)", "right": false },
            { "value": "감정 분석 (Sentiment analysis)", "right": false },
            { "value": "음성 인식 및 합성 (Speech recognition and speech synthesis)", "right": false },
            { "value": "번역 (Translation)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "텍스트를 긍정-부정 척도로 평가합니다.",
        "explanation": "Sentiment Analysis(감정 분석)은 텍스트의 감정을 분석하여 긍정(Positive), 부정(Negative), 중립(Neutral) 등의 척도로 평가하는 기능을 수행합니다.",
        "options": [
            { "value": "개체 인식 (Entity recognition)", "right": false },
            { "value": "핵심 구문 추출 (Key phrase extraction)", "right": false },
            { "value": "언어 모델링 (Language modeling)", "right": false },
            { "value": "감정 분석 (Sentiment analysis)", "right": true },
            { "value": "음성 인식 및 합성 (Speech recognition and speech synthesis)", "right": false },
            { "value": "번역 (Translation)", "right": false }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "텍스트를 다른 언어로 변환합니다.",
        "explanation": "Translation(번역)은 주어진 텍스트를 자동으로 다른 언어로 변환하는 기능을 제공합니다.",
        "options": [
            { "value": "개체 인식 (Entity recognition)", "right": false },
            { "value": "핵심 구문 추출 (Key phrase extraction)", "right": false },
            { "value": "언어 모델링 (Language modeling)", "right": false },
            { "value": "감정 분석 (Sentiment analysis)", "right": false },
            { "value": "음성 인식 및 합성 (Speech recognition and speech synthesis)", "right": false },
            { "value": "번역 (Translation)", "right": true }
        ],
        "correct": 5}, {
        "type": "checkbox",
        "question": "전화 상담원의 업무 부담을 줄이기 위해 사전 정의된 답변을 제공하는 챗봇을 구현해야 합니다. 이를 달성하기 위해 사용할 수 있는 두 가지 AI 서비스는 무엇입니까?",
        "explanation": "Azure Bot Service는 챗봇을 만들고 배포할 수 있으며, Language Service(LUIS 포함)는 사용자의 의도를 분석하고 적절한 응답을 제공하는 기능을 수행합니다.",
        "options": [
            { "value": "Azure 머신 러닝 (Azure Machine Learning)", "right": false },
            { "value": "Azure 봇 서비스 (Azure Bot Service)", "right": true },
            { "value": "언어 서비스 (Language Service)", "right": true },
            { "value": "번역 서비스 (Translator)", "right": false }
        ],
        "correct": [1, 2]}, {
        "type": "radio",
        "question": "AI 시스템은 예상치 못한 상황에서도 일관되게 의도한 대로 작동해야 합니다.",
        "explanation": "신뢰성 및 안전성(Reliability and Safety)은 AI 시스템이 예측할 수 없는 환경에서도 안정적으로 작동할 수 있도록 보장하는 원칙입니다.",
        "options": [
            { "value": "공정성 (Fairness)", "right": false },
            { "value": "포용성 (Inclusiveness)", "right": false },
            { "value": "개인정보 보호 및 보안 (Privacy and security)", "right": false },
            { "value": "신뢰성 및 안전성 (Reliability and safety)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "AI 시스템은 개인 및 기업 정보를 보호하고 보안성을 유지해야 합니다.",
        "explanation": "개인정보 보호 및 보안(Privacy and Security)은 AI 시스템이 민감한 데이터를 보호하고, 기업 및 개인 사용자의 정보를 안전하게 유지하는 것을 목표로 합니다.",
        "options": [
            { "value": "공정성 (Fairness)", "right": false },
            { "value": "포용성 (Inclusiveness)", "right": false },
            { "value": "개인정보 보호 및 보안 (Privacy and security)", "right": true },
            { "value": "신뢰성 및 안전성 (Reliability and safety)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "머신 러닝 프로세스에서 언제 평가 지표(Evaluation Metrics)를 검토해야 합니까?",
        "explanation": "평가 지표는 모델이 얼마나 잘 수행하는지를 측정하기 위해 사용됩니다. 따라서, 모델을 검증 데이터(Validation Data)에서 테스트한 후에 평가 지표를 검토하는 것이 적절합니다.",
        "options": [
            { "value": "모델을 학습시키기 전에", "right": false },
            { "value": "데이터를 정리한 후", "right": false },
            { "value": "모델 유형을 선택하기 전에", "right": false },
            { "value": "모델을 검증 데이터에서 테스트한 후", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "허가 없이 수집된 데이터를 사용하여 자연어 처리(NLP) 모델을 만들었습니다. 이는 Microsoft의 책임 있는 AI 원칙 중 어떤 원칙을 위반한 것입니까?",
        "explanation": "Microsoft의 책임 있는 AI 원칙 중 '개인정보 보호 및 보안(Privacy and Security)' 원칙은 AI 시스템이 데이터를 보호하고 사용자 동의를 받아야 한다는 점을 강조합니다. 허가 없이 데이터를 수집하는 것은 이 원칙을 위반하는 행위입니다.",
        "options": [
            { "value": "신뢰성 및 안전성 (Reliability and Safety)", "right": false },
            { "value": "개인정보 보호 및 보안 (Privacy and Security)", "right": true },
            { "value": "포용성 (Inclusiveness)", "right": false },
            { "value": "투명성 (Transparency)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "AI 시스템이 중요한 필드에 이상치(비정상적인 값) 또는 누락된 값이 포함된 경우 예측을 제공하지 않도록 보장하는 것은 Microsoft의 책임 있는 AI 원칙 중 무엇에 해당합니까?",
        "explanation": "ai900Q157A.jpg<br><a href='https://learn.microsoft.com/ko-kr/azure/cloud-adoption-framework/strategy/inform/ai'>https://learn.microsoft.com/ko-kr/azure/cloud-adoption-framework/strategy/inform/ai</a>",
        "options": [
            { "value": "포용성 (Inclusiveness)", "right": false },
            { "value": "개인정보 보호 및 보안 (Privacy and Security)", "right": false },
            { "value": "신뢰성 및 안전성 (Reliability and Safety)", "right": true },
            { "value": "투명성 (Transparency)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "지식 기반(Knowledge Base)을 자연어로 질의할 수 있도록 지원합니다.[ai900Q158.jpg]",
        "explanation": "Language Service는 자연어 처리를 기반으로 질문을 이해하고 적절한 응답을 반환하는 기능을 제공합니다.",
        "options": [
            { "value": "Azure 스토리지 (Azure Storage)", "right": false },
            { "value": "Azure 봇 서비스 (Azure Bot Service)", "right": false },
            { "value": "언어 서비스 (Language Service)", "right": true },
            { "value": "음성 서비스 (Speech)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "실시간으로 음성을 텍스트로 변환하는 기능을 제공합니다.[ai900Q158.jpg]",
        "explanation": "Speech 서비스는 실시간으로 음성을 텍스트로 변환하는 기능을 제공하며, 음성 인식 기술을 기반으로 작동합니다.",
        "options": [
            { "value": "Azure 스토리지 (Azure Storage)", "right": false },
            { "value": "Azure 봇 서비스 (Azure Bot Service)", "right": false },
            { "value": "언어 서비스 (Language Service)", "right": false },
            { "value": "음성 서비스 (Speech)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "이상 탐지(Anomaly Detection)에 사용할 수 있는 머신 러닝 기법은 무엇입니까?",
        "explanation": "이상 탐지(Anomaly Detection)는 데이터의 패턴을 분석하고, 정상적인 경향에서 벗어나는 비정상적 행동을 감지하는 기법입니다. 주로 시계열 데이터 분석을 통해 이상 값을 식별하는 데 사용됩니다.",
        "options": [
            { "value": "사용자가 제공한 이미지를 기반으로 객체를 분류하는 머신 러닝 기법", "right": false },
            { "value": "작성된 텍스트 및 음성 언어를 이해하는 머신 러닝 기법", "right": false },
            { "value": "이미지의 내용을 기반으로 이미지를 분류하는 머신 러닝 기법", "right": false },
            { "value": "시간에 따른 데이터를 분석하고 비정상적인 변화를 감지하는 머신 러닝 기법", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "AI 기반 대출 승인 시스템을 운영하는 중, 시스템이 성별 편향(Gender Bias)을 가지고 있음이 발견되었습니다. 이는 Microsoft의 책임 있는 AI 원칙 중 어떤 원칙을 위반한 것입니까?",
        "explanation": "공정성(Fairness)은 AI 시스템이 특정 그룹(예: 성별, 인종, 연령 등)에 대해 차별 없이 작동해야 한다는 원칙입니다. 성별 편향을 포함하는 것은 이 원칙을 위반하는 것입니다.",
        "options": [
            { "value": "책임 (Accountability)", "right": false },
            { "value": "신뢰성 및 안전성 (Reliability and Safety)", "right": false },
            { "value": "투명성 (Transparency)", "right": false },
            { "value": "공정성 (Fairness)", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "⭐영국(UK) 운전자의 보험료를 예측하는 시스템을 개발하고 있습니다. 시스템에서 편향(Bias)을 최소화하려면 어떻게 해야 합니까?",
        "explanation": "훈련 데이터가 특정 그룹에 편향되지 않도록 하려면, 실제 인구 분포를 반영하는 샘플을 사용하는 것이 중요합니다. 영국 인구를 대표하는 훈련 샘플을 사용하는 것이 편향을 최소화하는 가장 좋은 방법입니다.",
        "options": [
            { "value": "샘플링 전에 보호된 특성(Protected Characteristics)에 대한 정보를 데이터에서 제거한다.", "right": false },
            { "value": "영국 인구를 대표하는 훈련 샘플을 사용한다.", "right": true },
            { "value": "전 세계 보험 회사(Global Insurers)의 데이터를 사용하여 훈련 데이터셋을 만든다.", "right": false },
            { "value": "완전히 무작위(Random)로 훈련 샘플을 선택한다.", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "Azure Machine Learning Designer를 사용하면 머신 러닝 모델을 어떤 방식으로 만들 수 있습니까?",
        "explanation": "ai900Q162A.jpg<br>Azure Machine Learning Designer는 코드 없이 시각적 캔버스에서 모듈을 추가하고 연결하여 머신 러닝 모델을 설계할 수 있는 도구입니다.",
        "options": [
            { "value": "시각적 캔버스(Visual Canvas)에서 모듈을 추가하고 연결하여 모델을 생성", "right": true },
            { "value": "일반적인 데이터 준비 작업을 자동으로 수행", "right": false },
            { "value": "가장 정확한 모델을 만들기 위해 알고리즘을 자동으로 선택", "right": false },
            { "value": "코드 기반 노트북 환경(Code-First Notebook Experience)을 사용", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "Azure Machine Learning을 사용하여 불량 제품(Defective Products)을 식별하는 분류(Classification) 모델을 구축해야 합니다. 가장 먼저 수행해야 할 작업은 무엇입니까?",
        "explanation": "머신 러닝 모델을 만들기 위해서는 먼저 데이터를 로드해야 합니다. 데이터를 로드한 후, 전처리, 훈련/테스트 데이터 분할, 모델 생성 등의 단계를 수행할 수 있습니다.",
        "options": [
            { "value": "데이터셋을 로드한다.", "right": true },
            { "value": "군집화(Clustering) 모델을 생성한다.", "right": false },
            { "value": "데이터를 훈련(Training) 및 테스트(Testing) 데이터셋으로 분할한다.", "right": false },
            { "value": "분류(Classification) 모델을 생성한다.", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "Azure Machine Learning Designer를 사용하여 모델 파이프라인(Pipeline)을 구축하고 있습니다. 파이프라인을 실행하기 전에 무엇을 생성해야 합니까?",
        "explanation": "Azure Machine Learning Designer에서 파이프라인을 실행하려면 먼저 컴퓨팅 리소스를 생성해야 합니다. 이를 통해 모델을 학습하고 실행할 수 있습니다.",
        "options": [
            { "value": "등록된 모델 (Registered Model)", "right": false },
            { "value": "컴퓨팅 리소스 (Compute Resource)", "right": true },
            { "value": "주피터 노트북 (Jupyter Notebook)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "머신 러닝 작업 영역(Machine Learning Workspace)을 생성합니다.",
        "explanation": "ai900Q165A.jpg<br>Azure 포털(The Azure Portal)을 사용하여 머신 러닝 작업 영역을 생성할 수 있습니다. 이를 통해 모델을 학습하고 배포할 환경을 설정할 수 있습니다.",
        "options": [
            { "value": "자동화된 머신 러닝 (Automated Machine Learning, Automated ML)", "right": false },
            { "value": "Azure 포털 (The Azure Portal)", "right": true },
            { "value": "머신 러닝 디자이너 (Machine Learning Designer)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "드래그 앤 드롭(Drag-and-Drop) 인터페이스를 사용하여 모델을 학습하고 배포합니다.",
        "explanation": "ai900Q165A.jpg<br>Machine Learning Designer는 코드 없이 드래그 앤 드롭 인터페이스를 사용하여 머신 러닝 모델을 구축하고 배포할 수 있는 기능을 제공합니다.",
        "options": [
            { "value": "자동화된 머신 러닝 (Automated Machine Learning, Automated ML)", "right": false },
            { "value": "Azure 포털 (The Azure Portal)", "right": false },
            { "value": "머신 러닝 디자이너 (Machine Learning Designer)", "right": true }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "마법사(Wizard)를 사용하여 머신 러닝 실행(Run)의 구성을 선택합니다.",
        "explanation": "ai900Q165A.jpg<br>Automated ML(자동화된 머신 러닝)은 사용자가 마법사(Wizard)를 사용하여 머신 러닝 모델을 구성하고 최적의 알고리즘을 자동으로 선택할 수 있도록 지원합니다.",
        "options": [
            { "value": "자동화된 머신 러닝 (Automated Machine Learning, Automated ML)", "right": true },
            { "value": "Azure 포털 (The Azure Portal)", "right": false },
            { "value": "머신 러닝 디자이너 (Machine Learning Designer)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "⭐고객이 정보를 쉽게 찾을 수 있도록 고객 지원(Customer Support) 솔루션을 만들어야 합니다. 해당 솔루션은 이메일(Email), 전화(Phone), 라이브 채팅(Live Chat)을 지원해야 합니다. 어떤 유형의 AI 솔루션을 사용해야 합니까?",
        "explanation": "챗봇(Chatbot)은 고객 지원을 자동화할 수 있는 AI 솔루션으로, 이메일, 전화, 채팅과 통합될 수 있습니다. Azure Bot Service 및 QnA Maker를 사용하여 구축할 수 있습니다.",
        "options": [
            { "value": "머신 러닝 (Machine Learning)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "챗봇 (Chatbot)", "right": true },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": false }
        ],
        "correct": 2
    }
    , {
        "type": "radio",
        "question": "손으로 쓴 글자를 인식합니다.",
        "explanation": "ai900Q167A.jpg<br>컴퓨터 비전(Computer Vision)은 이미지와 비디오 데이터를 분석하는 기술로, 필기 문자 인식(Handwritten Text Recognition)을 포함합니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": true },
            { "value": "머신 러닝(군집화) (Machine Learning - Clustering)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "소셜 미디어 게시물의 감정을 예측합니다.",
        "explanation": "ai900Q167A.jpg<br>자연어 처리(NLP)는 텍스트에서 감정을 분석(Sentiment Analysis)하고 긍정, 부정 또는 중립 여부를 판단하는 데 사용됩니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "머신 러닝(군집화) (Machine Learning - Clustering)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "비정상적인(이상한) 신용카드 결제를 식별합니다.",
        "explanation": "ai900Q167A.jpg<br>이상 탐지(Anomaly Detection)는 데이터 패턴에서 비정상적인 이상치(Outliers)를 감지하는 데 사용됩니다. 신용카드 사기 탐지(Fraud Detection) 등에 활용됩니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": true },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "머신 러닝(군집화) (Machine Learning - Clustering)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "여러 측정을 기반으로 동물을 그룹화합니다.",
        "explanation": "ai900Q167A.jpg<br>머신 러닝(군집화, Clustering)은 데이터의 패턴을 기반으로 그룹을 형성하는 기술로, 데이터 포인트를 자동으로 분류할 때 사용됩니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "머신 러닝(군집화) (Machine Learning - Clustering)", "right": true },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "머신 러닝 모델에서 입력 데이터는 _______ 라고 불립니다. 문장을 올바르게 완성하는 답을 선택하세요.",
        "explanation": "머신 러닝에서 입력 데이터는 일반적으로 '변수(Variables)' 또는 '특성(Features)'이라고 불립니다. 모델이 예측을 수행할 때 사용하는 입력 값들입니다.",
        "options": [
            { "value": "데이터셋 (Dataset)", "right": false },
            { "value": "레이블 (Labels)", "right": false },
            { "value": "변수 (Variables)", "right": true }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "Recency, Frequency, Monetary (RFM) 값을 사용하여 고객 기반을 세분화(Segmenting) 하는 것은 _________ 의 예입니다. 문장을 올바르게 완성하는 답을 선택하세요.",
        "explanation": "ai900Q170A.jpg<br>RFM 분석은 고객을 그룹화(Segmenting)하는 데 사용됩니다. 이는 비지도 학습(Unsupervised Learning) 방법 중 하나인 '군집화(Clustering)' 기법을 활용하여 수행됩니다.",
        "options": [
            { "value": "군집화 (클러스터링,Clustering)", "right": true },
            { "value": "회귀 (Regression)", "right": false },
            { "value": "분류 (Classification)", "right": false },
            { "value": "정규화 (Regularization)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "Azure Machine Learning Designer를 사용하여 머신 러닝 모델을 배포하려고 합니다. 다음 네 가지 작업을 올바른 순서대로 정렬하세요.<br> * Train the model. → 모델을 학습합니다.<br>* Split the data randomly into training data and validation data. → 데이터를 무작위로 훈련 데이터와 검증 데이터로 분할합니다. <br> * Evaluate the model against the original dataset. → 모델을 원본 데이터셋을 사용하여 평가합니다. * Evaluate the model against the validation dataset. → 모델을 검증 데이터셋을 사용하여 평가합니다. <br>* Ingest and prepare a dataset. → 데이터를 수집하고 준비합니다.[ai900Q171.jpg]",
        "explanation": "ai900Q171A.jpg<br>'데이터를 수집하고 준비합니다. (Ingest and prepare a dataset.)'<br>'데이터를 무작위로 훈련 데이터와 검증 데이터로 분할합니다.' (Split the data randomly into training data and validation data.)<br>'모델을 학습합니다. (Train the model.)'<br>'모델을 검증 데이터셋을 사용하여 평가합니다. (Evaluate the model against the validation dataset.)'<br>",
        "options": [
            { "value": "정답확인눌러서 외우기기", "right": true }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "다양한 사용 통계를 기반으로 문서를 그룹화하는 것은 군집화(클러스터링)의 예입니다.",
        "explanation": "군집화(Clustering)는 데이터를 유사한 특성을 가진 그룹으로 자동으로 묶는 비지도 학습(Unsupervised Learning) 방법입니다. 따라서 문서를 사용 통계를 기반으로 그룹화하는 것은 군집화의 전형적인 예제입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "증상 및 진단 테스트 결과를 기반으로 유사한 환자를 그룹화하는 것은 군집화(클러스터링)의 예입니다.",
        "explanation": "비슷한 증상과 검사 결과를 가진 환자를 자동으로 그룹화하는 것은 군집화 기법을 활용하는 대표적인 사례입니다. 지도 학습이 아닌 데이터를 분석하여 자연스럽게 그룹을 형성하는 기법이므로 군집화에 해당합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "꽃가루 수치를 기반으로 사람이 가벼운, 중간 정도의 또는 심한 알레르기 증상을 겪을지 예측하는 것은 군집화(클러스터링)의 예입니다.",
        "explanation": "이것은 군집화가 아니라 '분류(Classification)' 문제입니다. 사람이 특정한 알레르기 반응(가벼운, 중간, 심한)을 가질지를 예측하는 것이므로 지도 학습(Supervised Learning) 기법이 필요합니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "회귀(Regression) 모델을 구축할 때, 레이블(Labels)은 어떤 데이터 유형을 가져야 합니까?",
        "explanation": "ai900Q173A.jpg<br>회귀(Regression) 모델은 연속적인 숫자 값을 예측하는 데 사용됩니다. 따라서 레이블(Label)은 숫자(Numeric) 형식이어야 합니다.",
        "options": [
            { "value": "부울 (Boolean)", "right": false },
            { "value": "날짜/시간 (DateTime)", "right": false },
            { "value": "숫자 (Numeric)", "right": true },
            { "value": "텍스트 (Text)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "Azure Machine Learning Designer를 사용하여 군집화(Clustering) 모델을 생성하고 평가하려고 합니다. 어떤 방법을 사용해야 합니까?",
        "explanation": "군집화 모델을 평가할 때는 원본 데이터셋을 훈련 데이터셋과 테스트 데이터셋으로 분할한 후, 테스트 데이터셋을 사용하여 모델의 성능을 평가하는 것이 바람직합니다.",
        "options": [
            { "value": "원본 데이터셋을 훈련 데이터셋과 테스트 데이터셋으로 분할합니다. 테스트 데이터셋을 사용하여 평가합니다.", "right": true },
            { "value": "원본 데이터셋을 훈련과 평가에 모두 사용합니다.", "right": false },
            { "value": "원본 데이터셋을 특성(Features) 데이터셋과 레이블(Labels) 데이터셋으로 분할합니다. 특성 데이터셋을 사용하여 평가합니다.", "right": false },
            { "value": "원본 데이터셋을 훈련 데이터셋과 테스트 데이터셋으로 분할합니다. 훈련 데이터셋을 사용하여 평가합니다.", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "주어진 데이터셋에는 다음과 같은 열이 포함되어 있습니다.[ai900Q175.jpg]머신 러닝 모델이 ColumnE의 값을 예측하기 위해 다른 수치형(Numeric) 열을 사용합니다. 이 모델은 어떤 유형의 모델입니까?",
        "explanation": "회귀(Regression)는 연속적인 숫자 값을 예측하는 지도 학습(Supervised Learning) 기법입니다. 이 문제에서는 ColumnE(연속적인 숫자)를 예측하고 있으므로 회귀 모델이 적절합니다.",
        "options": [
            { "value": "분석 (Analysis)", "right": false },
            { "value": "군집화 (Clustering)", "right": false },
            { "value": "회귀 (Regression)", "right": true }
        ],
        "correct": 2
    }
    , {
        "type": "radio",
        "question": "Azure Machine Learning을 사용하여 학습한 모델의 여러 버전(Version)을 추적해야 합니다. 어떤 작업을 수행해야 합니까?",
        "explanation": "Azure Machine Learning에서는 학습된 모델을 '등록(Register)'하여 여러 버전을 관리할 수 있습니다. 같은 이름으로 모델을 등록하면 버전이 자동으로 증가하며 추적이 가능합니다.",
        "options": [
            { "value": "모델을 설명한다 (Explain the model)", "right": false },
            { "value": "모델을 등록한다 (Register the model)", "right": true },
            { "value": "훈련 데이터를 등록한다 (Register the training data)", "right": false },
            { "value": "추론 클러스터를 프로비저닝한다 (Provision an inference cluster)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "데이터셋에서 유사한 수치 값(Numeric Values)을 가진 행(Row) 그룹을 식별해야 합니다. 어떤 유형의 머신 러닝을 사용해야 합니까?",
        "explanation": "군집화(Clustering)는 비지도 학습(Unsupervised Learning) 기법으로, 데이터의 유사성을 기반으로 그룹을 형성하는 알고리즘입니다. 따라서 유사한 수치 값을 가진 데이터를 자동으로 그룹화하는 데 적합합니다.",
        "options": [
            { "value": "군집화 (Clustering)", "right": true },
            { "value": "회귀 (Regression)", "right": false },
            { "value": "분류 (Classification)", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "⭐은행 시스템에서 대출(Loan)이 상환될 것인지 여부를 예측하는 것은 ______ 유형의 머신 러닝 예제입니다.",
        "explanation": "분류(Classification)는 데이터를 특정 카테고리로 할당하는 지도 학습 기법입니다. 대출 상환 여부를 'Yes' 또는 'No'로 예측하는 것은 분류 문제에 해당합니다.",
        "options": [
            { "value": "군집화 (Clustering)", "right": false },
            { "value": "회귀 (Regression)", "right": false },
            { "value": "분류 (Classification)", "right": true }
        ],
        "correct": 2
    }
    , {
        "type": "radio",
        "question": "경매된 물품(Auctioned Items)의 판매 가격(Sale Price)을 예측하는 데 사용할 수 있는 모델 유형은 ______ 입니다.",
        "explanation": "회귀(Regression)는 연속적인 숫자 값을 예측하는 지도 학습 기법입니다. 판매 가격(Sale Price)은 연속적인 값이므로 회귀 모델이 적합합니다.",
        "options": [
            { "value": "분류 (Classification)", "right": false },
            { "value": "군집화 (Clustering)", "right": false },
            { "value": "회귀 (Regression)", "right": true }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "역사학자는 ______ 를 사용하여 신문 기사를 디지털화할 수 있습니다.",
        "explanation": "광학 문자 인식(OCR)은 이미지에서 텍스트를 감지하고 디지털화하는 기술입니다. 신문 기사의 인쇄된 텍스트를 스캔하여 편집 가능한 디지털 텍스트로 변환하는 데 사용됩니다.",
        "options": [
            { "value": "객체 감지 (Object Detection)", "right": false },
            { "value": "안면 인식 (Facial Recognition)", "right": false },
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "⭐객체 감지는 이미지에서 손상된 제품의 위치를 식별할 수 있습니다.",
        "explanation": "객체 감지(Object Detection)는 이미지에서 특정 객체가 있는 위치를 감지하는 기술입니다. 따라서 손상된 제품의 위치를 식별할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐객체 감지는 이미지에서 손상된 제품의 여러 인스턴스를 식별할 수 있습니다.",
        "explanation": "객체 감지는 동일한 객체가 이미지 내 여러 개 있을 경우, 각각을 개별적으로 감지할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐객체 감지는 이미지에서 다양한 유형의 손상된 제품을 식별할 수 있습니다.",
        "explanation": "객체 감지는 서로 다른 클래스(예: '깨진 제품', '찌그러진 제품')를 구분할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "개인 디지털 사진 모음을 레이블(Labeling)하는 모델을 생성해야 합니다. 어떤 Azure Cognitive Services 서비스를 사용해야 합니까?",
        "explanation": "Custom Vision은 사용자가 특정한 목적에 맞게 이미지 분류 및 객체 감지를 위한 AI 모델을 학습할 수 있도록 하는 서비스입니다. 사진 속 특정 객체나 장면을 분류하고 라벨링하는 데 최적화되어 있습니다.",
        "options": [
            { "value": "폼 인식기 (Form Recognizer)", "right": false },
            { "value": "커스텀 비전 (Custom Vision)", "right": true },
            { "value": "언어 (Language)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "하나의 이미지에서 여러 유형의 항목을 식별하는 데 사용되는 것은 _______ 입니다.",
        "explanation": "객체 감지(Object Detection)는 이미지에서 여러 개의 개별 객체를 찾아서 식별하고, 각 객체에 바운딩 박스(Bounding Box)를 할당하는 기술입니다. 따라서 여러 유형의 항목을 식별하는 데 적절합니다.",
        "options": [
            { "value": "객체 감지 (Object Detection)", "right": true },
            { "value": "이미지 설명 (Image Description)", "right": false },
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "이미지에서 객체를 식별하는 데 사용되는 Azure AI 서비스는 무엇입니까?",
        "explanation": "ai900Q185A.jpg<br>Custom Vision은 사용자가 특정한 목적에 맞게 이미지 분류 및 객체 감지 모델을 학습할 수 있는 AI 서비스입니다.",
        "options": [
            { "value": "Custom Vision", "right": true },
            { "value": "Face", "right": false },
            { "value": "Form Recognizer", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "송장에서 데이터를 자동으로 가져와 데이터베이스에 저장하는 데 사용되는 Azure AI 서비스는 무엇입니까?",
        "explanation": "ai900Q185A.jpg<br>Form Recognizer는 영수증, 청구서, 송장과 같은 문서에서 데이터를 자동으로 추출하는 AI 서비스입니다.",
        "options": [
            { "value": "Custom Vision", "right": false },
            { "value": "Face", "right": false },
            { "value": "Form Recognizer", "right": true }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "이미지에서 사람을 식별하는 데 사용되는 Azure AI 서비스는 무엇입니까?",
        "explanation": "ai900Q185A.jpg<br>Face 서비스는 이미지에서 얼굴을 감지하고, 특정 인물과 매칭할 수 있는 얼굴 인식 기능을 제공합니다.",
        "options": [
            { "value": "Custom Vision", "right": false },
            { "value": "Face", "right": true },
            { "value": "Form Recognizer", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "⭐사진작가가 더 나은 인물 사진을 촬영할 수 있도록, 노출(Exposure), 노이즈(Noise), 가림(Occlusion)에 대한 피드백을 제공하는 AI 솔루션은 얼굴(Facial) _______ 의 예입니다.",
        "explanation": "얼굴 분석(Facial Analysis)은 AI가 얼굴의 특징(표정, 나이, 감정, 가림 정도 등)을 분석하는 기능입니다. 이 문제에서는 AI가 사진의 품질(노출, 노이즈, 가림 등)에 대한 피드백을 제공하므로 얼굴 분석이 적절합니다.",
        "options": [
            { "value": "분석 ( Analysis)", "right": true },
            { "value": "탐지 ( Detection)", "right": false },
            { "value": "인식 ( Recognition)", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "손으로 쓴 메모(Handwritten Notes)를 디지털 텍스트로 변환해야 합니다. 어떤 유형의 컴퓨터 비전(Computer Vision) 기술을 사용해야 합니까?",
        "explanation": "OCR(광학 문자 인식)은 이미지에서 텍스트를 감지하고 디지털 텍스트로 변환하는 기술입니다. Azure Computer Vision OCR 또는 Azure Form Recognizer를 사용하여 손글씨를 텍스트로 변환할 수 있습니다.",
        "options": [
            { "value": "안면 탐지 (Facial Detection)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": true },
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "객체 감지 (Object Detection)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "하나의 이미지에서 여러 유형의 항목을 식별하는 데 사용되는 기술은 __________________ 입니다.",
        "explanation": "객체 감지(Object Detection)는 이미지에서 여러 개의 개별 객체를 감지하고, 각 객체의 위치를 바운딩 박스(Bounding Box)로 표시하는 기술입니다. 따라서 하나의 이미지에서 여러 개의 항목을 식별하는 데 적절합니다.",
        "options": [
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "이미지 설명 (Image Description)", "right": false },
            { "value": "객체 감지 (Object Detection)", "right": true },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false }
        ],
        "correct": 2
    }
    , {
        "type": "radio",
        "question": "직원들이 출장 중 경비를 스캔하고 저장할 수 있는 모바일 앱을 개발해야 합니다. 어떤 유형의 컴퓨터 비전(Computer Vision) 기술을 사용해야 합니까?",
        "explanation": "OCR(광학 문자 인식)은 이미지에서 텍스트를 감지하고 디지털 텍스트로 변환하는 기술입니다. 영수증, 송장, 경비 보고서를 스캔하고 내용을 디지털화하는 데 사용됩니다.",
        "options": [
            { "value": "안면 탐지 (Face Detection)", "right": false },
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "객체 감지 (Object Detection)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "⭐자신만의 이미지를 사용하여 객체 감지(Object Detection) 모델을 학습하려면 __________ 서비스를 사용해야 합니다.",
        "explanation": "Custom Vision 서비스는 사용자가 직접 이미지를 업로드하고, 객체 감지(Object Detection) 또는 이미지 분류(Classification) 모델을 학습할 수 있는 기능을 제공합니다.",
        "options": [
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "커스텀 비전 (Custom Vision)", "right": true },
            { "value": "폼 인식기 (Form Recognizer)", "right": false },
            { "value": "Azure Video Analyzer for Media", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "디지털 사진에서 유명 브랜드(Well-Known Brands)를 식별할 수 있는 사전 구축된(pre-built) 솔루션을 구현해야 합니다. 어떤 Azure Cognitive Services 서비스를 사용해야 합니까?",
        "explanation": "Azure Computer Vision API에는 'Brand Detection(브랜드 감지)' 기능이 포함되어 있어 유명 브랜드를 자동으로 식별할 수 있습니다. 따라서 브랜드 감지를 위한 사전 구축된 솔루션으로 Computer Vision을 사용하는 것이 적절합니다.",
        "options": [
            { "value": "커스텀 비전 (Custom Vision)", "right": false },
            { "value": "폼 인식기 (Form Recognizer)", "right": false },
            { "value": "안면 인식 (Face)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "⭐자연어 처리(Natural Language Processing, NLP)는 __________ 하는 데 사용할 수 있습니다.",
        "explanation": "NLP(자연어 처리)는 텍스트 데이터를 분석하여 특정 범주로 분류하는 데 사용됩니다. 예를 들어, 이메일 내용을 분석하여 '업무 관련' 또는 '개인용'으로 자동 분류할 수 있습니다.",
        "options": [
            { "value": "비디오 콘텐츠를 분석한다 (Analyze video content)", "right": false },
            { "value": "음성을 생성한다 (Generate speech)", "right": false },
            { "value": "이메일을 업무 관련 또는 개인용으로 분류한다 (Classify email messages as work-related or personal)", "right": true },
            { "value": "이미지를 분류한다 (Classify images)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "checkbox",
        "question": "자연어 처리(NLP)를 사용하여 사용자가 지식 베이스(Knowledge Base)를 조회할 수 있는 챗봇(Bot)을 개발하려고 합니다. 해결책에 포함해야 할 두 가지 서비스를 선택하세요.",
        "explanation": "Language Service는 자연어 처리를 통해 질문을 이해하고 지식 베이스에서 답변을 찾을 수 있도록 지원합니다. Azure Bot Service는 챗봇을 개발하고 배포할 수 있도록 도와주는 서비스입니다.",
        "options": [
            { "value": "언어 서비스 (Language Service)", "right": true },
            { "value": "Azure 봇 서비스 (Azure Bot Service)", "right": true },
            { "value": "폼 인식기 (Form Recognizer)", "right": false },
            { "value": "이상 탐지기 (Anomaly Detector)", "right": false }
        ],
        "correct": [0,1]
},
    {
        "type": "radio",
        "question": "다음 서비스 호출 `/translate?from=it&to=fr&to=en` 는 영어 텍스트를 입력으로 받아, 이탈리아어와 프랑스어 텍스트를 출력합니다.",
        "explanation": "이 호출의 `from=it` 는 입력 언어가 이탈리아어(Italian)임을 의미합니다. 즉, 이탈리아어를 입력받아 프랑스어(`to=fr`)와 영어(`to=en`)로 번역하지만, 문제에서는 '영어 입력'을 가정하므로 오답입니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "다음 서비스 호출 `/translate?from=en&to=fr&to=it` 는 영어 텍스트를 입력으로 받아, 이탈리아어와 프랑스어 텍스트를 출력합니다.",
        "explanation": "이 호출의 `from=en` 은 입력 언어가 영어(English)이며, `to=fr&to=it` 는 프랑스어(French)와 이탈리아어(Italian)로 번역한다는 의미이므로 정답입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Translator 서비스는 영어에서 프랑스어로 문서를 번역하는 데 사용할 수 있습니다.",
        "explanation": "Microsoft Azure Translator 서비스는 다국어 번역을 지원하며, 영어 → 프랑스어 번역이 가능합니다. 또한 문서 번역 기능도 제공하므로 참(Yes)입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "소셜 미디어 게시글을 분석하여 그 톤(tone)을 식별하는 애플리케이션은 어떤 유형의 자연어 처리(NLP) 작업에 해당할까요?",
        "explanation": "감성 분석(Sentiment Analysis)은 텍스트 데이터를 분석하여 감정(긍정, 부정, 중립)을 파악하는 NLP 기술입니다. 소셜 미디어 게시글에서 사용자의 감정을 식별하는 작업은 감성 분석의 대표적인 예입니다.",
        "options": [
            { "value": "감성 분석 (Sentiment Analysis)", "right": true },
            { "value": "음성 인식 (Speech Recognition)", "right": false },
            { "value": "주요 문구 추출 (Key Phrase Extraction)", "right": false },
            { "value": "개체 인식 (Entity Recognition)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "사용자의 텍스트 입력을 기반으로 다음 작업을 수행하는 챗봇을 구축하고자 합니다.<br>• 고객 주문 접수<br>• 지원 문서 검색<br>• 주문 상태 업데이트 검색<br>위 작업을 수행하기 위해 어떤 유형의 자연어 처리(NLP)를 사용해야 할까요?",
        "explanation": "명명된 개체 인식(Named Entity Recognition)은 텍스트에서 주문 정보, 제품명, 날짜 등과 같이 중요한 정보를 추출하는 데 사용됩니다. 챗봇이 고객 주문을 접수하고 지원 문서를 검색하며 주문 상태 업데이트를 제공하기 위해서는 사용자의 입력에서 이러한 핵심 정보를 정확히 추출해야 하므로, 명명된 개체 인식이 가장 적합한 NLP 작업입니다.",
        "options": [
            { "value": "감성 분석 (Sentiment Analysis)", "right": false },
            { "value": "명명된 개체 인식 (Named Entity Recognition)", "right": true },
            { "value": "번역 (Translation)", "right": false },
            { "value": "언어 모델링 (Language Modeling)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "음성 요청을 텍스트로 변환하는 데 사용되는 Azure Cognitive Services 서비스는 무엇입니까?",
        "explanation": "Speech 서비스는 음성을 텍스트로 변환하는 기능을 제공합니다.",
        "options": [
            { "value": "Language service", "right": false },
            { "value": "Speech", "right": true },
            { "value": "Translator", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "사용자의 요청 의도를 식별하는 데 사용되는 Azure Cognitive Services 서비스는 무엇입니까?",
        "explanation": "Language service는 자연어 처리 기능을 통해 사용자의 요청에서 의도를 식별할 수 있습니다.",
        "options": [
            { "value": "Language service", "right": true },
            { "value": "Speech", "right": false },
            { "value": "Translator", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "의도를 엔터티 및 발화에 적용하는 데 사용되는 Azure Cognitive Services 서비스는 무엇입니까?",
        "explanation": "Language service는 문장에서 개체(Entity)를 식별하고, 발화의 의도를 분석하는 기능을 제공합니다.",
        "options": [
            { "value": "Language service", "right": true },
            { "value": "Speech", "right": false },
            { "value": "Translator", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "radio",
        "question": "웹 채팅 봇(Webchat bot)은 웹사이트 방문자와 상호 작용할 수 있습니다.",
        "explanation": "웹 채팅 봇은 웹사이트에서 방문자와 상호작용하는 챗봇으로, 일반적으로 고객 지원 및 자동 응답 기능을 제공합니다. 따라서 정답은 'Yes'입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "사전 녹화된 비디오의 자막을 자동으로 생성하는 것은 자연어 처리(NLP)의 한 예입니다.",
        "explanation": "자막을 자동 생성하는 기능은 주로 음성 인식(Speech-to-Text) 기술을 활용하며, 이는 자연어 처리(NLP)와 밀접한 관련이 있습니다. 따라서 정답은 'Yes'입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "가정용 스마트 기기가 '오늘 날씨가 어때?'와 같은 질문에 응답하는 것은 자연어 처리(NLP)의 한 예입니다.",
        "explanation": "음성 인식을 기반으로 질문을 이해하고 응답을 제공하는 스마트 기기는 자연어 처리(NLP)를 활용한 시스템입니다. 따라서 정답은 'Yes'입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "⭐고객 리뷰를 영어로 저장하고, 사용자의 지리적 위치를 인식하여 해당 언어로 리뷰를 제공해야 합니다. 이를 위해 사용해야 할 자연어 처리(NLP) 작업은 무엇입니까?",
        "explanation": "번역(Translation)은 텍스트를 한 언어에서 다른 언어로 변환하는 작업입니다. 주어진 시나리오에서 리뷰를 영어로 저장한 후 사용자의 언어로 제공해야 하므로, 번역 작업이 적절합니다.",
        "options": [
            { "value": "핵심 구문 추출 (Key Phrase Extraction)", "right": false },
            { "value": "음성 인식 (Speech Recognition)", "right": false },
            { "value": "언어 모델링 (Language Modeling)", "right": false },
            { "value": "번역 (Translation)", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "챗봇은 음성 입력을 지원할 수 있다.",
        "explanation": "현대 챗봇은 Speech-to-Text (STT) 기술을 활용하여 음성 입력을 처리할 수 있습니다. 예를 들어, Azure Bot Service는 음성을 텍스트로 변환하여 챗봇과 상호 작용할 수 있도록 지원합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "각 통신 채널(예: 웹사이트, 모바일 앱, 소셜 미디어 등)마다 별도의 챗봇이 필요하다.",
        "explanation": "Azure Bot Service와 같은 플랫폼은 여러 채널(웹사이트, 모바일 앱, Facebook Messenger, WhatsApp 등)을 지원하는 단일 챗봇을 개발할 수 있도록 합니다. 따라서 별도의 챗봇이 필요하지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "챗봇은 자연어와 제한된 옵션 응답을 결합하여 대화 흐름을 관리한다.",
        "explanation": "대부분의 챗봇은 자연어 처리(NLP)를 활용하여 사용자의 요청을 이해하는 동시에, 버튼 클릭과 같은 제한된 응답 옵션을 제공하여 사용자의 선택을 유도합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}
    , {
        "type": "radio",
        "question": "소셜 미디어 게시글에서 도시 이름을 추출하고, 가장 많이 언급된 도시를 분석하는 자연어 처리(NLP) 워크로드는 무엇입니까?",
        "explanation": "개체 인식(Entity Recognition)은 텍스트에서 특정한 고유명사(예: 도시, 사람, 조직)를 식별하는 자연어 처리(NLP) 기술입니다. 주어진 문제에서는 도시 이름을 추출하는 것이 핵심이므로 개체 인식이 가장 적절합니다.",
        "options": [
            { "value": "음성 인식 (Speech Recognition)", "right": false },
            { "value": "감성 분석 (Sentiment Analysis)", "right": false },
            { "value": "핵심 구문 추출 (Key Phrase Extraction)", "right": false },
            { "value": "개체 인식 (Entity Recognition)", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "⭐Language Service의 질문 응답(question answering) 기능을 사용하여 Azure SQL 데이터베이스를 쿼리할 수 있다.",
        "explanation": "Language Service의 Question Answering 기능은 미리 정의된 질문과 답변을 매칭하는 데 사용됩니다. SQL 데이터베이스를 직접 쿼리하는 기능은 포함되지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "⭐비슷한 질문을 제출한 여러 사용자에게 동일한 답변을 제공하려면, Language Service의 질문 응답(question answering) 기능을 사용해야 한다.",
        "explanation": "Language Service의 Question Answering 기능은 미리 설정된 지식 기반(knowledge base)에서 질문에 대한 답변을 제공하는 기능입니다. 반복되는 질문에 대해 일관된 응답을 제공하는 데 적합합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "⭐Language Service의 질문 응답(question answering) 기능은 사용자의 발화(intent)를 파악할 수 있다.",
        "explanation": "사용자의 발화(intent) 분석은 Language Understanding (LUIS) 또는 Conversational Language Understanding (CLU)이 수행합니다. Question Answering 기능은 단순한 질문과 답변 매칭을 수행할 뿐, 의도를 분석하지 않습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "문서 모음에서 주요 논점(핵심 내용)을 식별하려면 어떤 자연어 처리(NLP) 기능을 사용해야 합니까?",
        "explanation": "핵심 구문 추출(Key Phrase Extraction)은 문서에서 가장 중요한 단어나 구문을 식별하는 기능입니다. 주어진 시나리오에서는 주요 논점을 파악하는 것이 목적이므로, 핵심 구문 추출이 적절한 선택입니다.",
        "options": [
            { "value": "언어 감지 (Language Detection)", "right": false },
            { "value": "감성 분석 (Sentiment Analysis)", "right": false },
            { "value": "개체 인식 (Entity Recognition)", "right": false },
            { "value": "핵심 구문 추출 (Key Phrase Extraction)", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "[ai900Q208.jpg]고객의 개인 정보는 의사 결정 과정에 관여하는 직원만 볼 수 있어야 합니다:",
        "explanation": "개인 정보가 승인된 직원에게만 접근 가능하도록 보장하는 것은 개인정보 보호 및 보안(Privacy and Security)의 핵심 원칙입니다. 이는 무단 접근을 방지하고 고객 데이터를 보호합니다.",
        "options": [
            { "value": "책임(Accountability)", "right": false },
            { "value": "공정성(Fairness)", "right": false },
            { "value": "포용성(Inclusiveness)", "right": false },
            { "value": "개인정보 보호 및 보안(Privacy and Security)", "right": true },
            { "value": "신뢰성 및 안전성(Reliability and Safety)", "right": false },
            { "value": "투명성(Transparency)", "right": false }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "[ai900Q208.jpg]의사 결정 과정이 기록되어 직원들이 특정 견적의 이유를 식별할 수 있어야 합니다:",
        "explanation": "의사 결정 과정을 기록하는 것은 책임(Accountability)의 원칙과 일치합니다. 이를 통해 행동이 추적되고 필요한 경우 정당화될 수 있도록 보장합니다.",
        "options": [
            { "value": "책임(Accountability)", "right": false },
            { "value": "공정성(Fairness)", "right": false },
            { "value": "포용성(Inclusiveness)", "right": false },
            { "value": "개인정보 보호 및 보안(Privacy and Security)", "right": false },
            { "value": "신뢰성 및 안전성(Reliability and Safety)", "right": false },
            { "value": "투명성(Transparency)", "right": true }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "[ai900Q208.jpg]시스템은 화면 판독기(Screen Reader) 또는 기타 보조 기술을 사용하는 고객이 접근할 수 있어야 합니다:",
        "explanation": "장애가 있는 고객이 서비스와 기술을 동등하게 이용할 수 있도록 보장하는 것은 포용성(Inclusiveness) 원칙의 핵심 요소입니다.",
        "options": [
            { "value": "책임(Accountability)", "right": false },
            { "value": "공정성(Fairness)", "right": false },
            { "value": "포용성(Inclusiveness)", "right": true },
            { "value": "개인정보 보호 및 보안(Privacy and Security)", "right": false },
            { "value": "신뢰성 및 안전성(Reliability and Safety)", "right": false },
            { "value": "투명성(Transparency)", "right": false }
        ],
        "correct": 2
    }
    , {
        "type": "radio",
        "question": "전화번호를 식별하는 데 사용되는 자연어 처리(NLP) 엔터티 유형은 무엇입니까?",
        "explanation": "전화번호는 일정한 형식을 따르므로, 정규 표현식(Regular Expression, Regex)을 사용하여 쉽게 식별할 수 있습니다. 기계 학습이나 리스트 방식은 전화번호 같은 정형 데이터 처리에는 적합하지 않습니다.",
        "options": [
            { "value": "정규 표현식 (Regular Expression)", "right": true },
            { "value": "기계 학습 (Machine-learned)", "right": false },
            { "value": "리스트 (List)", "right": false },
            { "value": "Pattern.any", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "차량 유형을 기반으로 차량 판매 가격(연속 수치)을 예측하려면 어떤 머신 러닝 작업을 선택해야 합니까?[ai900Q212.jpg]",
        "explanation": "ai900Q212A.jpg<br>회귀(Regression)는 연속적인 수치(예: 차량 판매 가격)를 예측하는 머신 러닝 기법입니다. 이 문제에서 출력값은 차량 가격(숫자)이며, 따라서 회귀 모델이 적합합니다.",
        "options": [
            { "value": "분류 (Classification)", "right": false },
            { "value": "회귀 (Regression)", "right": true },
            { "value": "시계열 예측 (Time Series Forecasting)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "모델의 성능을 평가할 때, 예측된 값과 실제 값(양성 및 음성 결과)을 0과 1 값의 그리드 형태로 표시하는 것은 무엇입니까?",
        "explanation": "ai900Q213A.jpg<br>혼동 행렬(Confusion Matrix)은 모델의 예측 결과와 실제 값을 비교하여 0과 1의 그리드 형태로 정리하는 표입니다. 이를 통해 참양성(TP), 참음성(TN), 거짓양성(FP), 거짓음성(FN) 등을 분석할 수 있습니다.",
        "options": [
            { "value": "AUC 지표 (AUC metric)", "right": false },
            { "value": "혼동 행렬 (Confusion Matrix)", "right": true },
            { "value": "ROC 곡선 (ROC Curve)", "right": false },
            { "value": "임계값 (Threshold)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "영수증을 트랜잭션으로 변환하여 스프레드시트에 입력해야 합니다. 거래 날짜, 가맹점, 총 지출 금액 및 납부한 세금이 포함되어야 합니다. 어떤 Azure AI 서비스를 사용해야 합니까?",
        "explanation": "Azure Form Recognizer는 영수증과 같은 문서에서 데이터를 자동으로 추출하는 AI 서비스입니다. 이를 통해 거래 날짜, 가맹점, 총 지출 금액 및 세금을 인식하여 스프레드시트에 입력할 수 있습니다.",
        "options": [
            { "value": "Custom Vision", "right": false },
            { "value": "Form Recognizer", "right": true },
            { "value": "Face", "right": false },
            { "value": "Language", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "주어진 날에 다리를 건널 차량의 수를 예측하는 것은 ________의 예입니다.",
        "explanation": "ai900Q215A.jpg<br>회귀(Regression)는 연속적인 숫자 값을 예측하는 문제를 해결하는 방법입니다. 주어진 날에 다리를 건널 차량의 수는 정해진 범주가 아닌 연속적인 값이므로, 이는 회귀 문제에 해당합니다.",
        "options": [
            { "value": "분류 (Classification)", "right": false },
            { "value": "군집화 (Clustering)", "right": false },
            { "value": "회귀 (Regression)", "right": true }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "머신 러닝 모델에서 입력 데이터로 사용되는 것은 무엇이라고 합니까?",
        "explanation": "ai900Q216A.jpg<br>특성(Features)은 머신 러닝 모델의 입력값으로 사용되는 데이터의 개별 속성을 의미합니다. 예를 들어, 고객의 나이, 소득, 구매 이력 등이 특성이 될 수 있습니다.",
        "options": [
            { "value": "특성 (Features)", "right": true },
            { "value": "함수 (Functions)", "right": false },
            { "value": "레이블 (Labels)", "right": false },
            { "value": "인스턴스 (Instances)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "보안 시스템이 CCTV에서 이미지를 분석하여 승인된 직원이 제한 구역에 출입할 수 있도록 합니다. 이 시스템이 사용하는 컴퓨터 비전의 유형은 무엇입니까?",
        "explanation": "얼굴 감지(Facial Detection)는 이미지에서 얼굴이 존재하는지 확인하는 기술이고, 얼굴 인식(Facial Recognition)은 개별 얼굴을 분석하여 특정 인물을 식별하는 기술입니다. 보안 시스템이 직원의 신원을 확인하고 출입을 허가하는 기능을 수행하므로 이 기술이 적합합니다.",
        "options": [
            { "value": "광학 문자 인식 (OCR)", "right": false },
            { "value": "시맨틱 분할 (Semantic Segmentation)", "right": false },
            { "value": "얼굴 감지 및 얼굴 인식 (Facial Detection and Facial Recognition)", "right": true },
            { "value": "이미지 분석 (Image Analysis)", "right": false }
        ],
        "correct": 2
}, {
        "type": "checkbox",
        "question": "⭐컴퓨터 비전을 사용할 수 있는 두 가지 작업 부하는 무엇입니까? (각 정답은 하나의 점수를 가집니다.)",
        "explanation": "컴퓨터 비전은 이미지 내 객체를 식별하고 분류하는 데 사용됩니다(A). 또한 이미지의 내용을 분석하고 텍스트 설명을 생성하는 기능(E)도 포함됩니다.",
        "options": [
            { "value": "이미지의 색상 픽셀을 객체 이름에 할당하기", "right": true },
            { "value": "데이터 스트림에서 불일치 및 이상 감지하기", "right": false },
            { "value": "숫자 데이터를 시각적으로 표현하기", "right": false },
            { "value": "3D 모델을 사용하여 포토리얼리스틱한 이미지 생성하기", "right": false },
            { "value": "이미지의 내용을 설명하기", "right": true }
        ],
        "correct": [0, 4]}, {
        "type": "radio",
        "question": "슈퍼마켓 선반의 이미지에서 제품의 좌표를 식별하는 앱이 있습니다. 이 앱이 사용하는 서비스는 무엇입니까?",
        "explanation": "Custom Vision의 객체 감지(Object Detection)는 이미지 내 특정 객체의 위치(좌표)와 유형을 인식하는 기술입니다. 따라서 슈퍼마켓 선반에서 제품의 좌표를 찾는 데 가장 적합한 서비스입니다.",
        "options": [
            { "value": "Custom Vision 분류 (Classification)", "right": false },
            { "value": "Custom Vision 객체 감지 (Object Detection)", "right": true },
            { "value": "Computer Vision 읽기 (Read)", "right": false },
            { "value": "Computer Vision 광학 문자 인식 (OCR)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "CCTV 영상에서 차량 번호판을 수집하는 교통 모니터링 시스템은 컴퓨터 비전 서비스의 __________ 예제입니다.",
        "explanation": "텍스트 추출(Text Extraction)은 이미지에서 문자를 감지하고 인식하는 OCR(광학 문자 인식) 기술입니다. 차량 번호판의 번호를 읽는 기능이므로 텍스트 추출이 가장 적합합니다.",
        "options": [
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "객체 감지 (Object Detection)", "right": false },
            { "value": "공간 분석 (Spatial Analysis)", "right": false },
            { "value": "텍스트 추출 (Text Extraction)", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "소셜 미디어에서 친구들의 사진을 자동으로 태그하는 이미지 태깅 솔루션을 구축해야 합니다. 어떤 Azure Cognitive Services 서비스를 사용해야 합니까?",
        "explanation": "Azure Face 서비스는 얼굴 감지 및 얼굴 인식을 제공하여 친구들의 얼굴을 자동으로 인식하고 태그할 수 있도록 합니다.",
        "options": [
            { "value": "얼굴 인식 (Face)", "right": true },
            { "value": "Form Recognizer", "right": false },
            { "value": "Language", "right": false },
            { "value": "Computer Vision", "right": false }
        ],
        "correct": 0
}, 
    {
        "type": "radio",
        "question": "이미지에서 새를 식별하는 앱이 있습니다. 이 앱은 다음과 같은 작업을 수행합니다:<br>• 이미지에서 새의 위치를 식별<br>• 이미지에서 새의 종을 식별<br><br>각 작업에 대해 적절한 컴퓨터 비전 기술을 선택하십시오.<br>\"이미지에서 새의 위치를 식별\"",
        "explanation": "객체 감지(Object Detection)는 이미지에서 특정 객체(예: 새)의 위치를 감지하는 기술입니다.",
        "options": [
            { "value": "자동 캡션 생성 (Automated captioning)", "right": false },
            { "value": "이미지 분류 (Image classification)", "right": false },
            { "value": "객체 감지 (Object detection)", "right": true },
            { "value": "광학 문자 인식 (Optical character recognition, OCR)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "이미지에서 새를 식별하는 앱이 있습니다. 이 앱은 다음과 같은 작업을 수행합니다:<br>• 이미지에서 새의 위치를 식별<br>• 이미지에서 새의 종을 식별<br><br>각 작업에 대해 적절한 컴퓨터 비전 기술을 선택하십시오.<br>\"이미지에서 새의 종을 식별\"",
        "explanation": "이미지 분류(Image Classification)는 객체의 유형(예: 참새, 독수리 등)을 식별하는 기술입니다.",
        "options": [
            { "value": "자동 캡션 생성 (Automated captioning)", "right": false },
            { "value": "이미지 분류 (Image classification)", "right": true },
            { "value": "객체 감지 (Object detection)", "right": false },
            { "value": "광학 문자 인식 (Optical character recognition, OCR)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "다양한 언어로 된 원고를 읽고 주제별로 분류하는 솔루션이 있습니다. 이 솔루션이 사용하는 자연어 처리(NLP) 작업 유형은 무엇입니까?",
        "explanation": "번역(Translation)은 다양한 언어의 원고를 읽는 데 필요하며, 주요 문구 추출(Key Phrase Extraction)은 문서를 주제별로 분류하는 데 사용됩니다.",
        "options": [
            { "value": "음성 인식(Speech Recognition) 및 개체 인식(Entity Recognition)", "right": false },
            { "value": "음성 인식(Speech Recognition) 및 언어 모델링(Language Modeling)", "right": false },
            { "value": "번역(Translation) 및 주요 문구 추출(Key Phrase Extraction)", "right": true },
            { "value": "번역(Translation) 및 감정 분석(Sentiment Analysis)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "사용자가 애플리케이션에서 입력한 질문에 대화형으로 응답하는 것은 _______________________의 예입니다.",
        "explanation": "자연어 처리(NLP)는 사용자의 입력을 분석하고 의미를 이해하여 적절한 응답을 제공하는 기술입니다. AI 챗봇 및 음성 비서와 같은 애플리케이션에 사용됩니다.",
        "options": [
            { "value": "이상 감지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing)", "right": true },
            { "value": "예측 분석 (Forecasting)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "오디오가 없는 100개의 교육 영상이 있으며, 각 영상에는 스크립트가 있습니다. 이 스크립트를 기반으로 내레이션 오디오 파일을 생성해야 합니다. 어떤 유형의 작업을 사용해야 합니까?",
        "explanation": "음성 합성(Speech Synthesis, TTS)은 텍스트를 자연스러운 음성으로 변환하는 기술입니다. Azure Speech Service의 Text-to-Speech 기능을 사용하여 내레이션 오디오 파일을 생성할 수 있습니다.",
        "options": [
            { "value": "언어 모델링 (Language Modeling)", "right": false },
            { "value": "음성 인식 (Speech Recognition)", "right": false },
            { "value": "음성 합성 (Speech Synthesis)", "right": true },
            { "value": "번역 (Translation)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "사용자 입력(예: 'Call me back later')에서 의도를 추출할 수 있는 AI 서비스는 무엇입니까?",
        "explanation": "Azure Language Service는 자연어 처리(NLP)를 기반으로 사용자의 입력을 분석하고 의도를 추출할 수 있는 AI 서비스입니다.",
        "options": [
            { "value": "Azure Cognitive Search", "right": false },
            { "value": "Translator", "right": false },
            { "value": "Language", "right": true },
            { "value": "Speech", "right": false }
        ],
        "correct": 2
    }
    , {
        "type": "radio",
        "question": "내장된 자연어 처리(NLP) 모델을 사용하는 코드 없이(No-Code) 앱을 만들 수 있는 서비스는 무엇입니까?",
        "explanation": "Power Virtual Agents는 Microsoft Power Platform의 일부로, No-Code 환경에서 챗봇을 쉽게 만들고 관리할 수 있는 서비스입니다. 내장된 NLP 모델을 활용하여 사용자 입력을 이해하고 자동 응답을 생성할 수 있습니다.",
        "options": [
            { "value": "Azure Health Bot", "right": false },
            { "value": "Microsoft Bot Framework", "right": false },
            { "value": "Power Virtual Agents", "right": true }
        ],
        "correct": 2
    }
    , {
        "type": "radio",
        "question": "Microsoft의 책임 있는 AI 원칙(Responsible AI Principle) 중 투명성(Transparency)의 예시는 무엇입니까?",
        "explanation": "투명성(Transparency)은 AI가 내린 결정이 어떻게 도출되었는지 사용자가 이해할 수 있도록 돕는 원칙입니다. 예를 들어, AI가 고객의 대출 신청을 거부했을 때 그 이유를 설명하는 것이 이에 해당합니다.",
        "options": [
            { "value": "모든 지원자에게 기회를 평등하게 배분하도록 보장", "right": false },
            { "value": "사용자가 AI 시스템이 내린 결정을 이해할 수 있도록 지원", "right": true },
            { "value": "개발자가 자신이 만든 솔루션에 대해 책임을 지도록 보장", "right": false },
            { "value": "사용자의 기밀 데이터를 안전하게 저장하도록 보장", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "고객이 전화, 소셜 미디어, 디지털 어시스턴트를 사용하여 주문 상태를 조회할 수 있도록 해야 합니다. 어떤 서비스를 사용해야 합니까?",
        "explanation": "Azure Bot Service는 다양한 채널(웹, 소셜 미디어, 디지털 어시스턴트, 전화 등)에서 작동하는 대화형 챗봇을 구축할 수 있는 서비스입니다. 이를 통해 고객이 주문 상태를 쉽게 조회할 수 있습니다.",
        "options": [
            { "value": "Azure Machine Learning 모델", "right": false },
            { "value": "Translator 서비스", "right": false },
            { "value": "Form Recognizer 모델", "right": false },
            { "value": "Azure Bot Service", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "⭐Microsoft Teams, Microsoft Cortana, Amazon Alexa에서 실행될 대화형 AI 솔루션을 구축하려고 합니다. 어떤 서비스를 사용해야 합니까?",
        "explanation": "Azure Bot Service는 Microsoft Teams, Cortana, Amazon Alexa 등 다양한 채널에서 사용할 수 있는 챗봇을 구축하고 배포할 수 있는 서비스입니다. 대화형 AI를 구현하는 가장 적합한 서비스입니다.",
        "options": [
            { "value": "Azure Bot Service", "right": true },
            { "value": "Azure Cognitive Search", "right": false },
            { "value": "Speech", "right": false },
            { "value": "Language Service", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "기업 웹사이트에서 인터랙티브 웹챗 기능을 Azure Bot Service를 사용하여 구현할 수 있다.",
        "explanation": "Azure Bot Service는 웹사이트에서 작동하는 대화형 챗봇을 개발하고 배포하는 데 사용됩니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "자동 캡션 생성 기능은 대화형 AI(Conversational AI)의 예시이다.",
        "explanation": "자동 캡션 생성은 음성을 텍스트로 변환하는 Speech-to-Text(STT) 기술을 사용하지만, 대화형 AI와는 다릅니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "가정 내 스마트 장치가 '내 다음 일정이 언제야?' 같은 질문에 응답하는 것은 대화형 AI의 예시이다.",
        "explanation": "스마트 장치(AI 비서, Alexa, Google Assistant 등)는 대화형 AI를 활용하여 사용자의 질문에 응답할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "Azure Cognitive Services에서 민감한 정보를 포함하는 문서를 식별하는 데 사용할 수 있는 서비스는 무엇입니까?",
        "explanation": "Form Recognizer는 문서에서 중요한 데이터를 자동으로 추출하는 AI 서비스입니다. 민감한 정보(예: 신용카드 번호, 주민등록번호 등)를 감지할 수 있습니다.",
        "options": [
            { "value": "Custom Vision (사용자 정의 비전)", "right": false },
            { "value": "Conversational Language Understanding (대화형 언어 이해)", "right": false },
            { "value": "Form Recognizer (폼 인식기)", "right": true }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "대형 기계의 비정상적인 온도 변동을 감지하는 것은 ________________의 예입니다.",
        "explanation": "이상 감지(Anomaly Detection)는 센서 데이터를 분석하여 비정상적인 패턴을 감지하는 AI 기법입니다. 산업 기계의 온도 변동, 금융 사기 탐지, 네트워크 보안 등의 분야에서 활용됩니다.",
        "options": [
            { "value": "컴퓨터 비전 작업 (Computer Vision Workload)", "right": false },
            { "value": "지식 마이닝 작업 (Knowledge Mining Workload)", "right": false },
            { "value": "자연어 처리 작업 (Natural Language Processing, NLP Workload)", "right": false },
            { "value": "이상 감지 작업 (Anomaly Detection Workload)", "right": true }
        ],
        "correct": 3
    }
    , {
        "type": "radio",
        "question": "스마트 디바이스가 'What is the stock price of Contoso Ltd.?'라는 질문에 응답하는 것은 어떤 AI 작업(Workload)의 예입니까?",
        "explanation": "자연어 처리(NLP)는 사용자의 질문을 이해하고 응답을 생성하는 AI 기술입니다. AI 비서, 챗봇, 질문 응답 시스템 등에서 사용됩니다.",
        "options": [
            { "value": "지식 마이닝 (Knowledge Mining)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": true },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "이상 감지 (Anomaly Detection)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "숫자 값을 예측하는 데 사용되는 지도 학습 머신러닝 모델은 무엇입니까?[ai900Q239.jpg]",
        "explanation":"",
        "options": [
            { "value": "분류 (Classification)", "right": false },
            { "value": "군집화 (Clustering)", "right": false },
            { "value": "회귀 (Regression)", "right": true }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "카테고리를 예측하는 데 사용되는 지도 학습 머신러닝 모델은 무엇입니까?[ai900Q239.jpg]",
        "explanation":"",
        "options": [
            { "value": "분류 (Classification)", "right": true },
            { "value": "군집화 (Clustering)", "right": false },
            { "value": "회귀 (Regression)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "특성에 따라 유사한 개체를 그룹화하는 데 사용되는 비지도 학습 머신러닝 모델은 무엇입니까?[ai900Q239.jpg]",
        "explanation":"",
        "options": [
            { "value": "분류 (Classification)", "right": false },
            { "value": "군집화 (Clustering)", "right": true },
            { "value": "회귀 (Regression)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "⭐소매점에서 촬영된 이미지를 처리하고 경쟁사의 제품을 식별하는 도구를 구축하려고 합니다. 이 솔루션은 회사에서 제공한 이미지 데이터로 학습되어야 합니다. 어떤 Azure AI 서비스를 사용해야 합니까?",
        "explanation": "Custom Vision은 사용자가 제공한 이미지 데이터로 모델을 학습하여 특정 개체를 인식할 수 있는 Azure AI 서비스입니다. 경쟁사 제품을 감지하고 정확히 분류할 수 있도록 훈련할 수 있습니다.",
        "options": [
            { "value": "Form Recognizer", "right": false },
            { "value": "Custom Vision", "right": true },
            { "value": "Face", "right": false },
            { "value": "Computer Vision", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "기상 조건과 토양 품질 측정치를 기반으로 농업 수확량을 예측하는 것은 어떤 머신러닝 모델의 예입니까?",
        "explanation": "회귀(Regression) 모델은 연속적인 숫자 값을 예측하는 데 사용됩니다. 농업 수확량은 연속적인 값이므로, 회귀 분석이 적절한 머신러닝 기법입니다.",
        "options": [
            { "value": "분류 (Classification)", "right": false },
            { "value": "회귀 (Regression)", "right": true },
            { "value": "군집화 (Clustering)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "사진 속 도로 표지판에서 도로 이름을 식별해야 합니다. 어떤 유형의 컴퓨터 비전을 사용해야 합니까?",
        "explanation": "광학 문자 인식(OCR)은 이미지에서 문자를 감지하고 변환하는 기술입니다. Azure Computer Vision의 OCR API를 사용하면 도로 표지판에서 문자(도로명)를 자동으로 추출할 수 있습니다.",
        "options": [
            { "value": "객체 감지 (Object Detection)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": true },
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "얼굴 인식 (Facial Recognition)", "right": false }
        ],
        "correct": 1
    }
    , {
        "type": "radio",
        "question": "이미지에 대한 캡션을 생성하는 것은 어떤 컴퓨터 비전 기술의 예입니까?[ai900Q244.jpg]",
        "explanation":"",
        "options": [
            { "value": "이미지 분류 (Image classification)", "right": true },
            { "value": "객체 감지 (Object detection)", "right": false },
            { "value": "광학 문자 인식 (Optical character recognition, OCR)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "영화 포스터 이미지에서 영화 제목을 추출하는 것은 어떤 컴퓨터 비전 기술의 예입니까?[ai900Q244.jpg]",
        "explanation":"",
        "options": [
            { "value": "이미지 분류 (Image classification)", "right": false },
            { "value": "객체 감지 (Object detection)", "right": false },
            { "value": "광학 문자 인식 (Optical character recognition, OCR)", "right": true }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "이미지에서 차량의 위치를 찾는 것은 어떤 컴퓨터 비전 기술의 예입니까?[ai900Q244.jpg]",
        "explanation":"",
        "options": [
            { "value": "이미지 분류 (Image classification)", "right": false },
            { "value": "객체 감지 (Object detection)", "right": true },
            { "value": "광학 문자 인식 (Optical character recognition, OCR)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "Azure에서 챗봇 솔루션을 개발 중입니다. 사용자의 의도(Intent)를 파악하는 서비스는 무엇입니까?",
        "explanation": "Azure Language Service는 자연어 처리(NLP) 기반으로 사용자의 발화(Intent)를 분석하는 서비스입니다. 이를 통해 챗봇이 질문의 의미를 이해하고 적절한 응답을 선택할 수 있습니다.",
        "options": [
            { "value": "번역 서비스 (Translator)", "right": false },
            { "value": "언어 서비스 (Language)", "right": true },
            { "value": "Azure 인공지능 검색 (Azure Cognitive Search)", "right": false },
            { "value": "음성 서비스 (Speech)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "슈퍼마켓 선반의 이미지에서 제품의 브랜드 이름을 식별하는 챗봇이 있습니다. 이 챗봇이 사용하는 Azure AI 서비스는 무엇입니까?",
        "explanation": "Custom Vision Image Classification은 사용자가 제공한 이미지 데이터로 특정 개체(예: 브랜드 로고 및 제품)를 식별하도록 학습할 수 있는 맞춤형 모델을 제공합니다.",
        "options": [
            { "value": "Azure 검색 기능을 위한 AI 강화 (AI enrichment for Azure Search capabilities)", "right": false },
            { "value": "컴퓨터 비전 이미지 분석 기능 (Computer Vision Image Analysis capabilities)", "right": false },
            { "value": "사용자 정의 비전 이미지 분류 기능 (Custom Vision Image Classification capabilities)", "right": true },
            { "value": "언어 이해 기능 (Language Understanding capabilities)", "right": false }
        ],
        "correct": 2
    }
    ,
    {
        "type": "radio",
        "question": "드론을 사용하여 작물 사이에서 잡초가 자라는 위치를 식별하고, 잡초 제거를 위한 명령을 전송합니다. 이것은 어떤 유형의 컴퓨터 비전 기술의 예시입니까?",
        "explanation": "객체 탐지(Object Detection)는 이미지에서 특정 객체(잡초)의 위치를 찾고, 이를 감지하는 기술입니다. 드론이 잡초를 감지하고 제거 명령을 내리는 작업이므로, 객체 탐지가 적절한 솔루션입니다.",
        "options": [
            { "value": "Object Detection (객체 탐지)", "right": true },
            { "value": "Optical Character Recognition (OCR, 광학 문자 인식)", "right": false },
            { "value": "Scene Segmentation (장면 분할)", "right": false }
        ],
        "correct": 0
    }
    , {
        "type": "checkbox",
        "question": "다음 중 컴퓨터 비전(Computer Vision)을 사용하여 수행할 수 있는 두 가지 작업은 무엇입니까?각1점 ",
        "explanation": "컴퓨터 비전은 이미지 분석을 통해 색상 구성표를 감지할 수 있으며, 객체 감지(Object Detection) 및 이미지 인식을 사용하여 이미지에서 브랜드를 식별할 수 있습니다.",
        "options": [
            { "value": "주식 가격 예측 (Predict stock prices)", "right": false },
            { "value": "이미지에서 색상 구성표 감지 (Detect the color scheme in an image)", "right": true },
            { "value": "언어 간 텍스트 번역 (Translate text between languages)", "right": false },
            { "value": "키 구문 추출 (Extract key phrases)", "right": false },
            { "value": "이미지에서 브랜드 감지 (Detect brands in an image)", "right": true }
        ],
        "correct": [1, 4]},
    {
        "type": "radio",
        "question": "Azure AI Custom Vision 서비스는 이미지에서 객체를 감지할 수 있습니다.",
        "explanation": "Azure AI Custom Vision은 객체 감지(Object Detection) 및 이미지 분류(Image Classification)를 지원하며, 이미지에서 객체를 감지하고 경계 상자(Bounding Box)를 생성할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Azure AI Custom Vision 서비스는 모델을 학습시키기 위해 사용자가 자체 데이터를 제공해야 합니다.",
        "explanation": "Azure AI Custom Vision은 사용자 정의 모델 학습을 위해 사용자가 직접 데이터를 업로드하고 레이블링해야 합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Azure AI Custom Vision 서비스는 비디오 파일을 분석하는 데 사용할 수 있습니다.",
        "explanation": "Azure AI Custom Vision은 이미지 분석에 사용되며, 비디오 파일에 직접 적용할 수 없습니다. 비디오 분석은 Azure Video Analyzer 또는 Computer Vision Video Indexer를 사용해야 합니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "무단으로 수집한 데이터를 사용하여 생성한 자연어 처리(NLP) 모델이 있습니다. 이 경우 위반한 Microsoft의 책임 있는 AI 원칙은 무엇입니까?",
        "explanation": "Microsoft의 개인 정보 및 보안 (Privacy and security) 원칙은 데이터 수집 및 사용에서 개인 정보 보호와 보안을 보장해야 합니다.",
        "options": [
            { "value": "개인 정보 및 보안 (Privacy and security)", "right": true },
            { "value": "투명성 (Transparency)", "right": false },
            { "value": "포용성 (Inclusiveness)", "right": false },
            { "value": "신뢰성 및 안전 (Reliability and safety)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "⭐생성형 AI 솔루션이 반환한 증오성(hate) 응답을 식별하기 위해 무엇을 구현해야 합니까?",
        "explanation": "콘텐츠 필터링 (Content filtering)은 생성된 응답을 분석하고 실시간으로 차단합니다. 증오성(hate) 응답을 식별하고 문제가 있는 콘텐츠를 차단하는 사후 대응 방식입니다.",
        "options": [
            { "value": "프롬프트 엔지니어링 (Prompt engineering)", "right": false },
            { "value": "남용 모니터링 (Abuse monitoring)", "right": false },
            { "value": "파인튜닝 (Fine-tuning)", "right": false },
            { "value": "콘텐츠 필터링 (Content filtering)", "right": true }
        ],
        "correct": 3
    }
    //130
    , {
        "type": "radio",
        "question": "회의에서 발표할 때, 세션이 청중을 위해 자막으로 전사됩니다. 이것은 ___?___ 의 예입니다.",
        "explanation": "음성 인식(Speech Recognition)은 사람의 음성을 텍스트로 변환하는 기술입니다. 회의에서 발표자의 음성을 실시간으로 자막으로 전사하는 것은 음성 인식 기술의 대표적인 활용 예입니다.",
        "options": [
            { "value": "감정 분석 (Sentiment Analysis)", "right": false },
            { "value": "음성 인식 (Speech Recognition)", "right": true },
            { "value": "음성 합성 (Speech Synthesis)", "right": false },
            { "value": "번역 (Translation)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Azure Machine Learning 디자이너를 사용하여 Azure Machine Learning 모델을 배포할 계획입니다. <br><div style=\"border: 1px solid #000; padding: 10px; display: inline-block;\"><span style=\"display: block; margin-bottom: 5px;\">■ 데이터셋 수집 및 준비 (Ingest and prepare a dataset)</span><span style=\"display: block; margin-bottom: 5px;\">■ 데이터를 무작위로 학습 데이터와 검증 데이터로 나누기 (Split the data randomly into training data and validation data)</span><span style=\"display: block; margin-bottom: 5px;\">■ 모델 학습 (Train the model)</span><span style=\"display: block; margin-bottom: 5px;\">■ 검증 데이터셋에 대해 모델 평가 (Evaluate the model against the validation dataset)</span><span style=\"display: block; margin-bottom: 5px;\">■ 원본 데이터셋에 대해 모델 평가 (Evaluate the model against the original dataset)</span></div><br>다음 중 순서대로 수행해야 할 네 가지 작업은 무엇입니까?",
        "explanation": "Azure Machine Learning 모델을 배포하기 위해서는 다음의 순서대로 작업해야 합니다: 데이터셋 수집 및 준비 → 데이터를 무작위로 학습 데이터와 검증 데이터로 나누기 → 모델 학습 → 검증 데이터셋에 대해 모델 평가.",
        "options": [
            { "value": "데이터셋 수집 및 준비 → 모델 학습 → 검증 데이터셋에 대해 모델 평가 → 원본 데이터셋에 대해 모델 평가", "right": false },
            { "value": "데이터셋 수집 및 준비 → 데이터를 무작위로 학습 데이터와 검증 데이터로 나누기 → 모델 학습 → 검증 데이터셋에 대해 모델 평가", "right": true },
            { "value": "모델 학습 → 데이터를 무작위로 학습 데이터와 검증 데이터로 나누기 → 데이터셋 수집 및 준비 → 검증 데이터셋에 대해 모델 평가", "right": false },
            { "value": "데이터를 무작위로 학습 데이터와 검증 데이터로 나누기 → 모델 학습 → 검증 데이터셋에 대해 모델 평가 → 원본 데이터셋에 대해 모델 평가", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "애플리케이션의 일부로 사용자가 입력한 질문에 대해 대화형으로 답변하는 것은 ___?___ 의 예입니다.",
        "explanation": "대화형 인공지능(Conversational AI)은 사용자와 자연스럽게 상호작용하며 질문에 답변하고 대화를 이어갈 수 있는 AI 기술입니다. 챗봇이나 가상 비서와 같은 애플리케이션에 적용됩니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "대화형 인공지능 (Conversational AI)", "right": true },
            { "value": "예측 (Forecasting)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "⭐자동차 간의 거리를 추정하기 위해 이미지에서 자동차의 위치를 ​​결정해야 합니다. 이 작업에 적합한 컴퓨터 비전 유형은 무엇입니까?",
        "explanation": "객체 탐지(Object Detection)는 이미지 내에서 특정 객체(이 경우에는 자동차)의 위치를 ​​식별하고 그 좌표를 찾는 기술입니다. 이를 통해 자동차 간의 거리를 추정할 수 있습니다.",
        "options": [
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false },
            { "value": "객체 탐지 (Object Detection)", "right": true },
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "얼굴 인식 (Face Detection)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "다음 중 컴퓨터 비전 작업 유형 중에서 적절한 항목을 선택하여 빈칸을 완성하세요. (____________) → 이미지에 대한 캡션 생성 (Generate captions for images)",
        "explanation": "이미지 분류는 이미지의 주요 특징을 분석하고 그에 따라 설명문을 생성할 수 있습니다.",
        "options": [
            { "value": "이미지 분류 (Image Classification)", "right": true },
            { "value": "객체 탐지 (Object Detection)", "right": false },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "다음 중 컴퓨터 비전 작업 유형 중에서 적절한 항목을 선택하여 빈칸을 완성하세요. (____________) → 영화 포스터 이미지에서 영화 제목 추출 (Extract movie title names from movie poster images)",
        "explanation": "OCR은 이미지에서 텍스트를 인식하고 추출하는 기술로, 영화 제목을 추출하는 데 적합합니다.",
        "options": [{ "value": "이미지 분류 (Image Classification)", "right": false },
        { "value": "객체 탐지 (Object Detection)", "right": false },
        { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": true }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "다음 중 컴퓨터 비전 작업 유형 중에서 적절한 항목을 선택하여 빈칸을 완성하세요. (____________) → 이미지에서 차량 위치 파악 (Locate vehicles in images)",
        "explanation": "객체 탐지는 이미지 내에서 특정 객체의 위치를 ​​찾는 기술로, 차량과 같은 물체를 감지하고 위치를 표시할 수 있습니다.",
        "options": [
            { "value": "이미지 분류 (Image Classification)", "right": false },
            { "value": "객체 탐지 (Object Detection)", "right": true },
            { "value": "광학 문자 인식 (Optical Character Recognition, OCR)", "right": false }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "Azure Machine Learning을 사용하여 학습된 모델의 여러 버전을 추적해야 합니다. 무엇을 해야 합니까?",
        "explanation": "모델을 등록하면 Azure Machine Learning에서 모델의 여러 버전을 추적할 수 있습니다. 이는 모델 관리 및 배포에서 중요한 단계입니다.",
        "options": [
            { "value": "모델 설명 (Explain the model)", "right": false },
            { "value": "학습 데이터 등록 (Register the training data)", "right": false },
            { "value": "추론 클러스터 프로비저닝 (Provision an inference cluster)", "right": false },
            { "value": "모델 등록 (Register the model)", "right": true }
        ],
        "correct": 3
},
    {
        "type": "radio",
        "question": "⭐다음 중 AI 작업 유형 중에서 적절한 항목을 선택하여 빈칸을 완성하세요. (____________) → 환불 및 교환에 관한 질문에 자동으로 답변하는 챗봇",
        "explanation": "대화형 AI는 사용자와 자연스럽게 상호작용하며 질문에 답변하고 대화를 이어갈 수 있습니다. 챗봇이나 가상 비서에 주로 사용됩니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "대화형 AI (Conversational AI)", "right": true },
            { "value": "지식 마이닝 (Knowledge Mining)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": false }
        ],
        "correct": 2
},
    {
        "type": "radio",
        "question": "⭐다음 중 AI 작업 유형 중에서 적절한 항목을 선택하여 빈칸을 완성하세요. (____________) → 사진에 사람이 포함되어 있는지 확인 ",
        "explanation": "컴퓨터 비전은 이미지 또는 비디오에서 객체를 감지하고 인식합니다. 이 경우 사람 객체를 인식하여 포함 여부를 확인합니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": true },
            { "value": "대화형 AI (Conversational AI)", "right": false },
            { "value": "지식 마이닝 (Knowledge Mining)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": false }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "⭐다음 중 AI 작업 유형 중에서 적절한 항목을 선택하여 빈칸을 완성하세요. (____________) → 리뷰가 긍정적인지 부정적인지 확인 (Determining whether a review is positive or negative)",
        "explanation": "NLP는 텍스트 데이터를 분석하고 감정 분석(Sentiment Analysis)을 통해 긍정 또는 부정의 의미를 파악할 수 있습니다.",
        "options": [
            { "value": "이상 탐지 (Anomaly Detection)", "right": false },
            { "value": "컴퓨터 비전 (Computer Vision)", "right": false },
            { "value": "대화형 AI (Conversational AI)", "right": false },
            { "value": "지식 마이닝 (Knowledge Mining)", "right": false },
            { "value": "자연어 처리 (Natural Language Processing, NLP)", "right": true }
        ],
        "correct": 4}, {
        "type": "checkbox",
        "question": "다음 중 음성 인식(Speech Recognition)을 사용할 수 있는 두 가지 시나리오는 무엇입니까?",
        "explanation": "음성 인식은 음성을 텍스트로 변환하는 기술입니다. 비디오의 자막 생성 및 통화나 회의 내용을 기록하기 위해 사용됩니다.",
        "options": [
            { "value": "문자 메시지를 소리 내어 읽어주는 차량 내 시스템 (an in-car system that reads text messages aloud)", "right": false },
            { "value": "녹화되거나 라이브 비디오에 자막을 제공 (providing closed captions for recorded or live videos)", "right": true },
            { "value": "기차역용 자동 안내 방송 시스템 생성 (creating an automated public address system for a train station)", "right": false },
            { "value": "전화 통화 또는 회의 내용의 전사본 생성 (creating a transcript of a telephone call or meeting)", "right": true }
        ],
        "correct": [1, 3]}, {
        "type": "radio",
        "question": "Which parameter should you configure to produce more verbose responses from a chat solution that uses the Azure OpenAI GPT-3.5 model?",
        "explanation": "Max response는 모델이 생성할 수 있는 최대 토큰 수를 설정합니다. 이 값을 높이면 더 길고 자세한 응답을 생성할 수 있습니다.",
        "options": [
            { "value": "온도(Temperature)", "right": false },
            { "value": "존재 페널티(Presence penalty)", "right": false },
            { "value": "중지 시퀀스(Stop sequence)", "right": false },
            { "value": "최대 응답(Max response)", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "임상 데이터를 사용하여 환자에게 질병이 있는지 예측하는 Azure Machine Learning 모델이 있습니다. 임상 데이터를 정제하고 변환했습니다. 모델의 정확성을 입증해야 합니다. 다음으로 무엇을 해야 합니까?",
        "explanation": "데이터 정제 및 변환 후에는 모델을 학습시켜야 합니다. 학습된 모델은 이후 검증 단계를 통해 정확성을 평가할 수 있습니다.",
        "options": [
            { "value": "임상 데이터를 사용하여 모델을 검증합니다.", "right": false },
            { "value": "임상 데이터를 사용하여 모델을 학습시킵니다.", "right": false },
            { "value": "임상 데이터를 두 개의 데이터셋으로 나눕니다.", "right": true },
            { "value": "Automated ML을 사용하여 모델을 학습시킵니다.", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "Cortana를 사용하여 봇과 통신할 수 있습니다. (Y/N)",
        "explanation": "Cortana는 Microsoft의 가상 개인 비서로서 음성 명령을 통해 다양한 작업을 수행할 수 있지만, 봇 프레임워크와의 직접적인 통합은 제한적입니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Microsoft Teams를 사용하여 봇과 통신할 수 있습니다. (Y/N)",
        "explanation": "Microsoft Teams는 봇 프레임워크와 통합되어 봇과의 대화를 지원합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "웹채팅 인터페이스를 사용하여 봇과 통신할 수 있습니다. (Y/N)",
        "explanation": "웹채팅은 봇 프레임워크에 기본 제공된 채널로, 웹 애플리케이션에서 봇과 상호작용할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "checkbox",
        "question": "다음 중 자연어 처리(Natural Language Processing, NLP) 작업의 예는 무엇입니까? (두 개 선택)",
        "explanation": "자연어 처리(NLP)는 사용자의 질문을 이해하고 이에 대해 자연스럽게 응답하는 기술입니다. B와 C는 NLP 모델이 질문을 분석하고 대답을 생성하는 시나리오입니다.",
        "options": [
            { "value": "자동차에 헤드램프를 자동으로 삽입하는 조립 라인 기계 (assembly line machinery that autonomously inserts headlamps into cars)", "right": false },
            { "value": "날씨를 물어보는 질문에 응답하는 스마트 홈 장치 (a smart device in the home that responds to questions such as, 'What will the weather be like today?')", "right": true },
            { "value": "지식 베이스를 사용하여 사용자 질문에 대화형으로 응답하는 웹사이트 (a website that uses a knowledge base to interactively respond to users' questions)", "right": true },
            { "value": "특정 온도에 도달하면 팬을 작동시키는 기계 온도 모니터링 (monitoring the temperature of machinery to turn on a fan when the temperature reaches a specific threshold)", "right": false }
        ],
        "correct": [1, 2]
    }
    , {
        "type": "radio",
        "question": "연료 샘플에 대한 실험 데이터를 포함하는 데이터셋이 있습니다. 샘플의 밀도에 따라 얻을 수 있는 에너지의 양을 예측해야 합니다. 어떤 유형의 인공지능(AI) 작업을 사용해야 합니까?",
        "explanation": "회귀(Regression)는 연속적인 숫자 값을 예측하기 위해 사용됩니다. 이 문제에서는 샘플의 밀도를 기반으로 '에너지의 양'이라는 연속적 수치를 예측해야 하므로 회귀가 적합합니다.",
        "options": [
            { "value": "회귀(Regression)", "right": true },
            { "value": "군집화(Clustering)", "right": false },
            { "value": "지식 마이닝(Knowledge mining)", "right": false },
            { "value": "분류(Classification)", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "챗봇은 음성 입력을 지원할 수 있습니다. (Y/N)",
        "explanation": "챗봇은 음성 인식 기술을 사용하여 음성 입력을 처리하고 응답할 수 있습니다. 특히 애저 봇 서비스(Azure Bot Service)나 구글 다이얼로그플로우(Google Dialogflow)와 같은 플랫폼은 음성 입력을 자연어 처리(NLP)로 분석하고 응답할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "각 통신 채널마다 별도의 챗봇이 필요합니다.  (Y/N)",
        "explanation": "하나의 챗봇이 여러 채널에서 작동할 수 있습니다. 예를 들어, 애저 봇 서비스(Azure Bot Service)는 마이크로소프트 팀즈(Microsoft Teams), 웹채팅(Webchat), 페이스북 메신저(Facebook Messenger) 등 여러 채널에 동일한 챗봇을 배포할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "챗봇은 자연어와 제한된 옵션 응답을 조합하여 대화 흐름을 관리합니다.  (Y/N)",
        "explanation": "챗봇은 자연어 처리(NLP)를 사용하여 사용자의 질문을 이해하고, 버튼이나 옵션 선택지를 제공하여 대화 흐름을 제어할 수 있습니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "라벨링은 알려진 값으로 학습 데이터를 태그하는 과정입니다. (Labelling is the process of tagging training data with known values.) (Y/N)",
        "explanation": "라벨링(Labelling)은 지도 학습(Supervised Learning)에서 입력 데이터에 대해 올바른 출력(라벨)을 부여하는 과정입니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "모델을 학습한 데이터와 동일한 데이터를 사용하여 모델을 평가해야 합니다. (You should evaluate a model by using the same data used to train the model.) (Y/N)",
        "explanation": "학습 데이터로 모델을 평가하면 과적합(Overfitting)이 발생하여 모델의 일반화 성능을 정확히 측정할 수 없습니다. 검증 데이터(Validation Set) 또는 테스트 데이터(Test Set)를 사용하여 모델을 평가해야 합니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "정확도는 항상 모델 성능을 측정하는 주요 지표입니다. (Accuracy is always the primary metric used to measure a model's performance.) (Y/N)",
        "explanation": "정확도(Accuracy)는 클래스 불균형(Class Imbalance)이 있는 데이터셋에서는 적합하지 않을 수 있습니다. F1 Score, Precision, Recall 등의 다른 성능 지표를 사용해야 할 때도 많습니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "checkbox",
        "question": "다음 중 음성 합성(Speech Synthesis) 솔루션을 사용할 수 있는 두 가지 시나리오는 무엇입니까? (두 개 선택)",
        "explanation": "음성 합성(Speech Synthesis)은 텍스트를 음성으로 변환(TTS, Text-to-Speech)하는 기술입니다. A와 D는 입력된 텍스트 또는 숫자를 음성으로 변환하여 사용자에게 들려주는 시나리오입니다.",
        "options": [
            { "value": "사용자가 전화기에 숫자 키패드를 사용하여 입력한 신용카드 번호를 자동 음성으로 읽어주는 경우 (An automated voice that reads back a credit card number entered into a telephone by using a numeric keypad)", "right": true },
            { "value": "뉴스 방송의 실시간 자막 생성 (Generating live captions for a news broadcast)", "right": false },
            { "value": "회의 녹음 파일에서 주요 구문 추출 (Extracting key phrases from the audio recording of a meeting)", "right": false },
            { "value": "컴퓨터 게임에서 플레이어에게 음성으로 말하는 인공지능(AI) 캐릭터 (An AI character in a computer game that speaks audibly to a player)", "right": true }
        ],
        "correct": [0, 3]
}, {
        "type": "radio",
        "question": "과거 데이터를 기반으로 주택 가격을 예측하는 것은 이상 탐지의 예입니다. (Forecasting housing prices based on historical data is an example of anomaly detection.) (Y/N)",
        "explanation": "예측(Forecasting)은 회귀(Regression) 또는 시계열 분석(Time Series Analysis)에 해당합니다. 이상 탐지는 비정상적인 패턴을 감지하는 작업입니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
},
    {
        "type": "radio",
        "question": "일반적인 패턴에서 벗어난 로그인 시도를 식별하는 것은 이상 탐지의 예입니다. (Identifying suspicious sign-ins by looking for deviations from usual patterns is an example of anomaly detection.) (Y/N)",
        "explanation": "이상 탐지(Anomaly Detection)는 비정상적인 행동이나 패턴을 감지하여 보안 위협이나 사기를 식별합니다.",
        "options": [
            { "value": "Yes", "right": true },
            { "value": "No", "right": false }
        ],
        "correct": 0
},
    {
        "type": "radio",
        "question": "환자의 의료 기록을 기반으로 당뇨병 발생 여부를 예측하는 것은 이상 탐지의 예입니다. (Predicting whether a patient will develop diabetes based on the patient’s medical history is an example of anomaly detection.) (Y/N)",
        "explanation": "질병 발생 여부는 이진 분류(Binary Classification)에 해당합니다.",
        "options": [
            { "value": "Yes", "right": false },
            { "value": "No", "right": true }
        ],
        "correct": 1
}, {
        "type": "radio",
        "question": "슈퍼마켓 선반 이미지에서 제품의 좌표를 식별하는 앱이 있습니다. 이 앱이 사용하는 서비스는 무엇입니까?",
        "explanation": "Object Detection은 이미지에서 객체의 위치 좌표를 식별하고 Bounding Box를 생성합니다.",
        "options": [
            { "value": "Azure AI Custom Vision object detection", "right": true },
            { "value": "Azure AI Computer Vision optical character recognition (OCR)", "right": false },
            { "value": "Azure AI Custom Vision classification", "right": false },
            { "value": "Azure AI Computer Vision Read", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "(__________) → 자연어를 사용하여 지식 베이스를 쿼리할 수 있습니다.",
        "explanation": "QnA Maker는 자연어 질문에 대한 응답을 제공하며, 지식 베이스를 쿼리합니다.",
        "options": [
            { "value": "Azure Storage", "right": false },
            { "value": "Language Understanding (LUIS)", "right": false },
            { "value": "QnA Maker", "right": true },
            { "value": "Speech", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "(__________) → 음성을 텍스트로 실시간 전사합니다.",
        "explanation": "Speech 서비스는 음성을 텍스트로 실시간 전사(Speech-to-Text)합니다.",
        "options": [
            { "value": "Azure Storage", "right": false },
            { "value": "Language Understanding (LUIS)", "right": false },
            { "value": "QnA Maker", "right": false },
            { "value": "Speech", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "⭐홍보용 브로슈어에 사용할 만화(카툰)를 생성해야 합니다. 각 만화(카툰)는 텍스트 설명을 기반으로 합니다. 어떤 Azure OpenAI 모델을 사용해야 합니까?",
        "explanation": "DALL-E는 텍스트 설명을 바탕으로 이미지를 생성하는 모델입니다. 만화 이미지 생성은 DALL-E의 주요 기능입니다.",
        "options": [
            { "value": "GPT-3.5", "right": false },
            { "value": "GPT-4", "right": false },
            { "value": "Codex", "right": false },
            { "value": "DALL-E", "right": true }
        ],
        "correct": 3
}, {
        "type": "radio",
        "question": "Form Recognizer에서 커스텀 모델을 사용하는 장점은 무엇입니까?",
        "explanation": "Form Recognizer의 커스텀 모델은 사용자 지정 양식 또는 비정형 문서에 맞게 유연하게 학습 및 적용할 수 있습니다.",
        "options": [
            { "value": "커스텀 모델은 다양한 유형의 양식을 인식하도록 학습할 수 있습니다.", "right": true },
            { "value": "커스텀 모델은 항상 더 높은 정확도를 제공합니다.", "right": false },
            { "value": "커스텀 모델은 사전 빌드된 모델보다 비용이 저렴합니다.", "right": false },
            { "value": "온프레미스에 배포할 수 있는 유일한 모델입니다.", "right": false }
        ],
        "correct": 0
}, {
        "type": "radio",
        "question": "사용자가 애플리케이션의 일부로 입력한 질문에 대한 대화형 응답은 다음 중 어떤 예에 해당합니까?",
        "explanation": "자연어 처리(Natural Language Processing, NLP)는 사용자가 입력한 텍스트를 이해하고 이에 대한 대화형 응답을 생성합니다. 예로는 챗봇이나 음성 비서가 있습니다.",
        "options": [
            { "value": "이상 탐지 (anomaly detection)", "right": false },
            { "value": "컴퓨터 비전 (computer vision)", "right": false },
            { "value": "자연어 처리 (natural language processing)", "right": true },
            { "value": "예측 분석 (forecasting)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "시각이 약한 사용자를 위해 레시피 설명을 음성으로 읽어주는 앱을 만들어야 합니다. 어떤 Azure 버전 서비스를 사용해야 합니까?",
        "explanation": "Azure Speech 서비스는 텍스트를 음성으로 변환(Text-to-Speech, TTS)하여 텍스트를 소리 내어 읽어주는 기능을 제공합니다.",
        "options": [
            { "value": "Text Analytics", "right": false },
            { "value": "Translator Text", "right": false },
            { "value": "Speech", "right": true },
            { "value": "Language Understanding (LUIS)", "right": false }
        ],
        "correct": 2
}, {
        "type": "radio",
        "question": "Custom Vision 서비스에서 객체 감지 모델을 만들 때 Multilabel 또는 Multiclass 분류 유형 중 하나를 선택해야 합니다. (Y/N)",
        "explanation": "Custom Vision에서 객체 감지(Object Detection) 모델은 Multilabel 또는 Multiclass 분류 유형을 선택하지 않습니다. 이는 이미지 분류(Classification)에만 적용됩니다.",
        "options": [{ "value": "Yes", "right": false }, { "value": "No", "right": true }],
        "correct": 1
},
    {
        "type": "radio",
        "question": "Custom Vision 서비스에서 객체 감지 모델을 사용하여 이미지 내에서 콘텐츠의 위치를 찾을 수 있습니다. (Y/N)",
        "explanation": "객체 감지(Object Detection) 모델은 바운딩 박스를 사용하여 이미지 내 콘텐츠의 위치와 해당 객체의 클래스를 식별합니다.",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Custom Vision 서비스에서 객체 감지 모델을 만들 때 미리 정의된 도메인 집합에서 선택할 수 있습니다. (Y/N)",
        "explanation": "Custom Vision은 미리 정의된 도메인(Prediction Domain)을 제공하여 특정 시나리오에 맞는 모델을 더 효과적으로 학습시킬 수 있습니다.",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
}, {
        "type": "radio",
        "question": "Azure AI Language Service의 질문 응답(question answering)을 사용하여 Azure SQL 데이터베이스를 쿼리할 수 있습니다. (Y/N)",
        "explanation": "Azure AI Language Service의 질문 응답(question answering)은 FAQ 또는 지식 베이스와 연결하여 질문에 대한 답변을 제공하며, SQL 데이터베이스 쿼리 기능은 없습니다.",
        "options": [{ "value": "Yes", "right": false }, { "value": "No", "right": true }],
        "correct": 1
},
    {
        "type": "radio",
        "question": "유사한 질문을 제출하는 여러 사용자에게 동일한 답변을 제공해야 할 때 Azure AI Language Service의 질문 응답(question answering)을 사용해야 합니다. (Y/N)",
        "explanation": "Azure AI Language Service의 질문 응답(question answering)은 지식 베이스(Knowledge Base)를 통해 유사한 질문에 대해 동일한 답변을 반환합니다.",
        "options": [{ "value": "Yes", "right": true }, { "value": "No", "right": false }],
        "correct": 0
},
    {
        "type": "radio",
        "question": "Azure AI Language Service의 질문 응답(question answering)은 사용자의 의도를 파악할 수 있습니다. (Y/N)",
        "explanation": "Azure AI Language Service의 질문 응답(question answering)은 의도를 파악하지 않고, 지식 베이스에 기반한 사전 정의된 답변을 반환합니다. 의도(Intent) 인식은 Language Understanding (LUIS) 또는 Azure Conversational Language Understanding에서 처리합니다.",
        "options": [{ "value": "Yes", "right": false }, { "value": "No", "right": true }],
        "correct": 1
}, {
        "type": "radio",
        "question": "⭐QnA Maker 봇을 자주 묻는 질문(FAQ) 페이지를 사용하여 만들었습니다. 봇을 보다 사용자 친화적으로 만들기 위해 전문적인 인사말 및 기타 응답을 추가해야 합니다. 무엇을 해야 합니까?",
        "explanation": "QnA Maker 봇에 Chit-Chat을 추가하면 다양한 시나리오에 대한 자연스러운 대화가 가능해집니다. 예를 들어 인사, 감정 표현, 일반적인 대화 등을 처리할 수 있습니다.",
        "options": [
            { "value": "응답의 신뢰도 임계값 증가", "right": false },
            { "value": "활성 학습(Active Learning) 활성화", "right": false },
            { "value": "다중 턴 질문 생성", "right": false },
            { "value": "Chit-Chat 추가", "right": true }
        ],
        "correct": 3
}, {
        "type": "checkbox",
        "question": "코드를 분석하고 코드 기능 및 주석에 대한 설명을 생성하기 위해 사용할 수 있는 두 가지 리소스는 무엇입니까?",
        "explanation": "Azure OpenAI GPT-4 모델은 고급 자연어 처리(NLP) 모델로 코드 주석 생성 및 설명에 유용하며,⭐ GitHub Copilot은 OpenAI Codex를 기반으로 하여 코드 완성 및 설명을 제공합니다.",
        "options": [
            { "value": "Azure OpenAI Whisper 모델", "right": false },
            { "value": "Azure OpenAI DALL-E 모델", "right": false },
            { "value": "Azure OpenAI GPT-4 모델", "right": true },
            { "value": "GitHub Copilot 서비스", "right": true }
        ],
        "correct": [2, 3]
}, {
        "type": "radio",
        "question": "개인 디지털 사진 모음에 레이블을 지정하는 모델을 만들어야 합니다. 어떤 Azure AI 서비스를 사용해야 합니까?",
        "explanation": "Azure AI Custom Vision은 사용자 정의된 이미지 분류 및 객체 감지 모델을 만들 수 있으며, 개인 사진에 맞춤형 태그를 적용할 수 있습니다.",
        "options": [
            { "value": "Azure AI Language", "right": false },
            { "value": "Azure AI Custom Vision", "right": true },
            { "value": "Azure AI Document Intelligence", "right": false },
            { "value": "Azure AI Computer Vision", "right": false }
        ],
        "correct": 1
    }










];

// 기존 데이터셋과 통합
quizData = [...quizData, ...ai900DumptopQuestions];