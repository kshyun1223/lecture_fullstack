# NoSQL
## NoSQL 개요
### CAP 이론
- CAP 이론에 따르면 다음 3가지 특성 중에서 2개 까지만 보장할 수 있고 3개를 모두 보장하는 것은 현실적으로 불가능하다고 한다
  - Consistency (일관성) : 모든 노드들은 동시에 같은 데이터를 보아야 한다
  - Availability (유효성) : 모든 노드는 항상 읽기와 쓰기를 할 수 있어야 한다
  - Partition Tolerance (파티션 허용차) : 시스템은 물리적인 네트워크 파티션을 넘어서도 잘 동작하여야 한다

### NoSQL과 RDBMS의 비교
- RDBMS
  - 기존에 많이 사용하던 RDBMS는 CAP중에서 CA(Consistency, Availability)에 집중했다
  - RDBMS는 기본적으로 분산 처리를 고려하지 않기 때문에 강력한 유효성을 보장하지만 확장성은 없다

- NoSQL
  - 웹이 발전하면서 대량의 데이터 처리를 의미하는 P(Partition Tolerance)에 대한 수요가 늘어나면서 이를 충족하기 위해 NoSQL이 등장했다
  - NoSQL이 대량의 데이터 처리를 충족할 수 있는 이유는 확장성이 뛰어나기 때문이다 (분산 처리)


