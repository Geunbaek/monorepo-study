type PostDummy = {
  id: number;
  title: string;
  subTitle: string;
  createdAt: string;
};

const DUMMY: PostDummy[] = [
  {
    id: 0,
    title: "토스 프론트엔드 챕터를 소개합니다!",
    subTitle:
      "토스에서 프론트엔드 개발자가 일하는 방법과 맡고 있는 역할에 대해 소개드립니다.",
    createdAt: "2021. 4. 29",
  },
  {
    id: 1,
    title: "웹 서비스 캐시 똑똑하게 다루기",
    subTitle:
      "웹 성능을 위해 꼭 필요한 캐시, 제대로 설정하기 쉽지 않습니다. 토스 프론트엔드 챕터에서 올바르게 캐시를 설정하기 위한 노하우를 공유합니다.",
    createdAt: "2021. 4. 28",
  },
  {
    id: 2,
    title: "JSCodeShift로 기술 부채 청산하기",
    subTitle:
      "기술 부채는 개발할수록 쌓여만 갑니다. 프론트엔드 챕터가 JSCodeShift를 이용하여 순식간에 100개 서비스의 기술 부채를 해결한 경험을 소개합니다.",
    createdAt: "2021. 5. 4",
  },
  {
    id: 3,
    title: "node_modules로부터 우리를 구원해 줄 Yarn Berry",
    subTitle:
      "토스 프론트엔드 레포지토리 대부분에서 사용하고 있는 패키지 매니저 Yarn Berry. 채택하게 된 배경과 사용하면서 좋았던 점을 공유합니다.",
    createdAt: "2021. 5. 7",
  },
  {
    id: 4,
    title: "Template Literal Types로 타입 안전하게 코딩하기",
    subTitle:
      "TypeScript 코드베이스의 타입 안전성을 한 단계 올려줄 수 있는 Template Literal Type의 뜻과 응용에 대해 알아봅니다.",
    createdAt: "2021. 5. 14",
  },
  {
    id: 5,
    title: "개발자의 애질리티",
    subTitle:
      "이 글은 토스페이먼츠에 입사하신, 혹은 입사를 고려 중인 개발자분들을 위해 작성된 글입니다. 애자일하게 일한다는 것은 어떠한 의미일까요?",
    createdAt: "2021. 10. 14",
  },
  {
    id: 6,
    title: "조금만 신경써서 초기 렌더링 빠르게 하기 (feat. JAM Stack)",
    subTitle:
      "SPA(Single Page Application) 구조로 웹 프론트엔드 애플리케이션이 개발되면서 초기 렌더링 속도는 프런트엔드 개발자에게 중요한 과제 중 하나가 되었습니다. 사용자 경험에 영향을 줄 수 있는 가장 큰 요소 중 하나가 바로 속도이기 때문입니다.",
    createdAt: "2022. 2. 9",
  },
  {
    id: 7,
    title: "Kotlin으로 DSL 만들기: 반복적이고 지루한 REST Docs 벗어나기",
    subTitle:
      "토스페이먼츠에서는 API docs를 REST Docs를 사용해서 작성할 수 있도록 권장하고 있습니다. 이 글에서는 DSL을 통해서 반복적인 REST Docs 테스트 코드 작성을 줄일 수 있는 방법을 알아봅니다.",
    createdAt: "2022. 4. 11",
  },
  {
    id: 8,
    title: "에러 핸들링을 다른 클래스에게 위임하기 (Kotlin 100% 활용)",
    subTitle:
      "Kotlin의 Result로 MSA에서 에러가 전파되지 않는 안전한 환경을 만드는 방법을 알아봅니다.",
    createdAt: "2022. 5. 14",
  },
  {
    id: 9,
    title: "테스트 의존성 관리로 높은 품질의 테스트 코드 유지하기",
    subTitle:
      "혹시 테스트 코드에서도 의존성을 관리해본 적이 있으실까요? 해당 포스트에서는 Gradle의 java-test-fixtures 플러그인을 사용하여 테스트 의존성 관리를 통해 높은 품질의 테스트 코드를 유지하는 방법을 알아봅니다.",
    createdAt: "2022. 6. 9",
  },
  {
    id: 10,
    title: "CommonJS와 ESM에 모두 대응하는 라이브러리 개발하기: exports field",
    subTitle:
      "Node.js에는 두 가지 Module System이 존재합니다. 토스 프론트엔드 챕터에서 운영하는 100개가 넘는 라이브러리들은 그것에 어떻게 대응하고 있을까요?",
    createdAt: "2022. 10. 4",
  },
  {
    id: 11,
    title: "토스증권 QA Team을 소개합니다",
    subTitle:
      "이 글은 토스증권 QA Team에 입사를 고려 중인 지원자들을 위해 작성된 글입니다. 토스증권 QA Manager 하는 역할과 일하는 방식은 어떻게 다를까요?",
    createdAt: "2022. 10. 25",
  },
  {
    id: 12,
    title: "TypeScript 타입 시스템 뜯어보기: 타입 호환성",
    subTitle:
      "타입호환성은 무엇이며 왜 필요할까요? 타입호환이 지원되지 않는 경우가 존재한다는 것을 아셨나요? 평소 익숙했던 개념들에 대해 질문을 던져가며 TypeScript 타입 시스템에 관해 심도있게 알아보고자 합니다.",
    createdAt: "2022. 10. 26",
  },
  {
    id: 13,
    title: "NestJS 환경에 맞는 Custom Decorator 만들기",
    subTitle:
      "NestJS에서 데코레이터를 만들기 위해서는 NestJS의 DI와 메타 프로그래밍 환경 등을 고려해야 합니다. 어떻게 하면 이러한 NestJS 환경에 맞는 데코레이터를 만들 수 있을지 고민해보았습니다.",
    createdAt: "2022. 11. 22",
  },
  {
    id: 14,
    title: "토스증권 QA 문화 ‘통합테스트’를 아시나요? (feat. 해외주식)",
    subTitle:
      "토스증권 해외주식 출시 전에 사내 임직원 대상으로 진행한 ‘통합테스트’에 대해 소개합니다. 통합테스트 진행 방식을 참고하여 간단한 규칙과 사용자 시나리오를 활용해 사용자의 반응을 미리 확인해 보세요.",
    createdAt: "2022. 12. 12",
  },
  {
    id: 15,
    title: "똑똑하게 브라우저 Polyfill 관리하기",
    subTitle:
      "현대적인 JavaScript를 쓰면서도 넓은 범위의 기기를 지원하기 위한 Polyfill을 어떻게 똑똑하게 설정할 수 있는지 소개합니다.",
    createdAt: "2023. 1. 21",
  },
  {
    id: 16,
    title: "선언적인 코드 작성하기",
    subTitle:
      "선언적인 코드, 토스 프론트엔드 챕터는 어떻게 생각을 하고 있을까요?",
    createdAt: "2023. 3. 16",
  },
  {
    id: 17,
    title: "tosspayments-restdocs: 선언형 문서 작성 라이브러리",
    subTitle:
      "REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게 대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에 녹인 기술들을 소개합니다.",
    createdAt: "2023. 3. 22",
  },
  {
    id: 18,
    title: "ESLint와 AST로 코드 퀄리티 높이기",
    subTitle:
      "ESLint와 AST로 토스에서 코드 퀄리티를 높인 방법에 대해 소개드려요.",
    createdAt: "2023. 3. 31",
  },
  {
    id: 19,
    title: "Spring Boot Actuator의 헬스체크 살펴보기",
    subTitle:
      "서버의 상태를 알려주는 헬스 체크에 대해 알고 계시나요? 단순히 200 OK만 내려주겠거니 하고 별로 신경을 안 쓰고 계셨나요? 해당 포스트에서는 Spring Boot Actuaor가 제공해주는 헬스 체크는 어떤 식으로 서버의 상태를 점검하는지, 어떤 부분을 주의하며 사용해야하는지 알아봅니다.",
    createdAt: "2023. 4. 1",
  },
  {
    id: 20,
    title: "Node.js url.parse() 취약점 컨트리뷰션",
    subTitle:
      "토스 보안기술팀은 안전한 금융 서비스를 제공하기 위한 연구를 수행하고 있어요. 많은 서비스에서 사용되고 있는 Node.js의 취약점을 분석하고 안전하게 패치될 수 있도록 기여했던 과정을 소개드려요.",
    createdAt: "2023. 5. 12",
  },
  {
    id: 21,
    title: "놀러오세요! 프론트엔드 다이빙 클럽",
    subTitle:
      "프론트엔드에 관한 깊은 이야기를 나눌 수 있는 오프라인 커뮤니티, 프론트엔드 다이빙 클럽을 소개합니다.",
    createdAt: "2023. 7. 21",
  },
  {
    id: 22,
    title: "레고처럼 조립하는 토스 앱",
    subTitle:
      "수많은 서비스를 담고 있는 대규모 iOS 앱에 어울리는 아키텍처는 무엇일까요? 프로젝트 간의 의존성과 모듈 간의 결합도를 낮춰, 더 효율적인 서비스 개발, 관리를 이뤄낸 과정을 소개합니다.",
    createdAt: "2023. 8. 22",
  },
  {
    id: 23,
    title: "은행 최초 코어뱅킹 MSA 전환기 (feat. 지금 이자 받기)",
    subTitle:
      "수십 년간 정체되어 있던 전통적인 은행 시스템의 모놀리식 소프트웨어 아키텍처를 MSA로 전환할 수 있을까요? 토스뱅크의 ‘코어뱅킹 MSA 전환’ 사례를 통해 향후 은행 시스템이 나아가야 할 방향을 소개합니다.",
    createdAt: "2023. 8. 31",
  },
  {
    id: 24,
    title: "금융사 최초의 Zero Trust 아키텍처 도입기",
    subTitle:
      "왜 보안이 강화될수록, 업무는 불편해지는 걸까요? 금융에서 가장 중요한 가치인 ‘안전’과 혁신을 위한 ‘업무 편의성’, 두 마리 토끼를 모두 잡기 위한 여정을 소개합니다.",
    createdAt: "2023. 9. 1",
  },
  {
    id: 25,
    title: "환경 고민없이 개발하기",
    subTitle: "서버 사이드 렌더링 작동 방식과 Isomorphic에 대해 소개드려요.",
    createdAt: "2023. 9. 1",
  },
  {
    id: 26,
    title:
      "프론트엔드 다이빙클럽에서 만나는 아고라: 다른 회사에선 테스트 코드 어떻게 짜요?",
    subTitle:
      "‘프론트엔드 테스팅’을 주제로 진행된 프론트엔드 다이빙 클럽의 네번째 모임을 공유합니다.",
    createdAt: "2023. 10. 11",
  },
  {
    id: 27,
    title: "대규모 로그 처리도 OK! Elasticsearch 클러스터 개선기",
    subTitle:
      "일평균 56억 건 이상 수집되는 토스증권의 로그, 어떻게 효율적으로 처리할까요? 큰 폭으로 늘어나는 대규모 로그 처리를 위한 ‘Elasticsearch 클러스터 개선 경험’을 소개합니다.",
    createdAt: "2023. 10. 12",
  },
  {
    id: 28,
    title: "토스는 Gateway 이렇게 씁니다",
    subTitle:
      "더 안전하고 안정적인 서비스 운영을 위해서 ‘gateway’를 어떻게 사용해야 할까요? 토스의 수많은 마이크로서비스 로직을 공통화하기 위한 gateway 운영 방법에 대해 소개합니다.",
    createdAt: "2023. 10. 12",
  },
  {
    id: 29,
    title: "유연하고 안전하게 배포 Pipeline 운영하기",
    subTitle:
      "생산성, 안정성, 보안성을 모두 달성하기 위해선 ‘Pipeline’을 어떻게 설정해야 할까요? 다양하고 복잡한 토스뱅크의 배포 ‘Pipeline’를 안전하게 운영하기 위한 노력을 소개합니다.",
    createdAt: "2023. 10. 12",
  },
  {
    id: 30,
    title: "웹에서 복잡한 퍼널 쉽게 관리하기",
    subTitle:
      "토스페이먼츠 프론트엔드 챕터에서 웹에서 퍼널을 손쉽게 관리하기 위해 했던 고민과 해결 방법을 공유해요.",
    createdAt: "2023. 10. 18",
  },
  {
    id: 31,
    title: "null 리턴은 왜 나쁠까?",
    subTitle:
      "코드 복잡성 관리 측면에서 의미를 축약한 표현의 문제와 해결 방법을 예제로 알아봐요.",
    createdAt: "2023. 11. 8",
  },
  {
    id: 32,
    title: "Feign 코드 분석과 서버 성능 개선",
    subTitle:
      "Feign과 다중 스레드를 사용하는 과정에서 생긴 문제를 이해하고 성능 개선까지 한 경험을 공유해요.",
    createdAt: "2023. 11. 22",
  },
  {
    id: 33,
    title: "인자가 많은 메서드는 왜 나쁠까?",
    subTitle:
      "인자가 많은 메서드를 함께 리팩토링 하면서 코드 사용자 입장에서 코드 복잡성을 관리하는 방법을 알아봅니다.",
    createdAt: "2023. 11. 29",
  },
  {
    id: 34,
    title: "Reactor Netty Memory Leak 이슈 탐방기",
    subTitle:
      "Spring Cloud Gateway와 Spring WebClient를 이용하면서 발생한 Memory Leak 이슈의 발생 원인과 해결 과정을 소개합니다.",
    createdAt: "2023. 12. 11",
  },
  {
    id: 35,
    title: "프론트엔드 로깅 신경 안 쓰기",
    subTitle:
      "프론트엔드 개발자라면 한 번쯤 고민해봤을 클라이언트 로깅 개선 과정을 공유합니다.",
    createdAt: "2023. 12. 20",
  },
  {
    id: 36,
    title: "브라우저용 번들링 플러그인, 직접 만들었어요",
    subTitle:
      "프론트엔드 번들링 도구를 사용하는 것을 넘어 직접 플러그인을 만들어 본 과정을 소개해요.",
    createdAt: "2024. 1. 10",
  },
  {
    id: 37,
    title: "달리는 기차의 바퀴 교체하기 1. Planning",
    subTitle:
      "이미 운영 중인 제품을 전부 갈아엎고 다시 만드는 경험을 하기는 어려운데요. 운 좋게 팀 내 공감대가 형성되어 여러 팀원과 하나의 제품을 온전히 개선해 볼 수 있었어요. 이 글에서는 구체적인 개선 내용에 앞서 어떻게 프로젝트를 셋업하고 진행했는지 소개할게요.",
    createdAt: "2024. 1. 11",
  },
  {
    id: 38,
    title: "Spring JDBC 성능 문제, 네트워크 분석으로 파악하기",
    subTitle:
      "토스페이먼츠 정산 플랫폼에서 많은 양의 정산 데이터 처리 과정에서 생긴 지연 이슈를 처리한 방법을 소개해요.",
    createdAt: "2024. 1. 17",
  },
  {
    id: 39,
    title:
      "그 많은 개발 문서는 누가 다 만들었을까 (1) 토스페이먼츠 테크니컬 라이터가 하는 일",
    subTitle:
      "토스 커뮤니티의 테크니컬 라이터들은 개발자를 위한 문서를 쓰는 것뿐만 아니라, 멋진 개발자 경험을 제공하기 위해 다양한 일을 하고 있답니다.",
    createdAt: "2024. 1. 23",
  },
  {
    id: 40,
    title:
      "그 많은 개발 문서는 누가 다 만들었을까 (2) 개발자의 학습을 돕는 모든 것",
    subTitle:
      "토스의 테크니컬 라이터가 하는 일에 이어, 개발자 경험 전반으로 역할을 확장해 온 이야기를 공유해요.",
    createdAt: "2024. 1. 25",
  },
  {
    id: 41,
    title: "GitHub Actions로 개선하는 코드 리뷰 문화",
    subTitle:
      "자동화를 통해 코드 리뷰 문화를 개선하고 편의를 높였던 경험을 공유해요.",
    createdAt: "2024. 2. 7",
  },
];

export default DUMMY;
