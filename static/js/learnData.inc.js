var learnData = [
  {
    "type": "checkbox",
    "question": "참조 자료에 대한 질문과 답변을 생성하는 데 사용할 수 있는 세 가지 원본은 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "웹 페이지 또는 질문 및 답변 쌍이 포함된 텍스트 파일과 같은 기존 문서를 사용하여 참조 자료를 생성할 수 있습니다. 참조 자료 질문 및 답변 쌍을 수동으로 입력할 수도 있습니다. 하지만 오디오 파일이나 이미지 파일을 직접 사용하여 참조 자료를 가져올 수는 없습니다.",
    "options": [
      { "value": "웹 페이지", "right": true },
      { "value": "오디오 파일", "right": false },
      { "value": "기존 FAQ 문서", "right": true },
      { "value": "이미지 파일", "right": false },
      { "value": "수동으로 입력한 데이터", "right": true }
    ],
    "correct": [0, 2, 4]
  },{
    "type": "radio",
    "question": "플러그인 인을 사용하여 생성형 AI 모델에서 일반적인 작업에 대한 도움을 가져올 수 있는 기능을 최종 사용자에게 제공합니다. 문장을 올바르게 완성하는 답변을 선택하세요.",
    "explanation": "Copilot은 사용자가 생성형 AI 모델에서 일반적인 작업에 대한 도움을 가져올 수 있는 방법을 제공하기 위해 애플리케이션에 통합되는 경우가 많습니다. Copilot는 일반적인 아키텍처를 기반으로 하므로 개발자는 다양한 비즈니스 관련 애플리케이션 및 서비스에 대한 사용자 지정 Copilot을 빌드할 수 있습니다.",
    "options": [
      { "value": "Copilot", "right": true },
      { "value": "Language Understanding 솔루션", "right": false },
      { "value": "질문 답변 모델", "right": false },
      { "value": "RESTful API 서비스", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "책임 있는 생성형 AI 솔루션에 대한 프롬프트와 응답을 표시하지 않기 위해 콘텐츠 필터를 적용할 수 있는 계층은 무엇인가요?",
    "explanation": "안전 시스템 계층에는 피해를 완화하는 데 도움이 되는 플랫폼 수준 구성 및 기능이 포함되어 있습니다. Azure OpenAI 서비스에서는 잠재적 피해(중요, 성적, 폭력, 자해)에 대한 4가지 심각도 수준(안전함, 낮음, 중간, 높음)으로 분류된 콘텐츠를 기반으로 프롬프트 및 응답을 표시하지 않는 기준을 적용하는 콘텐츠 필터에 대한 지원이 포함되어 있습니다.",
    "options": [
      { "value": "메타프롬프트 및 근거 있음", "right": false },
      { "value": "model", "right": false },
      { "value": "보안 시스템", "right": true },
      { "value": "사용자 환경", "right": false }
    ],
    "correct": 2
  },
  {
    "type": "radio",
    "question": "(_____________)은 생성형 AI 모델의 응답에 대한 제약 조건과 스타일을 식별하는 데 사용할 수 있습니다",
    "explanation": "시스템 메세지는 예상 결과치를 설명하여 모델의 컨텍스트를 설정하는 데 사용되어야 합니다. 모델은 시스템 메시지를 기반으로 프롬프트에 응답하는 방법을 알고 있습니다. 다른 기술은 생성형 AI 모델에도 사용되지만 다른 사용 사례에도 적용됩니다.",
    "options": [
      { "value": "데이터 근거 있음", "right": false },
      { "value": "포함", "right": false },
      { "value": "시스템 메시지", "right": true },
      { "value": "토큰화", "right": false }
    ],
    "correct": 2
  },{
    "type": "checkbox",
    "question": "다음 기능 중 GPT 모델의 예인 두 가지는 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "Azure OpenAI 자연어 모델은 자연어를 가져와 응답을 생성할 수 있습니다. GPT 모델은 자연어를 이해하고 만드는 데 특화됩니다.",
    "options": [
      { "value": "자연어를 만듭니다.", "right": true },
      { "value": "언어의 특정 언어를 검색합니다.", "right": false },
      { "value": "동영상에서 실시간으로 자막을 생성합니다.", "right": false },
      { "value": "음성 합성", "right": false },
      { "value": "자연어를 이해합니다.", "right": true }
    ],
    "correct": [0, 4]
  },{
    "type": "checkbox",
    "question": "다음 기능 중 생성형 AI 모델의 이미지 생성 기능의 예인 세 가지는 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "이미지 생성 모델은 프롬프트, 기본 이미지 또는 둘 다를 사용하여 새로운 것을 만들 수 있습니다. 이러한 생성형 AI 모델은 실제 이미지와 꾸밈 이미지를 모두 만들고, 이미지의 레이아웃 또는 스타일을 변경하고, 제공된 이미지의 변형을 만들 수 있습니다.",
    "options": [
      { "value": "정적 이미지 애니메이션", "right": false },
      { "value": "이미지의 변형 만들기", "right": true },
      { "value": "이미지 편집", "right": true },
      { "value": "이미지에서 RGB 값 추출", "right": false },
      { "value": "새로운 이미지 만들기", "right": true }
    ],
    "correct": [1, 2, 4]
  },{
    "type": "radio",
    "question": "문장을 올바르게 완성하는 답변을 선택합니다.<br> (____?____)은 텍스트 원본의 유사성을 검색, 분류 및 비교할 수 있습니다.",
    "explanation": "포함(Embedding)은 분석을 위해 텍스트를 숫자 벡터로 변환하는 Azure OpenAI 모델입니다. 포함을 사용하면 텍스트 원본의 유사성을 검색, 분류 및 비교할 수 있습니다.",
    "options": [
      { "value": "데이터 근거 있음", "right": false },
      { "value": "포함(Embedding)", "right": true },
      { "value": "기계 학습", "right": false },
      { "value": "시스템 메시지", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "최신 이미지 분류 솔루션의 기초 역할을 하는 AI(인공지능) 기술은 무엇인가요?",
    "explanation": "최신 이미지 분류 솔루션은 딥 러닝 기술을 기반으로 합니다. 의미 체계 구분(세그먼트화)은 보이는 개체에 따라 이미지의 개별 픽셀을 분류하는 기능을 제공하지만, 딥 러닝은 학습 및 유효성 검사 예측을 사용하여 이미지 분류 솔루션에 속하지 않은 항목까지 예측할 수 있습니다.",
    "options": [
      { "value": "의미 체계 구분(세그먼트화)", "right": false },
      { "value": "딥 러닝", "right": true },
      { "value": "선형 회귀", "right": false },
      { "value": "다중 선형 회귀", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "사진을 기반으로 사람의 나이를 식별하는 기능을 제공하는 컴퓨터 비전 솔루션은 무엇인가요?",
    "explanation": "얼굴 감지는 사진을 기반으로 사람의 나이를 식별하는 기능을 비롯해 이미지에서 사람의 얼굴을 감지하고 분석하는 기능을 제공합니다. 이미지 분류는 해당 내용에 따라 이미지를 분류합니다. 개체 감지는 이미지에서 다양한 유형의 차량 위치를 식별하는 경계 상자를 생성하며, 의미 체계 구분(세그먼트화)은 이미지에서 개별 픽셀을 분류하는 기능을 제공합니다.",
    "options": [
      { "value": "얼굴 감지", "right": true },
      { "value": "이미지 분류", "right": false },
      { "value": "개체 감지", "right": false },
      { "value": "의미 체계 구분(세그먼트화)", "right": false }
    ],
    "correct": 0
  },{
    "type": "checkbox",
    "question": "이미지를 분류할 때 Azure AI 비전에서 지원되는 두 가지 특수 도메인 모델은 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "이미지를 분류할 때 Azure AI 비전 서비스는 유명인과 랜드마크라는 두 가지 전문 도메인 모델을 지원합니다. 이미지 유형은 컴퓨터 비전 서비스의 추가 기능으로, 클립 아트 또는 선화와 같은 이미지 유형을 감지할 수 있습니다. people_ 및 people_group은 모두 이미지 분류를 수행할 때 지원되는 범주입니다.",
    "options": [
      { "value": "유명인", "right": true },
      { "value": "이미지 유형", "right": false },
      { "value": "랜드마크", "right": true },
      { "value": "people_", "right": false },
      { "value": "people_group", "right": false }
    ],
    "correct": [0, 2]
  },{
    "type": "radio",
    "question": "OCR(광학 인식)을 사용할 수 있도록 하는 프로세스는 무엇인가요?",
    "explanation": "OCR은 이미지에서 디지털로 또는 손으로 작성한 텍스트를 추출할 수 있습니다. 이 경우 스캔한 의료 기록에서 텍스트를 추출하여 종이 문서에서 디지털 아카이브를 생성하는 데 OCR을 사용할 수 있습니다. 이미지를 통한 야생 동물 식별, 액세스 권한 식별, 음성을 텍스트로 변환하는 작업은 OCR과 관련이 없습니다.",
    "options": [
      { "value": "의료 기록 디지털화", "right": true },
      { "value": "탭룸에 대한 액세스 제어 식별", "right": false },
      { "value": "이미지에서 야생 동물 식별", "right": false },
      { "value": "음성 텍스트 변환", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "이미지 집합이 있습니다. 각 이미지는 한 가지 유형의 골절을 보여 줍니다. 다양한 X-ray 이미지에서 골절을 식별할 수 있는 방법은 무엇인가요?",
    "explanation": "이미지 분류는 컴퓨터 비전의 일부이며 엑스레이 기기의 이미지를 평가하여 특정 골절 유형을 신속하게 분류하는 데 사용할 수 있습니다. 이는 진단 및 치료 계획을 개선하는 데 도움이 됩니다. 이미지 분류 모델은 골절의 분류를 용이하게 하기 위해 학습됩니다.",
    "options": [
      { "value": "대화형 AI(인공지능)", "right": false },
      { "value": "얼굴 감지", "right": false },
      { "value": "이미지 분류", "right": true },
      { "value": "개체 감지", "right": false }
    ],
    "correct": 2
  },{
    "type": "checkbox",
    "question": "Azure AI 비전 서비스를 사용하면 어떤 두 가지 특수 도메인 모델이 지원되나요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "Azure AI 비전 서비스는 유명 인사 및 랜드마크 전문 도메인 모델을 지원합니다. 동물, 자동차 또는 식물에 대한 특수 도메인 모델은 지원하지 않습니다.",
    "options": [
      { "value": "동물", "right": false },
      { "value": "자동차", "right": false },
      { "value": "유명인", "right": true },
      { "value": "랜드마크", "right": true },
      { "value": "식물", "right": false }
    ],
    "correct": [2, 3]
  },{
    "type": "radio",
    "question": "Azure AI Face 서비스의 Face Detect API를 사용할 때 사람의 얼굴에 안경이나 모자가 있는지 식별하는 데 도움이 되는 기능은 무엇인가요?",
    "explanation": "얼굴 특성은 Face Detect API에서 감지할 수 있는 기능의 집합입니다. 액세서리(안경, 마스크, 모자 등)와 같은 특성을 감지할 수 있습니다. 얼굴 사각형, 얼굴 ID, 얼굴 랜드마크는 사람의 얼굴이 모자나 안경을 쓰고 있는지 여부를 확인할 수 없습니다.",
    "options": [
      { "value": "얼굴 특성", "right": true },
      { "value": "얼굴 ID", "right": false },
      { "value": "얼굴 랜드마크", "right": false },
      { "value": "얼굴 사각형", "right": false }
    ],
    "correct": 0
  },{
    "type": "checkbox",
    "question": "Azure AI Face 서비스를 사용할 때 일대다 또는 일대일 얼굴 매칭을 수행하려면 무엇을 사용해야 하나요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "Azure AI Face 서비스의 얼굴 식별은 이미지에 있는 얼굴과 보안 리포지토리에 있는 얼굴 집합과의 '일대다' 일치를 처리할 수 있습니다. 얼굴 확인은 이미지에 있는 얼굴을 보안 리포지토리 또는 다른 사진에 있는 단일 얼굴과 일대일로 일치시켜 같은 인물인지 확인할 수 있습니다. 얼굴 특성, 유사한 얼굴 찾기 작업 및 Azure AI Custom Vision은 얼굴의 신원을 확인하지 않습니다.",
    "options": [
      { "value": "Custom Vision", "right": false },
      { "value": "얼굴 특성", "right": false },
      { "value": "얼굴 식별", "right": true },
      { "value": "얼굴 확인", "right": true },
      { "value": "유사 얼굴 찾기", "right": false }
    ],
    "correct": [2, 3]
  },{
    "type": "radio",
    "question": "이미지 분류 모델을 학습시키는 데 사용할 수 있는 서비스는 무엇인가요?",
    "explanation": "Azure AI Custom Vision은 고유한 이미지 모델을 빌드하고 배포할 수 있는 이미지 인식 서비스입니다. Azure AI 비전 서비스, Azure AI Face 서비스 및 Azure AI 언어 서비스는 자체 이미지 모델을 학습하는 기능을 제공하지 않습니다.",
    "options": [
      { "value": "Azure AI Vision", "right": false },
      { "value": "Azure AI Custom Vision", "right": true },
      { "value": "Azure AI Face", "right": false },
      { "value": "Azure AI 언어", "right": false }
    ],
    "correct": 1,
  },{
    "type": "radio",
    "question": "라이브 프레젠테이션을 위한 캡션 텍스트를 생성하는 데 사용되는 NLP(자연어 처리) 워크로드는 무엇인가요?",
    "explanation": "Azure AI 음성은 음성 인식 및 합성을 통해 음성을 텍스트로 변환하고 텍스트를 음성으로 변환하는 기능을 제공합니다. 오디오를 매우 정확하게 텍스트로 변환하는 자막 더빙 대화에서 화자를 식별하고 사용자 지정 음성을 만드는 것까지 다양한 작업에 사용됩니다.",
    "options": [
      { "value": "Azure AI Speech", "right": true },
      { "value": "CLU(대화 언어 이해)", "right": false },
      { "value": "질문 답변 모델", "right": false },
      { "value": "텍스트 분석", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "주 목적인 대량의 데이터를 검색할 수 있도록 하는 데 있는 AI(인공지능) 워크로드 유형은 무엇인가요?",
    "explanation": "지식 마이닝은 대량의 데이터를 검색할 수 있도록 하는 데 목적이 있는 AI(인공지능) 워크로드입니다. 다른 워크로드는 인텔리전스를 활용하여 많은 양의 데이터에서 빠르게 액세스할 수 있지만 이것이 주요 목적은 아닙니다.",
    "options": [
      { "value": "이미지 분석", "right": false },
      { "value": "지식 마이닝", "right": true },
      { "value": "개체 감지", "right": false },
      { "value": "의미 체계 구분(세그먼트화)", "right": false }
    ],
    "correct": 1
  },{
    "type": "checkbox",
    "question": "다음 AI(인공지능) 워크로드 시나리오 중 NLP(자연어 처리)의 예 두 가지는 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "제품 검토의 여러 언어 간 텍스트 번역은 Azure AI 번역기 서비스를 사용하고 Azure AI 서비스의 일부인 NLP 워크로드입니다. 지원되는 언어의 텍스트를 번역 및 감정 분석을 제공합니다. 소셜 미디어 데이터에 대한 감정 분석 수행은 언어용 Azure AI 서비스의 감정 분석 기능을 사용하는 NLP의 예입니다. 이를 통해 텍스트 기반 문장 및 문서에 대해 부정적, 보통, 긍정적과 같은 감정 레이블을 확인할 수 있습니다.",
    "options": [
      { "value": "온라인 이미지에서 직접 필기한 텍스트 추출", "right": false },
      { "value": "이미지에 대한 태그 및 설명 생성", "right": false },
      { "value": "감작스런 급증에 대한 네트워크 트래픽 모니터링", "right": false },
      { "value": "소셜 미디어 데이터에 대한 감정 분석 수행", "right": true },
      { "value": "제품 리뷰에서 다른 언어 간 텍스트 번역", "right": true }
    ],
    "correct": [3, 4]
  },{
    "type": "radio",
    "question": "책임 있는 AI(인공지능) 원칙 중 AI 기반 솔루션의 한계에 대한 인식을 제고하는 원칙은 무엇인가요?",
    "explanation": "투명성은 AI 솔루션의 목적, 작동 방식 및 제한 사항에 대한 명확성을 제공합니다. 개인 정보 보호 및 보안, 안정성 및 안전성, 책임 원칙은 AI의 한계에 대한 인식을 제고하기보다는 AI의 기능에 중점을 둡니다.",
    "options": [
      { "value": "비용 책임을 부여합니다.", "right": false },
      { "value": "개인 정보 보호 및 보안", "right": false },
      { "value": "안정성 및 안전성", "right": false },
      { "value": "투명성", "right": true }
    ],
    "correct": 3
  },{
    "type": "radio",
    "question": "책임 있는 AI(인공지능) 원칙 중 AI 솔루션이 성별이나 인종에 관계없이 사회의 모든 부분에 혜택을 주도록 보장한다는 목표를 가지는 원칙은 무엇인가요?",
    "explanation": "포용성 원칙은 AI 솔루션이 신체적 능력, 성별, 성적 지향 또는 인증과 같은 기준에 관계없이 모든 사람을 지원하고 포괄하도록 보장하기 위한 것입니다. 개인 정보 보호 및 보안, 안정성 및 안전성, 책임은 이러한 기준에 따라 차별하지 않지만 사회의 모든 부분에 혜택이 돌아가도록 하는 것의 중요성을 강조하지는 않습니다.",
    "options": [
      { "value": "비용 책임을 부여합니다.", "right": false },
      { "value": "포용성", "right": true },
      { "value": "개인 정보 보호 및 보안", "right": false },
      { "value": "안정성 및 안전성", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "책임 있는 AI(인공지능) 원칙 중 모델의 기능에 의해 도입된 편향을 평가하고 완화하는 것과 관련된 원칙은 무엇인가요?",
    "explanation": "공정성은 모델의 기능에 의해 도입된 편향을 평가하고 완화하는 것과 관련이 있습니다. 개인 정보 보호는 개인 정보 보호 조항이 AI 솔루션에 포함되도록 하기 위한 것입니다. 투명성은 AI 솔루션의 목적, 작동 방식 및 제한 사항에 대한 명확성을 제공합니다. 책임은 AI 솔루션이 명확하게 정의된 윤리적 및 법적 표준을 충족하도록 하는 데 중점을 둡니다.",
    "options": [
      { "value": "책임", "right": false },
      { "value": "공정성", "right": true },
      { "value": "개인 정보", "right": false },
      { "value": "투명성", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "책임 있는 AI(인공지능) 원칙 중 AI 솔루션의 윤리적 및 법적 표준을 충족하는 거버넌스 및 조직 원칙의 프레임워크를 정의하는 원칙은 무엇인가요?",
    "explanation": "책임은 AI 솔루션이 명확하게 정의된 윤리적 및 법적 표준을 충족하도록 보장하기 위한 거버넌스 및 조직 원칙의 프레임워크를 정의합니다. 다른 답변은 거버넌스 및 조직 원칙의 프레임워크를 정의하는 것이 아닌 해당 표준의 윤리적 및 법적 측면에 관련된 지침을 제공합니다.",
    "options": [
      { "value": "책임", "right": true },
      { "value": "공정성", "right": false },
      { "value": "포용성", "right": false },
      { "value": "투명성", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "책임 있는 AI(인공지능) 원칙 중 기업 대출 승인 자격을 충족하는 AI 솔루션을 구현할 때 중요한 역할을 하는 원칙은 무엇인가요?",
    "explanation": "공정성은 AI 모델이 성별이나 인종과 같은 기준을 기반으로 의도치 않게 편향을 도입하지 않도록 하여 대출 승인과 같은 의사결정에서 공평한 기회를 보장합니다. 이는 AI 모델이 특정 집단에 불리한 영향을 미치지 않도록 하는 중요한 원칙입니다.",
    "options": [
      { "value": "책임", "right": false },
      { "value": "공정성", "right": true },
      { "value": "포용성", "right": false },
      { "value": "안전성", "right": false }
    ],
    "correct": 1
  },{
    "type": "checkbox",
    "question": "한 은행에서 주택담보대출 신청을 승인하거나 거절하는 프로세스를 지원하는 새로운 AI(인공지능) 시스템을 개발하고 있습니다. 의사 결정 편향을 방지하기 위해 책임 있는 AI 원칙 중 공정성 원칙의 일부로 고려해야 하는 두 가지 문제는 무엇인가요? 각 정답은 해당의 일부를 나타냅니다.",
    "explanation": "AI 시스템은 인종 및 성별과 같은 요인에 기반하지 않고 편향된 의사 결정을 방지할 수 있도록 설계되어야 합니다. 시스템은 급여, 지불 기록, 신용 활용도를 고려합니다. 이러한 메트릭은 표준 메트릭입니다.",
    "options": [
      { "value": "신용 활용도", "right": false },
      { "value": "현재 급여", "right": false },
      { "value": "ethnicity(인종종)", "right": true },
      { "value": "성별", "right": true },
      { "value": "지불 기록", "right": false }
    ],
    "correct": [2, 3]
  },{
    "type": "radio",
    "question": "한 회사에서 작물 수확을 돕는 무인 농기계 차량을 개발하고 있습니다. 차량은 논밭에서 일하는 사람들 가까이에 배치될 예정이므로 회사는 강력한 테스트를 수행해야 합니다. 이 경우 가장 중요한 책임 있는 AI(인공지능) 원칙은 무엇인가요?",
    "explanation": "여기서는 AI 제어 기계를 사용하여 물리적 환경에서 사람들과 함께 AI 시스템이 작동해야 하므로 안정성 및 안전성 원칙이 가장 중요합니다. 시스템은 안전하게 작동해야 하며, 인간의 삶에 해를 끼치지 않아야 합니다.",
    "options": [
      { "value": "비용 책임을 부여합니다.", "right": false },
      { "value": "포괄성", "right": false },
      { "value": "안정성 및 안전성", "right": true },
      { "value": "투명성", "right": false }
    ],
    "correct": 2
  },{
    "type": "radio",
    "question": "연령과 체지방률을 기준으로 사람이 당뇨병에 걸릴 확률을 나타내는 수치를 파악해야 합니다. 어떤 유형의 기계 학습 모델을 사용해야 하나요?",
    "explanation": "다중 선형 회귀는 둘 이상의 기능과 단일 레이블 간의 관계를 모델링합니다. 선형 회귀는 단일 기능을 사용합니다. 로지스틱 회귀는 부울 값 또는 범주별 결정을 반환하는 분류 모델의 한 유형입니다. 계층적 클러스터링은 비슷한 특성을 가진 데이터 요소를 그룹화합니다.",
    "options": [
      { "value": "계층적 클러스터링", "right": false },
      { "value": "선형 회귀", "right": false },
      { "value": "logistic regression", "right": true },
      { "value": "다중 선형 회귀", "right": false }
    ],
    "correct": 2
  },{
    "type": "radio",
    "question": "해당 항목의 기능을 기반으로 항목과 관련된 숫자 레이블을 예측하는 기계 학습 알고리즘 유형은 무엇인가요?",
    "explanation": "회귀 알고리즘은 숫자 값을 예측하는 데 사용됩니다. 클러스터링 알고리즘은 비슷한 특성을 가진 데이터 요소를 그룹화합니다. 분류 알고리즘은 입력 값에 속한 범주를 예측하는 데 사용됩니다. 자율 학습은 클러스터링을 포함하지만 회귀 또는 분류를 포함하지 않는 학습 알고리즘의 범주입니다.",
    "options": [
      { "value": "분류", "right": false },
      { "value": "클러스터링", "right": false },
      { "value": "재발(회귀)", "right": true },
      { "value": "자율형", "right": false }
    ],
    "correct": 2
  },{
    "type": "radio",
    "question": "레이블 예측의 학습 및 유효성 검사 없이 데이터 세트를 그룹으로 분할하는 최적의 방법을 찾는 기계 학습 알고리즘 유형은 무엇인가요?",
    "explanation": "클러스터링 알고리즘은 레이블 예측 학습 및 유효성 검사를 사용하지 않고 유사한 특성을 가진 데이터 요소를 그룹화하는 자율 학습의 예입니다. 지도 학습은 회귀 및 분류를 포함하지만 클러스터링은 포함하지 않는 학습 알고리즘의 범주입니다. 분류 및 회귀 알고리즘은 지도 기계 학습의 예입니다.",
    "options": [
      { "value": "분류", "right": false },
      { "value": "클러스터링", "right": true },
      { "value": "재발(회귀)", "right": false },
      { "value": "감독형", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "특정 지리적 위치의 강우량을 예측하는 것은 어떤 기계 학습 유형의 예인가요?",
    "explanation": "강우량 예측은 계절 등의 요인을 기반으로 과거 시계열 강우량 데이터를 사용하여 향후 강우량에 대한 숫자 값을 예측하므로 회귀 기계 학습의 예입니다. 클러스터링은 레이블이 지정되지 않은 데이터를 분석하여 데이터에서 유사성을 찾는 기계 학습 유형입니다. 기능화는 기계 학습 유형이 아니라 기능 엔지니어링, 데이터 크기 조정, 정규화와 같은 기술의 모음입니다. 분류는 데이터 범주를 예측하는 데 사용됩니다.",
    "options": [
      { "value": "분류", "right": false },
      { "value": "클러스터링", "right": false },
      { "value": "기능화", "right": false },
      { "value": "회귀", "right": true }
    ],
    "correct": 3
  },{
    "type": "radio",
    "question": "한 의료 서비스 조직에 미리 정의된 골절 유형을 사용하여 분류되는 골절 검사 내용으로 구성된 데이터 세트가 있습니다. 이 조직은 검사 내용이 의사에게 전송되기 전에 기계 학습을 사용하여 새로운 검사 내용에서 다양한 유형의 골절을 감지하려고 합니다. 이는 어떤 유형의 기계 학습인가요?",
    "explanation": "분류는 데이터 항목이 속한 범주 또는 클래스를 예측할 수 있습니다. 이 예에서는 레이블이 지정된 데이터로 분류를 사용하여 학습된 기계 학습 모델을 이용해 아직 레이블이 지정되지 않은 새 검사에서 골절 유형을 확인할 수 있습니다. 기능화는 기계 학습 유형이 아닙니다. 회귀는 숫자 값을 예측하는 데 사용됩니다. 클러스터링은 레이블이 지정되지 않은 데이터를 분석하여 데이터에서 유사점을 찾습니다.",
    "options": [
      { "value": "분류", "right": true },
      { "value": "클러스터링", "right": false },
      { "value": "기능화", "right": false },
      { "value": "회귀", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "회귀 기계 학습 알고리즘에서 기능 및 레이블은 유효성 검사 데이터 세트에서 어떻게 처리되나요?",
    "explanation": "회귀 기계 학습 알고리즘에서 기능은 실제 레이블 값과 비교되며 레이블에 대한 예측을 생성하는 데 사용됩니다. 유효성 검사와 학습 데이터 세트 간에는 기능 또는 레이블을 직접 비교할 수 없습니다.",
    "options": [
      { "value": "기능은 학습 데이터 세트의 기능 값과 비교됩니다.", "right": false },
      { "value": "기능은 실제 레이블 값과 비교되는 레이블에 대한 예측을 생성하는 데 사용됩니다.", "right": true },
      { "value": "레이블은 학습 데이터 세트의 레이블 값과 비교됩니다.", "right": false },
      { "value": "레이블은 실제 기능 값과 비교되는 기능에 대한 예측을 생성하는 데 사용됩니다.", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "잘못된 예측을 방지하기 위해 충족해야 하는 다중 선형 회귀 모델의 가정은 무엇인가요?",
    "explanation": "다중 선형 회귀는 여러 특성과 단일 레이블 간의 관계를 모델화합니다. 이때 각 특성(기능)은 서로 독립적이어야 합니다. 기능들이 상호 독립적이지 않으면 다중공선성 문제가 발생할 수 있으며, 이는 모델 예측의 신뢰성을 저하시킬 수 있습니다.",
    "options": [
      { "value": "기능은 서로 종속됩니다.", "right": false },
      { "value": "기능은 서로 독립적입니다.", "right": true },
      { "value": "레이블은 서로 종속됩니다.", "right": false },
      { "value": "레이블은 서로 독립적입니다.", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "회귀를 지도 기계 학습의 예로 들 수 있는 기능은 무엇인가요?",
    "explanation": "회귀는 알려진 레이블 값과 함께 과거 데이터를 사용하여 모델을 학습시키는 지도 기계 학습의 예입니다. 회귀는 예측하고자 하는 연속적인 값(예: 주가, 온도)을 대상으로 하며, 임의로 생성된 데이터가 아닌 실제 관측 데이터를 사용합니다.",
    "options": [
      { "value": "알 수 없는 레이블 값과 함께 과거 데이터를 사용하여 모델 학습", "right": false },
      { "value": "알려진 레이블 값과 함께 임의로 생성된 데이터를 사용하여 모델 학습", "right": false },
      { "value": "알려진 레이블 값과 함께 과거 데이터를 사용하여 모델 학습", "right": true },
      { "value": "알 수 없는 레이블 값과 함께 임의로 생성된 데이터를 사용하여 모델 학습", "right": false }
    ],
    "correct": 2
  },{
    "type": "radio",
    "question": "회귀 기계 학습 알고리즘에서 유효성 검사 데이터 세트의 기능 및 레이블 특성은 무엇인가요?",
    "explanation": "회귀 기계 학습 알고리즘에서 유효성 검사 집합에는 알려진 기능 및 레이블 값이 포함됩니다. 이를 통해 모델이 예측한 값과 실제 레이블 값을 비교하여 모델의 성능을 평가할 수 있습니다.",
    "options": [
      { "value": "알려진 기능 및 레이블 값", "right": true },
      { "value": "알려진 기능 값 및 알 수 없는 레이블 값", "right": false },
      { "value": "알 수 없는 기능 및 레이블 값", "right": false },
      { "value": "알 수 없는 기능 값 및 알려진 레이블 값", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "데이터 세트를 준비한 후 기계 학습 모델을 학습시키기 전 해야 하는 작업은 무엇인가요?",
    "explanation": "데이터를 학습 및 유효성 검사 데이터 세트로 분할하면 두 개의 데이터 세트가 남게 되며, 그중 첫 번째이자 가장 큰 데이터 세트는 모델을 학습하는 데 사용하는 학습 데이터 세트입니다. 두 번째이자 작은 데이터 세트는 따로 저장된 데이터이며 학습된 모델을 평가하는 데 사용되므로 유효성 검사 데이터 세트라고 합니다.",
    "options": [
      { "value": "누락 데이터 정리", "right": false },
      { "value": "데이터 정규화", "right": false },
      { "value": "데이터를 학습 및 유효성 검사 데이터 세트로 분할", "right": true },
      { "value": "데이터 요약", "right": false }
    ],
    "correct": 2
  },{
    "type": "radio",
    "question": "여러분은 Azure Machine Learning 스튜디오에서 자동화된 ML(자동화된 기계 학습)을 사용하여 회귀 모델을 학습시키고 최상의 모델 요약을 검토합니다. 다른 사용자가 인터넷에서 사용할 수 있도록 모델을 게시해야 합니다. 그런 다음에는 어떻게 해야 할까요?",
    "explanation": "엔드포인트를 사용하여 인터넷을 통해 사용할 클라이언트 애플리케이션에 가장 적합한 모델을 배포할 수 있습니다. 모델의 엔드포인트를 생성하고 이를 인터넷에 배포해야 합니다. 자동화된 ML은 유효성 검사도 자동으로 수행하므로 데이터를 분할할 필요가 없습니다.",
    "options": [
      { "value": "컴퓨팅 클러스터를 만듭니다.", "right": false },
      { "value": "엔드포인트에 모델을 배포합니다.", "right": true },
      { "value": "데이터를 학습 및 유효성 검사 데이터 세트로 분할합니다.", "right": false },
      { "value": "배포된 서비스를 테스트합니다.", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "NLP(자연어 처리) Azure AI 언어 감지 서비스에서 알 수 없는 언어 이름에 대해 반환하는 신뢰도 점수는 무엇인가요?",
    "explanation": "NaN(숫자가 아님)은 알 수 없는 신뢰도 점수를 지정합니다. 알 수 없음을 NaN 신뢰도 점수가 연결된 값입니다. 점수 값은 0에서 1 사이이며, 0은 가장 낮은 신뢰도 점수를 지정하고 1은 가장 높은 신뢰도 점수를 지정합니다.",
    "options": [
      { "value": "6", "right": false },
      { "value": "-1", "right": false },
      { "value": "NaN", "right": true },
      { "value": "알 수 없음", "right": false }
    ],
    "correct": 2
  },{
    "type": "checkbox",
    "question": "지원 센터 질문 데이터에서 문제를 식별하고 언급된 사람과 제품을 식별할 수 있는 Azure AI 서비스의 두 가지 기능은 무엇인가요?",
    "explanation": "핵심 구 추출은 텍스트의 주요 개념을 식별하고 명명된 엔터티 인식은 사람, 장소, 조직 등을 식별합니다. 이를 통해 회사는 고객 지원 센터의 질문 데이터에서 문제와 관련된 엔터티를 식별할 수 있습니다.",
    "options": [
      { "value": "Azure AI Bot Service", "right": false },
      { "value": "대화 언어 이해", "right": false },
      { "value": "핵심 구 추출", "right": true },
      { "value": "명명된 엔터티 인식", "right": true },
      { "value": "Azure AI 음성 서비스", "right": false }
    ],
    "correct": [2, 3]
  },{
    "type": "radio",
    "question": "텍스트에서 식별된 용어를 명확히 구분하기 위해 외부 웹 사이트 링크를 반환하는 기능이 포함된 Azure AI 언어 서비스의 기능은 무엇인가요?",
    "explanation": "엔터티 인식은 텍스트에서 식별된 용어(엔터티)를 명확하게 구분하기 위해 외부 웹 사이트 링크를 반환하는 기능입니다. 이는 엔터티를 구체화하고 추가 정보를 제공할 수 있습니다.",
    "options": [
      { "value": "엔터티 인식", "right": true },
      { "value": "핵심 구 추출", "right": false },
      { "value": "언어 감지", "right": false },
      { "value": "감정 분석", "right": false }
    ],
    "correct": 0
  },{
    "type": "checkbox",
    "question": "음성 텍스트 변환 API에서 사용하는 유니버설 언어 모델은 어떤 두 가지 시나리오에 최적화되어 있나요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "음성 텍스트 변환 API에서 사용하는 유니버설 언어 모델은 대화 및 받아쓰기 시나리오에 최적화되어 있습니다. 음향, 언어, 발음 시나리오에는 고유한 모델 개발이 필요합니다.",
    "options": [
      { "value": "음향", "right": false },
      { "value": "환경을 토대로 봇을(onversational AI)", "right": true },
      { "value": "받아쓰기", "right": true },
      { "value": "언어", "right": false },
      { "value": "발음", "right": false }
    ],
    "correct": [1, 2]
  },{
    "type": "radio",
    "question": "단일 엔드포인트와 인증 키를 통해 Azure AI 번역기와 Azure AI 음성 서비스 모두에 직접 액세스를 제공하는 Azure 리소스는 무엇인가요?",
    "explanation": "Azure AI 서비스는 단일 엔드포인트 및 인증 키를 통해 Azure AI 번역기 및 Azure AI 음성 서비스 모두에 대한 직접 액세스를 제공합니다. 이를 통해 여러 AI 서비스를 통합된 방식으로 관리하고 사용할 수 있습니다.",
    "options": [
      { "value": "Azure AI Bot Service", "right": false },
      { "value": "Azure AI 서비스", "right": true },
      { "value": "Azure Machine Learning", "right": false },
      { "value": "Azure AI 언어 서비스", "right": false }
    ],
    "correct": 1
  },{
    "type": "checkbox",
    "question": "다음 기능 중 Azure AI 언어 서비스의 요소인 세 가지는 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "엔터티 링크 설정, PII 검색 및 감정 분석은 모두 Azure AI 언어용 Azure AI 서비스의 요소입니다. Azure AI Vision은 이미지 처리를 다루며, Azure AI Content Moderator는 텍스트, 이미지 및 동영상 콘텐츠에서 불쾌감을 줄 수 있는 자료의 확인에 사용됩니다.",
    "options": [
      { "value": "Azure AI Vision", "right": false },
      { "value": "Azure AI Content Moderator", "right": false },
      { "value": "엔터티 연결", "right": true },
      { "value": "PII(개인 식별 정보) 검색", "right": true },
      { "value": "정서 분석", "right": true }
    ],
    "correct": [2, 3, 4]
  },{
    "type": "checkbox",
    "question": "다음 기능 중 Azure AI 음성 서비스의 요소인 세 가지는 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
    "explanation": "언어 식별, 화자 인식(speaker recognition) 및 음성 도우미는 모두 Azure AI 음성 서비스의 요소입니다. 텍스트 번역 및 문서 번역은 Translator 서비스의 일부입니다.",
    "options": [
      { "value": "문서 번역", "right": false },
      { "value": "언어 식별", "right": true },
      { "value": "speaker recognition", "right": true },
      { "value": "텍스트 번역", "right": false },
      { "value": "음성 도우미", "right": true }
    ],
    "correct": [1, 2, 4]
  },{
    "type": "radio",
    "question": "언어용 Azure AI 서비스를 사용할 때 텍스트에서 추출된 엔터티에 대한 추가 정보를 온라인으로 제공하기 위해 무엇을 사용해야 하나요?",
    "explanation": "엔터티 링크 설정은 텍스트에서 찾은 엔터티의 ID를 식별하고 명확하게 구분합니다. 이를 통해 각 엔터티의 링크를 제공하여 추가 정보를 볼 수 있도록 합니다. 반면, 명명된 엔터티 인식은 엔터티 자체를 식별하지만 추가 정보 링크는 제공하지 않습니다.",
    "options": [
      { "value": "엔터티 링크 설정", "right": true },
      { "value": "핵심 구 추출", "right": false },
      { "value": "명명된 엔터티 인식", "right": false },
      { "value": "텍스트 번역", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "Azure AI 음성 서비스의 기능 중 고유한 사용자 음성을 식별할 수 있는 기능은 무엇인가요?",
    "explanation": "음성 인식은 오디오 데이터를 분석하여 고유한 사용자 음성에 매핑할 수 있는 인식 패턴을 결정합니다. 이를 통해 사용자를 식별하거나 인증하는 데 활용할 수 있습니다. 반면 언어 식별은 오디오에서 사용된 언어를 인식하는 기능입니다.",
    "options": [
      { "value": "언어 식별", "right": false },
      { "value": "음성 인식", "right": true },
      { "value": "음성 합성", "right": false },
      { "value": "음성 번역", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "기능의 유사성을 기반으로 관찰 내용을 그룹화하는 기계 학습 알고리즘 유형은 무엇인가요?",
    "explanation": "클러스터링 알고리즘은 비슷한 특성을 가진 데이터 요소를 그룹화합니다. 이는 레이블이 없는 데이터를 분석하여 자연스러운 그룹이나 패턴을 발견하는 비지도 학습의 예입니다.",
    "options": [
      { "value": "분류", "right": false },
      { "value": "클러스터링", "right": true },
      { "value": "재발", "right": false },
      { "value": "감독형", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "한 회사에서 새로운 제품 출시를 위해 소셜 미디어 플랫폼에 온라인 마케팅 캠페인을 배포합니다. 이 회사는 기계 학습을 사용하여 캠페인에 대한 반응으로 게시물을 올린 Twitter 플랫폼 사용자의 감정을 측정하려고 합니다. 이는 어떤 유형의 기계 학습인가요?",
    "explanation": "분류 알고리즘은 텍스트 데이터를 분석하여 감정이 긍정적인지, 부정적인지 또는 중립적인지를 분류하는 데 사용됩니다. 이는 지도 학습의 일종으로, 감정 분석에 널리 사용됩니다.",
    "options": [
      { "value": "분류", "right": true },
      { "value": "클러스터링", "right": false },
      { "value": "데이터 변환", "right": false },
      { "value": "재발", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "기계 학습 모델 개발 중에 사용되는 유효성 검사 데이터 세트의 용도는 무엇인가요?",
    "explanation": "유효성 검사 데이터 세트는 학습 데이터 세트에서 따로 저장된 데이터의 샘플입니다. 이는 학습된 모델의 성능을 평가하는 데 사용됩니다. 학습된 모델이 과적합되지 않고 일반화된 성능을 유지하는지 확인하기 위해 필요합니다.",
    "options": [
      { "value": "누락 데이터 정리", "right": false },
      { "value": "학습된 모델 평가", "right": true },
      { "value": "기능 엔지니어링", "right": false },
      { "value": "데이터 요약", "right": false }
    ],
    "correct": 1
  },{
    "type": "radio",
    "question": "자동화된 ML(자동화된 기계 학습) 모델을 만들어야 합니다. Azure Machine Learning 스튜디오에서 먼저 만들어야 하는 리소스는 무엇인가요?",
    "explanation": "자동화된 ML 실행을 만들려면 데이터 세트가 필요합니다. Machine Learning 스튜디오에 액세스하려면 먼저 작업 영역을 만들어야 합니다. 모델 학습이 완료된 후 Azure 컨테이너 인스턴스 및 AKS 클러스터를 배포 대상으로 만들 수 있습니다.",
    "options": [
      { "value": "데이터 세트", "right": true },
      { "value": "작업 영역", "right": false },
      { "value": "Azure 컨테이너 인스턴스", "right": false },
      { "value": "AKS(Azure Kubernetes Service) 클러스터", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "Azure Machine Learning 디자이너를 사용하여 기계 학습 모델을 학습시켜야 합니다. Machine Learning 디자이너에서 무엇을 먼저 해야 하나요?",
    "explanation": "기계 학습 모델의 학습을 시작하려면 먼저 Machine Learning 디자이너에서 파이프라인을 만들어야 합니다. 다음으로 데이터 세트를 추가하고, 학습 모듈을 추가한 후, 마지막으로 서비스를 배포합니다.",
    "options": [
      { "value": "데이터 세트를 추가합니다.", "right": false },
      { "value": "학습 모듈을 추가합니다.", "right": false },
      { "value": "파이프라인 만들기", "right": true },
      { "value": "서비스를 배포합니다.", "right": false }
    ],
    "correct": 2
  },{
    "type": "radio",
    "question": "Azure Machine Learning 디자이너를 사용하여 새로 학습된 모델로부터 예측 서비스를 배포해야 합니다. Machine Learning 디자이너에서 무엇을 먼저 해야 하나요?",
    "explanation": "Machine Learning 디자이너를 사용하여 새로 학습된 모델에서 예측 서비스를 배포하려면 먼저 Machine Learning 디자이너에서 파이프라인을 만들어야 합니다. 예측 서비스를 배포하기 전에 수행되어야 하는 학습된 모델이 이미 존재하며, 데이터 세트를 추가하려면 파이프라인이 이미 있어야 합니다.",
    "options": [
      { "value": "데이터 세트를 추가합니다.", "right": false },
      { "value": "학습 모듈을 추가합니다.", "right": false },
      { "value": "유추 파이프라인을 만듭니다.", "right": true },
      { "value": "유추 클러스터를 만듭니다.", "right": false }
    ],
    "correct": 2
  },{
    "type": "radio",
    "question": "이미지에서 다양한 유형의 차량 위치를 식별하는 경계 상자를 생성하는 기능을 제공하는 AI(인공 지능) 워크로드 유형은 무엇인가요?",
    "explanation": "개체 감지는 이미지에서 다양한 유형의 차량 위치를 식별하는 경계 상자를 생성하는 기능을 제공합니다. 다른 답변도 이미지를 처리하지만 각각 다른 결과를 제공합니다.",
    "options": [
      { "value": "이미지 분석", "right": false },
      { "value": "이미지 분류", "right": false },
      { "value": "OCR(광학 인식)", "right": false },
      { "value": "개체 감지", "right": true }
    ],
    "correct": 3
  },{
    "type": "radio",
    "question": "나타내는 개체에 따라 이미지에서 개별 픽셀을 분류하는 기능을 제공하는 AI(인공 지능) 워크로드 유형은 무엇인가요?",
    "explanation": "의미 체계 구분(세그멘트화)은 보이는 개체에 따라 이미지의 개별 픽셀을 분류하는 기능을 제공합니다. 다른 답변도 이미지를 처리하지만 각각 다른 결과를 제공합니다.",
    "options": [
      { "value": "이미지 분석", "right": false },
      { "value": "이미지 분류", "right": false },
      { "value": "개체 감지", "right": false },
      { "value": "의미 체계 구분(세그멘트화)", "right": true }
    ],
    "correct": 3
  },{
    "type": "radio",
    "question": "대화형 AI(인공 지능)를 위한 플랫폼을 제공하는 서비스 유형은 무엇인가요?",
    "explanation": "Azure AI Bot Service는 소프트웨어 에이전트가 대화에 참여할 수 있는 기능을 지정하는 대화형 AI(인공 지능)를 위한 플랫폼을 제공합니다. Azure AI 번역기는 NLP(자연어 처리)의 일부이지만 대화형 AI를 위한 플랫폼으로 사용되지는 않습니다. Azure AI 비전은 이미지 처리를 다룹니다. 문서 인텔리전스는 검사한 양식 및 청구서에서 정보를 추출합니다.",
    "options": [
      { "value": "Azure AI Bot Service", "right": true },
      { "value": "Azure AI 문서 인텔리전스", "right": false },
      { "value": "Azure AI Vision", "right": false },
      { "value": "Azure AI 번역기", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "다음 AI(인공 지능) 워크로드 시나리오 중 NLP(자연어 처리)의 예는 무엇인가요?",
    "explanation": "텍스트에서 핵심 구를 추출하여 기본 용어를 식별하는 것은 NLP 워크로드입니다. 이전 구매 내역을 기반으로 고객이 제품을 구매할 가능성이 있는지 예측하려면 기계 학습 모델을 개발해야 합니다. 실패한 로그인 시도 횟수의 급격한 증가를 모니터링하는 것은 다른 워크로드입니다. 풍경 이미지에서 개체를 식별하는 것은 컴퓨터 비전 워크로드입니다.",
    "options": [
      { "value": "비즈니스 인사이트 보고서에서 핵심 구 추출", "right": true },
      { "value": "풍경 이미지에서 개체 식별", "right": false },
      { "value": "실패한 로그인 시도 횟수의 급격한 증가에 대한 모니터링", "right": false },
      { "value": "이전 구매 내역을 기반으로 고객이 제품을 구매할 가능성 예측", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "책임 있는 AI(인공 지능) 원칙 중 AI 시스템이 준수해야 하는 법적 및 윤리적 표준을 충족하도록 보장하는 원칙은 무엇인가요?",
    "explanation": "책임 원칙은 AI 시스템이 해당하는 모든 윤리적 및 법적 표준을 충족하도록 설계된다는 점을 보장합니다. 개인정보 보호 및 보안 원칙은 AI 시스템이 개인 데이터 및/또는 민감한 데이터를 보호하도록 설계되어야 한다는 점을 명시합니다. 포용성 원칙은 시스템이 긍정적이고 포괄적인 방식으로 사람들을 지원해야 한다고 명시하고 있습니다. AI 시스템에는 공정성 원칙이 적용되어 시스템 사용자가 공정하게 대우받을 수 있도록 보장합니다.",
    "options": [
      { "value": "비용 책임을 부여합니다.", "right": true },
      { "value": "공정성", "right": false },
      { "value": "포용성", "right": false },
      { "value": "개인 정보 보호 및 보안", "right": false }
    ],
    "correct": 0
  },{
    "type": "radio",
    "question": "단어를 세기 전에 정규화하는 NLP(자연어 처리) 기술은 무엇인가요?",
    "explanation": "형태소 분석은 단어를 세기 전에 정규화합니다. 빈도 분석은 텍스트에 단어가 나타나는 빈도를 계산합니다. N-gram은 빈도 분석에서 더 나아가 다중 용어 구문을 포함합니다. 벡터화는 단어를 n차원 공간의 위치에 할당하여 단어 간의 의미론적 관계를 포착합니다.",
    "options": [
      { "value": "빈도 분석", "right": false },
      { "value": "N-gram", "right": false },
      { "value": "형태소 분석", "right": true },
      { "value": "벡터화", "right": false }
    ],
    "correct": 2
  },{
    "type": "radio",
    "question": "식물과 꽃 같은 단어에 값을 할당하여 비행기 같은 단어보다 서로 더 가깝게 간주되도록 하는 NLP(자연어 처리) 기술은 무엇인가요?",
    "explanation": "벡터화는 단어를 n차원 공간의 위치에 할당하여 단어 간의 의미론적 관계를 캡처합니다. 이를 통해 의미적으로 유사한 단어들이 서로 가까운 위치에 배치되며, 반대로 의미가 다른 단어들은 멀리 배치됩니다.",
    "options": [
        { "value": "빈도 분석", "right": false },
        { "value": "표제어 추출", "right": false },
        { "value": "N-gram", "right": false },
        { "value": "벡터화", "right": true }
    ],
    "correct": 3
},{
  "type": "checkbox",
  "question": "여러 언어 간 텍스트-텍스트 변환 및 음성-텍스트 변환을 모두 사용하도록 설정하는 데 사용할 수 있는 두 가지 Azure AI 서비스 기능은 무엇인가요? 각 정답은 해당의 일부를 나타냅니다.",
  "explanation": "Azure AI 음성 서비스는 텍스트를 음성으로 변환하거나 음성을 텍스트로 변환할 수 있습니다. 또한 Azure Translator 서비스는 60개 이상의 언어 간 텍스트-텍스트 번역을 지원합니다.",
  "options": [
      { "value": "대화 언어 이해", "right": false },
      { "value": "핵심 구 추출", "right": false },
      { "value": "언어 감지", "right": false },
      { "value": "음성 서비스", "right": true },
      { "value": "Translator 서비스", "right": true }
  ],
  "correct": [3, 4]
},
{
  "type": "radio",
  "question": "작성 문서를 분석하여 분류를 위해 사용자 및 위치와 같은 정보 및 개념을 추출할 수 있는 언어용 Azure AI 서비스 기능은 무엇인가요?",
  "explanation": "명명된 엔터티 인식은 사람, 장소, 조직, 수량과 같은 구조화되지 않은 텍스트에서 엔터티를 식별하고 분류할 수 있으며 문서 추천 시스템의 개발을 지원하는 데 적합합니다. 핵심 구 추출, Content Moderator, PII 기능은 엔터티 인식 작업에 적합하지 않습니다.",
  "options": [
      { "value": "Azure AI Content Moderator", "right": false },
      { "value": "핵심 구 추출", "right": false },
      { "value": "명명된 엔터티 인식", "right": true },
      { "value": "PII(개인 식별 정보) 검색", "right": false }
  ],
  "correct": 2

},{
  "type": "radio",
  "question": "텍스트에서 식별된 용어를 명확히 구분하기 위해 외부 웹 사이트 링크를 반환하는 기능이 포함된 Azure AI 언어 서비스의 기능은 무엇인가요?",
  "explanation": "엔터티 인식은 텍스트에서 식별된 용어(엔터티)를 명확하게 구분하기 위해 외부 웹 사이트 링크를 반환하는 기능입니다. 이는 엔터티를 구체화하고 추가 정보를 제공할 수 있습니다.",
  "options": [
      { "value": "엔터티 인식", "right": true },
      { "value": "핵심 구 추출", "right": false },
      { "value": "언어 감지", "right": false },
      { "value": "감정 분석", "right": false }
  ],
  "correct": 0
},{
  "type": "checkbox",
  "question": "다음 기능 중 Azure AI 음성 서비스의 요소인 세 가지는 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
  "explanation": "언어 식별, speaker recognition, 음성 도우미는 모두 Azure AI 음성 서비스의 요소입니다. 텍스트 번역 및 문서 번역은 Translator 서비스의 일부입니다.",
  "options": [
      { "value": "문서 번역", "right": false },
      { "value": "언어 식별", "right": true },
      { "value": "speaker recognition", "right": true },
      { "value": "텍스트 번역", "right": false },
      { "value": "음성 도우미", "right": true }
  ],
  "correct": [1, 2, 4]
},{
  "type": "radio",
  "question": "[답변 선택]은 자연어 입력을 기반으로 자연어, 이미지, 코드 등의 응답을 반환할 수 있습니다. 문장을 올바르게 완성하는 답변을 선택합니다.",
  "explanation": "생성형 AI 모델은 자연어에서 이미지를 생성하는 등 DALL-E 모델을 사용하여 프롬프트를 기반으로 이미지를 생성하는 기능을 제공합니다. 다른 AI 기능은 각각 다른 목표를 달성하기 위해 다양한 컨텍스트에서 사용됩니다.",
  "options": [
      { "value": "컴퓨터 비전", "right": false },
      { "value": "딥 러닝", "right": false },
      { "value": "생성형 AI", "right": true },
      { "value": "기계 학습", "right": false },
      { "value": "보충 학습", "right": false }
  ],
  "correct": 2
},{
  "type": "radio",
  "question": "이미지의 특성을 요약하는 메타데이터와 이미지를 연결하는 컴퓨터 비전의 기능은 무엇인가요?",
  "explanation": "태그 지정은 이미지의 특성을 요약하는 메타데이터와 이미지를 연결합니다. 이미지 유형 감지는 클립 아트 이미지 또는 선화를 식별합니다. 콘텐츠 구성에는 사진에서 사람 또는 개체를 식별하고 식별한 내용에 따라 구성하는 작업이 포함됩니다. 분류는 이미지의 콘텐츠를 제한된 범주 집합과 연결합니다.",
  "options": [
    { "value": "분류", "right": false },
    { "value": "콘텐츠 구성", "right": false },
    { "value": "이미지 유형 감지", "right": false },
    { "value": "태그 지정", "right": true }
  ],
  "correct": 3
},{
  "type": "radio",
  "question": "Azure AI 비전의 이미지 설명 작업에서 반환된 각 구에는 어떤 추가 정보가 포함되어 있나요?",
  "explanation": "Azure AI 비전의 이미지 설명 작업에서 반환된 각 구에는 신뢰도 점수가 포함됩니다. Azure AI 비전 서비스에 액세스하려면 엔드포인트와 키를 제공해야 합니다. 경계 상자 좌표는 이미지 설명이 아닌 개체 감지와 같은 서비스에서 반환됩니다.",
  "options": [
    { "value": "경계 상자 좌표", "right": false },
    { "value": "신뢰도 점수", "right": true },
    { "value": "endpoint", "right": false },
    { "value": "key", "right": false }
  ],
  "correct": 1
},{
  "type": "checkbox",
  "question": "Azure AI 문서 인텔리전스 서비스를 사용하여 국가별 여권 및 판매 계정에서 정보를 검사할 수 있도록 해주는 미리 빌드된 두 가지 모델은 무엇인가요? 각 정답은 해당의 일부를 나타냅니다.",
  "explanation": "청구서 모델은 판매 청구서에서 주요 정보를 추출하며 판매 계정 문서에서 정보를 추출하는 데 최적화되어 있습니다. ID 문서 모델은 미국 운전 면허증 및 국제 여권의 인물 정보 페이지에서 주요 정보를 분석하고 추출하는 데 특화되어 있습니다. 명함 모델, 영수증 모델, 언어 모델은 여권이나 판매 계정 문서의 정보 추출에 적합하지 않은 다른 용도의 모델입니다.",
  "options": [
    { "value": "명함 모델", "right": false },
    { "value": "ID 문서 모델", "right": true },
    { "value": "청구서 모델", "right": true },
    { "value": "언어 모델", "right": false },
    { "value": "영수증 모델", "right": false }
  ],
  "correct": [1, 2]
},{
  "type": "checkbox",
  "question": "데이터 추출 기능의 일부로 공통 데이터 필드 식별을 포함하는 두 가지 Azure AI 문서 인텔리전스 모델은 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
  "explanation": "명함 모델은 명함 이미지에서 이름, 이메일, 전화번호와 같은 공통 데이터 필드를 자동으로 추출하고 분석합니다. 청구서 모델은 판매 청구서에서 청구 번호, 날짜, 금액 등의 표준화된 공통 데이터 필드를 추출하고 처리합니다. 나머지 모델들(읽기 모델, 레이아웃 모델, 일반 문서 모델)은 특정 공통 데이터 필드의 식별과 추출에 특화되어 있지 않고 다른 목적으로 사용됩니다.",
  "options": [
    { "value": "명함 모델", "right": true },
    { "value": "일반 문서 모델", "right": false },
    { "value": "청구서 모델", "right": true },
    { "value": "레이아웃 모델", "right": false },
    { "value": "읽기 모델", "right": false }
  ],
  "correct": [0, 2]
},{
  "type": "radio",
  "question": "기계 학습을 사용해 연령과 체지방률을 기반으로 사람에게 당뇨병이 발생할 확률을 예측하려고 합니다. 모델에 무엇이 포함되어야 하나요?",
  "explanation": "이 시나리오는 기계 학습 모델의 기본 구성 요소를 보여줍니다. 두 가지 기능(연령과 체지방률)은 모델의 입력값으로 사용되어 예측을 위한 기초 데이터를 제공합니다. 하나의 레이블(당뇨병 발생 가능성)은 모델이 예측하고자 하는 출력값을 나타냅니다. 이러한 구조는 지도 학습의 전형적인 예시로, 입력 데이터를 통해 특정 결과를 예측하는 데 최적화되어 있습니다.",
  "options": [
    { "value": "세 가지 기능", "right": false },
    { "value": "세 가지 레이블", "right": false },
    { "value": "두 가지 기능 및 하나의 레이블", "right": true },
    { "value": "두 가지 레이블 및 하나의 기능", "right": false }
  ],
  "correct": 2
},{
  "type": "radio",
  "question": "NLP(자연어 처리)에서 각 단어에 음성 발음이 할당되도록 텍스트를 개별 단어로 분리하는 것은 음성 합성의 어떤 부분에 해당하나요?",
  "explanation": "토큰화는 각 단어에 음성 발음이 할당될 수 있도록 텍스트를 개별 단어로 나누는 과정으로, 음성 합성에 필수적인 단계입니다. 텍스트 기록은 음성을 텍스트로 변환하는 음성 인식에 속합니다. 핵심 구 추출은 음성 합성이 아닌 언어 처리의 일부이며, 형태소 분석의 일환으로 특정 구문을 식별하는 작업입니다.",
  "options": [
    { "value": "표제어 추출", "right": false },
    { "value": "핵심 구 추출", "right": false },
    { "value": "토큰화(tokenization)", "right": true },
    { "value": "텍스트 기록", "right": false }
  ],
  "correct": 2
}
,{
  "type": "radio",
  "question": "온라인 사용자 리뷰를 분석하여 사용자가 제품을 긍정적으로 평가하는지 부정적으로 평가하는지 파악하는 데 사용할 수 있는 언어용 Azure AI 서비스 기능은 무엇인가요?",
  "explanation": "감정 분석은 텍스트 분석의 신뢰도 점수를 기반으로 부정적, 중립적, 긍정적과 같은 감정 레이블을 제공합니다. 따라서 제품 리뷰의 사용자 감정을 이해하는 데 적합합니다. 명명된 엔터티 인식, 핵심 구 추출, 언어 감지 기능은 제품 리뷰에 대한 감정 분석을 수행할 수 없습니다.",
  "options": [
    { "value": "핵심 구 추출", "right": false },
    { "value": "언어 감지", "right": false },
    { "value": "명명된 엔터티 인식", "right": false },
    { "value": "감정 분석", "right": true }
  ],
  "correct": 3
}
,{
  "type": "checkbox",
  "question": "Azure에서 Azure AI 언어 서비스의 언어 감지 기능이 반환하는 세 가지 값은 무엇인가요?",
  "explanation": "언어 이름, ISO 6391 코드, 점수는 Azure의 NLP(자연어 처리) 서비스에서 반환하는 세 가지 값입니다. 경계 상자 좌표는 Azure의 비전 서비스에서 반환되며, Wikipedia URL은 엔터티 인식의 엔터티 링크 설정에서 반환되는 값입니다.",
  "options": [
    { "value": "경계 상자 좌표", "right": false },
    { "value": "ISO 6391 코드", "right": true },
    { "value": "언어 이름", "right": true },
    { "value": "점수", "right": true },
    { "value": "Wikipedia URL", "right": false }
  ],
  "correct": [1, 2, 3]
},{
  "type": "radio",
  "question": "Azure AI 번역기 서비스의 기능 중 Custom Translator에서만 사용할 수 있는 기능은 무엇인가요?",
  "explanation": "번역 문장이 최소 10,000개 조건을 충족하기에 부족한 경우 Custom Translator에서 사전을 사용한 모델 학습을 사용할 수 있습니다. 결과 모델은 일반적으로 전체 학습보다 훨씬 빠르게 학습을 완료하고 번역에 추가한 사전과 함께 기준 모델을 사용합니다. 다른 기능들(문서 번역, speaker recognition, 텍스트 번역)은 Custom Translator의 고유 기능이 아닙니다.",
  "options": [
    { "value": "문서 번역", "right": false },
    { "value": "사전을 사용한 모델 학습", "right": true },
    { "value": "speaker recognition", "right": false },
    { "value": "텍스트 번역", "right": false }
  ],
  "correct": 1
},{
  "type": "radio",
  "question": "최신 이미지 분류 솔루션의 기초 역할을 하는 AI(인공 지능) 기술은 무엇인가요?",
  "explanation": "딥 러닝은 최신 이미지 분류 솔루션의 기초가 되는 핵심 기술입니다. 딥 러닝은 복잡한 패턴을 학습하고 이미지의 특징을 자동으로 추출하여 분류를 수행할 수 있습니다. 의미 체계 구분(세그먼트화)은 이미지를 의미 있는 영역으로 나누는 데 사용되며, 선형 회귀와 다중 선형 회귀는 수치 예측에 더 적합한 기술입니다.",
  "options": [
    { "value": "의미 체계 구분(세그먼트화)", "right": false },
    { "value": "딥 러닝", "right": true },
    { "value": "선형 회귀", "right": false },
    { "value": "다중 선형 회귀", "right": false }
  ],
  "correct": 1
},{
  "type": "radio",
  "question": "출력의 일부로 경계 좌표를 제공하는 컴퓨터 비전 서비스는 무엇인가요?",
  "explanation": "개체 감지는 경계 상자 좌표를 포함하여 이미지에 있는 다양한 개체의 위치를 식별하는 경계 상자를 생성하는 기능을 제공해 이미지에서 개체의 위치를 지정합니다. 의미 체계 구분(세그멘테이션)은 이미지에서 개별 픽셀을 분류하는 기능을 제공합니다. 이미지 분류는 해당 내용에 따라 이미지를 분류합니다. 이미지 분석은 이미지에서 정보를 추출하여 태그 또는 캡션으로 레이블을 지정합니다.",
  "options": [
    { "value": "이미지 분석", "right": false },
    { "value": "이미지 분류", "right": false },
    { "value": "개체 감지", "right": true },
    { "value": "의미 체계 구분(세그멘테이션)", "right": false }
  ],
  "correct": 2
},{
  "type": "radio",
  "question": "이미지 집합이 있습니다. 각 이미지는 한 가지 유형의 골절을 보여 줍니다. 다양한 X-ray 이미지에서 골절을 식별할 수 있는 방법은 무엇인가요?",
  "explanation": "이미지 분류는 컴퓨터 비전의 일부로서 X-ray 이미지를 평가하여 특정 골절 유형을 신속하고 정확하게 분류하는 데 최적화되어 있습니다. 이 기술은 딥러닝 알고리즘을 사용하여 다양한 골절 패턴을 학습하고, 새로운 X-ray 이미지에서 유사한 패턴을 식별할 수 있습니다. 이는 의료진의 진단을 보조하고 치료 계획 수립을 효율화하는 데 크게 기여합니다. 다른 기술들(대화형 AI, 얼굴 감지, 개체 감지)은 의료 영상 분석이라는 특수한 목적에 최적화되어 있지 않습니다.",
  "options": [
    { "value": "대화형 AI(인공 지능)", "right": false },
    { "value": "얼굴 감지", "right": false },
    { "value": "이미지 분류", "right": true },
    { "value": "개체 감지", "right": false }
  ],
  "correct": 2
},{
  "type": "radio",
  "question": "Azure AI 비전 서비스의 어떤 분석 작업이 경계 상자 좌표를 반환하나요?",
  "explanation": "개체 감지는 공통 개체를 식별하고 각각에 대해 경계 상자 좌표를 반환합니다. 이는 이미지 내 개체의 정확한 위치와 범위를 지정하는 데 필수적입니다. 다른 기능들과 비교하면: 이미지 분류는 전체 이미지의 범주만 할당하고, 태그 지정은 이미지의 특성을 메타데이터로 요약하며, OCR은 텍스트 감지에 특화되어 있습니다. 이들은 경계 상자 좌표를 반환하지 않습니다.",
  "options": [
    { "value": "이미지 분류", "right": false },
    { "value": "개체 감지", "right": true },
    { "value": "OCR(광학 인식)", "right": false },
    { "value": "태그 지정", "right": false }
  ],
  "correct": 1
},{
  "type": "radio",
  "question": "한 회사에서 집에 있는 사람들의 수, 기온, 연중 시기에 따라 가정의 물 사용량을 예측하려고 합니다. 데이터 레이블 및 기능 측면에서 이 사용 사례의 레이블은 무엇인가요?",
  "explanation": "머신러닝에서 레이블은 모델이 예측하고자 하는 목표값을 의미합니다. 이 사례에서 물 사용량이 레이블이 되며, 이는 다른 입력 변수들(기능)을 기반으로 예측하고자 하는 종속 변수입니다. 집에 있는 사람들의 수, 기온, 연중 시기는 모두 물 사용량에 영향을 미치는 독립 변수들로, 이들은 예측을 위한 기능(특성)으로 사용됩니다. 머신러닝 모델은 이러한 기능들의 패턴을 학습하여 물 사용량을 예측하게 됩니다.",
  "options": [
    { "value": "집에 있는 사람의 수", "right": false },
    { "value": "연중 시기", "right": false },
    { "value": "물 사용량", "right": true },
    { "value": "기온", "right": false }
  ],
  "correct": 2
},{
  "type": "radio",
  "question": "Azure Machine Learning을 사용하여 회귀 모델을 학습시켜야 합니다. Machine Learning 스튜디오에서 무엇을 만들어야 하나요?",
  "explanation": "Azure Machine Learning에서 모델을 학습시키기 위해서는 작업(Job)을 생성해야 합니다. 작업은 모델 학습 프로세스의 기본 실행 단위로, 데이터 처리부터 모델 훈련까지의 전체 과정을 정의하고 관리합니다. 다른 옵션들의 역할은 다음과 같습니다: 작업 영역은 전체 프로젝트 환경을 관리하는 공간이며, Azure 컨테이너 인스턴스와 AKS 클러스터는 학습된 모델의 배포를 위한 컴퓨팅 리소스입니다. 모델 학습을 시작하기 위해서는 반드시 작업을 먼저 생성하고 구성해야 합니다.",
  "options": [
    { "value": "작업", "right": true },
    { "value": "작업 영역", "right": false },
    { "value": "Azure 컨테이너 인스턴스", "right": false },
    { "value": "AKS(Azure Kubernetes Service) 클러스터", "right": false }
  ],
  "correct": 0
},{
  "type": "checkbox",
  "question": "Azure Machine Learning 디자이너에 있는 세 가지 데이터 변환 모듈은 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
  "explanation": "데이터 변환 모듈들은 머신러닝 모델의 성능과 정확도를 향상시키기 위한 필수적인 전처리 도구입니다. 누락 데이터 정리는 불완전한 데이터셋을 처리하여 모델 학습의 신뢰성을 높입니다. 데이터 정규화는 서로 다른 범위의 특성들을 동일한 스케일로 조정하여 모델의 학습 효율성을 개선합니다. 데이터 세트의 열 선택은 관련성 높은 특성만을 선택하여 모델의 복잡도를 줄이고 오버피팅을 방지합니다. 모델 평가 모듈과 클러스터링 학습은 모델 학습과 평가 단계에서 사용되는 별도의 구성 요소입니다.",
  "options": [
    { "value": "누락 데이터 정리", "right": true },
    { "value": "모델 평가 모듈", "right": false },
    { "value": "데이터 정규화", "right": true },
    { "value": "데이터 세트의 열 선택", "right": true },
    { "value": "클러스터링 학습", "right": false }
  ],
  "correct": [0, 2, 3]
},{
  "type": "radio",
  "question": "Azure Machine Learning 디자이너에서 모델을 학습시키기 위한 자율 기계 학습 알고리즘 모듈은 무엇인가요?",
  "explanation": "K-Means 클러스터링은 Azure Machine Learning 디자이너에서 제공하는 대표적인 자율 학습(비지도 학습) 알고리즘입니다. 이 알고리즘의 주요 특징은 다음과 같습니다:\n\n1. 레이블이 없는 데이터에서 자연스러운 그룹(클러스터)을 발견\n2. 데이터 포인트들을 K개의 군집으로 자동 분류\n3. 유사한 특성을 가진 데이터들을 그룹화하여 패턴 발견\n\n다른 옵션들과 달리, K-Means 클러스터링은 사전에 정의된 레이블 없이도 데이터의 구조를 학습할 수 있습니다. 선형 회귀와 분류는 지도 학습 알고리즘이며, 데이터 정규화는 전처리 기술로, 자율 학습 알고리즘이 아닙니다.",
  "options": [
    { "value": "분류", "right": false },
    { "value": "K-Means 클러스터링", "right": true },
    { "value": "선형 회귀", "right": false },
    { "value": "데이터 정규화", "right": false }
  ],
  "correct": 1
},{
  "type": "radio",
  "question": "채팅 애플리케이션에 통합되어 텍스트 형식으로 콘텐츠를 생성할 수 있는 AI 서비스는 무엇인가요?",
  "explanation": "Azure OpenAI는 채팅 애플리케이션에 특화된 고급 텍스트 생성 AI 서비스입니다. 주요 특징과 기능은 다음과 같습니다:\n\n1. 기술적 기반:\n- GPT-3와 같은 최신 대규모 언어 모델 활용\n- 자연어 처리 기술 기반의 텍스트 생성\n- 맥락 이해 및 일관된 대화 유지 능력\n\n2. 핵심 기능:\n- 대화형 텍스트 콘텐츠 실시간 생성\n- 다양한 스타일과 형식의 텍스트 처리\n- 사용자 입력에 대한 맥락 기반 응답\n\n3. 차별화 포인트:\n- Azure AI 언어: 일반 언어 처리 특화\n- Azure AI Metrics Advisor: 모니터링 중심\n- Azure AI Vision: 시각적 데이터 처리 전문\n\n4. 활용 사례:\n- 대화형 고객 서비스 챗봇\n- 자동화된 콘텐츠 생성\n- 실시간 대화 시스템 구축",
  "options": [
    { "value": "Azure AI 언어", "right": false },
    { "value": "Azure AI Metrics Advisor", "right": false },
    { "value": "Azure AI Vision", "right": false },
    { "value": "Azure OpenAI", "right": true }
  ],
  "correct": 3
},{
  "type": "radio",
  "question": "직원을 위해 문서 검색 및 인덱싱 서비스를 개선하기 위한 솔루션을 모색하고 있습니다. 이미지 등 다양한 유형의 문서에서 텍스트를 검색하는 기능이 포함된 AI(인공지능) 검색 솔루션이 필요합니다. 이는 어떤 유형의 AI 워크로드인가요?",
  "explanation": "데이터 마이닝 워크로드는 주로 데이터의 검색 및 인덱싱에 중점을 둡니다. 이 워크로드는 이미지, 텍스트 등 다양한 형태의 데이터에서 패턴을 탐색하고 중요한 정보를 추출하는 데 활용됩니다. 컴퓨터 비전은 이미지에서 정보를 추출하는 데 사용되며, 검색 및 인덱싱 솔루션과는 구별됩니다. 대화형 AI는 자연어 처리의 일부로서 챗봇 생성과 같은 상호작용을 처리하며, 의미 체계 구분은 이미지를 세분화하는 기능을 제공합니다.",
  "options": [
    { "value": "의미 체계 구분(세그멘테이션)", "right": false },
    { "value": "computer vision", "right": false },
    { "value": "대화형 AI", "right": false },
    { "value": "데이터 마이닝", "right": true }
  ],
  "correct": 3
},{
  "type": "radio",
  "question": "NLP(자연어 처리) 컨텍스트에서 텍스트 내 용어에 대한 통계 분석의 첫 번째 단계는 무엇인가요?",
  "explanation": "중지 단어(stop words)를 제거하는 것은 NLP에서 텍스트 통계 분석의 필수적인 첫 단계입니다. 중지 단어는 'the', 'a', 'is' 등과 같이 문법적으로는 필요하지만 실제 의미 분석에는 크게 기여하지 않는 단어들입니다. 이러한 중지 단어들을 먼저 제거함으로써:\n\n1. 분석의 효율성 향상\n2. 중요 단어에 대한 집중도 증가\n3. 불필요한 노이즈 제거\n4. 후속 분석 단계의 정확도 개선\n\n이후 단계에서 단어 빈도 계산, 벡터화, 인코딩 등의 작업이 수행됩니다.",
  "options": [
    { "value": "벡터화된 모델 만들기", "right": false },
    { "value": "각 단어의 발생 횟수 계산", "right": false },
    { "value": "단어를 숫자 기능으로 인코딩", "right": false },
    { "value": "중지 단어 제거", "right": true }
  ],
  "correct": 3
},{
  "type": "radio",
  "question": "직접 필기 서명을 스캔할 수 있는 출석 시스템에 무엇을 사용할 수 있나요?",
  "explanation": "OCR(광학 문자 인식)은 이미지를 통해 텍스트와 필기된 내용을 추출하는 데 사용됩니다. 이는 서명을 디지털화하여 출석 확인에 활용할 수 있습니다. 다른 옵션들과 비교하면:\n\n- 얼굴 감지는 사람의 얼굴을 인식하는 데 사용됩니다.\n- 이미지 분류는 이미지의 범주를 식별합니다.\n- 개체 감지는 이미지 내 여러 개체의 위치를 식별합니다.\n\n따라서 서명과 같은 필기 텍스트를 처리하려면 OCR이 가장 적합한 선택입니다.",
  "options": [
    { "value": "얼굴 감지", "right": false },
    { "value": "이미지 분류", "right": false },
    { "value": "개체 감지", "right": false },
    { "value": "OCR(광학 인식)", "right": true }
  ],
  "correct": 3
},{
  "type": "checkbox",
  "question": "Azure AI 비전에서는 기계 학습 프로세스의 어떤 세 부분이 필요하지 않나요? 각 정답은 해당의 일부를 나타냅니다.",
  "explanation": "컴퓨터 비전 서비스를 사용할 때는 미리 학습된 모델을 제공하므로 모델 선택, 학습, 평가를 따로 수행할 필요가 없습니다. 이로 인해 사용자는 모델을 직접 학습시키거나 평가할 필요 없이 바로 활용할 수 있습니다. Azure 리소스를 사용하려면 Azure 리소스 프로비전을 설정해야 하며, 컴퓨터 비전의 특성상 유추는 여전히 포함될 수 있습니다.",
  "options": [
    { "value": "Azure 리소스 프로비전", "right": false },
    { "value": "모델 선택", "right": true },
    { "value": "모델 평가", "right": true },
    { "value": "유추", "right": false },
    { "value": "모델 학습", "right": true }
  ],
  "correct": [1, 2, 4]
},{
  "type": "checkbox",
  "question": "책임 있는 AI(인공 지능) 원칙 중 의료 데이터를 관리하는 AI 시스템을 설계할 때 가장 중요한 두 가지는 무엇인가요? 각 정답은 해답의 일부를 나타냅니다.",
  "explanation": "책임 원칙은 AI 시스템이 해당하는 모든 윤리적 및 법적 표준을 충족하도록 설계된다는 점을 명시합니다. 시스템은 해당되는 경우 데이터 익명화를 포함하여 의료 데이터의 개인 정보가 가장 높은 중요도를 가지도록 설계되어야 합니다. AI 시스템에는 공정성 원칙이 적용되어 시스템 사용자가 공정하게 대우받을 수 있도록 보장합니다. 포용성 원칙은 AI 시스템이 긍정적이고 포괄적인 방식으로 사람들을 지원해야 한다고 명시하고 있습니다.",
  "options": [
    { "value": "비용 책임을 부여합니다.", "right": true },
    { "value": "공정성", "right": false },
    { "value": "포용성", "right": false },
    { "value": "개인 정보 보호 및 보안", "right": true }
  ],
  "correct": [0,  3]
},{
  "type": "radio",
  "question": "NIST AI 위험 관리 프레임워크에 따라 책임 있는 생성형 AI 솔루션을 개발할 때 고려해야 할 첫 번째 단계는 무엇인가요?",
  "explanation": "잠재적인 피해를 식별하는 것은 책임 있는 생성형 AI 솔루션을 계획할 때 첫 번째 단계입니다.",
  "options": [
    { "value": "잠재적인 피해를 식별합니다.", "right": true },
    { "value": "잠재적인 피해의 존재 여부를 측정합니다.", "right": false },
    { "value": "잠재적인 피해를 완화합니다.", "right": false },
    { "value": "솔루션을 운영합니다.", "right": false }
  ],
  "correct": 0
},{
  "type": "radio",
  "question": "모델을 학습시키는 데 사용되는 Azure Machine Learning 디자이너의 기계 학습 알고리즘 모듈은 무엇인가요?",
  "explanation": "선형 회귀는 회귀 모델을 학습시키는 데 사용되는 기계 학습 알고리즘 모듈입니다. 누락된 데이터 정리 모듈은 데이터 및 데이터 변환 프로세스를 준비하는 과정의 일부입니다. 데이터 세트의 열 선택은 데이터 세트에서 관심 있는 열의 하위 집합을 선택하는 데 사용되는 데이터 변환 구성 요소입니다. 모델 평가는 학습된 모델의 정확도를 측정하는 데 사용되는 구성 요소입니다.",
  "options": [
    { "value": "누락 데이터 정리", "right": false },
    { "value": "모델 평가", "right": false },
    { "value": "선형 회귀", "right": true },
    { "value": "데이터 세트의 열 선택.", "right": false }
  ],
  "correct": 2
},{
  "type": "checkbox",
  "question": "Azure AI 비전 서비스의 일부인 두 가지 AI(인공 지능) 워크로드 기능은 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
  "explanation": "OCR 및 공간 분석은 Azure AI 비전 서비스의 일부입니다. 감정 분석, 엔터티 인식, 핵심 구 추출은 컴퓨터 비전 서비스의 일부가 아닙니다.",
  "options": [
    { "value": "엔터티 인식", "right": false },
    { "value": "핵심 구 추출", "right": false },
    { "value": "OCR(광학 인식)", "right": true },
    { "value": "감정 분석", "right": false },
    { "value": "공간 분석.", "right": true }
  ],
  "correct": [2,4]
},{
  "type": "radio",
  "question": "DALL-E를 생성형 AI 모델로 사용할 이미지 처리 솔루션을 개발할 계획입니다.<br>DALL-E 모델에서 지원되지 않는 기능은 무엇인가요?",
  "explanation": "이미지 설명은 DALL-E 모델에 포함된 기능이 아니므로 DALL-E를 사용하여 구현할 수 있는 사용 사례가 아니며, 다른 세 가지 기능은 Azure OpenAI의 DALL-E에서 제공됩니다.",
  "options": [
    { "value": "이미지 설명", "right": true },
    { "value": "이미지 편집", "right": false },
    { "value": "이미지 생성", "right": false },

    { "value": "이미지 변형", "right": false }
  ],
  "correct": 0
},{
  "type": "radio",
  "question": "Azure AI 번역기 서비스에서 지원하는 번역 유형은 무엇인가요?",
  "explanation": "Azure AI 번역기 서비스는 텍스트 간 번역을 지원하며, 음성 텍스트 변환, 텍스트 음성 변환 또는 음성 간 변환 번역은 지원하지 않습니다.",
  "options": [
    { "value": "음성 간 변환", "right": false },
    { "value": "음성 텍스트 변환", "right": false },
    { "value": "텍스트 음성 변환", "right": false },
    { "value": "텍스트 간 변환", "right": true }
  ],
  "correct": 3
},{
  "type": "checkbox",
  "question": "Azure Machine Learning 스튜디오에서 자동화된 ML(자동화된 기계 학습)을 사용하여 학습시킬 수 있는 세 가지 지도 기계 학습 모델은 무엇인가요? 각 정답은 완전한 해답을 나타냅니다.",
  "explanation": "시계열 예측, 회귀, 분류는 지도 기계 학습 모델입니다. 자동화된 ML 학습을 사용하면 분류 알고리즘을 사용하여 범주 또는 클래스를 예측할 수 있을 뿐만 아니라 회귀 알고리즘의 일부로 숫자 값을 사용하고 시계열 데이터를 사용하여 미래 한 시점의 값을 예측할 수도 있습니다. 유추 파이프라인은 기계 학습 모델이 아닙니다. 클러스터링은 자율 기계 학습이며 자동화된 ML은 지도 학습 알고리즘에서만 작동합니다.",
  "options": [
    { "value": "분류", "right": true },
    { "value": "Clustering", "right": false },
    { "value": "재발", "right": true },
    { "value": "유추 파이프라인", "right": false },
    { "value": "시계열 예측", "right": true }
  ],
  "correct": [0,2,3]
},{
  "type": "radio",
  "question": "한 회사에서 기계 학습을 사용해 적절한 주택 특성을 기반으로 주택 가격을 예측하고 있습니다.기계 학습 모델에서 다음 중 레이블인 특성은 무엇인가요?",
  "explanation": "주택 가격은 기계 학습 모델을 통해 예측하려는 레이블입니다. 이 작업은 일반적으로 회귀 모델을 사용하여 수행됩니다. 바닥 면적, 침실 수, 주택 경과 연수는 모두 주택 가격 레이블을 예측하는 데 도움이 되는 모델의 입력 변수입니다.",
  "options": [
    { "value": "분류", "right": false },
    { "value": "Clustering", "right": false },
    { "value": "재발", "right": false },
    { "value": "유추 파이프라인", "right": false },
    { "value": "시계열 예측", "right": true }
  ],
  "correct": 3
},{
  "type": "radio",
  "question": "한 매장에서 마케팅 팀이 신제품 출시를 위한 대상 지정 마케팅 캠페인을 만들 수 있도록 비슷한 특성을 가진 온라인 쇼핑객을 그룹화하려고 합니다.이는 어떤 유형의 기계 학습인가요?",
  "explanation": "클러스터링은 레이블이 지정되지 않은 데이터를 분석하여 데이터에 있는 유사성을 찾는 기계 학습 유형입니다. 그런 다음 유사한 데이터를 함께 그룹화(클러스터링)합니다. 이 예에서 이 회사는 인구 통계 데이터 및 쇼핑 동작을 포함하는 특성을 기반으로 온라인 고객을 그룹화할 수 있습니다. 그런 다음 제품에 관심이 있는 것으로 보이는 고객 그룹에 새 제품을 추천할 수 있습니다. 분류 및 다중 클래스 분류는 데이터 범주를 예측하는 데 사용됩니다. 회귀는 숫자 값을 예측하는 데 사용되는 기계 학습 시나리오입니다.",
  "options": [
    { "value": "분류", "right": false },
    { "value": "클러스터링", "right": true },
    { "value": "다중 클래스 분류", "right": false },
    { "value": "회귀", "right": false }
  ],
  "correct": 1
}
,{
  "type": "radio",
  "question": "미리 정의된 범주 집합에 항목을 할당하는 기계 학습 알고리즘 유형은 무엇인가요?",
  "explanation": "분류 알고리즘은 입력 값이 속한 미리 정의된 범주를 예측하는 데 사용됩니다. 회귀 알고리즘은 숫자 값을 예측하는 데 사용됩니다. 클러스터링 알고리즘은 비슷한 특성을 가진 데이터 요소를 그룹화합니다. 자율 학습은 클러스터링을 포함하지만 회귀 또는 분류는 포함하지 않는 학습 알고리즘의 범주입니다.",
  "options": [
    { "value": "분류", "right": true },
    { "value": "클러스터링", "right": false },
    { "value": "재발", "right": false },
    { "value": "자유형형", "right": false }
  ],
  "correct": 0
}



];